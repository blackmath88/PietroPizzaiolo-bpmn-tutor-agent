# Forschungssynthese — Prozesssprache, Lernen und Wiederverwendung

Stand: 15. Oktober 2026.

## Herkunft und Evidenzstatus

Selektive Synthese aus drei von Achim bereitgestellten Perplexity-Berichten: technische Prior Art (Pasted text.txt), institutionelles Wissen/Prozessoptimierung (Pasted text(1).txt), Kampagne/Kultur (Pasted text (2).txt). Diese Notiz übernimmt nützliche Fragestellungen und Designprinzipien. Die darin verlinkten Primärquellen wurden für diese Synthese nicht unabhängig erneut geprüft. Projektfähigkeiten, Aktualität, Lizenzen und berichtete Wirkungen bleiben vor Verwendung zu verifizieren. Der technische Bericht konnte unser Repository nicht lesen.

Die Berichte sind Recherchematerial, keine wissenschaftliche Gesamtvalidierung. Keine behaupteten Einsparzahlen werden in den Business Case übertragen. Die Rohberichte werden nicht als gesicherte Wissensbasis publiziert.

## Die wichtigsten Entscheidungen

| Erkenntnis aus den Berichten | Entscheidung für Pietro | Nachweis im Pilot |
| --- | --- | --- |
| Gesprächsbasierte Modellierung hat bereits Vorarbeiten | Fokus auf Prozesskompetenz, verständliche Darstellung und Wiederverwendung; keine Neuheitsbehauptung für Text-zu-BPMN | Gegen gutes geführtes Formular vergleichen |
| Sprachliche Deutung und Darstellung trennen | Validiertes Zwischenmodell; deterministischer Renderer; Vorschläge bewusst übernehmen | Fehlerhafte Vorschläge verändern das Modell nicht |
| Syntax beweist keine fachliche Wahrheit | Offene Fragen, Annahmen und Ist-/Verbesserungsentwurf getrennt halten | Beteiligte prüfen Schritte und Ausnahmen |
| Gemeinsame Sprache unterstützt Vergleich | Kleine Begriffsbasis direkt beim Anwenden vermitteln | Neuen Fall ohne Tutor strukturieren lassen |
| Kontext entscheidet über Übertragbarkeit | Fall, Familie, Variante, Muster und Standard unterscheiden | Zweites Team begründet Anpassung oder Nichtübernahme |
| Dokumentation allein schafft keine Wirkung | Aufnahme mit einer konkreten Frage und einem nutzbaren Ergebnis verbinden | Verständlichkeit, Wiederverwendung und spätere Verbesserung erfassen |
| Pflege ist reale Arbeit | Kleine Kuration mit Owner, Prüfdatum und Ablösung veralteter Beiträge | Aufwand und Aktualität messen |
| Teilnahme braucht unmittelbaren Gegenwert | Eigene Karte, Beispiel oder geklärte nächste Frage zurückgeben | Teilnehmende benennen Nutzen und Aufwand |
| Offenlegung kann als Kontrolle erlebt werden | Freiwilliges Teilen, Prüfung vor Weitergabe, transparente Verwendung | Verständnis und Vertrauen erfragen; keine unbelegten Schutzversprechen |
| Zeiteinsparung ist nicht automatisch Budgeteinsparung | Kapazität, Qualität und vermiedene Ausgaben getrennt bewerten | Vollständiger Aufwand einschliesslich Pflege |

## Technische Referenzen zur vertieften Prüfung

