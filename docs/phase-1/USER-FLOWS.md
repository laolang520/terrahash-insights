# TerraHash Insights — User Flows

## Flow A — First-time visitor
1. Home
2. About / company credibility
3. Choose business area
4. Review relevant project cases
5. Contact / cooperation form

Success criteria:
- visitor understands what the company does within 30–60 seconds;
- regulated digital-asset activities are not implied;
- project status and evidence labels are visible;
- contact CTA is always reachable.

## Flow B — New-energy client
1. Home
2. New Energy overview
3. Specific technology page
4. New-energy project cases
5. Cooperation application

Decision-support content:
- technology scope;
- deployment model;
- project status;
- environmental/social benefit methodology;
- source and disclaimer metadata.

## Flow C — Digital-asset institutional visitor
1. Home
2. Digital Assets & Blockchain
3. Compliance & Risk Management
4. Research / policy report
5. Contact

Guardrails:
- no trade/exchange/deposit/invest buttons;
- no yield or return claims;
- clear research/infrastructure framing;
- visible legal/risk notice;
- source provenance on regulatory statements.

## Flow D — Researcher / media
1. Home
2. Insights
3. Yearly Development
4. Report download
5. Media contact

Research UX requirements:
- filters by year/topic/industry;
- source URL and publication date;
- verification badge;
- last-updated timestamp;
- downloadable report metadata.

## Flow E — Search-led visitor
1. Search
2. Results grouped by News / Reports / Projects / Yearly Events / Pages
3. Result detail
4. Related content
5. Relevant CTA

Search result cards display locale, content type, publication/update date and verification status when applicable.

## Flow F — Language switching
1. User switches zh-CN / zh-HK / en
2. System attempts same-content locale equivalent
3. If translation exists, remain on equivalent route
4. If not, show clearly marked fallback and offer available locales

Do not silently present machine-translated legal or compliance text as reviewed content.

## Flow G — CMS editorial workflow
1. Editor creates content as DRAFT
2. Adds locale variants
3. Adds sources / evidence metadata
4. Runs preview
5. Sends to REVIEW
6. Reviewer approves or returns changes
7. Publisher sets PUBLISHED
8. Update creates revision metadata and audit event
9. Content can be UNPUBLISHED or ARCHIVED

Compliance-sensitive content requires a LEGAL_REVIEW_REQUIRED flag before production publication.

## Flow H — Yearly development data workflow
1. Data manager creates yearly event
2. Selects year, industry and topic
3. Adds narrative fields
4. Adds metrics separately
5. Each metric receives unit, value, source, source date and verification status
6. TO_VERIFY/SAMPLE metrics are automatically labelled in the public UI
7. VERIFIED status requires reviewer identity and reviewed timestamp

## Flow I — Project publication workflow
1. Create project record
2. Select REAL / CONCEPT_EXAMPLE
3. Add location, sector, goals, solution, outcomes and ESG impacts
4. Attach evidence where applicable
5. Review status and disclaimer
6. Publish

If REAL is not supported by evidence/approval, publication must fall back to CONCEPT_EXAMPLE.

## Flow J — Partner publication workflow
1. Create partner record
2. Add partner type
3. Set authorisation status
4. Upload logo only when logo-use authorisation is confirmed
5. If not confirmed, render placeholder text instead of a real logo
6. Publish

## Flow K — Contact form
1. User selects inquiry type
2. Enters required contact details
3. Accepts privacy notice
4. Client + server validation
5. Anti-spam/rate-limit check
6. Submission persisted securely
7. User receives success state and reference ID
8. Admin sees submission in dashboard

No contact form should collect wallet recovery phrases, private keys, exchange passwords or unnecessary financial credentials.

## Error and edge states
- 404 with search and primary navigation
- unavailable translation with explicit fallback
- failed form submission with retry path
- missing source displays TO_VERIFY rather than hiding provenance
- expired legal review flags affected content for re-review
- unpublished CMS content never leaks through public APIs
