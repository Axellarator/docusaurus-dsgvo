/** 13.12.19 FLASH01-DSA.JS
 * Copyright (c) 2019-present, Value Grid
 * C:\Users\Klaus\Docusaurus\website\node_modules\docusaurus\lib\static\js
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. */

/******************************************************************************
*************** Datenschutz Variablen initialisieren **************************
******************************************************************************/

'use strict';

let Frage			= "";	// Frage
let Antwort			= [];	// Antwort 
let Loesung			= [];	// Lösung False, true, Wert!
let Checkbox		= [];	// Checkbox angekreuzt!
let Versteck		= [];	// Felder verstecken
let refListe		= [];	// refListe für alle Fragen
let arrSort			= [];	// Unsortierte Liste von 0 bis Max
let arrEingaben		= [];	// Beinhaltet die Eingaben zu den Antworten
let flagListe		= false;// Listenerstellung umgeht Maskenerstellung
let flagPruefung	= false;// Karte nicht auf Eingabefehler geprüft
let flagCBox 		= false;// Liste mit Lösungen ausgeben

//initialize the numbers:
let maxAntwortfelder= 8;	// Max 10 Antwortfelder
let maxAntworten	= 8;	// Maximale Anzahl Antworten
let anzAntworten	= 0;	// Anzahl Antworten und Lösungen
let anzKarten		= 0;	// Anzahl Elemente im Array von 0 - x
let maxKarten		= 0;	// Anzahl Elemente im Array = x + 1
var aktKarte		= 0;	// Aktuelle Karte
var tmpKarte		= 0;	// Zwischenspeicher für weiter -- Aktuelle Karte
var jumpDB			= 0;	// Sprung in die richtige DB und initialisierung
let switcher		= 0;	// Schaltet die Tasten 
let check			= 0; 

let refErgebnis		= null; // Ergebnisausgabe in Fenster  
let refHinweis		= null;	// Hinweisausgabe in Fenster
let refProzent		= null;	// Ergebnisausgabe in Fenster
let przErgebnis		= 0;	// Ergebnissumme in % für alle Karten
let reflfdKarte		= null;	// Laufende Karte in Fenster
var aktProzent		= 0;	// Prozent Ergebnis für 1 Karte
var arrSumProz		= [];	// Werte pro Karte
var arrCBox		= [false,false,false,false,false,false,false,false]; // Test funktioniert, Größe gleich maxAntwortfelder
const arrKarten = [0,33,9,144,24,50,13];// Anzahl Fragen im Array von NULL bis X	

/******************************************************************************
************ initDB Variablen initialisiert anhand arrKarten ******************
******************************************************************************/

function initDB(jumpDB) {			// In Liste und in Flash duplizieren
let y = 0;

	anzKarten	= arrKarten[jumpDB];// Anzahl Elemente im Array = (von 0 bis x)
	maxKarten	= anzKarten + 1;	// Anzahl Elemente im Array = (von 1 bis x+1)
	flagListe	= false;			// Flag
	switcher = jumpDB;				// jumpDB = 0 bei Aufruf dsaFragen, 
	for (y=0; y < maxKarten; y++) {
		arrEingaben[y] = arrCBox; 	// Initialisierung für Karten
		arrSumProz[y] = 0;			// Speicher für Ergebnisse pro  Karte
	}
	dsaFragen(switcher);			// übernimmt switcher den Wert aus jumpDB
}

/******************************************************************************
*************** dsaFragen Start des Programms *********************************
******************************************************************************/

