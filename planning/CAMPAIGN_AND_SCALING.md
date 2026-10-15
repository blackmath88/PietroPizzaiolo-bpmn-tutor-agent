# Wie läuft’s bei euch? — Kampagne und Skalierung

Stand: 15. Oktober 2026. Konzept, noch keine implementierte Sammlung oder laufende Kampagne.

**Einladung:** Arbeit sichtbar machen. Gute Lösungen teilen.

## Ziel

Jede Prozessaufnahme soll dem beteiligten Team helfen und zugleich anschlussfähiges Wissen für andere schaffen. Gesammelt werden mühsame Abläufe und bereits funktionierende Lösungen. Der unmittelbare Gegenwert für Mitwirkende ist eine brauchbare Karte, ein geklärtes Problem und ein nächster Verbesserungsschritt.

## Von der lokalen Praxis zum übertragbaren Muster

| Ebene | Beispiel |
| --- | --- |
| Konkreter Fall | So organisiert Departement X den Eintritt einer wissenschaftlichen Mitarbeiterin. |
| Prozessfamilie | Mitarbeitendeneintritt / Onboarding |
| Gemeinsames Muster | Angaben erfassen → Voraussetzungen prüfen → Ressourcen bereitstellen → Einführung begleiten |
| Lokale Variante | Anstellungsart, Finanzierung, Laborzugang, beteiligte Stellen |
| Übertragbare Verbesserung | Angaben einmal erfassen und Zuständigkeiten bei Übergaben sichtbar machen |
| Anwendungskandidat | Fehlende Angaben regelbasiert erkennen; geeignete Einführungsmaterialien gegebenenfalls mit KI aufbereiten |

Beispiele sind fiktiv. Eine Prozessfamilie ist keine Aussage, dass alle Einheiten identisch arbeiten sollten. Unterschiede können sachlich notwendig sein. Verallgemeinerung erhält Verweise auf Ursprung, Varianten, Voraussetzungen und Grenzen; der konkrete Fall wird nicht überschrieben.

## Kategorien als mehrere Suchzugänge

- Bereich: HR, Finanzen, Forschung, Lehre, IT usw.
- Anlass: Eintritt, Beschaffung, Veranstaltung, Antrag, Austritt usw.
- Tätigkeitsmuster: erfassen, prüfen, entscheiden, koordinieren, informieren usw.
- Reibung: Mehrfacheingaben, Rückfragen, Wartezeit, unklare Verantwortung usw.
- Verbesserungsansatz: weglassen, vereinfachen, wiederverwenden, automatisieren, KI-Unterstützung.

Die ersten Kategorien werden mit den Teams erprobt. Bekannte Referenzmodelle werden auf Passung geprüft, nicht ungeprüft vollständig übernommen. Capability, Prozessfamilie, konkrete Prozessvariante, einzelner Vorgang und Arbeitsanweisung sind unterschiedliche Objekte.

KI kann Kategorien und ähnliche Fälle vorschlagen. Die Zuordnung muss begründet, korrigierbar und bestätigbar sein. Textähnlichkeit allein beweist keine funktionale Gleichheit. Ein ähnlicher Titel reicht nicht zum Zusammenführen.

## Herkunft und Verbindlichkeit

| Status | Bedeutung |
| --- | --- |
| Beschrieben | Eine Person berichtet einen Ablauf; Annahmen sind offen. |
| Gemeinsam bestätigt | Beteiligte haben eine bestimmte Version für einen benannten Geltungsbereich geprüft. |
| Erprobt | Eine Verbesserung wurde getestet; Ergebnis und Messmethode sind dokumentiert. |
| Übertragbares Muster | Voraussetzungen, Varianten und Grenzen der Wiederverwendung sind beschrieben. |
| Verbindlicher Standard | Eine zuständige Stelle hat eine konkrete Fassung ausdrücklich verbindlich gemacht. |

Diese Bezeichnungen bilden keine automatische Fortschrittsleiter: Ein erprobter lokaler Prozess muss nie zum Standard werden. Fachlicher Prüfstatus, Versuchsnachweis, Abstraktionsgrad und normative Verbindlichkeit sollen im späteren Datenmodell getrennte Felder sein.

Jeder Eintrag braucht eine stabile ID, verantwortliche Rolle, Geltungsbereich, Version, Herkunft, letztes Prüfdatum und nächsten Prüfanlass. Änderungen an einer Vorlage überschreiben lokale Varianten nicht automatisch. Widersprüche zwischen Berichten bleiben bis zur fachlichen Klärung sichtbar.

## Kampagnenformat

Kleine Themenrunden: «Ankommen an der Uni», «Eine Veranstaltung organisieren», «Etwas beschaffen». Freiwillige Teams zeigen einen konkreten Fall. Pietro oder eine Moderation begleitet die Aufnahme; die Taskforce führt die Beteiligten zur gemeinsamen Prüfung zusammen. Am Ende stehen wenige nachvollziehbare Fälle und mindestens ein geplanter Transfer.

Die Kommunikation zeigt «Was haben wir verstanden? Was wurde einfacher? Was bleibt verschieden?» statt Ranglisten besonders effizienter Mitarbeitender. Teams erhalten ihren Steckbrief zur Korrektur, bevor etwas organisationsweit geteilt wird. Reale Prozessdaten werden nicht automatisch auf dem öffentlichen GitHub-Repository oder der Pages-Site veröffentlicht.

## Skalierung messen

- Aufwand pro fachlich bestätigter Aufnahme, einschliesslich Nachfragen und Korrekturen.
- Anteil der Fälle mit benannter Pflegeverantwortung und aktuellem Prüfdatum.
- Übernahmen einer erprobten Verbesserung durch weitere Einheiten.
- Zusätzlicher Anpassungsaufwand je Transfer und tatsächlich vermiedene erneute Analyse.
- Qualitäts- und Entlastungseffekte nach Übernahme; gescheiterte Transfers ebenfalls erfassen.

Anzahl eingereichter Prozesse, Tags oder Chats ist kein alleiniger Erfolgsnachweis.

## Konsequenzen für den Buildplan

1. Herkunft, Geltungsbereich und prüfbare Statusangaben im Modell vorsehen; bestehende Dateien migrierbar halten.
2. Wenige Fälle nebeneinander darstellen und manuell zu Familien zuordnen.
3. Gemeinsamkeiten und Unterschiede sichtbar vergleichen; einen expliziten Transfersteckbrief erzeugen.
4. Erst dann KI-gestützte Vorschläge für Kategorien, ähnliche Fälle und Muster ergänzen.
5. Zentrale Suche erst mit geklärter Ablage, Zugriff, Pflege und Verantwortlichkeit einführen.

Weiterführend: [Vorabrecherche](../research/PRIOR_ART_SCOUT.md) und [Perplexity-Rechercheauftrag](../research/PERPLEXITY_RESEARCH_PROMPT.md).
