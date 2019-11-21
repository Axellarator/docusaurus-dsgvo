---
id: readme
title: Installation
sidebar_label: Installation und Dokumentation
---

# Installationsanweisung zu Digital Audit
* basierend auf [Docusaurus](https://docusaurus.io/).

## Erstellt wurde das Ganze in [Markdown](https://markdown.de/)
einer minimalistischen Textsprache. Hintergrund ist, dass Docusaurus Markdown verarbeitet und das sich Texte/Präsentationen sehr schnell erstellen lassen. 

## Markdown-Textverarbeitungen (anklicken)
<!--DOCUSAURUS_CODE_TABS-->

<!--Notepad++-->

### Notepad++ ist eine Universalwaffe für Texte, Programmiersprachen u.v.D.m. 
* [WWW Home](https://notepad-plus-plus.org/)
* [Dokumentation](https://npp-user-manual.org/)
* [Download](https://notepad-plus-plus.org/downloads/)

<!--Zettlr-->

### Zettlr ist sehr leistungsfähig und kann in vielen Bereichen Word ersetzen.
* [WWW Home](https://npp-user-manual.org/)
* [Dokumentation](https://docs.zettlr.com/de/)
* [Download](<https://www.zettlr.com/download/win32>)


<!--Brackets-->

### Brackets ist ein sehr einfach zu handhabender und erweiterbarer Editor. 
* [WWW Home](http://brackets.io/)
* [Dokumentation](https://github.com/adobe/brackets/wiki)
* [Download](https://github.com/adobe/brackets/releases/download/release-1.14/Brackets.Release.1.14.msi)

<!--Word-->

### Word geht auch, aber ... 
* Word benötigt das [WRITAGE add-in](http://www.writage.com/#download). Also Link anklicken, Herunterladen und installieren >>  writage.msi im Download-Ordner

Writage verwandelt Word in einen Markdown WYSIWYG Editor, so dass Markdown Dateien geöffnet und editiert werden können. Danach werden die Dateien als Markdown-Dateien abgespeichert. Das Ergebnis und die Wege dahin sind nicht prickelnd. Beim Öffnen via Datei öffnen, muss Word mitgeteilt werden, dass alle Dateien zu öffnen sind ``` *.* ```.
Dann möchte Word beim ersten Mal Editor für das Web werden, dieses tunlichst ablehnen. Dann versucht Word eventuelle Links oder CSS Dateien aufzulösen; ignorieren! Dann sollte es losgehen. Beim Speichern ```Speichern unter``` findet sich der Eintrag für Markdown. Darauf achten, dass die Dateien mit **md** enden. 

<!--END_DOCUSAURUS_CODE_TABS-->

___

## Was ist zu tun, in welcher Reihenfolge

* [Schneller Start in 5 Minuten](#get-started-in-5-minutes)
* [Noch schnellerer Start beim Starten](#schnellstart-webserver)
* [Struktur Inhaltsverzeichnis](#directory-structure)
* [Inhalte editieren](#editing-content)
* [Inhalte hinzufügen](#adding-content)
* [Docusaurus  Dokumentation](#full-documentation)

___

# Get Started in 5 Minutes

## Zwei Wege ins Glück

> 1. Schritt: **NODE** und **YARN** in den richtigen Versionen laden und installieren
<!--DOCUSAURUS_CODE_TABS-->

<!--Node Download-->

[Node herunterladen](https://nodejs.org/en/) 
	
* Auf der Webseite Current - Latest Features anklicken und herunterladen; landet normalerweise im Download-Verzeichnis des Benutzers. 
	
* Im Download-Verzeichnis Node (node-vxx.xx.x-x86.msi) anklicken; es erscheint der Node Setup Wizard; Next anklicken; Lizenz akzeptieren; Next anklicken, Ziellaufwerk übernehmen und Next anklicken. **Und nicht die Tools anklicken** (Sonst dauert die Installation ewig); Next und Fertig anklicken. 
	
<!--Yarn Download-->	
	
[Yarn herunterladen](https://yarnpkg.com/lang/en/docs/install/#windows-stable) 
	
* Version ist Windows und Stable; landet normalerweise im Download-Verzeichnis des Benutzers.
	
* Im Download-Verzeichnis Yarn (zB. yarn-1.xx.x.msi) anklicken; es erscheint die normale Sicherheitswarnung; Ausführen anklicken; Verzeichnisse beibehalten und bis Fertig durchklicken.
	
<!--END_DOCUSAURUS_CODE_TABS-->

> 2. Schritt: Docusaurus Installation via GitHub oder von Hand
	
<!--DOCUSAURUS_CODE_TABS-->
<!--Installation mit GitHub-->

### Dokusaurus via GitHub installieren

* Die GitHub Download Seite findet sich hier: https://desktop.github.com/. Der GitHub Desktop vereinfacht die Update Prozesse wesentlich. Das ganze Gefrickel mit Zip-Dateien, Hochladen von Präsentationen und Informationstexte fällt weg und erfolgt automatisch.
* Download für Windows oder MacOS anklicken, runterladen und installieren
* GitHub Benutzer anlegen und mit der eigenen Email bestätigen
* GitHub Desktop starten

<!--Installation von Hand-->
	
### Dokusaurus von Hand installieren

Jetzt kommt etwas **Neues** für durchtrainierte Rumklicker, es kommt die Kommandozeile, wird zu jedem Windows 10 kostenfrei mitgeliefert. Die Kommandozeile wird, wie folgt, gestartet: Dieser spezielle Modus kann aus Windows heraus, über mehrere Arten aufgerufen werden.
	   
* Durch rechten Mausklick auf den Windows Startknopf und die Wahl der Option **Eingabeaufforderung** ausführen; Alternativ per Tastatur: `[Win] + [X]` und danach `[A]` > Powershell ausführen
* Wir haben jetzt unser Arbeitsfenster und turnen auf der Kommandozeile herum.  

1. Schritt:  Das Docusaurus - Verzeichnis erstellen  - Nicht in Programme, Program Files o.ä. installieren - Unter Windows 10 kann hier nur der Administrator arbeiten und der Benutzer muss jeden Schritt seiner Untaten abnicken. Zum Arbeiten mit dieser Dokumentation, nehmt **%homepath%\\Docusaurus**. Der Docusaurus Ordner kann mit dem Explorer erstellt werden, ansonsten auf der Kommandozeile, wie folgt: 
	
	a) cd %homepath%  b) md Docusaurus  c) cd Docusaurus
		
2. Schritt: **npm update** eingeben und \<Enter\>; wenn alles richtig installiert wurde, lädt der PC die neueste Version oder sagt "Alles OK".
	
3. Schritt: Dann Im Docusaurus Verzeichnis **npx docusaurus-init** eingeben und \<Enter\>; docusaurus wird installiert; Anzeige von Fehlern etc. ignorieren.
	
4. Schritt: **cd website** eingeben und \<Enter\>

5. Schritt: **npm start** eingeben und \<Enter\>; jetzt wird die Docusaurus-basierende Webseite/Installation aufgerufen. In dem Arbeitsfenster erscheint: LiveReload server 35729 und Docusaurus Server 3000; kann alles ein bisschen dauern aber dann: startet der Browser und es erscheint Docusaurus Web **TaDa**

	
### Digital Audit installieren

* die Digital Audit Zip Datei entpacken; geht bestens mit 7-Zip; mit rechter Maustaste anklicken und zu 7-Zip den Zeiger verschieben und weiter nach entpacken nach "Digital Audit" und selbiges anklicken.
* In diesem Verzeichnis ist jetzt eine Verzeichnisstruktur.
* Bevor kopiert wird, im Arbeitsfenster den Docusaurus  Webserver stoppen: zweimal \<Strg\>\<C\> hintereinander reicht.
* Jetzt die Dateien aus Digital Audit docs **in das Docusaurus-Unterverzeichnis \\docs kopieren.**
* Dann alle Daten und Verzeichnisse aus **static** nach "...Docusaurus\\website\\static\\" kopieren.
* Analog blog und core Dateien kopieren
* Analog sitebars.json und siteConfig.js nach Website kopieren und vorhandene Dateien überschreiben.
* webs.bat nach website kopieren: In webs.bat steht cd %homepath%\Docusaurus\website und npm start. Diese Datei kann zum Starten des Webservers auch mit dem Explorer angeklickt werden.
* Webserver wieder starten: Ins Arbeitsfenster zurück und webs und \<Enter\> eingeben. Es erscheint Digital Audit im Browser; funktioniert in Edge, Chrome, Firefox und diversen anderen.

<!--END_DOCUSAURUS_CODE_TABS-->

___
___
> 3. Schritt: **Docusaurus starten**

Wenn die Installation einmal durch ist, dann werden nur noch die nachfolgenden Schritte ausgeführt

1. Kaffee oder Tee bereitstellen
2. Ein Arbeitsfenster öffnen > Beispiele weiter oben
3. **cd %homepath%\\Documents\\Docusaurus\\website** **npm start**
4. Oder mit dem Explorer **webs.bat** anklicken

___
___
## Directory Structure

Die Projektstruktur sieht ungefähr wie nachfolgend aus: 

* Wichtig ist: **docs**, hier finden sich alle wesentlichen Dateien.
* in **blog** kann der Benutzer einfach eine Datei kopieren und per Datum im Dateinamen neu abspeichern und sofort ist die Datei unter **Blog**zu sehen.
* in **core** findet sich **Footer.js**, damit lassen sich die dortigen Einträge anpassen, bzw. erweitern.
* **i18n** und **node_modules** werden erstmal ignoriert, da sollte man nur herumfrickeln mit Javascript Kenntnissen.
* im Verzeichnis **pages** gibt es das Unterverzeichnis \"en\" dort liegen die Javascript Dateien, die ebenfalls leicht angepasst werden können.
* Und in **static** finden sich etliche Unterverzeichnisse mit weiteren Unterverzeichnissen und Dateien, die allesamt statisch sind und nicht verändert werden sollen; z.B. Bilder in \\img\\.
	
```
nodejs/
  docs/
    datenschutz.md
    doc1.md
    doc2.md
    . . . .
    impressum.md
    it-itil.md
    local.md
    projekt01.md
    projekt02.md
    . . . .
	    readme.md
  website/
    blog/
      2016-3-11-oldest-post.md
      2017-10-24-newest-post.md
	  						    . . . .
    core/
	      Footer.js
    i18n/
	    node_modules/
    pages/
	      en/
        		help.js
        		index.js
		        users.js
	    static/
      css/
	      htm/
      img/
	      . . . .
    package.json
    sidebars.json
    siteConfig.js
```

# Editing Content

Notepad++ ist hier nur Platzhalter. Es kann jeder der obenaufgeführten Editoren verwendet werden. Bei der Nutzung von GitHub steht der Zugriff via Visual Studio zur Verfügung, 

## Eine existierende **docs** Seite anpassen

1. Nach **docs** navigieren (via Explorer) und das entsprechende Dokument mit Notepad++ öffnen.
	> Mit Rechter Maustaste aufs gewünschte Dokument und Edit mit Notepad++ auswählen:

`docs/Dokument-zum-editieren.md`


```markdown
---
id: Seite zum editieren
title: Dieses Dokument will editiert werden
---

Editier mich...
```

Für weitere Informationen zum editieren, [hier](https://docusaurus.io/docs/en/navigation) klicken 

## Editieren eines existierenden Blog Eintrags

Ab nach `website/blog` und den gewünschten Blog Eintrag aufrufen:

`website/blog/blog-eintrag-zum-editieren.md`
```markdown
---
id: blog-zum-editieren
title: Dieser Eintrag will editiert werden
---

Editier mich...
```

Für weitere Informationen zum editieren eines Blog Eintrags, [hier](https://docusaurus.io/docs/en/adding-blog) klicken.

# Adding Content

## Eine neue Seite an die Seite (sidebar.json)

1. Neue Seite in **docs** anlegen. Speichern mit Notepad++ unter Neues-Dokument.md in `/docs`, z.B. `docs/neues-document.md` und alles klein schreiben.

```md
---
id: neues-dokument
title: Diese Dokument will erstellt werden
sidebar_label: Hier bin ich
---

Neue Inhalte hier rein..
```

2. Jetzt die Seitenleiste anpassen in `website/sidebars.json`

```javascript
// neues-dokument hinzufügen. Einfach sitebar.json in Notepad++ öffenen und den Eintrag, wie im Muster anlegen und schon erscheint "Hier bin ich" nach Webserver Neustart in der Seitenleiste
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "neues-dokument" // Neues Dokument
    ],
    ...
  },
  ...
}
```

Für weitere Informationen zum erstellen eines neuen Dokuments, [hier](https://docusaurus.io/docs/en/navigation) klicken.

## Adding a new blog post

1. Sicherstellen das der  Eintrag zum Blog in `website/siteConfig.js` steht. Einfach mit Notepad++ öffnen und nachschauen.

`website/siteConfig.js`
```javascript
headerLinks: [
    ...
    { blog: true, label: 'Blog' },
    ...
]
```

2. Neuen Blog Eintrag im Format `JJJJ-MM-TT-Mein-Blog-Eintrag-Titel.md` in `website/blog`

`website/blog/2019-09-12-Neu-Blog-Post.md`

```markdown
---
author: Dieter Au
authorURL: https://twitter.com/foobarbaz
authorFBID: 503283835
title: 2019-09-12-Neu-Blog-Post
---

Lorem Ipsum...
```

Für weitere Informationen zum erstellen eines Blog Eintrags, [hier](https://docusaurus.io/docs/en/adding-blog) klicken.

## Adding items to your site's top navigation bar

1. Jetzt Links, individuelle Seiten, externe Links im "headerLinks field" von `website/siteConfig.js` hinzufügen. Richtig, mit Notepad++ ....

`website/siteConfig.js`
```javascript
{
  headerLinks: [
    ...
    /* hier docs eintragen */
    { doc: 'my-examples', label: 'Examples' },
    /* individuelle Seiten */
    { page: 'help', label: 'Help' },
    /* externe Links */
    { href: 'https://github.com/facebook/Docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```
Für weitere Informationen über die Navigationsschnittstelle, [hier]https://docusaurus.io/docs/en/navigation) klicken.

## Adding custom pages

1. Docusaurus nutzt **React** Javascript Komponenenten für den Aufbau der Webseiten. Diese werden als .js Dateien in `website/pages/en` gespeichert. In 'en' deshalb, weil Docusaurus auch Mehrsprachigkeit unterstützt

2. Soll die Seite in der Seitenleiste auftauchen, wie beschrieben `website/siteConfig.js` anpassen:

`website/siteConfig.js`
```javascript
{
  headerLinks: [
    ...
    { page: 'meine-neue-spezial-seite', label: 'Kartoffeln garen in der Mikrowelle' },
    ...
  ],
  ...
}
```

Für weitere Informationen zum erstellen von individuellen Javascript Seiten (custom pages), [hier](https://docusaurus.io/docs/en/custom-pages) klicken.

# Full Documentation

Vollständige Dokumentation für Docusaurus findet sich hier [Webseite](https://docusaurus.io/) in **Englisch**.