- [BPMN Assistant](https://github.com/jtlicardo/bpmn-assistant): laut Bericht dialogische Modellierung und Bearbeitung; UX und Korrekturablauf prüfen.
- [ProMoAI](https://github.com/fit-process-mining/ProMoAI): laut Bericht Text-/Modell- und Log-Analyse; nicht mit interviewbasierter Prozesserhebung gleichsetzen.
- [Process Model Generator](https://github.com/mssoftjp/process-model-generator): laut Bericht strukturierte Semantik und deterministische SVG-Erzeugung; genaue Repräsentation und Grenzen prüfen.
- [bpmn-js](https://bpmn.io/toolkit/bpmn-js/): Kandidat für spätere formale Modellbearbeitung; kein Muss für den einfachen Lern-MVP.
- [AutoBPMN.AI Demo-Paper](https://ceur-ws.org/Vol-4032/paper-40.pdf): Referenz für iterative Konversation und abstrakte Modelle; Demo ist kein Feldnachweis.

Vor Codeübernahme Lizenz, Abhängigkeiten, Wartung und tatsächliche Funktionsfähigkeit prüfen. Heute Architekturmuster nutzen; weder automatischen Vollimport noch einen vollständigen BPMN-Umbau voraussetzen.

## Institutionelle Referenzen

- [Oxford Focus Toolkit](https://www.ox.ac.uk/about/how-we-are-run/change-continuous-improvement/toolkit): Referenz für Befähigung und methodische Unterstützung. Kein Nachweis der Wirtschaftlichkeit unseres Coach-Modells.
- [UC Berkeley Process Documentation](https://bpm.berkeley.edu/process-documentation): Referenz für ein gemeinsames Dokumentationsangebot; Verfügbarkeit eines Angebots ist kein Beleg nachhaltiger Nutzung.
- [CAUDIT HERM](https://www.caudit.edu.au/communities/caudit-higher-education-reference-models): möglicher Architektur-/Capability-Bezug.
- [APQC Education PCF](https://www.apqc.org/resource-library/resource-listing/apqc-process-classification-framework-pcf-education-pdf-version-1): möglicher Klassifikationsrahmen.
- APQC und HERM erfüllen verschiedene Aufgaben. Im Pilot mit wenigen verständlichen lokalen Kategorien starten; Zuordnung erst bei praktischem Bedarf.

Die Berichte nennen weitere Hochschulfälle und teils grosse Einsparzahlen aus organisations- oder anbieternahen Darstellungen. Diese werden wegen ungeklärter Berechnung und Übertragbarkeit nicht als Argument für Basel übernommen.

## Kultur und Beteiligung

- [Communities of Practice Guidebook](https://wenger-trayner.com/wp-content/uploads/2024/03/24-02-21-CoP-guidebook-second-edition-final-2.pdf): Praxis, Austausch und Anwendung als zusammenhängender Lernzyklus.
- [Virginia Mason: Everyday Lean Ideas](https://www.virginiamasoninstitute.org/blog/using-lean-ideas-in-our-everyday-work): Quelle für kleine lokale Verbesserungsversuche; institutionelle Fallbeschreibung, keine kausale Wirksamkeitsgarantie.
- [NHS Improvement Resources](https://www.england.nhs.uk/nhsimpact/improvement-resources/): Methodenreferenz; Übertragung aus Gesundheitswesen auf Hochschule muss erprobt werden.
- [Designing for Employee Voice](https://researchmgt.monash.edu/ws/portalfiles/portal/314462773/313776104_oa.pdf): im Bericht als Hochschul-Feldbeispiel genannt; Kommunikationsstudie nicht mit Prozessverbesserung gleichsetzen.

Praktisch übernehmen: persönlicher Nutzen zuerst, freiwillige Beiträge, Zeit vereinbaren, kurze Rückmeldung, lokale Mitentscheidung und konkreter Wiederverwendungsanlass. Keine Ranglisten individueller Effizienz. Keine Behauptung, eine Bibliothek oder ein Chatbot erzeuge von selbst eine Lernkultur.

## Minimales Wissensmodell

Jeder veröffentlichte Fall erhält ID, Version, Herkunft, Geltungsbereich, Auslöser, Ergebnis, Rollen, Schritte, Ausnahmen, offene Punkte, Familie/Tags, verknüpfte Varianten, Pflegeverantwortung und Prüfanlass.

Drei unabhängige Dimensionen:
1. Review: Wer bestätigt welche Version für welchen Kontext?
2. Wirkung: Was wurde getestet, mit welcher Messung und welchem Ergebnis?
3. Autorität: Welche Stelle hat welche Vorgabe für wen verbindlich gemacht?

Die Berichte verwenden teilweise zusätzlich eine lineare Statusliste. Wir übernehmen bewusst die getrennten Dimensionen, damit ein getestetes Beispiel nicht versehentlich zum Standard wird.

## Was wir jetzt bauen und was warten kann

Jetzt: Lernen im eigenen Fall, verständliche Karten, manuelle Alternative, korrigierbare Vorschläge, wenige kuratierte Beispiele, Vergleich gemeinsamer Muster/lokaler Regeln, portable Daten.

Später bei Bedarf: zentraler Speicher, institutionelle Identität, formale BPMN-Engine, automatische Ähnlichkeitssuche, Knowledge Graph, dedizierte Taskforce und Process Mining. Eine Sammlung kuratierter Dateien oder Liste ist die erste Vergleichsbasis für jede grössere Plattform.

## Pilotvergleich und offene Fragen

Mit drei kleinen Fällen lässt sich Machbarkeit prüfen, keine allgemeine Wirksamkeit beweisen. Vergleichbare Aufgaben mit Tutor und gutem Formular bearbeiten; Reihenfolge/Lerneffekte beachten. Zeit, Korrekturen, ungestützte Annahmen, Verständlichkeit, Lerntransfer und Pflege dokumentieren.

Wiederverwendungstest: Eine Person ausserhalb des Ursprungsteams muss einen Fall finden, verstehen und begründet auf ihren Kontext beziehen. Klickzahlen reichen nicht.

Offen: tatsächlicher Zusatznutzen von KI, Motivation zur freiwilligen Weitergabe, tragfähiger Pflegeaufwand, Passung der Kategorien und Finanzierung innerhalb freigegebener Ressourcen. Für den Wettbewerb diese Punkte als prüfbare Hypothesen ausweisen.
