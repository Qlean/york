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

# For now, only york-web uses direct dependencies

FROM node:10-alpine as york-web
WORKDIR /app/packages/york-web
COPY ./packages/york-web/package.json .npmrc ./
RUN npm i

FROM node:10-alpine as build
WORKDIR /app
COPY package.json package-lock.json .npmrc /app
RUN npm i
COPY . /app

COPY --from=york-web /app/packages/york-web/node_modules ./packages/york-web/node_modules

RUN set -ex; npm run build

FROM base
WORKDIR /app
COPY --from=build /app/packages/york-styleguide/styleguide ./build
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
