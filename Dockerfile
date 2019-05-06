FROM node:10-alpine as base

RUN set -ex; \
    apk add --no-cache --virtual .dev-dep \
        git \
        openssh \
        python \
        make \
        pkgconfig autoconf automake libtool nasm build-base zlib-dev \
        g++;

RUN set -ex; \
    apk add --no-cache \
      nginx; \
      ln -sf /dev/stdout /var/log/nginx/access.log; \
      ln -sf /dev/stderr /var/log/nginx/error.log; \
      mkdir -p /run/nginx;

COPY .nginx /etc/nginx/conf.d/default.conf

WORKDIR /app

# For now, only york-web use dependencies

# FROM node:10-alpine as york-styleguide
# WORKDIR /app/packages/york-styleguide
# COPY ./packages/york-styleguide/package.json .npmrc ./
# RUN npm i

# FROM node:10-alpine as york-core
# WORKDIR /app/packages/york-core
# COPY ./packages/york-core/package.json .npmrc ./
# RUN npm i

FROM node:10-alpine as york-web
WORKDIR /app/packages/york-web
COPY ./packages/york-web/package.json .npmrc ./
RUN npm i

FROM node:10-alpine as build
WORKDIR /app
COPY . /app
# COPY --from=york-web /app/packages/york-web/node_modules ./packages/york-web/node_modules
# COPY --from=york-core /app/packages/york-core/node_modules ./packages/york-core/node_modules
COPY --from=york-styleguide /app/packages/york-styleguide/node_modules ./packages/york-styleguide/node_modules
RUN set -ex; cd ./packages/york-styleguide; npm run build

FROM base
WORKDIR /app
COPY --from=build /app/packages/york-styleguide/styleguide ./build
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
