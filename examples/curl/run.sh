#!/usr/bin/env bash
# Call publicrecords/uk-find-a-tender-scraper on YOUR Apify account. Set APIFY_TOKEN. Do not commit the token.
set -euo pipefail
: "${APIFY_TOKEN:?Set APIFY_TOKEN to your own Apify token}"
curl -sS -X POST \
  "https://api.apify.com/v2/acts/publicrecords~uk-find-a-tender-scraper/run-sync-get-dataset-items?token=${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"noticeType": ["tender"], "updatedFrom": "2026-11-17T00:00:00", "maxItems": 100}'
