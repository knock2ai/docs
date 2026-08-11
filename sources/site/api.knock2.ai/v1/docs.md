# Source: https://api.knock2.ai/v1/docs

# Knock2 Public API 1.0 

OAS 3.1

[/v1/openapi.json](https://api.knock2.ai/v1/openapi.json)

REST API for accessing your Knock2 visitor identification data.

### [Public API v1 — Accounts](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Accounts)

GET

[/v1/accounts](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Accounts/list_accounts_v1_accounts_get)

List accounts

GET

[/v1/accounts/{account\_id}](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Accounts/get_account_v1_accounts__account_id__get)

Get account by ID or domain

### [Public API v1 — Contacts](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Contacts)

GET

[/v1/contacts](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Contacts/list_contacts_v1_contacts_get)

List contacts

GET

[/v1/contacts/{contact\_id}](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Contacts/get_contact_v1_contacts__contact_id__get)

Get contact by ID

### [Public API v1 — Filter Sets](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Filter%20Sets)

GET

[/v1/filter-sets](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Filter%20Sets/list_filter_sets_v1_filter_sets_get)

List saved filter sets

POST

[/v1/filter-sets](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Filter%20Sets/create_filter_set_v1_filter_sets_post)

Create a filter set

PUT

[/v1/filter-sets/{filter\_set\_id}](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Filter%20Sets/update_filter_set_v1_filter_sets__filter_set_id__put)

Update a filter set

DELETE

[/v1/filter-sets/{filter\_set\_id}](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Filter%20Sets/delete_filter_set_v1_filter_sets__filter_set_id__delete)

Delete a filter set

### [Public API v1 — Activity](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Activity)

GET

[/v1/activity](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Activity/list_activity_v1_activity_get)

List page visit activity

### [Public API v1 — Scores](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Scores)

GET

[/v1/scores](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Scores/get_scores_v1_scores_get)

Get lead scores

GET

[/v1/scores/recent](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Scores/get_recent_scores_v1_scores_recent_get)

List recent score changes

### [Public API v1 — Webhooks](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Webhooks)

POST

[/v1/webhooks](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Webhooks/create_webhook_v1_webhooks_post)

Create webhook subscription

GET

[/v1/webhooks](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Webhooks/list_webhooks_v1_webhooks_get)

List webhook subscriptions

DELETE

[/v1/webhooks/{webhook\_id}](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Webhooks/delete_webhook_v1_webhooks__webhook_id__delete)

Delete webhook subscription

### [Public API v1 — Tenants](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Tenants)

POST

[/v1/tenants](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Tenants/create_tenant_v1_tenants_post)

Create a new tenant

DELETE

[/v1/tenants/{product\_slug}](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Tenants/delete_tenant_v1_tenants__product_slug__delete)

Deactivate a tenant

GET

[/v1/script](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Tenants/get_script_v1_script_get)

Get tracking script embed code

GET

[/v1/script/status](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Tenants/get_script_status_v1_script_status_get)

Check if the tracking script is installed

### [Public API v1 — Enrich](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Enrich)

POST

[/v1/enrich](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Enrich/post_enrich_v1_enrich_post)

Enrich a contact by email

### [Public API v1 — Auth](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Auth)

GET

[/v1/me](https://api.knock2.ai/v1/docs#/Public%20API%20v1%20%E2%80%94%20Auth/get_me_v1_me_get)

Verify API key

#### Schemas

AccountDetailResponse

Expand all**object**

AccountListResponse

Expand all**object**

AccountResponse

Expand all**object**

ActivityEvent

Expand all**object**

ActivityListResponse

Expand all**object**

Body\_oauth\_authorize\_post\_oauth\_authorize\_post

Expand all**object**

Body\_send\_linkedin\_video\_message\_v2\_action\_queue\_\_product\_slug\_\_touches\_\_touch\_id\_\_send\_linkedin\_video\_message\_post

Expand all**object**

Body\_send\_linkedin\_voice\_note\_v2\_action\_queue\_\_product\_slug\_\_touches\_\_touch\_id\_\_send\_linkedin\_voice\_note\_post

Expand all**object**

Body\_upload\_sequence\_media\_v2\_action\_queue\_\_product\_slug\_\_sequence\_media\_post

Expand all**object**

CampaignEmailSequenceInstruction

Expand all**object**

ContactDetailResponse

Expand all**object**

ContactListResponse

Expand all**object**

ContactOnboardingRequest

Expand all**object**

ContactResponse

Expand all**object**

CreateCampaignRequest

Expand all**object**

CreateTenantRequest

Expand all**object**

CreateWebhookRequest

Expand all**object**

CsmAccountPreferencesRequest

Expand all**object**

CsmActionReviewRequest

Expand all**object**

CsmRunReviewRequest

Expand all**object**

EnrichRequest

Expand all**object**

EnrichResponse

Expand all**object**

ErrorDetail

Expand all**object**

ErrorEnvelope

Expand all**object**

FilterSetBody

Expand all**object**

FilterSetDetailResponse

Expand all**object**

FilterSetListResponse

Expand all**object**

FilterSetResponse

Expand all**object**

FilterSetUpdateBody

Expand all**object**

HTTPValidationError

Expand all**object**

HeaderSuggestionRequest

Expand all**object**

LogVendorScriptErrorRequest

Expand all**object**

LogVisitorInfoRequest

Expand all**object**

MeData

Expand all**object**

MeResponse

Expand all**object**

PageVisit

Expand all**object**

RecentScoreEntry

Expand all**object**

RecentScoresResponse

Expand all**object**

ResendInvitationRequest

Expand all**object**

ScoreEntry

Expand all**object**

ScoreHistoryEntry

Expand all**object**

ScoresData

Expand all**object**

ScoresResponse

Expand all**object**

ScriptData

Expand all**object**

ScriptResponse

Expand all**object**

ScriptStatusData

Expand all**object**

ScriptStatusResponse

Expand all**object**

TenantCreateData

Expand all**object**

TenantCreateResponse

Expand all**object**

ToggleCustomerFeatureRequest

Expand all**object**

UpdateCompanyProfileRequest

Expand all**object**

UpdateCustomerChosenCrmProviderRequest

Expand all**object**

UpdateScriptRemindersEnabledRequest

Expand all**object**

UpdateSelectedToolsRequest

Expand all**object**

UpsertChatHistoryRequest

Expand all**object**

ValidationError

Expand all**object**

WebhookCreateResponse

Expand all**object**

WebhookListResponse

Expand all**object**

WebhookResponse

Expand all**object**