/** LISTE01-DSA.JS
 * Copyright (c) 2019-present, Value Grid
 * C:\Users\Klaus\Docusaurus\website\node_modules\docusaurus\lib\static\js
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 
// Alles aus Maske initialisieren siehe flash dsb js

function dsaListe01(jump) {
let y;
let x;
let z; 	
let	ladeGesamt  = ""; // Leer und initialisiert

	switch (jump) {
		case 1: // Felder und Menge initialisieren
			anzKarten        = 33;  // Anzahl Elemente im Array = 34 (0=1)
			maxKarten        = 34;  // Anzahl Elemente im Array = 34 (1=1)
		break;
		case 2: // Felder und Menge initialisieren
			anzKarten        = 9;   // Anzahl Elemente im Array = 9	(0=1)
			maxKarten        = 10;  // Anzahl Elemente im Array = 9	(1=1)
		break;
		case 3: // Felder und Menge initialisieren
			anzKarten        = 122  // Anzahl Elemente im Array = 123 (0=1)
			maxKarten        = 123; // Anzahl Elemente im Array = 123 (1=1)
		break;
	}
 
	
	ladeFrage   = [];
	ladeAntwort = [];
	
	dsaListe01  = true; // Flag
	flagListe   = true; // Flag 

	// Liste von 0 bis Max erstellen
	for (y = 0; y <= anzKarten; y++) {
		switch (jump) {
		case 1: // Felder und Menge initialisieren
			alleFragen(y); // Daten kommen aus dsa-data
		break;
		case 2: // Felder und Menge initialisieren
			DSBFragen(y);
		break;
		case 3: // Felder und Menge initialisieren
			alleFragen2(y);
		break;
	}
		ladeFrage[y]   = "<p><thead>" + "(" + (y+1) + ") " + Frage  + "</thead></p>\r\n"; // Frage wird richtig hochgeladen

		ladeAntwort[y] =""; // Initialisiert und leer
			
		for (x = 0; x < anzAntworten; x++) {  // anzAntworten = Loesung.length; wird in data generiert
			ladeAntwort[y] = ladeAntwort[y] + '<tr><td class="cboxListe"><input type="checkbox"/></td><td class="antwListe">' + Antwort[x] + '\r\n' + '</td></tr>\r\n';
		}
			
		ladeGesamt = ladeGesamt + ladeFrage[y] + ladeAntwort[y];
			
		for (x = anzAntworten; x < maxAntworten; x++){ // Löschen überprüfen, sollte eigentlich nicht definiert sein
			Antwort[x] = ""; 	
		}	
	}

	dsaListe.innerHTML = ladeGesamt; // Ab in die Maske
	
	return dsaListe.innerHTML;
}