function dsaFragen(switcher) {

	switch (switcher) {
		case 1:			// alleFragen	AUDITOR 1
		jumpDB = 1;
		break;
		case 2:			// alleFragen1	BEAUFTRAGTE 1
		jumpDB = 2;
		break;
		case 3:			// alleFragen2	AUDITOR 2
		jumpDB = 3;
		break;
		case 4:			// alleFragen3	AUDITOR 3
		jumpDB = 4;
		break;
		case 5:			// alleFragen4	BEAUFTRAGTE 2
		jumpDB = 5;
		break;
		case 6:			// alleFragen5	IT-FRAGEN 1
		jumpDB = 6;
		break;
		case 10:
			initnext(); // Einsprung von dsaMaske(aktKarte)
		return;
		case 11:
			pruefeKarte();	// Einsprung von Masken
		return;
		case 12:
			weiter();		// Einsprung von Masken
		return;
		case 13:
			zurueck();		// Einsprung von Masken
		return;
	}
	
	findrefsdsa();    		// Aufbereitung des Bildschirms
	vorbereitung();			// Alles initialisieren

/* findrefsdsa Felder initialisieren und Referenzen anlegen (getElementById) **
******************************************************************************/

	function findrefsdsa() { 
	let y;	
	let	ladeGesamt  = "";     // Leer und initialisiert

/* Var Frage in Lernkarten-Masken initialisieren und Referenz erstellen *******
******************************************************************************/

	    Frage = document.getElementById("dsaFrage"); // 1. Zeile in Maske

/*************** ladeGesamt enthält den Aufbau der Masken *********************
******************************************************************************/
/* Original: <tr><td id="versteck0" ><input id="check0" type="checkbox" *******
** onClick="toggle(0)"/></td><td class="antwort" id="antwort0"></td></tr> *****
******************************************************************************/

		ladeGesamt = "<div id='dsaTab1out'>\r\n"; // 2. Zeile

		for(y=0;y < maxAntwortfelder;y++){ // Nachfolgende Zeilen für Checkboxen und Antworten
			ladeGesamt  = ladeGesamt + '<tr><td	id="versteck' + y + '" >' + '<input id="check' + y + '" type="checkbox" onClick="toggle(' + y + ')"/>' + '</td><td class="antwort" id="antwort' + y + '"></td></tr> \r\n'	
		}

		ladeGesamt = ladeGesamt + "</div>\r\n"; // Abschlusszeile
		
		dsaTab1.innerHTML = ladeGesamt; // in die Maske schreiben

/************ Arrays Checkbox und Versteck, siehe tab1 ************************
******************************************************************************/		

		for(y=0;y < maxAntwortfelder;y++){			// aus Tab1 initialisieren
			Checkbox[y] = document.getElementById("check" + y); 
			Versteck[y] = document.getElementById("versteck" + y);
		}

/************ Ereignisse initialisieren****************************************
******************************************************************************/		

		ladeGesamt  = "";     // Leer und initialisiert
		ladeGesamt  = '<input type="button" class="butknopf" id="Hinweis"  disabled readonly value="Hinweis"/>\r\n' 
					+ '<input type="button" class="butknopf" id="lfdKarte" disabled readonly value="Karte"/>\r\n'   
					+ '<input type="button" class="butknopf" id="Prozent"  disabled readonly value="Prozent"/>\r\n'   
					+ '<input type="button" class="butknopf" id="Ergebnis" disabled readonly value="Gesamtergebnis"/>\r\n'    
					+ '<input type="button" class="butknopf" id="dsaUhr1"  disabled readonly value="Uhrzeit"/>\r\n'
		dsaTab3.innerHTML = ladeGesamt; // in die Maske schreiben

/************ Referenzen erstellen ********************************************
******************************************************************************/		
		
		refErgebnis = document.getElementById("Ergebnis");
		reflfdKarte = document.getElementById("lfdKarte");
		refHinweis  = document.getElementById("Hinweis");
		refProzent  = document.getElementById("Prozent");
		
		uhrzeit(); // Eintrag Uhrzeit in document.getElementById('dsaUhr1')

/************ Sprungreferenzen von 0 bis anzKarten für Maske erstellen ********
******************************************************************************/				
/* Original: <a href="javascript:dsaMaske(0)"  id="f0" >0</a> *****************
** Die Einsprungpunkte werden von MarkDown einwandfrei angelegt ***************
******************************************************************************/
		
		ladeGesamt = "<div id='dsaTab4out'>\r\n";	// Anfangszeile

		for (y = 0; y <= anzKarten; y++) ladeGesamt = ladeGesamt + "<a href="  + "javascript:dsaMaske(" + y + ") id = f" + y + " >" + y + "</a>\r\n";			

		ladeGesamt = ladeGesamt + "</div>\r\n";		// Abschlusszeile
		
		dsaTab4.innerHTML = ladeGesamt; 			// in die Maske schreiben
		
		for (y = 0; y <= anzKarten; y++) { 			// Sprungpunkt zuordnen und verstecken
			refListe[y] = document.getElementById("f"+y);	
			refListe[y].style.visibility = "hidden";
		}
	} // Ende findrefsdsa

/******************************************************************************
***** vorbereitung bereitet das Frage Array vor und übergibt an shownext ******
******************************************************************************/

	function vorbereitung(){ 
	let y;

		aktProzent  = 0;
		aktKarte    = 0; 

		refHinweis.value = 'Bei Fragen fragen!';		// Hinweisfeld
		
		for (y = 0; y <= anzKarten; y++) arrSort[y] = y;// Liste bis Max erstellen

		arrSort.sort(function(a, b){return 0.5 - Math.random()});// Liste umsortieren
		
		shownext();	// erster Aufruf Shownext
		
	} // Ende vorbereitung

/******************************************************************************
*************** shownext bereitet die Daten/Masken vor ***********************
******************************************************************************/

	function shownext(){
		
		initnext(); 	// Antworten behalten !!!
		
		switch (jumpDB) { // in DB passenden Eintrag aufrufen
			case 1:
				alleFragen(arrSort[aktKarte]);	
			return;
			case 2:
				alleFragen1(arrSort[aktKarte]);
			return;
			case 3:
				alleFragen2(arrSort[aktKarte]);	
			return;
			case 4:
				alleFragen3(arrSort[aktKarte]);	
			return;
			case 5:
				alleFragen4(arrSort[aktKarte]);	
			return;
			case 6:
				alleFragen5(arrSort[aktKarte]);	
			return;			
		} // Ende Switch
		
		
	} // Ende shownext
	
/******************************************************************************
*************** initnext initialisiert die Masken *****************************
******************************************************************************/

	function initnext(){// 
	let y = 0;
	let anzAnt = "";

/************ Antworten und Checkboxen zurücksetzen ***************************
************* Farben wieder auf Standard **************************************
************* Hier Überlegung, das Ganze als Array Konstante einmal anlegen ***
******************************************************************************/
	
		for(y = 0;y < maxAntworten; y++) {
			anzAnt = "antwort"+y;
			Checkbox[y].checked                                = false;				// Angekreuztes löschen Änderung bei Zurück nötig
			document.getElementById(anzAnt).innerHTML          = [''];				// Feld leeren
			document.getElementById(anzAnt).style.color        = "black";			// Zurück von Blau/Grün auf Schwarz 
			document.getElementById(anzAnt).style.visibility   = "visible";			// mögliche Unsichtbarkeit aufheben  
			document.getElementById(anzAnt).style.borderBottom = "1px solid blue";	//zurück zur blauen Linie
			Versteck[y].style.visibility                       = "visible";			// mögliche Unsichtbarkeit aufheben aus flash01-dsa-data
			Versteck[y].style.borderBottom                     = "1px solid blue";	// Zurück zur Blauen Grotte
		}
		refProzent.value  = 'Karte 0%';													// Hinweisfeld 
		reflfdKarte.value = 'Aktuelle Karte ist #' + (aktKarte+1) + ' von ' + maxKarten;// Hinweisfeld 
	} // Ende initnext

/******************************************************************************
*************** zurueck geht eine Maske zurück und ruft shownext auf **********
******************************************************************************/

	function zurueck(){
//		scroll(0,0);   // Position korrigieren, falls nötig
		flagPruefung = true;
		aktKarte--; 
		if(aktKarte < 0){
			aktKarte = 0;
			refHinweis.value  = 'Vor der 1. Karte ist nichts';// Hinweisfeld
		}
		shownext();
	} // Ende ZURUECK

/******************************************************************************
** weiter geht eine Maske vor, ruft zuerst pruefeKarte auf, danach shownext ***
******************************************************************************/	

	function weiter(){ // Vorwärts und shownext()
//		scroll(0,0);   // Position korrigieren
	 	if (!flagPruefung) pruefeKarte();
		flagPruefung = false;
		

		if (tmpKarte < aktKarte) aktKarte = tmpKarte; // Mal schauen
		aktKarte++;
		tmpKarte = aktKarte + 1;
		if(aktKarte > anzKarten){
			aktKarte = anzKarten;
			refHinweis.value  = 'Neustart anklicken zum Neubeginn';   // Hinweisfeld füttern
		}
		shownext();
	} // Ende WEITER

/******************************************************************************
** pruefeKarte überprüft Richtig/Falsch und speichert die Ergebnisse **********
******************************************************************************/	
// -- Karte überprüfen und zukünftig Ergebnisse zwischenspeichern

	function pruefeKarte(){// Überprüfen 
	let y = 0;
	let lfdKarte = 0;
	let prozZaehler = 0;
	let prozKarte   = 0;
		aktProzent  = 0;
		flagPruefung = true;
	let anzAnt 		= "";
	let anzVer 		= "";
	let arrMaske	= [];

	const iterator = Loesung.values(); //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values

		for(const value of iterator) {
			anzAnt = "antwort"+y;
			
			if((Checkbox[y].checked && value) || (!Checkbox[y].checked && !value)){ // Alles richtig: Richtig angekreuzt und nicht-Richtig nicht angekreuzt
				document.getElementById(anzAnt).style.color = "green";
				prozZaehler++
			}
			if((!Checkbox[y].checked && value) || (Checkbox[y].checked && !value)){ // Falsch: Richtig nicht angekreuzt und Falsch angekreuzt
				document.getElementById(anzAnt).style.color = "blue";
				prozZaehler--
			}
			arrMaske[y] = Checkbox[y].checked; // Angekreuztes oder nicht Angekreuztes in arrMaske ablegen
			y++	
		}
		lfdKarte = arrSort[aktKarte];	// das Datum aus der Sort Pos an LfdKarte übergeben

		arrEingaben[lfdKarte] = arrMaske; // Werte aus arrMaske an arrEingaben und	 arrSumProz an die richtige Pos übergeben
		
		if(prozZaehler < 0)prozZaehler = 0;

		aktProzent = Math.round(100 / y * prozZaehler);		// Aktuelle Karte in % 
		refProzent.value = "Erfolg: " + aktProzent + "%";	// Ausgabe aktueller Wert in %
		
		arrSumProz[lfdKarte] = aktProzent;					//Zwischenspeichern im Array 
				
		const reducer = (accumulator, currentValue) => accumulator + currentValue;//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce	
				
		przErgebnis = arrSumProz.reduce(reducer)/(aktKarte+1); // Aufsummieren und Division durch aktuelle Karte +1 
		
		refErgebnis.value = "Gesamt: " + Math.round(przErgebnis) + "%" // Hinweisfeld füttern

KarteAnzeigen:
		
		refListe[lfdKarte].style.visibility = "visible";
		
		if (arrSumProz[lfdKarte] != 100) {
			refListe[lfdKarte].style.color = "orange";			
		}
		else {
			refListe[lfdKarte].style.color = "blue";	
		}			
	} // Ende pruefekarte

/******************************************************************************
************** uhrzeit übergibt aktuelle Tageszeit ****************************
******************************************************************************/	

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
  	} // Ende uhrzeit
} // Ende dsaFragen und Kapselung

