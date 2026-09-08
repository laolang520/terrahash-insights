# TerraHash Insights — Database Model

Recommended database: PostgreSQL
Recommended ORM: Prisma

## Core conventions
- UUID primary keys
- `created_at`, `updated_at`, optional `deleted_at`
- locale-specific content in translation tables
- explicit workflow status enums
- soft delete for editorial records
- immutable audit log events
- source/provenance records separated from display content

## Enums

### PublicationStatus
- DRAFT
- IN_REVIEW
- PUBLISHED
- UNPUBLISHED
- ARCHIVED

### Locale
- ZH_CN
- ZH_HK
- EN

### VerificationStatus
- VERIFIED
- TO_VERIFY
- SAMPLE
- LEGAL_REVIEW_REQUIRED
- EXPIRED

### UserRole
- SUPER_ADMIN
- CONTENT_EDITOR
- NEWS_EDITOR
- DATA_MANAGER
- READ_ONLY

### ProjectRealityStatus
- REAL
- CONCEPT_EXAMPLE

### PartnerAuthorisationStatus
- CONFIRMED
- TO_CONFIRM
- NOT_AUTHORISED

## User
- id UUID PK
- email unique
- password_hash / external_auth_id
- display_name
- role UserRole
- active boolean
- last_login_at
- created_at
- updated_at

## AuditLog
- id UUID PK
- actor_user_id FK User nullable
- action
- entity_type
- entity_id
- before_json JSONB nullable
- after_json JSONB nullable
- ip_hash nullable
- user_agent nullable
- created_at

## Category
- id UUID PK
- namespace
- slug
- created_at

## CategoryTranslation
- id UUID PK
- category_id FK
- locale
- name
- description nullable
- unique(category_id, locale)

## Tag
- id UUID PK
- slug

## TagTranslation
- id UUID PK
- tag_id FK
- locale
- name
- unique(tag_id, locale)

## Source
Used for regulatory, policy, market-data and factual provenance.
- id UUID PK
- source_title
- source_url
- publisher
- publication_date nullable
- retrieved_at
- verification_status VerificationStatus
- reviewer_user_id FK nullable
- reviewed_at nullable
- review_notes nullable
- archived_snapshot_ref nullable

## NewsArticle
- id UUID PK
- slug unique
- type: NEWS / INDUSTRY_UPDATE / COMPANY_ANNOUNCEMENT / MEDIA_COVERAGE
- status PublicationStatus
- publish_at nullable
- unpublish_at nullable
- featured_image_media_id nullable
- created_by
- updated_by
- created_at
- updated_at
- deleted_at nullable

## NewsArticleTranslation
- id UUID PK
- article_id FK
- locale
- title
- excerpt
- body
- seo_title nullable
- seo_description nullable
- unique(article_id, locale)

## Report
- id UUID PK
- slug unique
- report_type
- status PublicationStatus
- cover_media_id nullable
- download_media_id nullable
- publication_date nullable
- verification_status
- created_at
- updated_at

## ReportTranslation
- id UUID PK
- report_id FK
- locale
- title
- summary
- body nullable
- seo_title nullable
- seo_description nullable
- unique(report_id, locale)

## ReportSource
- report_id FK
- source_id FK
- composite PK(report_id, source_id)

## YearlyEvent
- id UUID PK
- year integer
- slug unique
- industry: NEW_ENERGY / DIGITAL_ASSETS / GREEN_FINANCE / BLOCKCHAIN / INFRASTRUCTURE / CROSS_SECTOR
- topic
- status PublicationStatus
- verification_status VerificationStatus
- display_order integer
- created_at
- updated_at

## YearlyEventTranslation
- id UUID PK
- yearly_event_id FK
- locale
- title
- industry_background
- hk_market_change
- new_energy_change
- digital_asset_change
- policy_regulatory_environment
- platform_action
- unique(yearly_event_id, locale)

## YearlyMetric
- id UUID PK
- yearly_event_id FK
- metric_key
- numeric_value decimal nullable
- text_value nullable
- unit nullable
- verification_status VerificationStatus
- source_id FK nullable
- notes nullable
- display_order

Constraint: a metric with verification_status=VERIFIED must reference a Source with compatible verification/review metadata.

