# Prozesse sichtbar machen

## Idee für «Your Idea – Your University»

Prozessverbesserung und KI-Anwendungsfälle beginnen mit denselben Fragen: Was tun wir? Wer tut es? Welche Informationen werden benötigt? Wo stockt es? Was soll besser werden?

Pietro verbindet Prozesskompetenz mit einer praktischen Werkbank. Mitarbeitende lernen Grundbegriffe an einer Pizza, wählen einen Arbeitsvorgang und halten Abläufe, Rollen, Entscheidungen und Reibung fest. Daraus entsteht ein prüfbarer Prozess-Steckbrief. Eine bereichsübergreifende Taskforce unterstützt die Validierung und priorisiert Verbesserungen. Erprobte Steckbriefe können in einer gemeinsam gepflegten Prozesssammlung wiederverwendet werden.

Die vorgeschlagene Neuerung verbindet dezentrale Aufnahme, gemeinsame Prüfung und gezielte Umsetzung. Der digitale Tutor unterstützt das Gespräch; die Prozessverantwortlichen bestätigen den Ablauf und entscheiden über Änderungen.

## Pilotvorschlag

Drei freiwillige Teams, je ein begrenzter Prozess, zwölf Wochen. Zunächst ohne zusätzliche KI-Lizenzen mit der statischen Werkbank. Bei einem geeigneten, freigegebenen Fall optional Mistral verwenden. Ausgangsaufwand, Rückfragen und Fehler vor und nach einer Veränderung erfassen. Lern-, Prüf-, Implementierungs- und Betriebsaufwand mitrechnen. Arbeitszeit und tatsächliche Budgeteinsparung getrennt ausweisen. Fortführung an nachgewiesenen Nutzen und eine tragfähige Kostenbilanz binden.

## Was diese Implementierung nicht behauptet

- Kein vollständiger Prozessatlas oder organisationsweiter Kollaborationsdienst.
- Keine formale BPMN-Modellierungs- oder Ausführungsengine.
- Keine automatische Prozesswahrheit aus einem KI-Gespräch.
- Keine institutionelle Daten-, Produkt- oder Markenfreigabe.
- Kein live aktiviertes Mistral-Backend ohne separate Konfiguration.

## Umsetzungshinweise

Repo-Basis: a07a2ad392cde42ed9216c85f4f5cb09de263d5c. Isolierter Entwicklungszweig. Kein Observatory, AGENTS.md oder Weavr-Artefakt im Ausgangsbaum; keine Mission gestartet oder erweitert. Das bestehende Konzept und der Legacy-Prompt bleiben erhalten. Die neue Version liegt unter docs/unibas.

Abnahme: statischer Start, nachvollziehbare Verzweigungen/Schleifen, robuste Dateiimporte, portable Exporte, klarer Prüfstatus, serverseitiger API-Schlüssel, authentifizierter optionaler Mistral-Endpunkt. Modell und Backend mit Mock-Provider testen; Live-Anbindung gesondert abnehmen.
