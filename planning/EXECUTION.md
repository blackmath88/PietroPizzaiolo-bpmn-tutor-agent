# Ausführung und Übergabe

## Aktueller Bauauftrag

Der GitHub-Pages-/JSON-MVP gemäss [Buildplan](BUILD_PLAN.md) und [Claude-Code-Handoff](CLAUDE_CODE_HANDOFF.md) ersetzt den früheren E1-Auftrag unten. Ältere Deployment-Angaben sind historische Nachweise und vor Nutzung neu zu prüfen. Keine neue Laufzeit gestartet.


## Aktualisierung: Expertise und Prozesskompetenz zuerst

Die Konzeptentscheidung vom 15. Oktober 2026 priorisiert **individuelle Expertise → gemeinsame Prozesssprache → gemeinsame Prozessbibliothek → organisationales Prozessökosystem**. Massgeblich sind [Konzept](CONCEPT.md) und [Forschungssynthese](../research/RESEARCH_SYNTHESIS.md).

Der Einstieg ist ein digitaler Prozesscoach mit Lernen im eigenen Fall, wenigen kuratierten Beispielen und freiwilliger Beitragsmöglichkeit. Eine eigene Taskforce ist optionaler späterer Ausbau. Verweise auf Taskforce und betreute Verbesserungsversuche unten beschreiben diese Ausbauoption; sie sind keine Voraussetzung des ersten Coach-Piloten. Rollen können mit ausdrücklich freigegebenen Kapazitäten besetzt werden.

Vor dem Ausbau der Verbesserungsfälle: gemeinsame Begriffe im Dialog erklären, zwei fiktive Fälle mit gemeinsamem Muster und lokalen Unterschieden zeigen, Kategoriezuordnungen korrigierbar halten und die Übergabe vom privaten Entwurf zum geprüften Beitrag beschreiben. Eine zentrale Sammlung wird erst nach Klärung von Ablage und Pflege implementiert.

Pilot zusätzlich auf Lerntransfer ohne Tutor, Verständnis durch ein anderes Team und Gesamtaufwand gegenüber einem geführten Formular prüfen. Für die schlankere Variante ein eigenes begrenztes Budgetblatt erstellen; frühere Aufwandsszenarien sind keine Finanzierung. Kostenstelle, Kapazität und Sachkostenlimit bleiben zu vereinbaren.


Stand: 15. Oktober 2026. Dieser Plan ist keine gestartete Weavr-Mission und keine Freigabe für neue Ausgaben oder zusätzliche Infrastruktur.

## Heute: Wettbewerb und Demonstrator

1. **Erledigt:** PR #1 mit geprüftem Head gemergt; Commit 285cc6a84eb37dca85d45b754cbc0785ce49fa73.
2. **Blockiert durch Einstellung:** Unter Repository Settings → Pages → Source «GitHub Actions» wählen. Danach den fehlgeschlagenen Publish-process-lab-Lauf erneut starten. Connector bietet hier keine Pages-Administrationsoperation.
3. **Danach prüfen:** öffentliche URL, Repository-Unterpfad, Beispielkarte, Export, Mobilgerät. Erwartete, noch nicht live bestätigte URL: https://blackmath88.github.io/PietroPizzaiolo-bpmn-tutor-agent/unibas/
4. **Wettbewerb:** Konzept als Vorschlag einreichen; Prototyp und zukünftigen Pilot klar unterscheiden. Kostenneutralität nicht als bereits nachgewiesen darstellen. Einreichung durch Achim; keine automatische Formularübermittlung beauftragt.

## Bauauftrag E1 — Geführte Prozessaufnahme

**Ziel:** Eine Person ohne BPMN-Vorkenntnisse kann aus einer Alltagserzählung einen prüfbaren Prozessentwurf erstellen und als Datei mitnehmen.

**Basis:** Aktuellen main-Head vor Beginn lesen. Arbeitsbereich: docs/unibas, server, tests, benötigte Paket-/Workflow-Konfiguration und zugehörige Dokumentation.

