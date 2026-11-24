# UK Tenders Scraper — examples

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/GeminiGeorge22/publicrecords-uk-find-a-tender-scraper-examples/blob/main/notebooks/quickstart.ipynb)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/GeminiGeorge22/publicrecords-uk-find-a-tender-scraper-examples/HEAD?labpath=notebooks%2Fquickstart.ipynb)

UK government tenders from Find a Tender and Contracts Finder: buyer, value, deadline.

The Actor runs on **your** Apify account (API token or OAuth). Usage is billed to you on Apify's free or paid tier.

## Links
- [Apify Store page](https://apify.com/publicrecords/uk-find-a-tender-scraper)
- [Apify MCP endpoint](https://mcp.apify.com?tools=publicrecords/uk-find-a-tender-scraper)
- [n8n / Make / Zapier / Pipedream recipes](https://github.com/GeminiGeorge22/publicrecords-mcp/tree/main/templates)
- [Public snapshot dataset (Hugging Face)](https://huggingface.co/datasets/Publicrecords/uk-tenders-public-sample)

## Run a sync job

Set `APIFY_TOKEN` to your own Apify token. Do not commit it.

```bash
export APIFY_TOKEN=YOUR_TOKEN
python3 examples/python/run.py
# node examples/javascript/run.js
# bash examples/curl/run.sh
```

Examples in Python, JavaScript and curl are in `examples/`. Author: Public Records. License: MIT. No GitHub Actions in this repository.

READMEs: [English](README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [Português](README.pt.md)
