# TerraHash Insights — Product Requirements Document

## Product title
Hong Kong New Energy & Digital Currency Technology Ecosystem Platform

## Product purpose
Build a professional multilingual corporate and industry-information website for the Hong Kong market that presents new energy, blockchain and digital-asset infrastructure, green finance, research, projects and ecosystem content without presenting the platform as an unlicensed investment, fundraising, asset-management, virtual-asset trading, lending, exchange or yield-promise service.

## Primary audiences
1. Hong Kong enterprises and institutional clients
2. New-energy investors and industrial partners
3. Blockchain and digital-asset technology companies
4. Financial institutions, family offices and professional investors
5. Government, science parks, research institutions and media
6. Public users interested in green energy and digital finance

## Product goals
- Establish a credible, modern and international corporate presence.
- Explain capabilities in renewable energy, storage, smart energy, blockchain infrastructure, digital identity, custody technology research, tokenisation research, stablecoin/payment infrastructure research and compliance/risk assessment.
- Publish structured research, annual development timelines, reports, news and project cases.
- Provide clear conversion paths for business cooperation, project consultation and media contact.
- Support Simplified Chinese, Traditional Chinese and English.
- Maintain explicit compliance boundaries and evidence provenance for regulated or policy-related content.

## Non-goals
The public website must not provide or imply:
- virtual-asset trading, exchange or brokerage;
- client asset custody unless and until legally reviewed and appropriately authorised;
- lending, staking, yield products, guaranteed returns or investment recommendations;
- fundraising, securities offering, collective investment or discretionary portfolio management;
- fabricated licences, regulatory approvals, partnerships, project values, market data or government endorsements.

## Brand and visual system
### Tone
Professional, stable, credible, institutional, technology-forward, sustainability-oriented and Hong Kong/international in character.

### Visual palette
- Primary: deep navy / graphite
- New-energy accent: emerald / energy teal
- Digital-infrastructure accent: digital blue / restrained violet
- Secondary: white, neutral greys and accessible contrast ratios

### Imagery
Use licensed or self-produced imagery of Hong Kong skyline/harbour, solar, wind, storage, EV charging, data networks, digital nodes and global connectivity. Do not use fake trading terminals, fabricated returns, fake regulator badges or misleading market screenshots.

### Motion
Lightweight scroll reveals, data-node motion and energy-flow effects. Respect prefers-reduced-motion and preserve mobile performance.

## Information architecture
Top-level public navigation:
- Home
- About
- New Energy
- Digital Assets & Blockchain
- Insights
- Yearly Development
- Projects
- Newsroom
- Partners
- Contact

Global utilities:
- Search
- Language switcher: zh-CN / zh-HK / en
- Breadcrumbs
- Related content
- Back to top
- Mobile menu
- Footer navigation
- 404 page

## Public-page requirements
### Home
Hero, corporate introduction, new-energy entry, digital-assets/blockchain entry, Hong Kong/GBA industry overview, yearly timeline preview, featured research/projects, latest news/reports, ecosystem/partner placeholders and contact CTA.

### About
Company profile, mission/vision/values, management team, advisers, company history, governance/risk management and compliance statement.

### New Energy
Solar/distributed energy, wind/integrated energy, energy storage, EV/charging, carbon and energy management, smart energy platform and project cases.

### Digital Assets & Blockchain
Blockchain infrastructure, digital-asset custody technology research, digital identity/security, RWA tokenisation technology research, stablecoin/payment infrastructure research, compliance/risk management and application cases.

Every page in this section must carry a visible risk/compliance notice. Regulated services must be described as research, infrastructure, technical support, compliance assessment or subject to obtaining required approval before launch.

### Insights
Hong Kong new energy, Hong Kong digital assets, GBA green technology, annual industry reports, policy/regulatory watch, technical whitepapers and data-visualisation centre.

### Yearly Development
Interactive filterable timeline for 2019–2026. Each year supports industry background, Hong Kong market change, new-energy change, digital-asset/blockchain change, policy/regulatory environment, platform response, data indicators and source status. Every metric must carry a source URL/date or status of VERIFIED / SAMPLE / TO_VERIFY.

### Projects
Project name, industry, location, background, objective, solution, outcomes, environmental/social benefit, status and disclaimer. Non-real projects must be labelled CONCEPT EXAMPLE.

