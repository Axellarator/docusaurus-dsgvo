/** FLASH01-DSA.JS
 * Copyright (c) 2019-present, Value Grid
 * C:\Users\Klaus\Docusaurus\website\node_modules\docusaurus\lib\static\js
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**************************************************************************
**************************Datenschutzauditor*******************************
**************************************************************************/
// Alles initialisieren
let Frage			= "text"; // Frage
let Antwort			= [];	// Antwort 
let Loesung			= [];	// Lösung False, true, Wert!
let Eingabe			= [[],[]];	// Eingabespeicher [aktKarte][Ergebnis, Ergebnis, Ergebnis,...]
let Checkbox		= [];	// Checkbox angekreuzt!
let Versteck		= [];	// Felder verstecken
let refListe		= [];	// refListe für alle Fragen
let anzAntworten;			// Anzahl Antworten und Lösungen
let aktTest			= [];	// Test ob Karte richtig beantwortet
let arrSort			= [];	// Unsortierte Liste von 0 bis Max
let refStart		= null;	// Startknopf
let refZurueck		= null;	// Button zurück
let refVorwaerts	= null;	// Button weiter

let flagg			= false;// Flag
let flagListe		= false;// Listenerstellung umgeht Maskenerstellung

//initialize the numbers:
let maxAntwortfelder= 8;	// Max 10 Antwortfelder
let maxAntworten	= 8;	// Maximale Anzahl Antworten
let anzKarten		= 0;	// Anzahl Elemente im Array von 0 - x
let maxKarten		= 0;	// Anzahl Elemente im Array = x + 1
let jumpDB			= 0;	// Sprung in die richtige DB und initialisierung
let check			= 0; 

let refCheck		= [];	// Checkbox angekreuzt oder nicht
let refKnopf		= [];	// Knöpfe einfach verschwinden lassen
var aktKarte;				// Aktuelle Karte
var refErgebnis;			// Ergebnisausgabe in Fenster  
let aktErgebnis		= 0;	// Ergebnis für 1 Karte
let przErgebnis		= 0;	// Ergebnissumme in % für alle Karten
var reflfdKarte;
var aktProzent		= 0;	// Prozent Ergebnis für 1 Karte
var aktPruefung		= false;// Karte nicht geprüft
var sumProzent		= [];	// Werte für die einzelnen Karten
let refHinweis		= null;
let refProzent		= null;
let refLink			= null;  
let refAnzahl		= null; 

let dsb01start;
let dsa01start;

function initDB(jtest) {
	
	switch (jtest) {
		case 1:
			jumpDB = 1;
			anzKarten	= 33; // Anzahl Elemente im Array = 34
			maxKarten	= 34; // Anzahl Elemente im Array = 34
		break;
		case 2:
			jumpDB = 2;
			anzKarten	= 9;   // Anzahl Elemente im Array = 9	(0=1)
			maxKarten	= 10;  // Anzahl Elemente im Array = 9	(1=1)
		break;
		case 3:
			jumpDB = 3;
			anzKarten	= 122  // Anzahl Elemente im Array = 123 (0=1)
			maxKarten	= 123; // Anzahl Elemente im Array = 123 (1=1)
		break;
	}
	dsa01(jumpDB);
}


