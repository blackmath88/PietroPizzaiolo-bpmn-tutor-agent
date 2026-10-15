# Buildplan — Pietro Produkt-MVP

Stand: 15. Oktober 2026. Diese Fassung ersetzt die frühere taskforcezentrierte Ausbaureihenfolge.

Verbindliche technische Ausarbeitung für die Umsetzung: [Claude Code Handoff](CLAUDE_CODE_HANDOFF.md).

## Ziel

Lernen → eigenen Prozess beschreiben → Karte korrigieren → Prozess-Check → ähnliche Beispiele vergleichen → Beitrag für die gemeinsame Bibliothek vorbereiten.

## Architektur

GitHub Pages + kleine versionierte JSON-Bibliothek + lokale Entwürfe. Bestehende Vanilla-JS-Werkbank weiterverwenden. Keine externe Datenbank und kein zusätzliches Hosting im MVP. Optionaler Mistral-Server bleibt getrennt; keine API-Schlüssel im Browser.

## Reihenfolge

| Slice | Ergebnis | Abnahme |
| --- | --- | --- |
| 1 | Lernen / Mein Prozess / Prozessbibliothek | Bestehende Bearbeitung und Exporte bleiben nutzbar |
| 2 | Drei fiktive Fälle, zwei Muster, Suche und Kategorien | Validierte Daten, relative Pfade, verständliche Detailansichten |
| 3 | Geführte Aufnahme und regelbasierter Prozess-Check | Korrigierbarer Entwurf, offene Fragen, Undo, nutzbarer Bericht |
| 4 | Vergleich und Beitragsexport | Gemeinsames Muster/lokale Regeln sichtbar; Download bleibt pending-review |
| 5 | Mobile Bedienung, Barrierearmut und Fehlerbehandlung | End-to-End-Browserprüfung, Bibliotheksvalidierung, Unterpfad-Test |

## Später, separat entscheiden

Live-Mistral mit strukturierten Vorschlägen; bestätigte Spracheingabe; selbst gehostete Mehrbenutzerablage; KI-gestützte Kuration. Keine dieser Optionen blockiert die erste vollständige Offline-Nutzung.

## Ressourcen

Kein kostenpflichtiger Dienst wird durch diesen Plan bestellt. Umsetzungs-, Pflege- und Prüfzeit bleiben Aufwand. Pilotbudget und institutionelle Zuständigkeit sind vor einem echten internen Betrieb festzulegen.

## Übergabe

Claude Code liest zuerst den aktuellen Repository-Stand, danach Konzept, Forschungssynthese und Handoff. Implementieren auf isoliertem Branch, prüfen und reviewbaren Stand liefern. Dieser Plan startet keine Mission und erteilt keine pauschale Deployment- oder Ausgabenfreigabe.