**Erste lieferbare Einheit:** Geführter Offline-Beispieldialog, strukturierter Vorschlagsvertrag, Übernehmen/Verwerfen/Undo. Anschliessend derselbe Vertrag an Mistral anbinden. Kein Fake-Live-Chat.

**Abnahme:** Die acht Fälle in BUILD_PLAN.md bestehen. Ein Live-Test wird getrennt von Mock-Tests ausgewiesen und erst mit vorhandenem autorisiertem API-Zugang durchgeführt. Abschliessende Prüfung auf exakt benanntem Commit.

**Nicht enthalten:** Neues Repository/Organisation, bezahlte Dienste einrichten, institutionelle Accounts, zentrale Prozessdatenbank, Migration realer Prozessdaten, autonome Freigaben.

**Arbeitsweise:** Kleine zusammenhängende Änderungen, reproduzierbare Tests, reviewbarer PR. Keine Weavr-Mission oder fremde Laufzeit ohne ausdrücklichen Auftrag dispatchen. Diese Planung reserviert keine Worker und startet keinen Hintergrundlauf.

## Organisatorischer Pilot — vorgeschlagener Ablauf

| Zeitraum ab vereinbartem Start | Tätigkeit | Ergebnis |
| --- | --- | --- |
| Woche 1–2 | Teams und Verantwortliche gewinnen, Fälle begrenzen, Daten/Betrieb klären | Drei Fallaufträge und freigegebene Zeitbudgets |
| Woche 3–4 | Arbeit beobachten, Ausgangsaufwand erfassen, Karten erstellen und bestätigen | Drei belastbare Ist-Beschreibungen |
| Woche 5–8 | Geeignete Verbesserungen auswählen und begrenzt erproben | Versuchsergebnisse mit Qualitätsprüfung |
| Woche 9–10 | Wirkung nachmessen, einen Transfer auf zweite Einheit prüfen | Vergleich von Nutzen und Gesamtaufwand |
| Woche 11–12 | Dokumentation übergeben, Pflege klären, Fortführung entscheiden | Befristeter Abschlussbericht mit Empfehlung |

Rollen werden vereinbart, nicht durch diesen Plan vergeben: Sponsor für Auftrag/Kapazität; Prozessverantwortliche für fachliche Entscheidungen; Taskforce für Moderation/Analyse/Umsetzung; IT für zugelassenen technischen Betrieb; Beteiligte für Validierung des tatsächlichen Arbeitsablaufs.

## Aufwand und Nutzen je Fall

Erfassen: Häufigkeit, Bearbeitungszeit, Rückfragen, Fehler/Nacharbeit und Durchlaufzeit. Bearbeitungszeit und Wartezeit getrennt messen. Herkunft und Unsicherheit der Schätzungen notieren.

Einmaliger Aufwand: Aufnahme + Lernen + Validierung + Entwicklung + Einführung. Wiederkehrender Aufwand: Betrieb + Kontrolle + Pflege. Nutzen: gemessene Entlastung über denselben Betrachtungszeitraum, bereinigt um neue Arbeit. Personalkostensätze bei einer monetären Bewertung offenlegen; freie Kapazität ist keine automatische Budgetreduktion.

## Betriebs- und Nachweisstand

- Code und Testnachweise: GitHub-Repository und Actions.
- Mistral: optional implementierter Proxy; kein Live-Provider-Nachweis und kein Backend-Deployment.
- Prozessdaten: im Browser oder explizite lokale Datei; keine automatische zentrale Speicherung.
- Review: Koordinator-Selbstprüfung, keine unabhängige Review behauptet.
- Pages: nach Merge am configure-pages-Schritt gescheitert, weil Pages noch nicht aktiviert ist.

## Quellen des Auftrags

Aktuelle Gesprächsentscheidung: PR #1 mergen und Konzept, Buildplan und Ausführung ausarbeiten. Bestehende Grundlage: knowledge/projectconcept.json. Wettbewerbsbedingungen aus dem am 15. Oktober bereitgestellten Konzeptpapier; das PDF wird nicht in das öffentliche Repository kopiert.
