// Call publicrecords/uk-find-a-tender-scraper on YOUR Apify account. Set APIFY_TOKEN. Do not commit the token.
const TOKEN = process.env.APIFY_TOKEN;
if (!TOKEN) {
  console.error("Set APIFY_TOKEN to your own Apify token");
  process.exit(1);
}
const url = `https://api.apify.com/v2/acts/publicrecords~uk-find-a-tender-scraper/run-sync-get-dataset-items?token=${TOKEN}`;
const payload = {
  "noticeType": [
    "tender"
  ],
  "updatedFrom": "2026-11-17T00:00:00",
  "maxItems": 100
};

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
const items = await res.json();
console.log(JSON.stringify(Array.isArray(items) ? items.slice(0, 5) : items, null, 2));
console.log("count", Array.isArray(items) ? items.length : "n/a");
