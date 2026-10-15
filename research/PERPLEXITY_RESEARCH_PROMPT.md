# Rechercheauftrag für Perplexity Deep Research

Arbeite als kritische Researcherin für Organisationsentwicklung, Business Process Management und angewandte KI. Recherchiere auf Deutsch und Englisch; liefere den Bericht auf Deutsch. Stand unserer Vorabrecherche: 15. Oktober 2026. Berücksichtige ältere grundlegende Arbeiten und prüfe aktuelle Projektstände. Bestätige unsere Idee nicht reflexartig: Suche die stärksten Gegenbeispiele, bereits vorhandene Lösungen und Gründe, weniger selbst zu bauen.

## Kontext und Entscheidung

Wir entwickeln für die Universität Basel den Vorschlag «Prozesse sichtbar machen». Mitarbeitende sollen ihre tatsächliche Arbeit in Alltagssprache beschreiben, Prozessdenken spielerisch mit Pietro Pizzaiolo lernen und einen prüfbaren Prozessentwurf erhalten. Eine bereichsübergreifende Taskforce begleitet Validierung und konkrete Verbesserungen. Die Kampagne «Wie läuft’s bei euch?» sammelt auch bereits gute Lösungen. Geprüfte lokale Fälle sollen nach und nach zu wiederverwendbarem institutionellem Wissen werden.

Leitgedanke: Prozessverbesserung und KI-Use-Case-Finding beginnen mit denselben Fragen nach Zweck, Ablauf, Verantwortung, Information und Reibung. KI ist optional; Weglassen, Vereinfachen und regelbasierte Automatisierung bleiben gleichberechtigte Ergebnisse.

Beispiel: «So funktioniert der Eintritt einer wissenschaftlichen Mitarbeiterin in Departement X» ist eine konkrete Variante. «Onboarding» ist die Familie; Angaben erfassen, Voraussetzungen prüfen, Ressourcen bereitstellen sind mögliche gemeinsame Muster. Laborzugang oder Finanzierungsart können legitime Unterschiede begründen. Eine häufige Praxis darf nicht automatisch zum verbindlichen Standard werden.

Aktueller eigener Prototyp:
https://github.com/blackmath88/PietroPizzaiolo-bpmn-tutor-agent
Statische JS-Werkbank, manuelle Prozessaufnahme, vereinfachte SVG-Karte mit Verzweigungen/Schleifen, JSON/Markdown/Mermaid-Export, Bereitschaftsfragen und optionaler Mistral-Backend-Proxy. Noch keine automatische Gespräch-zu-Modell-Übernahme, zentrale Sammlung, institutionelle Freigabe oder belegte Wirtschaftlichkeit. GitHub Pages dient als Demonstrator; reale interne Prozessdaten gehören nicht automatisch in das öffentliche Repo.

Ziel: fundierte Entscheidung über Wiederverwendung, Eigenentwicklung, Taxonomie, Beteiligungsformat und einen kleinen Hochschul-Pilot. Keine pauschale Marktübersicht.

## Recherchefelder

1. **Gesprächsbasierte Aufnahme:** Welche Systeme erheben Prozesse interaktiv aus implizitem Wissen, statt nur bereits vollständige Textbeschreibungen in Diagramme umzuwandeln? Wie fragen sie nach Ausnahmen, Rollen und fehlenden Entscheidungen? Wie werden Annahmen, Korrekturen und Übernahmen sichtbar?
2. **Technische Bausteine:** Vergleiche strukturierte Zwischenmodelle, deterministisches Rendering, BPMN-Editoren, Validierung, Export und Providerwechsel. Trenne syntaktische Gültigkeit, semantische Korrektheit und Übereinstimmung mit tatsächlicher Arbeit. Prüfe Mistral-Tauglichkeit, ohne sie aus einer allgemeinen LLM-Erwähnung abzuleiten.
3. **Familien und Varianten:** Wie werden lokale Fälle kategorisiert, gemeinsame Muster abgeleitet und notwendige Unterschiede erhalten? Unterscheide Capability, Prozessfamilie, Variante, einzelnes Prozessereignis, SOP und Automatisierungsfall. Welche Ähnlichkeitsverfahren liefern erklärbare Vorschläge? Wann scheitert reine Textähnlichkeit?
4. **Institutionelles Wissen:** Welche bewährten Modelle gibt es für Herkunft, Versionen, Verantwortlichkeit, Prüfung, Überalterung, Zugriff und Übertragung von Verbesserungen zwischen Einheiten? Suche konkrete Hochschul- und öffentliche-Verwaltungsfälle.
5. **Kampagne und Beteiligung:** Welche Formate gewinnen Mitarbeitende zur freiwilligen Prozessaufnahme? Was wissen wir über unmittelbaren Nutzen, Zeitaufwand, Vertrauen, lokale Autonomie und Sorge vor Stellenabbau? Vergleiche Selbstbedienung, moderierte Interviews, Beobachtung und Themenrunden. Reddit dient als qualitative Spur, nicht als Wirksamkeitsbeweis.
6. **Pilot und Kosten:** Was lässt sich mit drei Teams in zwölf Wochen sinnvoll nachweisen? Vergleiche die KI-Variante mit einer moderierten Vorlage ohne KI. Rechne Aufnahme, Validierung, Korrektur, Betrieb und Pflege mit. Unterscheide freie Arbeitskapazität von tatsächlich eingespartem Budget. Erfinde keine ROI-Prozente.

