# Pietro Pizzaiolo · Process Mapping Lab

**Prozesse sichtbar machen. Erst die Arbeit verstehen, dann Verbesserungen und KI-Anwendungsfälle finden.**

Pietro started as a pizza-based BPMN tutoring prompt. The repository now also contains a runnable German-language university pilot: `docs/unibas/`.

## Concept and execution

- [Concept: Prozesse sichtbar machen](planning/CONCEPT.md)
- [Build plan and next acceptance criteria](planning/BUILD_PLAN.md)
- [Execution, deployment status and pilot sequence](planning/EXECUTION.md)

## Run in one command

Requires Node.js 22 or later. No npm dependencies, build step or API key required for the process workbench.

```sh
npm start
```

Open http://localhost:3000/unibas/ . `npm test` runs the model and backend tests.

The browser app also works on any static HTTP host, including GitHub Pages. No external fonts, scripts, analytics or CDN are loaded. Editing is in memory until the user explicitly saves to browser storage or exports a file.

## What works

- Three brief pizza lessons: events/tasks, exclusive decisions and parallel-work concepts.
- Process scope, perspective, roles, tools, pain points and editable steps.
- Explicit yes/no branches and rework loops on an SVG process map.
- Improvement hypotheses: remove, simplify, automate, or support with AI.
- Readiness questions with explicit unknown states, not a synthetic readiness score.
- JSON import/export, Markdown process record and Mermaid diagram export.
- Optional device-local saving; optional Mistral conversation via a separate backend.

These are simplified process maps, **not validated BPMN 2.0 models**. Parallel gateways are explained but are not supported in the editor. Example processes are fictional. The Uni edition is a proposal by Achim Imboden, not an official University of Basel service. No university account, logo, policy approval or shared process database is implied.

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
