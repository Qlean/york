FROM node:10-alpine as base
ARG USER=app

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
      mkdir -p /run/nginx; \
      addgroup ${USER} && adduser -D -s /bin/sh -G ${USER} ${USER};

COPY .nginx /etc/nginx/conf.d/default.conf

FROM node:10-alpine as build
WORKDIR /app
COPY package.json package-lock.json .npmrc /app/
RUN npm i
COPY . /app

RUN set -ex; npm run build

FROM base
ARG USER=app
WORKDIR /app

COPY --from=build /app/packages/york-styleguide/lib ./build

USER $USER
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
