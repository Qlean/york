FROM node:10-alpine as node-base

RUN set -ex; \
    apk add --no-cache --virtual .dev-dep \
        nginx \
        git \
        openssh \
        python \
        make \
        pkgconfig autoconf automake libtool nasm build-base zlib-dev \
        g++ ;

WORKDIR /usr/src/app

FROM node-base

ARG BUILD_SOURCE
ARG REPO_NAME
ARG REPO_OWNER

LABEL org.opencontainers.image.vendor=${REPO_OWNER} \
      org.opencontainers.image.title=${REPO_NAME} \
      org.opencontainers.image.source=${BUILD_SOURCE}

ARG NPM_TOKEN

COPY id_rsa package.json package-lock.json .npmrc /usr/src/app/packages/york-styleguide/

COPY . /usr/src/app

WORKDIR /usr/src/app/packages/york-styleguide

RUN set -ex; \
    mkdir /root/.ssh; \
    chmod 700 /root/.ssh; \
    mv id_rsa /root/.ssh; \
    chmod 600 /root/.ssh/id_rsa; \
    echo Host github.com > /root/.ssh/config; \
    echo '  StrictHostKeyChecking no' >> /root/.ssh/config; \
    npm i;
    # rm ~/.ssh/id_rsa;
    # apk del .dev-dep

WORKDIR /usr/src/app/packages/york-core
RUN npm i

WORKDIR /usr/src/app/packages/york-web
RUN npm i

WORKDIR /usr/src/app/packages/york-styleguide
RUN npm run styleguide:build

EXPOSE 80
