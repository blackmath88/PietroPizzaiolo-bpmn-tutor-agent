# Buildplan — Pietro Hochschul-Pilot

Stand: 15. Oktober 2026. Basis: PR #1, gemergt in 285cc6a84eb37dca85d45b754cbc0785ce49fa73.

## Tatsächlicher Stand

- Statische deutschsprachige Werkbank unter docs/unibas mit drei kurzen Lernmodulen.
- Manuelle Prozessaufnahme, SVG-Karte, Ja/Nein-Verzweigungen und Rückschleifen.
- Verbesserungshypothesen und acht Bereitschaftsfragen mit unbekanntem Zustand.
- JSON-Import/-Export, Markdown-/Mermaid-Export, bewusstes lokales Speichern.
- Optionaler authentifizierter Node-Proxy für Mistral; Providerantworten bisher nur simuliert getestet.
- Zehn Modell-/Backendtests und Browser-Smoke-Test bestanden auf dem PR-Head c377ce18fa3ca0b64533c9f8ef7f20a9a2db8812.
- Pages-Veröffentlichung nach Merge fehlgeschlagen: Site nicht aktiviert, configure-pages meldet Not Found. Workflow: https://github.com/blackmath88/PietroPizzaiolo-bpmn-tutor-agent/actions/runs/38719209345

## Zielarchitektur

Statische Oberfläche → strukturiertes Prozessmodell → deterministische Karte und portable Exporte.

Optional: Oberfläche → authentifizierter Backend-Endpunkt → Mistral → validierter Änderungsvorschlag → sichtbare Prüfung → ausdrückliche Übernahme ins Prozessmodell.

Später: freigegebene Ablage → Versionen / fachlicher Prüfstatus / Suche. Die öffentliche Pages-Site erhält keine eingebauten API-Schlüssel und veröffentlicht keine eingegebenen Prozesse automatisch.

## Ausbaureihenfolge

| Phase | Liefergegenstand | Abnahmekriterium | Abhängigkeit |
| --- | --- | --- | --- |
| P0: Demonstrator veröffentlichen | Pages aktivieren, öffentliche URL prüfen, kurzer Demoablauf | Desktop und Mobilgerät laden alle Assets unter Repository-Unterpfad; Demo und Exporte funktionieren; kein Login erforderlich | Einmalige Repository-Einstellung |
| P1: Geführte Prozessaufnahme | Gespräch mit strukturierten Vorschlägen und manueller Alternative | Eine Erzählung kann zu einem überprüften Entwurf führen; keine stillen Modelländerungen; ungültige Antwort verändert nichts | Modellvertrag; Live-Teil braucht Backend/Schlüssel |
| P2: Prozessmodell festigen | Stabile IDs, Knoten/Kanten, Prüfung, Undo, Versionierung und Migration | Ältere Dateien bleiben importierbar; Verbindungen überstehen Umordnen/Löschen; parallele Abläufe werden korrekt unterstützt oder ausdrücklich abgewiesen | Vor Erweiterung um komplexe Graphen |
| P3: Verbesserungsfälle | Befund → Hypothese → Messung → Verantwortlichkeit → Versuch | Jede Idee ist einem Prozessschritt oder dem Gesamtprozess zuordenbar; Annahmen und Nachweise unterscheidbar | P1/P2-Kern |
| P4: Teamprüfung und kleine Sammlung | Mehrere Prozesse, fachlicher Prüfstatus, Vergleich und Wiederverwendung | Entwurf und bestätigter Stand sind unterscheidbar; jede Bestätigung hat Person/Rolle, Datum und Version; keine automatische Veröffentlichung | Ablage- und Berechtigungskonzept |
| P5: Hochschul-Pilot | Drei Teams, Ausgangsmessung, Versuche, Nachmessung | Nutzen und Gesamtaufwand nachvollziehbar; Fortführungsentscheid dokumentiert | Sponsor, freigegebene Zeit, Prozessverantwortliche |

P1 und P2 sind in kleinen vertikalen Schritten zu liefern. Kein vollständiger Modellumbau als Voraussetzung für das erste brauchbare Gespräch.

