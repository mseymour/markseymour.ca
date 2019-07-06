FROM node:11-alpine AS build

RUN apk add --no-cache --virtual .gyp python make g++

WORKDIR /app
ENV NODE_ENV=test

COPY package.json *yarn* ./
RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    yarn install --no-cache --frozen-lockfile --production; \
  elif [ "$NODE_ENV" = "test" ]; then \
    yarn install --no-cache --frozen-lockfile; \
  fi;

COPY . .
RUN yarn build

FROM nginx:alpine

# COPY nginx /etc/nginx/
COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
RUN touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080
HEALTHCHECK CMD [ "wget", "-q", "localhost:8080" ]
