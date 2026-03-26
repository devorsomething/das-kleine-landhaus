# Das kleine Landhaus — Website

> 🏡 Handverlesene Wohnaccessoires, liebevoll ausgewählte Geschenkideen und handgefertigte Produkte aus Vorarlberg.

**Live URL:** https://das-kleine-landhaus.at *(Coming soon — deploy with Coolify below)*

---

## Lead Intelligence

| Feld | Wert |
|---|---|
| **Lead Score** | 71 / 100 — **TIER 1** |
| **Business** | Das kleine Landhaus |
| **Adresse** | Montfortstraße 13, 6900 Bregenz |
| **Website** | ❌ NONE — Keinerlei Online-Präsenz |
| **Google Maps** | ✅ Vorhanden mit guten Bewertungen |
| **Preis-Level** | €€ |
| **Pain Point** | Retail Shop ohne Online-Auftritt verliert Kunden an Amazon & große Händler |
| **Outreach Angle** | _„Euer Laden hat so viele tolle Produkte — aber ich finde nichts online. Potentielle Kunden gehen zu Amazon statt zu euch."_ |
| **Revenue Potenzial** | Online-Katalog = Sichtbarkeit = Verkauf. Jeder der online sucht, geht aktuell leer aus. |
| **Location** | Montfortstraße 13 — gute Innenstadtlage in Bregenz |

---

## Was diese Website bietet

- ✅ Professionelle Darstellung der Marke & Produkte
- ✅ Kontaktformular für Anfragen
- ✅ Google Maps Einbettung
- ✅ Öffnungszeiten & Adresse prominent
- ✅ Kategorien & ausgewählte Produkte
- ✅ Storytelling zu Regionalität & Handwerk
- ✅ Mobile-optimiertes Design
- ✅ **Zukunft:** Online-Shop Erweiterung möglich

---

## Tech Stack

- **Framework:** Next.js 15 (React 19, TypeScript)
- **Styling:** Tailwind CSS v3
- **Fonts:** Cormorant Garamond (Headings) + DM Sans (Body)
- **Images:** Unsplash (extern gehostet)

---

## Deploy mit Coolify

```bash
# 1. GitHub Repository klonen / erstellen
gh repo create das-kleine-landhaus --public --source=. --push

# 2. Auf Coolify:
#    - New Resource → Import from GitHub
#    - Repository: your-org/das-kleine-landhaus
#    - Build Pack: Nixpacks → Node.js
#    - Port: 3000
#    - Domains: das-kleine-landhaus.your-domain.com

# 3. Environment Variables (falls nötig):
#    NODE_VERSION=22

# 4. Deploy klicken ✓
```

---

## Lokale Entwicklung

```bash
cd das-kleine-landhaus

# Dependencies installieren
npm install

# Tailwind CSS builden
npx tailwindcss -i ./app/globals.css -o ./public/output.css

# Development Server
npm run dev

# Production Build
npm run build
```

---

## Projektstruktur

```
das-kleine-landhaus/
├── app/
│   ├── layout.tsx       # Root Layout + Metadata
│   ├── page.tsx         # Komplette Seite (Single-Page)
│   └── globals.css      # Tailwind + Custom Styles
├── public/
│   └── output.css       # Kompiliertes Tailwind CSS
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Nächste Schritte (Empfehlung)

1. **Domain:** das-kleine-landhaus.at oder .com sichern
2. **Online-Shop:** Shopify oder WooCommerce anbinden
3. **Google Business:** Bestehenden Eintrag verifizieren & optimieren
4. **Social Media:** Instagram-Konto mit Produktfotos starten
5. **SEO:** Google My Business, lokale Keywords, strukturierte Daten

---

_Gebaut von Miro · Bregenz, Österreich · 2026_
