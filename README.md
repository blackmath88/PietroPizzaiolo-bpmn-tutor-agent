# Pietro Pizzaiolo · Process Mapping Lab

**Expertise verbinden. Gemeinsam besser arbeiten.**

**Was Einzelne wissen, soll die Institution können.**

Vision: individuelle Expertise → gemeinsame Prozesssprache → gemeinsame Prozessbibliothek → organisationales Prozessökosystem.

Pietro started as a pizza-based BPMN tutoring prompt. The repository now also contains a runnable German-language university pilot: `docs/unibas/`.

## Concept and execution

The GitHub Pages + versioned JSON library MVP from the [Claude Code handoff](planning/CLAUDE_CODE_HANDOFF.md) is implemented in `docs/unibas/`. No external database, CDN, font or hosting is required.

- [Concept: Expertise verbinden](planning/CONCEPT.md)
- [Build plan](planning/BUILD_PLAN.md) · [Execution and deployment status](planning/EXECUTION.md)
- [Campaign and scaling concept](planning/CAMPAIGN_AND_SCALING.md) · [Prior-art scout](research/PRIOR_ART_SCOUT.md) · [Research synthesis](research/RESEARCH_SYNTHESIS.md)

## Run locally

Requires Node.js 22 or later. No API key is needed.

```sh
npm ci                      # only needed for the browser test (Playwright)
npm start                   # http://localhost:3000/unibas/
npm run validate:library    # validates docs/unibas/data
npm test                    # unit tests (model, library, review, guidance, storage, contribution, server)
npm run test:browser        # end-to-end in Chromium; needs `npx playwright install chromium`
```

If a pre-installed Chromium is used instead of a Playwright download, set `PW_CHROMIUM_PATH=/path/to/chrome`. The browser test serves a copy of `docs/` below an arbitrary repository prefix and writes desktop/mobile screenshots to `test-results/`.

## What works

Primary navigation: **Lernen | Mein Prozess | Prozessbibliothek**; entry actions *Beispiel ausprobieren*, *Eigenen Prozess beschreiben*, *Bibliothek erkunden*. User-facing text is German (Swiss spelling).

- **Lernen:** seven short exercises (Auslöser, Tätigkeit, Entscheidung, Rolle, Übergabe, Ergebnis, Ausnahme), each with a university and an optional pizzeria example and an explanation for every answer. No course gate; every exercise links into one's own process.
- **Mein Prozess – Ablauf:** guided questions (one at a time) or direct structured editing. Each guided answer becomes a proposal that is previewed and then accepted, edited or rejected; accepted changes are undoable. *Beispiel ausprobieren* runs a clearly labelled prepared script (not AI). Free narrative is kept as a note and never presented as understood. Map plus readable text alternative; completeness shown as a checklist, not a score. Speech input is deliberately absent (explained in the UI).
- **Prozess-Check:** deterministic rules separate reported facts, open questions and improvement hypotheses, each citing step IDs or fields (clickable). Loops are questioned, not judged as waste. No time savings, compliance verdicts or institutional rules are generated. Markdown sparring report export.
- **Vergleich:** classify the draft by family/tags (with an optional keyword-rule suggestion shown as an evidence-backed proposal); related entries are ranked by shared tags, with an explicit note that this is deterministic tag matching.
- **Mitnehmen / Beitragen:** v1 JSON (re-importable; workbench extras ride in an extra field that older importers ignore), Markdown, Mermaid, sparring report; explicit local save/delete with understandable quota/corruption/unavailable messages. Contribution: separate redactable copy, exact JSON preview, explicit sharing confirmation, download of envelope + Markdown with status *pending-review*. No network write, no "submitted/published" message, no tokens/settings/chat in the export.
- **Prozessbibliothek:** three fictional university examples (onboarding with missing-information loop, event announcement, research-funding request) and two pattern cards (completeness check before handover; explicit handover). Search, family/activity/kind filters, empty and error states. Detail view shows context, provenance, and review / effectiveness / authority as separate fields, map, local differences, open questions, related patterns, comparison and *Als eigenen Entwurf verwenden* (with a protecting dialog and undo).
- Optional live Mistral chat via the separately hosted server is unchanged and clearly separate: its replies are text and never modify the draft.

