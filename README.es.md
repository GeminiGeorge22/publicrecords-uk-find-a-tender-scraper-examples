# UK Tenders Scraper — ejemplos

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/GeminiGeorge22/publicrecords-uk-find-a-tender-scraper-examples/blob/main/notebooks/quickstart.ipynb)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/GeminiGeorge22/publicrecords-uk-find-a-tender-scraper-examples/HEAD?labpath=notebooks%2Fquickstart.ipynb)

Licitaciones del gobierno del Reino Unido en Find a Tender y Contracts Finder: comprador, valor, plazo.

El Actor se ejecuta en **tu** cuenta de Apify (token de API u OAuth). El uso se factura a ti, en el plan gratuito o de pago de Apify.

## Enlaces
- [Página en Apify Store](https://apify.com/publicrecords/uk-find-a-tender-scraper)
- [Endpoint MCP de Apify](https://mcp.apify.com?tools=publicrecords/uk-find-a-tender-scraper)
- [Recetas n8n / Make / Zapier / Pipedream](https://github.com/GeminiGeorge22/publicrecords-mcp/tree/main/templates)
- [Instantánea pública (Hugging Face)](https://huggingface.co/datasets/Publicrecords/uk-tenders-public-sample)

## Ejecutar una llamada síncrona

Define `APIFY_TOKEN` con tu propio token de Apify. No lo subas al repositorio.

```bash
export APIFY_TOKEN=YOUR_TOKEN
python3 examples/python/run.py
# node examples/javascript/run.js
# bash examples/curl/run.sh
```

Hay ejemplos en Python, JavaScript y curl en `examples/`. Autor: Public Records. Licencia: MIT. Este repositorio no usa GitHub Actions.

READMEs: [English](README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [Português](README.pt.md)