### Newsroom
News listing/detail, industry updates, company announcements, media coverage, report downloads and filters by date/topic/keyword.

### Partners
Partner types: new energy, financial institutions, research, technology suppliers, parks/government, international industry. Use placeholders unless logo/name usage is authorised.

### Contact
Hong Kong office placeholder, business email, media email, cooperation application, project consultation, map area, social links, privacy and terms links.

## User journeys
A. First-time visitor: Home → About → Business Area → Projects → Contact
B. New-energy client: Home → New Energy → Technology Detail → Projects → Cooperation Application
C. Digital-asset institution: Home → Digital Assets & Blockchain → Compliance & Risk → Research Report → Contact
D. Research/media: Home → Insights → Yearly Development → Report Download → Media Contact

## CMS scope
Content types:
- News
- Yearly events
- Reports
- Projects
- Team members
- Partners
- FAQ
- Localised content
- SEO metadata
- Publish/update metadata

Each content type supports create, edit, delete/soft-delete, draft, review, publish, unpublish, categories, tags, search, localisation, image upload, file attachment, publish date and updated date.

## Admin roles
- SUPER_ADMIN
- CONTENT_EDITOR
- NEWS_EDITOR
- DATA_MANAGER
- READ_ONLY

Admin features: authentication, role-based access, content management, yearly timeline management, localisation, media library, submissions, SEO, analytics overview, audit logs, preview and draft/review workflow.

## Recommended technical architecture
### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- accessible component system
- server rendering/static generation where appropriate
- next-intl or equivalent i18n layer

### Backend
- Next.js API routes/server actions or dedicated Node service
- PostgreSQL
- Prisma ORM
- object storage for media/files
- role-based admin authentication
- structured logging and audit trail

### Security
- schema validation on all input
- output encoding and sanitisation
- CSRF protection where cookie-based mutation endpoints apply
- parameterised database access through ORM
- rate limiting and anti-spam controls
- restricted file MIME/size validation
- environment-variable secrets
- RBAC and audit logs
- no sensitive data embedded in client bundles

### Performance/SEO
- responsive images and lazy loading
- metadata API and canonical URLs
- OpenGraph/Twitter metadata
- schema.org organisation/article/breadcrumb/report markup where applicable
- sitemap.xml and robots.txt
- mobile-first responsive layout
- progressive enhancement for slower networks

## Compliance content model
All legal/regulatory/policy statements must be stored with:
- source_title
- source_url
- publisher
- publication_date
- retrieved_at
- verification_status
- reviewer
- review_notes

Allowed verification states: VERIFIED, TO_VERIFY, SAMPLE, LEGAL_REVIEW_REQUIRED, EXPIRED.

No page may convert TO_VERIFY or SAMPLE content into authoritative wording.

## Current Hong Kong regulatory baseline for product design
As of September 2026, the SFC publicly distinguishes licensed virtual-asset trading platforms from applicants and warns that applicants are not licensed merely by applying. Centralised platforms carrying on relevant business in Hong Kong or actively marketing regulated virtual-asset services to Hong Kong investors may require SFC licensing under the applicable statutory regimes. Therefore the website will not represent TerraHash Insights as a licensed trading platform or permit trading/exchange functionality without separate verified legal and licensing work.

Primary official references for the compliance register:
- SFC — Lists of virtual asset trading platforms
- SFC — Virtual asset trading platform operators
- SFC — Regulatory requirements
- SFC — Public register of licensed persons and registered institutions

## Legal pages required before production launch
- Disclaimer
- Digital Asset Risk Disclosure
- Investment Risk Disclosure
- Privacy Policy
- Cookie Policy
- Terms of Use
- Intellectual Property Notice
- Data Source Statement
- Research Is Not Investment Advice statement
- Virtual-asset-service qualification status placeholder

All require Hong Kong legal/compliance review before production publication.

## Acceptance principles
- No dead navigation links in production.
- No fabricated licence, partner, project, market metric or government endorsement.
- Every dynamic metric has provenance or an explicit SAMPLE/TO_VERIFY label.
- All regulated-service language has compliance review status.
- Three-language route parity is maintained.
- Mobile, accessibility and SEO requirements are part of definition of done.
