# Prior-art scout — Prozesskompetenz, Prozessaufnahme und institutionelles Wissen

Recherchedatum: 15. Oktober 2026. Orientierende Webrecherche, keine systematische Literaturübersicht und keine rechtliche Neuheitsprüfung. Repositories wurden anhand ihrer öffentlichen Projektseiten gelesen, nicht installiert oder unabhängig auf Funktionsfähigkeit geprüft. Aussagen zu Funktionen sind daher Projektangaben. Lizenzlabels sind Hinweise; vor Übernahme konkreter Komponenten sind die geltenden Dateien und Abhängigkeiten zu prüfen. Keine externe Codeübernahme in diesem Schritt.

## Vorläufige Schlussfolgerung

Text-zu-Prozessmodell und Gesprächsunterstützung sind keine neue Erfindung. Auch Klassifikation und Variantenmanagement haben eigenständige Vorarbeiten. Unsere zu prüfende Differenzierung liegt in der Verbindung von niedrigschwelligem Lernen, partizipativer Aufnahme, nachvollziehbarer Validierung, Transfer zwischen Einheiten und realer Verbesserungsarbeit an einer Hochschule. Dass diese Kombination neu oder besonders wirksam ist, ist noch nicht belegt.

## Technische Referenzen

| Quelle | Beobachtung aus Projektbeschreibung | Bedeutung / offene Prüfung |
| --- | --- | --- |
| [BPMN Assistant](https://github.com/jtlicardo/bpmn-assistant) | Beschreibt Erstellung, Bearbeitung und Erklärung von BPMN über natürliche Sprache sowie BPMN-Export. Projektseite zeigt MIT-Lizenz. | Direkter Vergleich für Gespräch und Kartenbearbeitung. Gesprächsqualität, Provenienz, Providerbindung und Codezustand separat prüfen. |
| [ProMoAI](https://github.com/fit-process-mining/ProMoAI), [Paper 2024](https://arxiv.org/abs/2403.04327) | Textbasierte Prozessgenerierung und iterative Verfeinerung; Paper beschreibt den Ansatz über POWL. Die aktuelle Repo-Beschreibung umfasst zusätzlich Process Mining; Seite zeigt AGPL-3.0. | Zwischen ursprünglichem Forschungsartefakt und heutigem Produktumfang unterscheiden. Architekturideen prüfen; keine ungeprüfte Codeübernahme. |
| [Process Model Generator](https://github.com/mssoftjp/process-model-generator) | Trennt logische Extraktion durch LLM und deterministische SVG-Swimlane-Erzeugung. Projektseite zeigt MIT-Lizenz und explizite Konformitätsgrenzen. | Sehr passender Architekturvergleich zu unserem strukturierten Modell. Compilerdiagnostik und Herkunftsmodell genauer untersuchen. |
| [bpmn-js](https://github.com/bpmn-io/bpmn-js) | Browserbasierter BPMN-2.0-Renderer und Modeler. | Etablierter Kandidat für spätere formale Modelle; für den Erstkontakt möglicherweise zu komplex. Lizenzbedingungen und Implementierungsaufwand vor Integration prüfen. |

## Forschung und Organisationsmodelle

| Quelle | Was sie belegt bzw. beschreibt | Bedeutung / Grenze |
| --- | --- | --- |
| [Conversational Process Modeling, 2023](https://arxiv.org/abs/2304.11065) | Taxonomie von Anwendungsszenarien und Evaluationsansatz für Vollständigkeit/Korrektheit. Abstract gelesen. | Evaluation muss mehr als syntaktisch gültige Diagramme prüfen. Volltext und Testmaterial nachlesen. |
| [Documenting SME Processes with Conversational AI](https://arxiv.org/abs/2512.05122) | Abstract beschreibt interaktive Aufnahme impliziten Prozesswissens und BPMN-Dokumentation. | Inhaltlich nahe an unserem Ansatz. Keine Übertragung von Wirksamkeit auf Hochschulen ohne Prüfung von Studie, Stichprobe und Kontext. Bibliografische Angaben am Original prüfen. |
| [Model-driven management of BPMN-based business process families](https://doi.org/10.1007/s10270-022-00985-3) | Suchindex beschreibt Familien mit Gemeinsamkeiten/Varianten und einen universitären Anwendungsfall zur Vergabe von Austauschplätzen. Volltextöffnung scheiterte. | Besonders relevante Vertiefung für lokale Varianten und gemeinsame Muster. Derzeit Recherchehinweis, kein vollständig ausgewerteter Beleg. |
| [APQC PCF Education 7.2.1](https://www.apqc.org/resource-library/resource-listing/apqc-process-classification-framework-pcf-education-pdf-version-1) | Öffentliche Ressourcenseite für eine bildungsspezifische Prozessklassifikation gelesen; vollständiges Framework nicht ausgewertet. | Prüfen, ob die Begriffe zur Hochschulverwaltung passen. Keine APQC-Kategorien kopiert; Aktualität, Zugang und Nutzungsbedingungen offen. |
| [CAUDIT HERM](https://www.caudit.edu.au/communities/caudit-higher-education-reference-models) | Hochschulspezifische Referenzarchitekturen für Business, Daten, Anwendungen und Technologie. | Mögliche übergeordnete Orientierung. Capability-/Architekturmodell nicht mit ausführbarem Prozess oder konkreter Variante gleichsetzen. |
| [Oxford Focus](https://www.ox.ac.uk/about/how-we-are-run/change-continuous-improvement) | Verbindet Verbesserungsprojekte, Kompetenzentwicklung und eine Community. | Organisatorisches Vorbild für Taskforce und Beteiligung; kein Nachweis für unsere Kostenneutralität. |

## Reddit: Bedarfssignale, keine repräsentativen Befunde

1. [Help! Process documentation is killing me slowly at work](https://www.reddit.com/r/businessanalysis/comments/1iztilm/help_process_documentation_is_killing_me_slowly/): Diskussion über Dokumentationslast, unterschiedliche Detailstufen und die Trennung von Prozessablauf, Arbeitsanweisung und Systemdokumentation. Einige Kommentare enthalten Toolwerbung; Empfehlungen und Preisbehauptungen wurden nicht als Tatsachen übernommen.
2. [How do you document processes without slowing everyone down?](https://www.reddit.com/r/businessanalysis/comments/1v8suc4/how_do_you_document_processes_without_slowing/): Kommentare betonen gemeinsames Verständnis, angemessene Granularität, Interviews/Beobachtung und die Pflege bei Änderungen. Andere beschreiben KI-gestützte Entwürfe mit menschlicher Korrektur. Das sind anekdotische Erfahrungen, keine gemessenen Einsparungen.

Daraus abgeleitete Designhypothesen: Beteiligte sollen einen unmittelbaren Nutzen erhalten; ein kommentierbarer Entwurf erleichtert die Rückmeldung; Pflegeverantwortung und sinnvolle Detailtiefe sind wichtiger als die Anzahl erzeugter Karten. Diese Hypothesen im Pilot prüfen.

## Was als Nächstes entschieden werden muss

- Welche Teile selbst bauen, welche adaptieren, welche nur als Referenz nutzen?
- Welche minimale Taxonomie trägt über HR, Finanzen und Forschung hinweg?
- Wie unterscheiden wir tatsächliche notwendige Varianten von unnötigen Unterschieden?
- Wie wird aus einer Einzelbeschreibung ein gemeinsam bestätigter Stand?
- Welche Kampagnen fördern Beteiligung, ohne Dokumentationslast oder Überwachungsängste zu erhöhen?
- Welcher Anteil des Nutzens entsteht bereits durch Moderation und eine einfache Vorlage ohne KI?
- Welche Evaluation misst Übertragbarkeit, Pflegeaufwand und Qualität statt nur Diagrammvalidität?

## Suchbegriffe für die Vertiefung

conversational process modeling; process elicitation; tacit knowledge elicitation; participatory process modeling; process literacy; process model repositories; business process families; configurable process models; process variant management; reference process models; semantic process similarity; process classification; HERM; APQC education; higher education continuous improvement; documentation burden; process ownership; knowledge continuity.
