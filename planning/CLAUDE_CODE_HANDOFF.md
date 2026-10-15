# Claude Code — Implement the Pietro product MVP

## Auftrag und Autorität

Build the product described here in the existing repository. This is an implementation handoff, not a launched worker or Weavr mission. Inspect current main and applicable AGENTS.md first. Use an isolated branch/worktree and preserve unrelated changes. Do not provision services, incur costs, publish real institutional data, dispatch missions or change account settings. Deliver a reviewed commit/PR and local verification; merge/deployment requires the user's applicable authorisation.

User-facing language: German (Swiss spelling). Engineering handoff: English.
Concept: [CONCEPT.md](CONCEPT.md). Research rationale: [RESEARCH_SYNTHESIS.md](../research/RESEARCH_SYNTHESIS.md).

## Outcome

A coherent product where a non-specialist learns process thinking, describes a process, corrects its map, receives useful sparring feedback, compares related examples and prepares a reviewed knowledge contribution.

Vision: **Was Einzelne wissen, soll die Institution können.**
Product line: **Expertise verbinden. Gemeinsam besser arbeiten.**
Do not use diversity framing. Explain institutionalising expertise through shared process language and a shared library.

## Firm architecture decision

- GitHub Pages hosts the static frontend and a small, versioned JSON process library.
- No Supabase, Baserow, Dify, external database, external font/CDN, or additional hosting required for this release.
- Draft editing is browser-local; explicit save/export controls remain.
- Published examples are fictional and committed to Git. Browsers cannot write back to the repository.
- Contribution is a reviewed JSON/Markdown download, manually added by a curator. Do not ask for GitHub tokens in the browser.
- Live Mistral remains optional through the existing separately hosted server contract; no provisioning in this task.
- No fake live AI or remote speech recognition. Offline guidance and deterministic suggestions are labelled accurately.
- Prepare storage and AI interfaces for later self-hosted services without implementing speculative infrastructure.

## Existing implementation to preserve

Inspect docs/unibas/index.html, style.css, app.js, model.js, server/index.js, tests/model.test.js, tests/server.test.js and tests/browser.mjs.
The project is ESM, Node >=22, vanilla HTML/CSS/JS. Prefer incremental modules over a framework rewrite.
The existing v1 process model supports at most 15 steps, task/decision nodes, yes/no branches, loops, checks and an improvement hypothesis. Preserve v1 import/export. Existing model validation and graph warnings are useful foundations.
The existing server chat returns reply text; do not assume structured AI patching already exists.
Pages publishes docs/ and serves the application under /unibas/ below a repository prefix. All data/assets must use relative URLs.

## UX

Primary navigation: Lernen | Mein Prozess | Prozessbibliothek.
Keep settings secondary. Provide three entry actions: Beispiel ausprobieren, Eigenen Prozess beschreiben, Bibliothek erkunden.

### Lernen
Short exercises around trigger, activity, decision, role, handover, outcome and exception. Pizza is optional; university examples are equally accessible.
Give explanatory feedback, not just correct/incorrect. Offer an immediate route into one's own process and contextual explanations in the workbench. No compulsory course gate.

### Mein Prozess
Desktop: guided conversation/questions on left, map and readable steps in centre, contextual questions/insights on right when space allows. Mobile: stacked sections or accessible tabs; no compressed three-column layout.
Two modes: guided capture and direct structured editing. Offline free text is retained as narrative, never falsely presented as understood by AI. Extract structured fields through explicit questions or a clearly labelled scripted example.
Ask one useful question at a time. Show progress by meaningful completeness, not an invented AI-readiness score.
Preview any proposed change, then accept/edit/reject; accepted change is undoable. Switching tabs or loading a library example must not silently destroy a draft. Offer a warning or open as a copy.
Include an accessible text alternative to the map.

Workbench tabs/sections:
- Ablauf: map and editable model.
- Prozess-Check: deterministic, evidence-linked feedback.
- Vergleich: related examples and shared patterns.
- Mitnehmen / Beitragen: personal exports and contribution preview.

### Prozess-Check
Generate useful feedback without an LLM using model facts and existing issue checks.
Separate: reported facts, unanswered questions, and improvement hypotheses.
Examples: missing role; unclear trigger/outcome; explicit rework loop; user-reported duplicate entry.
Point to relevant step IDs and explain the reason. A loop is not automatically waste; ask whether it is necessary.
Never invent time savings, compliance judgements or institutional rules.
Export a readable Markdown sparring report alongside the process.

### Prozessbibliothek
Three clearly fictional university process examples:
1. Employee onboarding with missing-information loop.
2. Event organisation/announcement.
3. Research-funding request preparation.
At least onboarding and funding share a completeness-check pattern while using different fictional criteria and responsibilities.
Add two reusable pattern cards: completeness check before handover; explicit handover with responsibility.
Search title/summary; filter by family and activity tags. Show context, source, review/effectiveness/authority separately.
Example detail: map, readable steps, local differences, open questions, related pattern, "Als eigenen Entwurf verwenden".
Comparison shows common activity patterns, local constraints and questions before reuse. Explain deterministic tag matching; no semantic AI claims.
Handle library load failures and empty search results. Personal work remains usable.