These are simplified process maps, **not validated BPMN 2.0 models**. All library examples are fictional, not reviewed, not tested for effect and not binding. The Uni edition is a proposal by Achim Imboden, not an official University of Basel service.

## Data and architecture

```
docs/unibas/
  index.html  style.css  app.js  model.js (v1 process model, unchanged contract)
  lib/storage.js       static read-only library adapter + browser draft store
  lib/library.js       validation, search, categories, comparison, keyword suggestions
  lib/review.js        deterministic Prozess-Check and Markdown report
  lib/guidance.js      guided questions, prepared script, proposal preview/apply, undo history
  lib/ai.js            offline AI adapter boundary (proposeProcess / suggestReflection / suggestClassification)
  lib/contribution.js  contribution copy, envelope, Markdown; no network write
  lib/map.js lib/dom.js lib/lessons.js
  data/library-index.json  data/taxonomy.json  data/processes/*.json  data/patterns/*.json
schemas/library-entry.schema.json  schemas/contribution.schema.json   (contract documentation)
scripts/validate-library.mjs                                         (dependency-free validator, run in CI)
```

The index lists only IDs, kinds and relative paths; each entry has exactly one authoritative file. All data is loaded through relative URLs, so the app works below any Pages repository prefix. All untrusted text is rendered via `textContent` or escaped markup.

### Adding a curated entry

1. Receive a contribution JSON (`beitrag-….json`) and its Markdown from a contributor.
2. Have the involved roles review the content for its stated context.
3. Copy `candidateEntry` to `docs/unibas/data/processes/<id>.json`, adjust `id`, classification, `relatedIds`/`patternIds`, `maintenance`, and set `review` only for a review that actually happened. Effectiveness and authority stay independent and need evidence/sources.
4. Add `{id, kind, path}` to `library-index.json`, run `npm run validate:library`, open a PR.

Only fictional or explicitly publication-approved content belongs in this public repository.

## GitHub Pages

1. Merge the reviewed application branch into `main`.
2. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Run **Publish process lab** in Actions (or push a docs change to main).
4. The expected URL is `https://blackmath88.github.io/PietroPizzaiolo-bpmn-tutor-agent/unibas/`. This URL is only live after a successful deployment; the workflow reports the actual URL.

Only `docs/` is uploaded. Backend code and secrets are never part of the Pages artifact. A university-owned repository can use exactly the same files and workflow; relative asset URLs support different repository names.

## Optional live Mistral

GitHub Pages cannot execute the backend. Run `server/index.js` on an approved Node host. Supply secrets through that host's secret manager/environment, never through committed files or frontend build variables:

- `MISTRAL_API_KEY`: provider key, server only.
- `LAB_ACCESS_TOKEN`: a separate, strong pilot access token, server and authorized pilot users.
- `ALLOWED_ORIGIN`: exact frontend origin, e.g. `https://blackmath88.github.io` (no path).
- `MISTRAL_MODEL`: defaults to `mistral-small-latest`; verify availability for your account.
- `HOST`: defaults to `127.0.0.1`; use the host's required bind address for deployment.
- `PORT`: defaults to `3000`.

Configure `https://your-approved-host/api/chat` and the **lab access token** in the app settings. These values live only in page memory. Sending explicitly transmits the current process and recent chat to that backend and Mistral. No automatic model calls occur. Without secrets, chat returns 503 and the full workbench still works.

The reference backend enforces token authentication, exact browser origin, input size/schema checks, a fixed upstream, a 30-second provider timeout, at most two concurrent calls and ten authenticated attempts per minute **per server process**. It does not log process content. For wider institutional use, add approved identity/access management, shared rate limiting, operational monitoring and agreed data handling. An origin check is not an authorization mechanism; possession of the lab token authorizes pilot calls.

Tests use a mock provider. No real Mistral call, paid usage or institutional approval is claimed.

## Original concept

- `PiertroPizzaioloBPMNTutor-prompt`: original prompt, retained for reference.
- `knowledge/projectconcept.json`: the four-part learning/mapping/documentation concept.
- `docs/unibas/pietro-university-prompt.md`: revised university tutor prompt.
- `docs/unibas/CONCEPT.md`: competition framing and pilot scope.

Created by Achim Imboden. [Repository](https://github.com/blackmath88/PietroPizzaiolo-bpmn-tutor-agent).