function dsa01(jump) {
	
	switch (jump) {
		case 1:
		case 2:
		case 3:
		break;
		case 4:
			
		return;
		case 5:

		return;
		case 6:
			initnext();
		return;
		case 7:
			pruefeKarte();
		return;
		case 8:
			zurueck();
		return;
		case 9:
			weiter();
		return;
	}
	uhrzeit();
	dsa01Start = true; // Flag
	findrefsdsa();     // Aufbereitung des Bildschirms
	vorbereitung();    // Alles initialisieren

// -- Zur Initialisierung Referenzen auf Felder zuordnen (getElementById)

	function findrefsdsa() { 
	let y;	
	let	ladeGesamt  = "";     // Leer und initialisiert

// -- Frage in Lernkarten initialisieren----------------------------------------	

	    Frage = document.getElementById("dsaFrage");

// -- Antwortzeilen erstellen und initialisieren	
// -- Original: <tr><td	id="versteck0" ><input id="check0" type="checkbox" onClick="toggle(0)"/></td><td class="antwort" id="antwort0"></td></tr>

		ladeGesamt = "<div id='dsaTab1out'>\r\n"; // Anfang

		for(y=0;y < maxAntwortfelder;y++){ // Checkbox und Antwort erstellen
			ladeGesamt  = ladeGesamt + '<tr><td	id="versteck' + y + '" >' + '<input id="check' + y + '" type="checkbox" onClick="toggle(' + y + ')"/>' + '</td><td class="antwort" id="antwort' + y + '"></td></tr> \r\n'	
		}

		ladeGesamt = ladeGesamt + "</div>\r\n"; // Abschluss
		
		dsaTab1.innerHTML = ladeGesamt; // Ab in die Maske
		
		for(y=0;y < maxAntwortfelder;y++){ // Checkbox und Versteck aus Tab1 initialisieren
			Checkbox[y] = document.getElementById("check" + y); 
			Versteck[y] = document.getElementById("versteck" + y);
		}

// -- Ereigniskarten initialisieren ----------------------------------------------		

		refErgebnis = document.getElementById("Ergebnis");
		reflfdKarte = document.getElementById("lfdKarte");
		refHinweis  = document.getElementById("Hinweis");
		refProzent  = document.getElementById("Prozent");
		
// -- Masken-Sprungreferenzen von 0 bis anzKarten erstellen ----------------------
// -- Original: <a href="javascript:dsaMaske(0)"  id="f0" >0</a>
		
		ladeGesamt = "<div id='dsaTab4out'>\r\n"; // Anfang

		for (y = 0; y <= anzKarten; y++) {
			ladeGesamt = ladeGesamt + "<a href="  + "javascript:dsaMaske(" + y + ") id = f" + y + " >" + y + "</a>\r\n";			
		}

		ladeGesamt = ladeGesamt + "</div>\r\n"; // Abschluss
		
		dsaTab4.innerHTML = ladeGesamt; // Ab in die Maske
		
		for (y = 0; y <= anzKarten; y++) { // Sprungpunkt zuordnen und verstecken
			refListe[y] = document.getElementById("f"+y);	
			refListe[y].style.visibility = "hidden";
		}
	} // Ende findrefsdsa

// -- Alle Daten vorbereiten. Wird nur einmal aufgerufen

	function vorbereitung(){ 
	let y;

	// Initialisierung zum Start und Wiederholung  
		aktErgebnis = 0;
		aktProzent  = 0;
		aktKarte    = 0; 

	// 1. Benutzerhinweis	
		refHinweis.value = 'Bei Fragen fragen!';   // Hinweisfeld füttern
		
	// Liste von 0 bis Max erstellen
		for (y = 0; y <= anzKarten; y++) arrSort[y] = y;

	// Liste umsortieren
		arrSort.sort(function(a, b){return 0.5 - Math.random()});

	// erster Aufruf Shownext
		shownext();
	}

	function shownext(){// Überprüft das Ergebnis
		
		initnext();
		
		switch (jumpDB) { // in DB passenden Eintrag aufrufen
			case 1:
				alleFragen(arrSort[aktKarte]);	
			return;
			case 2:
				DSBFragen(arrSort[aktKarte]);
			return;
			case 3:
				alleFragen2(arrSort[aktKarte]);	
			return;
		}
	}

	function initnext(){// Initialisiert die Maske
	let y = 0;
	let anzAnt = "";
	let anzVer = "";

// -- Antworten und Checkboxex zurücksetzen, Farben wieder auf Standard
	
		for(y = 0;y < maxAntworten; y++) {
			anzAnt = "antwort"+y;
			Checkbox[y].checked                                = false;				// Angekreuztes löschen
			document.getElementById(anzAnt).innerHTML          = [''];				// Feld leeren
			document.getElementById(anzAnt).style.color        = "black";			// Zurück von Blau/Grün auf Schwarz 
			document.getElementById(anzAnt).style.visibility   = "visible";			// mögliche Unsichtbarkeit aufheben  
			document.getElementById(anzAnt).style.borderBottom = "1px solid blue";	//zurück zur blauen Linie
			Versteck[y].style.visibility                       = "visible";			// mögliche Unsichtbarkeit aufheben aus flash01-dsa-data
			Versteck[y].style.borderBottom                     = "1px solid blue";	// Zurück zur Blauen Grotte
		}

		refProzent.value  = 'Karte 0%';														// Hinweisfeld füttern
		reflfdKarte.value = 'Aktuelle Karte ist #' + (aktKarte+1) + ' von ' + maxKarten;	// Hinweisfeld füttern
	} // Ende initnext

	function zurueck(){ // Zurück und shownext()
		scroll(0,0);   // Position korrigieren, falls nötig
		aktPruefung = true;
		aktKarte--; 
		if(aktKarte < 0){
			aktKarte = 0;
			refHinweis.value  = 'Vor der 1. Karte ist nichts';   // Hinweisfeld füttern
		}
		
		shownext();
	}
	function weiter(){ // Vorwärts und shownext()
		scroll(0,0);   // Position korrigieren
	 	if (aktPruefung == false) pruefeKarte();
		aktPruefung = false;
		refListe[arrSort[aktKarte	]].style.visibility="visible";
		aktKarte++;
		if(aktKarte > anzKarten){
			aktKarte = anzKarten;
			refHinweis.value  = 'Neustart anklicken zum Neubeginn';   // Hinweisfeld füttern
		}
		
		shownext();
	}

// -- Karte überprüfen und zukünftig Ergebnisse zwischenspeichern

	function pruefeKarte(){// Überprüfen 
	let y = 0;
	let prozZaehler = 0;
	let prozKarte   = 0;
		aktProzent  = 0;
		aktPruefung = true;
	let anzAnt = "";
	let anzVer = "";

		const iterator = Loesung.values(); //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values

		for(const value of iterator) {
			anzAnt = "antwort"+y;
			
//			Eingabe[aktKarte][y] = Checkbox[y].checked;
			
			if((Checkbox[y].checked && value) || (!Checkbox[y].checked && !value)){ // Alles richtig: Richtig angekreuzt und nicht-Richtig nicht angekreuzt
				document.getElementById(anzAnt).style.color = "green";
				prozZaehler++
		}
			
			if((!Checkbox[y].checked && value) || (Checkbox[y].checked && !value)){ // Falsch: Richtig nicht angekreuzt und Falsch angekreuzt
				document.getElementById(anzAnt).style.color = "blue";
//				Checkbox[y].checked = false;    // Angekreuztes löschen
				prozZaehler--
		}
			y++	
		}
		
		if(prozZaehler < 0)prozZaehler = 0;

		aktProzent = Math.round(100 / y * prozZaehler);		// Aktuelle Karte in % 
		refProzent.value = "Erfolg: " + aktProzent + "%";	// Ausgabe aktueller Wert in  %
		
		sumProzent[aktKarte] = aktProzent; //Zwischenspeichern im Array 0 - 33
				
		const reducer = (accumulator, currentValue) => accumulator + currentValue;//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce	
				
		przErgebnis = sumProzent.reduce(reducer)/(aktKarte+1); // Aufsummieren und Division durch aktuelle Karte +1 
		
		refErgebnis.value = "Gesamt: " + Math.round(przErgebnis) + "%" // Hinweisfeld füttern
	} // Ende pruefekarte
	
	function uhrzeit() {
    var jetzt = new Date(),
        h = jetzt.getHours(),
        m = jetzt.getMinutes(),
        s = jetzt.getSeconds();
    m = fuehrendeNull(m);
    s = fuehrendeNull(s);
    document.getElementById('dsaUhr1').value = h + ':' + m + ':' + s;
    setTimeout(uhrzeit, 500);
    }
  
    function fuehrendeNull(zahl) {
    	zahl = (zahl < 10 ? '0' : '' )+ zahl;  
    return zahl;
  	}
} // Ende dsa01

// Ausserhalb der Kapselung
	
function dsaMaske(aktKarte){
	dsa01(6); // initnext
	aktPruefung = true;
	switch (jumpDB) { // in DB passenden Eintrag aufrufen
			case 1:
				alleFragen(aktKarte);	
			return;
			case 2:
				DSBFragen(aktKarte);
			return;
			case 3:
				alleFragen2(aktKarte);	
			return;
		}
	scroll(0,0);   // Position korrigieren
}

// -- toggle ist nicht mehr gekapselt

function toggle(angekreuzt){
//	if(refCheck[angekreuzt] == true)refCheck[angekreuzt] = false; else if(refCheck[angekreuzt] == false) refCheck[angekreuzt] = true; 
}