## Project
- id UUID PK
- slug unique
- industry
- location_text nullable
- reality_status ProjectRealityStatus
- project_status
- publication_status PublicationStatus
- featured_image_media_id nullable
- evidence_status VerificationStatus
- created_at
- updated_at

## ProjectTranslation
- id UUID PK
- project_id FK
- locale
- name
- background
- objective
- technical_solution
- outcomes
- environmental_social_benefit
- disclaimer
- seo_title nullable
- seo_description nullable
- unique(project_id, locale)

## ProjectSource
- project_id FK
- source_id FK
- composite PK(project_id, source_id)

## TeamMember
- id UUID PK
- slug unique
- member_type: MANAGEMENT / ADVISER
- status PublicationStatus
- portrait_media_id nullable
- display_order

## TeamMemberTranslation
- id UUID PK
- team_member_id FK
- locale
- name
- role_title
- biography
- unique(team_member_id, locale)

## Partner
- id UUID PK
- slug unique
- partner_type
- authorisation_status PartnerAuthorisationStatus
- logo_media_id nullable
- website_url nullable
- publication_status PublicationStatus
- display_order

Rule: real logo rendering requires authorisation_status=CONFIRMED.

## PartnerTranslation
- id UUID PK
- partner_id FK
- locale
- display_name
- description nullable
- unique(partner_id, locale)

## FAQ
- id UUID PK
- category_id nullable
- status PublicationStatus
- display_order

## FAQTranslation
- id UUID PK
- faq_id FK
- locale
- question
- answer
- unique(faq_id, locale)

## MediaAsset
- id UUID PK
- storage_key unique
- original_filename
- mime_type
- byte_size
- width nullable
- height nullable
- alt_text_default nullable
- rights_status: CONFIRMED / TO_CONFIRM / RESTRICTED
- rights_source nullable
- uploaded_by
- created_at

## MediaAssetTranslation
- id UUID PK
- media_asset_id FK
- locale
- alt_text
- caption nullable
- unique(media_asset_id, locale)

## ContactSubmission
- id UUID PK
- inquiry_type: BUSINESS / MEDIA / PROJECT / OTHER
- name
- organisation nullable
- email
- phone nullable
- message
- privacy_consent_at
- locale
- status: NEW / IN_PROGRESS / CLOSED / SPAM
- assigned_to nullable
- created_at
- updated_at

Sensitive handling: encryption at rest where appropriate, retention policy, restricted admin access, no wallet secrets/private keys/password collection.

## PageSEO
For fixed/static pages.
- id UUID PK
- route_key
- locale
- seo_title
- seo_description
- canonical_override nullable
- og_media_id nullable
- noindex boolean default false
- updated_at
- unique(route_key, locale)

## LegalDocument
- id UUID PK
- document_type
- version
- publication_status
- effective_date nullable
- legal_review_status VerificationStatus
- reviewer nullable
- reviewed_at nullable
- source_notes nullable

## LegalDocumentTranslation
- id UUID PK
- legal_document_id FK
- locale
- title
- body
- unique(legal_document_id, locale)

## ContentRelation
Supports related-content recommendations.
- id UUID PK
- source_entity_type
- source_entity_id
- target_entity_type
- target_entity_id
- relation_type
- display_order

## SearchIndex strategy
Use PostgreSQL full-text search initially; optionally move to Meilisearch/Algolia/OpenSearch when scale requires it. Index only PUBLISHED records and index each locale independently.

## Workflow rules
1. Public APIs return PUBLISHED content only.
2. Compliance-sensitive content can be blocked from publication when `LEGAL_REVIEW_REQUIRED`.
3. VERIFIED metrics require provenance.
4. Partner logos require confirmed authorisation.
5. CONCEPT_EXAMPLE projects must display that label on cards and detail pages.
6. Every publish/unpublish/delete action writes an AuditLog record.
7. Translation absence must be explicit; legal copy must not silently fall back to unreviewed machine translation.

## Recommended indexes
- status + publish_at for editorial content
- year + industry + topic for yearly events
- locale + title full-text indexes for translations
- created_at for submissions/audit logs
- verification_status for source-review queues
- slug unique indexes on public content entities