/******************************************************************************
************** dsaMaske ist Einsprung für direktem Maskenaufruf ***************
******************************************************************************/	
	
function dsaMaske(aktKarte){

//	flagPruefung = true; // Don'T know yet

	switch (jumpDB) { // in DB passenden Eintrag aufrufen
		case 1:
			alleFragen(aktKarte);	
		break;
		case 2:
			alleFragen1(aktKarte);
		break;
		case 3:
			alleFragen2(aktKarte);	
		break;
		case 4:
			alleFragen3(aktKarte);	
		break;
		case 5:
			alleFragen4(aktKarte);	
		break;
		case 6:
			alleFragen5(aktKarte);	
		break;
	}
	aktKarte = tmpKarte;
} // Ende dsaMaske   

/******************************************************************************
************** dsalisten Listenerstellung für DB Einträge von 0 bis Max *******
******************************************************************************/	

function dsaListen(jumpDB) {
let y;
let x;
let z; 	
let	ladeGesamt  = "";					// Leer und initialisiert
let ladeFrage   = [];					// Lädt Frage zum Wegschreiben in Liste
let ladeAntwort = [];					// Lädt Antworten zum Wegschreiben in Liste
let ladeLoesung = [];					// Lädt Lösungen zum Wegschreiben in Liste

	if (jumpDB > 10) flagCBox = (flagCBox === true ? false : true); 	// On Off Switch Listen-Masken 

	jumpDB 		= (jumpDB >  10 ? jumpDB-10 : jumpDB);	// JumpDB normalisieren 

	anzKarten	= arrKarten[jumpDB];	// Anzahl Elemente im Array = (von 0 bis x)

	maxKarten	= anzKarten + 1;		// Anzahl Elemente im Array = (von 1 bis x+1)	

	flagListe	= true;					// Flag 
	
	for (y = 0; y <= anzKarten; y++) {	// Liste von 0 bis Max erstellen
				
		switch (jumpDB) {
			case 1: // Felder und Menge initialisieren
				alleFragen(y);
			break;
			case 2: // Felder und Menge initialisieren
				alleFragen1(y);
			break;
			case 3: // Felder und Menge initialisieren
				alleFragen2(y);
			break;
			case 4: // Felder und Menge initialisieren
				alleFragen3(y);
			break;
			case 5: // Felder und Menge initialisieren
				alleFragen4(y);
			break;
			case 6: // Felder und Menge initialisieren
				alleFragen5(y);
			break;
		} // Ende Switch
		
		ladeFrage[y]   = "<p><thead>" + "(" + (y+1) + ") " + Frage  + "</thead></p>\r\n"; // Frage wird richtig hochgeladen

		ladeLoesung[y] = ""; // Muss zum Anfang initialisiert werden und leer sein 
		
		ladeAntwort[y] = ""; // Muss zum Anfang initialisiert werden und leer sein 
				
		for (x = 0; x < anzAntworten; x++) {  // anzAntworten = Loesung.length; wird in data generiert

			if (Loesung[x] === true && flagCBox ) ladeLoesung[x] = '<tr><td class="cboxListe"><input type="checkbox" checked /></td>';
			else ladeLoesung[x] = '<tr><td class="cboxListe"><input type="checkbox"/></td>';			// TEST

			ladeAntwort[y] = ladeAntwort[y] + ladeLoesung[x] + '<td class="antwListe">' + Antwort[x] + '\r\n' + '</td></tr>\r\n';
		}
		ladeGesamt = ladeGesamt + ladeFrage[y] + ladeAntwort[y];
				
	} // Ende Y Schleife

	dsaListe.innerHTML = ladeGesamt; // Ab in die Maske
	
	return // dsaListe.innerHTML;
	
} // Ende dsaListen

/******************************************************************************
************** finishMaske füllt die Maske und löscht den Rest ****************
******************************************************************************/	

function finishMaske(aktKarte){

let y = 0;
let anzAnt = "";
let anzVer = "";

	document.getElementById("dsaFrage").innerHTML = Frage; 
	
	for (y = 0; y < anzAntworten; y++){
		anzAnt = "antwort"+y;
		document.getElementById(anzAnt).innerHTML = Antwort[y]; 
	}	
	for (y = 0; y < anzAntworten; y++){
		Checkbox[y].checked = arrEingaben[aktKarte][y]; // Angekreuztes oder nicht Angekreuztes in Checkbox ablegen
	}	
	for (y = anzAntworten; y < maxAntworten; y++){
		anzAnt = "antwort"+y;
		anzVer = "versteck"+y;
		document.getElementById(anzVer).style.visibility	= "hidden"; 
		document.getElementById(anzVer).style.borderBottom	= "solid white";
		document.getElementById(anzAnt).style.visibility	= "hidden"; 
		document.getElementById(anzAnt).style.borderBottom	= "solid white";
	}	
} // Funktion Ende

/******************************************************************************
************** toggle macht aktuell nichts ************************************
******************************************************************************/	

function toggle(angekreuzt){
//	
}