## Konkrete Startpunkte — prüfen, ergänzen, widersprechen

Technik:
- https://github.com/jtlicardo/bpmn-assistant
- https://github.com/fit-process-mining/ProMoAI
- https://github.com/mssoftjp/process-model-generator
- https://github.com/bpmn-io/bpmn-js

Forschung:
- https://arxiv.org/abs/2304.11065
- https://arxiv.org/abs/2403.04327
- https://arxiv.org/abs/2512.05122
- https://doi.org/10.1007/s10270-022-00985-3 (bei uns bisher nur Suchindex, Volltext nicht ausgewertet)

Klassifikation und Hochschule:
- https://www.apqc.org/resource-library/resource-listing/apqc-process-classification-framework-pcf-education-pdf-version-1
- https://www.caudit.edu.au/communities/caudit-higher-education-reference-models
- https://www.ox.ac.uk/about/how-we-are-run/change-continuous-improvement

Praxisdiskussion:
- https://www.reddit.com/r/businessanalysis/comments/1iztilm/help_process_documentation_is_killing_me_slowly/
- https://www.reddit.com/r/businessanalysis/comments/1v8suc4/how_do_you_document_processes_without_slowing/

## Gewünschtes Ergebnis

A. Kurzes Entscheidungsbriefing: Was existiert bereits? Wo liegt ein möglicher eigener Beitrag? Was sollten wir streichen oder übernehmen?
B. Evidenztabelle mit 10–15 relevanten Quellen: Typ, Datum, direkt gelesener Umfang, Befund, Grenze, konkrete Auswirkung auf unser Vorhaben.
C. Vergleich von höchstens sechs technischen Kandidaten: Erhebung vs. Generierung, Dialog/Review, Modellformat, Validierung, Export, Betrieb, Provider, Lizenz, Aktivität, Reife und Wiederverwendungsoption. Unbekanntes ausdrücklich markieren.
D. Minimales Daten-/Klassifikationsmodell mit einem durchgängigen Onboarding-Beispiel: zwei lokale Varianten, gemeinsame Familie, wiederverwendbare Verbesserung und getrennte Prüf-/Freigabestatus.
E. Drei Beteiligungsformate mit Aufwand, Nutzenversprechen, Risiken und Auswahlkriterien.
F. Priorisierte Empfehlung «selbst bauen / adaptieren / integrieren / später / verwerfen», einschliesslich eines kleinen nächsten Entwicklungsauftrags mit Abnahmekriterien.
G. Pilot-Evaluationsplan mit Baseline, Vergleich ohne KI, Qualitätsprüfung, Transfermessung und Pflegeaufwand.
H. Fünf Aussagen, die wir im Wettbewerbs-Pitch belegen können, und fünf, die wir nicht als belegt ausgeben sollten.

## Evidenzregeln

Primärquellen bevorzugen: Originalpaper, Projektcode/-dokumentation, veröffentlichte Hochschulberichte. Bei Repositories README-Behauptung, tatsächlichen Codebefund und selbst getestete Funktion unterscheiden. Abrufdatum und untersuchten Commit nennen, soweit zugänglich. Sterne sind kein Reifenachweis. Lizenzen und Nutzungsbedingungen am konkreten Artefakt prüfen; «auf GitHub» bedeutet nicht automatisch frei wiederverwendbar. APQC/HERM nicht ungeprüft als offene Taxonomie behandeln.

Reddit-Anekdoten, Herstellerbehauptungen, empirische Ergebnisse und deine Schlussfolgerungen klar trennen. Marketing/Selbstwerbung kennzeichnen. Nicht zugängliche Volltexte nicht als gelesen ausgeben. Widersprüchliche Metadaten und unklare Publikationsdaten markieren. Quellen direkt bei den Aussagen verlinken. Keine generische KI-Euphorie, keine unbelegte Neuheitsbehauptung, keine Rechts- oder Datenschutzfreigaben erfinden.
