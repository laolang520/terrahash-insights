# TerraHash Insights — Sitemap

## Public routes

- `/` — Home
- `/about` — About overview
  - `/about/company`
  - `/about/mission-vision-values`
  - `/about/leadership`
  - `/about/advisers`
  - `/about/history`
  - `/about/governance-risk`
  - `/about/compliance`

- `/new-energy` — New Energy overview
  - `/new-energy/solar-distributed`
  - `/new-energy/wind-integrated`
  - `/new-energy/storage`
  - `/new-energy/ev-charging`
  - `/new-energy/carbon-energy-management`
  - `/new-energy/smart-energy-platform`
  - `/new-energy/projects`

- `/digital-assets` — Digital Assets & Blockchain overview
  - `/digital-assets/blockchain-infrastructure`
  - `/digital-assets/custody-technology`
  - `/digital-assets/digital-identity-security`
  - `/digital-assets/rwa-tokenisation-research`
  - `/digital-assets/stablecoin-payment-research`
  - `/digital-assets/compliance-risk`
  - `/digital-assets/cases`

- `/insights` — Insights overview
  - `/insights/hong-kong-new-energy`
  - `/insights/hong-kong-digital-assets`
  - `/insights/gba-green-tech`
  - `/insights/reports`
  - `/insights/policy-regulation`
  - `/insights/whitepapers`
  - `/insights/data`

- `/yearly-development` — Interactive annual timeline
  - query filters: `year`, `industry`, `topic`, `verification`
  - detail route: `/yearly-development/[year]`

- `/projects` — Projects list
  - `/projects/[slug]`

- `/newsroom` — Newsroom list
  - `/newsroom/[slug]`
  - `/newsroom/reports`
  - filters: `date`, `topic`, `keyword`, `type`

- `/partners` — Partner ecosystem

- `/contact` — Contact
  - `/contact/cooperation`
  - `/contact/project-consultation`
  - `/contact/media`

- `/search` — Site search

## Legal and policy routes
- `/legal/disclaimer`
- `/legal/digital-asset-risk`
- `/legal/investment-risk`
- `/legal/privacy`
- `/legal/cookies`
- `/legal/terms`
- `/legal/intellectual-property`
- `/legal/data-sources`
- `/legal/research-not-investment-advice`
- `/legal/virtual-asset-service-status`

## Utility routes
- `/404`
- `/sitemap.xml`
- `/robots.txt`

## Locale strategy
Recommended canonical pattern:
- `/zh-cn/...`
- `/zh-hk/...`
- `/en/...`

Locale middleware redirects `/` to the preferred locale while preserving canonical metadata and hreflang relationships.

## Admin routes
- `/admin/login`
- `/admin`
- `/admin/content`
- `/admin/news`
- `/admin/reports`
- `/admin/projects`
- `/admin/yearly-development`
- `/admin/team`
- `/admin/partners`
- `/admin/faq`
- `/admin/media`
- `/admin/forms`
- `/admin/localisation`
- `/admin/seo`
- `/admin/analytics`
- `/admin/audit-log`
- `/admin/users-roles`
- `/admin/review-queue`

## Navigation behaviour
Every content page must expose:
- global top navigation;
- locale switcher;
- breadcrumb trail;
- related-content module;
- back-to-top control;
- responsive mobile menu;
- global footer navigation.

## Route status model
Each route should be tracked as one of:
- PLANNED
- WIREFRAMED
- IMPLEMENTED
- QA
- PRODUCTION_READY

No PLANNED route should be linked in production unless a controlled coming-soon page is intentionally used.