### Contribute
Preview exactly what will be exported. Allow removing narrative and sensitive detail in a separate contribution copy without silently altering the personal draft.
Explicit user confirmation of intended sharing; no claim that a checkbox authorises institution-wide publication.
Export a contribution envelope plus readable Markdown. Explain "Datei herunterladen → fachlich prüfen lassen → durch Kuration aufnehmen".
No "submitted", "published" or "approved" success message for a local download.
Review state begins pending. No contact endpoint/address invented.

## Suggested file structure

Adapt names if existing code supports a simpler split:
docs/unibas/
  index.html, style.css, app.js, model.js
  lib/storage.js       # browser drafts + read-only published library
  lib/library.js       # validation, search, categories, comparison
  lib/review.js        # deterministic sparring report
  lib/guidance.js      # guided capture/demo and proposal lifecycle
  lib/contribution.js # preview/export, no network write
  data/library-index.json
  data/taxonomy.json
  data/processes/{onboarding,event,funding}.json
  data/patterns/{completeness-check,explicit-handover}.json
schemas/library-entry.schema.json
schemas/contribution.schema.json
scripts/validate-library.mjs
tests/library.test.js, tests/contribution.test.js, tests/review.test.js

Keep one authoritative published copy of each entry. Index contains IDs/relative paths and optional lightweight listing metadata, not conflicting full records.
Validators may be dependency-free; schema files document the contract. If a validation package is chosen, justify and pin it.

## Data contracts

Do not replace the v1 process model unnecessarily. Wrap it in a separate versioned library envelope:
schemaVersion: 1
id: stable slug
kind: process-example | improvement-case | pattern
title, summary
fictional: boolean
context: scope, constraints[]
classification: familyId, activityTags[], frictionTags[]
provenance: sourceType, sourceLabel, sourceRefs[]
review: status, reviewedByRole, reviewedAt
effectiveness: status, evidenceRefs[]
authority: status, scope, authoritySource
maintenance: ownerRole, reviewDue
relatedIds[], patternIds[]
process: existing valid v1 model (required for process examples)
pattern: reusable steps, prerequisites, limits (required for patterns)

Use honest seed metadata: fictional examples are not institutionally approved or empirically effective. Unknown/null is valid where appropriate.
Validate IDs, required fields, enum values, references, paths and payload size. Treat all text as untrusted; use textContent or equivalent safe rendering.

Contribution envelope:
schemaVersion, contributionId, createdAt, status: pending-review,
candidateEntry, openQuestions[], sharingConfirmation.
Do not export access tokens, backend settings, browser metadata or whole chat histories by default.
Keep formal review, effectiveness and authority independent.

## Storage and AI boundaries

Storage functions (or equivalent):
listPublished(), getPublished(id), loadDraft(), saveDraft(draft), deleteDraft(), exportContribution(candidate).
Static adapter fetches relative files; browser adapter handles explicit local storage with graceful quota/corruption handling.
No false "save to institution" action.

AI adapter can expose proposeProcess(context), suggestReflection(process), suggestClassification(entry).
For MVP, offline mode uses guided questions, fixtures and rules. Existing optional live text chat remains clearly separate unless a validated structured proposal contract is implemented and tested.
LLM suggestions never directly publish, merge records, set authoritative status or overwrite accepted process data.
Future curation: suggest categories/related entries/patterns → human preview → accepted version → published library.

Speech is deferred. Provide an honest explanatory note or omit microphone controls. Do not ship a button that appears to record when it cannot. Later: explicit recording → editable transcript → confirmed sending, through an authorised self-hosted adapter.

## Delivery slices

1. Navigation and learning/workbench structure; preserve existing core flows.
2. JSON library, validator, three examples, two patterns, browsing and copy-to-draft.
3. Guided capture, proposal preview/undo, useful process-check and exports.
4. Comparison and contribution preview/download, review documentation.
5. Accessibility, mobile polish, data failure cases and deployment path verification.

Complete the end-to-end offline journey before considering optional live enhancements. Do not stop after a visual shell.

## Acceptance tests

- Fresh session completes example → corrected map → process-check → comparison → contribution export.
- At least one learning exercise explains why a decision differs from an activity.
- A user can create a real personal draft manually without API credentials.
- v1 exported processes still import and round-trip.
- Invalid import leaves the previous draft intact.
- Accept/reject/undo do exactly what the preview promised.
- Report findings cite fields/steps; unknown facts remain unknown.
- Onboarding/funding comparison shows shared completeness pattern and different local requirements.
- Opening an example cannot silently erase existing work.
- Search/filter/empty/error states work; broken library fetch does not break personal editing.
- Contributions are pending, contain only previewed fields and exclude tokens/chat by default.
- Invalid library references, duplicate IDs and invalid process graphs are caught by validation.
- Imported markup is rendered as text, not executed.
- Explicit local save survives reload; deletion works; storage failure is understandable.
- Browser smoke test at desktop and 390px width; no page-level horizontal overflow.
- Keyboard navigation, meaningful labels, visible focus and readable map alternative.
- Serve a copy of docs below an arbitrary repository prefix and verify assets/data load.
- Offline mode makes no provider requests. Live tests, if any, reported separately from mocked tests.

Run npm test, npm run test:browser (with Playwright Chromium installed), and a new npm run validate:library command. Add library validation to CI. Inspect desktop/mobile screenshots. Do not claim tests run if browser installation is blocked.

## Completion report

Provide commit/branch/PR, modules delivered, commands and results, screenshot paths, known limitations, and exact local run instructions.
Update README and execution status to reflect implemented behaviour, not merely this plan.
Do not assert Pages is live without checking the actual deployment.
