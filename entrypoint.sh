#!/bin/sh

envsubst '${TMDB_API_URL} ${TMDB_API_HOST} ${TMDB_BEARER_TOKEN}' \
  < /etc/nginx/templates/default.conf.template \
  > /etc/nginx/conf.d/default.conf


echo "{
  \"app2-details\": \"${REMOTE_ENTRY_APP2_DETAILS}\",
  \"app3-favorites\": \"${REMOTE_ENTRY_APP3_FAVORITES}\",
  \"app4-cast\": \"${REMOTE_ENTRY_APP4_CAST}\"
}" > /usr/share/nginx/html/assets/mf.manifest.json

# Arrancamos nginx
nginx -g "daemon off;"
