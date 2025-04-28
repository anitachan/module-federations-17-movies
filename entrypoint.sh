#!/bin/sh

echo "{
  \"app2-details\": \"${REMOTE_ENTRY_APP2_DETAILS}\",
  \"app3-favorites\": \"${REMOTE_ENTRY_APP3_FAVORITES}\",
  \"app4-cast\": \"${REMOTE_ENTRY_APP4_CAST}\"
}" > /usr/share/nginx/html/assets/mf.manifest.json

# Arrancamos nginx
nginx -g "daemon off;"