## Nächster konkreter Build: geführte Aufnahme

### Nutzersicht

Auf «Eigenen Prozess aufnehmen» folgt die Wahl «Erzählen» oder «Selbst strukturieren». Der Nutzer sieht das Gespräch neben einer vorläufigen Karte. Pietro stellt eine relevante Rückfrage, schlägt Änderungen vor und kennzeichnet offene Annahmen. «Übernehmen», «Bearbeiten» und «Verwerfen» sind explizite Aktionen. Ein Fehler lässt den bisherigen Arbeitsstand bestehen.

### Datenvertrag

- Antwort-Hülle mit Schema-Version, assistantMessage, proposedProcess und openQuestions.
- Prozessdaten werden serverseitig und vor Übernahme im Browser geprüft.
- IDs und Verbindungstargets müssen gültig sein; maximal 15 Schritte für diesen Slice.
- proposedProcess ist optional: bei unklarer Erzählung nur nachfragen.
- Tatsachen, Annahmen und Vorschläge erhalten unterscheidbare Kennzeichnungen.
- Prozessinhalt und Gespräch werden als nicht vertrauenswürdige Eingaben behandelt.
- Bei Übernahme wird ein rückgängig machbarer Snapshot gespeichert.
- Der gewählte Modellname und Zeitpunkt einer KI-Anregung werden als Herkunft, nicht als Gütesiegel erfasst.

### Abnahmefälle

1. Eine kurze Veranstaltungserzählung ergibt einen Vorschlag mit Auslöser, Ergebnis und Rollen.
2. Fehlende Entscheidungsausgänge erzeugen eine Rückfrage oder einen klar markierten offenen Punkt.
3. Ein Vorschlag mit ungültigen IDs wird abgewiesen; bestehende Arbeit bleibt unverändert.
4. Ablehnen ändert nichts; Übernehmen ändert nur die angezeigten Daten; Undo stellt den vorherigen Stand wieder her.
5. Timeout, 401, 429 und Providerfehler sind verständlich; manueller Weg bleibt offen.
6. Ohne Backend ist ein klar gekennzeichneter Beispieldialog nutzbar; er wird nicht als Live-KI dargestellt.
7. Senden übermittelt nur die angekündigten Inhalte; Schlüssel stehen weder im Build noch in Browser-Speichern.
8. Eine zusammenhängende Browserprüfung durchläuft Erzählen → Vorschlag → Übernahme → Karte → Export → Import.

### Noch nicht in diesem Slice

Mehrbenutzerkonten, zentrale Sammlung, SSO, formaler BPMN-Export, Ausführung von Automatisierungen, eigenständige Prozessfreigaben und Einbindung realer interner Dokumente.

## Technische Qualität vor breiter Nutzung

- Quellcode formatieren und Komponenten verständlich aufteilen; die kompakte Erstimplementierung bleibt kein Wartungsstandard.
- Tastaturbedienung, Fokuswechsel und Screenreader-Beschreibungen praktisch prüfen.
- Graphdarstellung zusätzlich als lesbare Schritt-/Verbindungsliste anbieten.
- Payload-, Antwort- und Fehlerszenarien gezielt prüfen; Renderer weiterhin nur aus validierten Daten speisen.
- Pilot-Zugangstoken vor organisationsweitem Einsatz durch passende Identitäts- und Zugriffsverwaltung ersetzen.
- Hostingkosten, API-Limits, Aufbewahrung und Modellwechsel dokumentieren; keinen öffentlichen ungeschützten API-Proxy betreiben.

## Offene Entscheidungen

Kein Blocker für P0 oder Offline-P1: Name/Branding der späteren Uni-Version, GitHub-Zielorganisation, zentrale Ablage.

Blocker für Live-Mistral: Backend-Host, verantwortliche Betreuung, zulässige Daten, API-Zugang und Kostenlimit.

Blocker für den organisatorischen Pilot: Sponsor, verfügbare Kapazitäten, drei konkrete Prozesse mit Verantwortlichen, Messplan und Kostenbilanz.
