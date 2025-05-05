FROM node:22-alpine AS builder

WORKDIR /app


COPY package*json ./
RUN npm install

COPY . .
RUN npm run build:all

# RUN cp /app/dist/host/assets/mf.manifest.prod.json /app/dist/host/assets/mf.manifest.json

FROM nginx:stable-alpine

RUN apk add --no-cache gettext ca-certificates \
  && update-ca-certificates

COPY --from=builder /app/dist/host /usr/share/nginx/html
COPY --from=builder /app/dist/app2-details /usr/share/nginx/html/app2-details/
COPY --from=builder /app/dist/app3-favorites /usr/share/nginx/html/app3-favorites/
COPY --from=builder /app/dist/app4-cast /usr/share/nginx/html/app4-cast/

RUN mkdir -p /etc/nginx/templates

COPY nginx.conf.template /etc/nginx/templates/default.conf.template

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

