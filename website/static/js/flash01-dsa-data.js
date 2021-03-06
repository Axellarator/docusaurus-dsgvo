/* 13.12.19 FLASH01-DSA-DATA.JS ***********************************************
 * Copyright (c) 2019 - present, Value Grid Engineering Group *****************
 * C:\Users\Klaus\Docusaurus\website\node_modules\docusaurus\lib\static\js ****
 * This source code is licensed under the MIT license found in the ************
 * LICENSE file in the root directory of this source tree. *******************/

'use strict';

/******************************************************************************
************** DB alleFragen **************************************************
******************************************************************************/	

function alleFragen(aktKarte){ /* AUDITOR 1 */
	
switch (aktKarte) {

	case 0:
		Frage = 'Wie können Verstöße gegen die Datenschutzgrundverordnung geahndet werden ?';
		Antwort[0] = ['Mit einer Geldbuße'];
		Antwort[1] = ['Strafrechtlich'];
		Antwort[2] = ['Arbeitsrechtlich'];
		Loesung = [true, true, true]; 
	break;
	case 1 :
		Frage = 'Sollte vor der eigentlichen Auditierung ein Einführungsgespräch stattfinden ?'; 
		Antwort[0] = ['Ja, um offene Fragen zu klären.'];
		Antwort[1] = ['Nein, das sollte auf jeden Fall unterbleiben, um die Auditierung nicht zu beeinflussen.'];
		Antwort[2] = ['Ja, um Sinn und Zweck des Audits darzulegen.'];
		Loesung = [true, false, true];
	break;
	case 2 :
		Frage = 'Die europäische DSGVO ist anzuwenden, wenn...';
		Antwort[0] = ['die verantwortliche Stelle ihren Sitz in Deutschland hat.'];
		Antwort[1] = ['die verantwortliche Stelle mit Sitz in Frankreich über eine Niederlassung in Deutschland verfügt und diese Niederlassung Datenerhebungen durchführt.'];
		Antwort[2] = ['die verantwortliche Stelle ihren Sitz in einem EWR-Mitgliedsstaat mit Niederlassungen in Deutschland hat.'];
		Loesung = [true, true, true];
	break;
	case 3 :
		Frage = 'Der Datenschutz-Beauftragte darf neben dieser Funktion...';
		Antwort[0] = ['jede andere Tätigkeit im Unternehmen ausüben.'];
		Antwort[1] = ['keine anderen Tätigkeiten im Unternehmen ausführen.'];
		Antwort[2] = ['nur solche Aufgaben übernehmen, deren Wahrnehmung zu keiner Interessenkollision führt.']
		Loesung = [false, false, true];	
	break;
	case 4 :
		Frage = 'Ein Ingenieurbüro bietet einem Kunden den Einsatz eines Spezialisten zur Unterstützung an. Der Kunde erhält hierzu ein Angebot mit dem Qualifikationsprofil des vorgesehenen Mitarbeiters (Name, Ausbildungsgang, berufliche Erfahrungen, etc.). Dieses Qualifikationsprofil kann an den Kunden geleitet werden:';
		Antwort[0] = ['im Rahmen der Zweckbestimmung des Arbeitsvertrages'];
		Antwort[1] = ['mit Zustimmung des Mitarbeiters'];
		Antwort[2] = ['ohne Zustimmung des Mitarbeiters'];
		Loesung = [true,true,false];		
	break;
	case 5 :
		Frage = 'Welche Stellen gelten als nicht-öffentlich im Sinne der Datenschutzgrundverordnung ?';
		Antwort[0] = ['Verwaltung der Stadt Kiel'];
		Antwort[1] = ['Tennis Verband Norddeutschland e.V.'];
		Antwort[2] = ['Deutsche Rentenversicherung Bund'];
		Loesung = [false, true, false];		
	break;
	case 6 :
		Frage = 'Die Erhebung, Verarbeitung und Nutzung von personenbezogenen Daten ist zulässig, wenn...';
		Antwort[0] = ['die Datenschutzgrundverordnung (DSGVO) dies erlaubt.'];
		Antwort[1] = ['andere Rechtsvorschriften dies anordnen oder erlauben.'];
		Antwort[2] = ['der Betroffene eingewilligt hat.'];
		Loesung = [true, true, true];	
	break;
	case 7 :
		Frage = 'Ein Softwareunternehmen hat seinen Sitz in Indien und erhebt personenbezogene Daten zu Werbezwecken in Deutschland. Welche Rechtsgrundlage gilt ?';
		Antwort[0] = ['Das Datenschutzabkommen der EU mit der indischen Regierung'];
		Antwort[1] = ['Die DSGVO'];
		Antwort[2] = ['keine der genannten Rechtsgrundlagen'];
		Loesung = [false, true, false];	
	break;
	case 8 :
		Frage = 'Beschreiben Sie den klassischen Ablauf eines Datenschutz-Audits.';
		Antwort[0] = ['Vorbereitung'];
		Antwort[1] = ['Durchführung'];
		Antwort[2] = ['Auswertung '];
		Loesung = [true, true, true];		
	break;
	case 9 :
		Frage = 'Der Datenschutz-Auditor…';
		Antwort[0] = ['weist auf datenschutzrechtliche Missstände im Unternehmen hin.'];
		Antwort[1] = ['ist berechtigt, den weiteren Einsatz von DV-Anwendungen im Unternehmen bei fehlender Rechtsgrundlage zu verbieten.'];
		Antwort[2] = ['ist berechtigt, bei Bedarf die Aufsichtsbehörde zur Klärung einzuschalten.'];
		Loesung = [true, false, false];		
	break;
	case 10 :
		Frage = 'Die Veröffentlichung von Personaldaten (Vorname, Name, Funktion im Unternehmen, dienstliche Telefonnummer und Email-Adresse) auf der Webseite eines Unternehmens...';
		Antwort[0] = ['ist zulässig, wenn die Nutzung dieser Daten zur Erfüllung des Geschäftszweckes im Rahmen der Zweckbestimmung der Arbeitsverhältnisses liegt. Art6'];
		Antwort[1] = ['ist zulässig, wenn die Einwilligung des Betroffenen vorliegt.'];
		Antwort[2] = ['bedarf immer der Einwilligung der Betroffenen.'];
		Loesung = [true, true, false];		
	break;
	case 11 :
		Frage = 'Zu den mit der automatisierten Verarbeitung personenbezogener Daten beschäftigten Personen in einem Unternehmen zählen folgende Personengruppen:';
		Antwort[0] = ['freie Mitarbeiter'];
		Antwort[1] = ['Praktikanten mit einer Praktikantenzeit von maximal 4 Wochen'];
		Antwort[2] = ['Leiharbeiter'];
		Loesung = [true, true, true];	
	break;
	case 12 :
		Frage = 'Welche/s Gewährleistungsziel/e muss/müssen mit technischen oder organisatorischen Maßnahmen gesichert werden ?';
		Antwort[0] = ['Vertraulichkeit'];
		Antwort[1] = ['Verschlüsselung'];
		Antwort[2] = ['Verfügbarkeit '];
		Loesung = [true, true, true];		
	break;
	case 13 :
		Frage = 'Ein Mitarbeiter legt auf einem Personalcomputer seines Unternehmens mit Hilfe einer Tabellenkalkulationssoftware eine Geburtstagsliste an und nimmt hier Anschriften, Telefonnummern, Geburtstage und Hobby naher Angehöriger und guter Freunde auf. Auf was ist zu achten ?';
		Antwort[0] = ['Die Nutzung des Personalcomputer für private Zwecke muss im Unternehmen erlaubt oder geduldet sein.'];
		Antwort[1] = ['Für dienstliche Zwecke dürfen diese Daten nicht verwendet werden.'];
		Antwort[2] = ['Der Datenschutz-Beauftragte des Arbeitgebers muss dem zustimmen.'];
		Loesung = [true, true, false];	
	break;
	case 14 :
		Frage = 'Welcher aus dem IT Grundschutzkompendium bekannte Eintrag verweist auf das SDM ?';
		Antwort[0] = ['INF.10'];
		Antwort[1] = ['ORP.3'];
		Antwort[2] = ['CON.2 '];
		Antwort[3] = ['DER.1'];
		Loesung = [false, false, true, false];	
	break;
	case 15 :
		Frage = 'Unter anderem bezieht sich der Anwendungsbereich der ISO 19011:2011 auf First-Party-Audits (interne Audits). Wie ist der Aufbau der Norm ? Sortieren Sie die Begriffe in die richtige Reihenfolge.';
		Antwort[0] = ['Kompetenz und Bewertung von Auditoren'];
		Antwort[1] = ['Durchführung eines Audits'];
		Antwort[2] = ['Anwendungsbereich'];
		Antwort[3] = ['Leiten und Lenken eines Auditprogramms'];
		Antwort[4] = ['Begriffe'];
		Antwort[5] = ['Auditprinzipien'];
		Antwort[6] = ['Normative Verweisungen'];
		Loesung = [true, true, true, true, true, true];
	break;
	case 16 :
		Frage = 'Nennen Sie die sieben typischen Auditaktivitäten in der richtigen Reihenfolge. (Nummer und Bezeichnung) ';
		Antwort[0] = ['Planen (Zeitplan…)'];
		Antwort[1] = ['Prüfen (Dokumente, Unterlagen)'];
		Antwort[2] = ['Vorbereitung'];
		Antwort[3] = ['Audittätigkeit vor Ort'];
		Antwort[4] = ['Auditbericht'];
		Antwort[5] = ['Abschluss des Berichts'];
		Antwort[6] = ['Mängelbehebung (nach Vereinbarung)'];
		Loesung = [true, true, true, true, true, true, true];
	break;
	case 17 :
		Frage = 'Was verstehen Sie unter dem Begriff Audit-Evidenz ?';
		Antwort[0] = ['Auszeichnungen, Aufsätze zu Theorien oder andere Information, die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[1] = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information, die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[2] = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information, die vorliegen und für die Auditkriterien irrelevant sind'];
		Loesung = [false, true, false];
	break;
	case 18 :
		Frage = 'Wer bewertet die Konformität einer Anforderungsnorm (in Europa) mit ?';
		Antwort[0] = ['IAF'];
		Antwort[1] = ['FIA'];
		Antwort[2] = ['IFA'];
		Antwort[3] = ['DAkkS'];
		Loesung = [true, false, false, true];
	break;
	case 19 :
		Frage = 'Stellen Sie bitte die sieben Begriffe aus der High Level Structure (HLS) der ISO (9001) Normen in der richtigen Reihenfolge dar. (Nummer und Bezeichnung z.B. 1. Bezeichnung)';
		Antwort[0] = ['Kontext Org'];
		Antwort[1] = ['Führung'];
		Antwort[2] = ['Planung'];
		Antwort[3] = ['Unterstützung'];
		Antwort[4] = ['Betrieb'];
		Antwort[5] = ['Bewertung der Leistung'];
		Antwort[6] = ['Verbesserung'];
		Loesung = [true,true,true,true,true,true,true];
	break;
	case 20 :
		Frage = 'Nennen Sie die technischen und organisatorischen Maßnahmen gem. Art. 32 Abs. 1 DSGVO für Verantwortliche (Art. 30 Abs. 1 lit. g) und Auftragsverarbeiter (Art. 30 Abs. 2 lit. d).' 
		Antwort[0] = ['Pseudonymisierung'];
		Antwort[1] = ['Verschlüsselung'];
		Antwort[2] = ['Gewährleistung der Vertraulichkeit'];
		Antwort[3] = ['Gewährleistung der Integrität'];
		Antwort[4] = ['Gewährleistung der Verfügbarkeit'];
		Antwort[5] = ['Gewährleistung der Belastbarkeit der Systeme'];
		Antwort[6] = ['Verfahren zur Wiederherstellung der Verfügbarkeit personenbezogener Daten nach einem physischen oder technischen Zwischenfall'];
		Antwort[7] = ['Verfahren regelmäßiger Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen'];
		Loesung = [true, true, true, true, true, true, true, true];
	break;
	case 21 :
		Frage = 'Wer legt die sogenannte Prüftiefe bei einem Audit fest ?';
		Antwort[0] = ['Auditor'];
		Antwort[1] = ['Geschäftsführer'];
		Antwort[2] = ['Vorstand'];
		Antwort[3] = ['Deutsche Akkreditierungsstelle'];
		Loesung = [true, false, false, false];
	break;
	case 22 :
		Frage = 'Was sind die möglichen Inhalte eines Datenschutzkonzeptes ? ';
		Antwort[0] = ['Dokumentation'];
		Antwort[1] = ['Organisatorische Mindestregelungen'];
		Antwort[2] = ['Datenschutzpolitik und Verantwortlichkeiten im Unternehmen'];
		Antwort[3] = ['Rechtliche Rahmenbedingungen im Unternehmen'];
		Antwort[4] = ['Bestehende technische und organisatorische Maßnahmen']; 
		Loesung = [true, true, true, true, true];
	break;
	case 23 :
		Frage = 'Welche Anforderungen sollte ein Datenschutzmanagementsystem enthalten ?';
		Antwort[0] = ['Ausrichtung & Ziele des Unternehmens'];
		Antwort[1] = ['Kundenanforderungen'];
		Antwort[2] = ['Regulatorische & gesetzliche Anforderungen'];
		Antwort[3] = ['Unternehmensfähigkeiten'];
		Loesung = [true, true, true, true];
	break;
	case 24 :
		Frage = 'Welche Anforderungen werden an einen internen Auditor gestellt ? ';
		Antwort[0] = ['Kompetenz'];
		Antwort[1] = ['Objektivität/Neutralität'];
		Antwort[2] = ['Unabhängigkeit'];
		Antwort[3] = ['Kommunikation'];
		Antwort[4] = ['Moderation'];
		Loesung = [true, true, true, true, true];
	break;
	case 25 :
		Frage = 'Was ist die Datenschutz-Grundverordnung ?';
		Antwort[0] = ['Europäische Regelung des Datenschutzrechts'];
		Antwort[1] = ['Weltweite Regelung des Datenschutzrechts'];
		Antwort[2] = ['Bundesdeutsche Regelung des Datenschutzrechts'];
		Loesung = [true, false, false];
	break;
	case 26 :
		Frage = 'Wer kann in der Regel zum Datenschutz-Beauftragten bestellt werden ?';
		Antwort[0] = ['Leiter der Datenverarbeitung'];
		Antwort[1] = ['Leiter der Logistik'];
		Antwort[2] = ['Geschäftsführer einer GmbH'];
		Loesung = [false, true, false];
	break;
	case 27 :
		Frage = 'Nennen Sie die Bestandteile eines Zwischenberichts zum Datenschutz-Audit.';
		Antwort[0] = ['Name des Unternehmens'];
		Antwort[1] = ['Name des Auditors'];
		Antwort[2] = ['Ergebnisse des Audits (nach DSGVO, BDSG)'];
		Loesung = [true, true, true];
	break;
	case 28 :
		Frage = 'Was sind personenbezogene Daten in einer Lieferantendatei ?';
		Antwort[0] = ['Firmenname und Ort von anderen Kunden (GmbHs) der Lieferanten (keine Einzel-GmbHs)'];
		Antwort[1] = ['Daten über die Geschäftsführer der Lieferanten und deren Hobby'];
		Antwort[2] = ['Allgemeine Geschäftsbedingungen der Lieferanten'];
		Loesung = [false, true, false];
	break;
	case 29 :
		Frage = 'Ist kein Datenschutz-Beauftragter zu bestellen, so...';
		Antwort[0] = ['muss keine Übersicht der Verarbeitungen geführt werden.'];
		Antwort[1] = ['muss eine Übersicht der Verarbeitungen erstellt werden.'];
		Antwort[2] = ['ist der Leiter der Datenverarbeitung automatisch für die Aufgaben des Datenschutz-Beauftragten zuständig.'];
		Loesung = [false, true, false];
	break;
	case 30 :
		Frage = 'Dritter ist...';
		Antwort[0] = ['eine Tochtergesellschaft soweit diese nicht Auftragsverarbeiter ist.'];
		Antwort[1] = ['die Konzernmutter in Japan, wenn ihr 95% der verantwortlichen Stelle gehören.'];
		Antwort[2] = ['jede Person der verantwortlichen Stelle außer dem Betroffenen.'];
		Loesung = [true, true, false];
	break;
	case 31 :
		Frage = 'Welches Dokument sollte im Rahmen eines Voraudits eingesehen werden ?';
		Antwort[0] = ['Richtlinien und Regeln, gegebenenfalls Verträge mit Kunden und Lieferanten'];
		Antwort[1] = ['Organigramm des Unternehmens'];
		Antwort[2] = ['das Verfahrensverzeichnis'];
		Loesung = [true, true, true];
	break;
	case 32 :
		Frage = 'Nennen Sie die Anforderungen, die an eine rechtskonforme Einwilligung zu stellen sind.';
		Antwort[0] = ['Freiwilligkeit'];
		Antwort[1] = ['Zweckbindung'];
		Antwort[2] = ['Widerspruchsmöglichkeit'];
		Antwort[3] = ['Kopplungsverbot'];
		Loesung = [true, true, true, true];
	break;
	case 33 :
		Frage = 'Wann ist eine Datenschutzfolgeabschätzung insbesondere erforderlich ?';
		Antwort[0] = ['bei jeder seit Mai 2009 neu geplanten automatisierten Verarbeitung von personenbezogenen Daten'];
		Antwort[1] = ['bei systematischer und umfassender Bewertung persönlicher Aspekte natürlicher Personen, die auf automatisierte Verarbeitung einschließlich Profiling gründet und die ihrerseits als Grundlage für Entscheidungen dient, die Rechtswirkung gegenüber natürlichen Personen entfalten oder diese in ähnlich erheblicher Weise beeinträchtigen'];
		Loesung = [false, true];
	break;
	
} // Switch Ende
	
	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (!flagListe) finishMaske(aktKarte);

} // Funktion Ende

/******************************************************************************
************** DB alleFragen1 *************************************************
******************************************************************************/	

function alleFragen1(aktKarte){ /* BEAUFTRAGTER 1 */

switch (aktKarte) {
	case 0:
		Frage = 'Die DSGVO ist für die Verantwortlichen zwingend ab wann zu beachten ?';
		Antwort[0] = ['Verstöße gegen die DSGVO können von den Behörden auch vor dem 25.05.2018 sanktioniert werden.'];
		Antwort[1] = ['Am 24.05.2016 und unmittelbar anwendbar'];
		Antwort[2] = ['Die DSGVO ist am 24.05.2016 in Kraft getreten, verbindlich anzuwenden erst ab dem 25.05.2018'];
		Loesung = [false, false, true]; 
	break; 
	case 1:
		Frage = 'Die Datenschutzgrundverordnung ...';
		Antwort[0] = ['... gilt unmittelbar in allen Mitgliedstaaten.'];
		Antwort[1] = ['... enthält Öffnungsklauseln, welche es den Mitgliedstaaten ermöglichen, im Rahmen der DSGVO ergänzend eigene Datenschutzvorschriften zu erlassen.'];
		Antwort[2] = ['... muss erst in eigenes Recht (BDSG) umgesetzt werden und gilt dann unmittelbar.'];
		Loesung = [true, true, false]; 
	break; 
	case 2:
		Frage = 'Anonymisierte Daten ...';
		Antwort[0] = ['fallen in den Schutzbereich der DSGVO.'];
		Antwort[1] = ['fallen nicht in den Schutzbereich der DSGVO.'];
		Antwort[2] = ['werden in Art. 5 DSGVO definiert.'];
		Loesung = [false, true, false]; 
	break; 
	case 3:
		Frage = 'Das neue Bundesdatenschutzgesetz (BDSG neu) ...';
		Antwort[0] = ['... ist mit Wirkung zum 25.05.2018 angepasst worden und ist Teil des Datenschutz-Anpassungs- u. Umsetzungsgesetzes (DSAnpUG-EU).'];
		Antwort[1] = ['... setzt die DSGVO um.'];
		Antwort[2] = ['... spezifiziert in Teil 1 und 2 datenschutzrechtliche Regelungen entsprechend der Öffnungsklauseln der DSGVO.'];
		Loesung = [true, false, false]; 
	break; 
	case 4:
		Frage = 'In welchem Zeitraum sind die Betroffenenrechte vom Verantwortlichen zu erfüllen ?';
		Antwort[0] = ['innerhalb von 42 Tagen ab Geltendmachung der Betroffenenrechte.'];
		Antwort[1] = ['innerhalb von 24 Stunden nach Eingang des Antrags des Betroffenen mit der Option, diese Frist auf 72 Stunden zu verlängern.'];
		Antwort[2] = ['unverzüglich bzw. grundsätzlich innerhalb von einem Monat'];
		Loesung = [false, false, true]; 
	break; 
	case 5:
		Frage = 'Welche Grundsätze benennt die DSGVO ?';
		Antwort[0] = ['Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz.'];
		Antwort[1] = ['Zweckbindung, Datenminimierung, Richtigkeit.'];
		Antwort[2] = ['Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht.'];
		Loesung = [true, true, true]; 
	break; 
	case 6:
		Frage = 'Welche wesentlichen Voraussetzungen müssen entsprechend der DSGVO vorliegen, damit eine Person zum Datenschutz-Beauftragten (DSB) benannt werden kann ?';
		Antwort[0] = ['Der DSB erfüllt die Mindestanforderungen für den Datenschutz an Fachkunde und Unabhängigkeit nach § 7 BDSG.'];
		Antwort[1] = ['Insbesondere wird der DSB aufgrund seines IT-Fachwissens, das er zur Erfüllung seiner Aufgaben benötigt, benannt'];
		Antwort[2] = ['Der DSB besitzt die Fähigkeiten zur Erfüllung der in Artikel 39 genannten Aufgaben.'];
		Loesung = [true, false, true]; 
	break; 
	case 7:
		Frage = 'Sie prüfen eine schriftliche Einwilligung gem. Art. 7 DSGVO des Betroffenen zur Datenerhebung. Worauf müssen Sie achten, damit diese Einwilligung formal-juristisch korrekt ist ?';
		Antwort[0] = ['Der Verantwortliche sollte nachweisen können, dass die betroffene Person ihre Einwilligung zu dem Verarbeitungsvorgang gegeben hat.'];
		Antwort[1] = ['Die Einwilligung erfolgte <strong>freiwillig</strong>, <strong>zwanglos</strong> und <strong>nachweislich</strong>.'];
		Antwort[2] = ['Die Einwilligung kann jederzeit, durch die betroffene Person, widerrufen werden.'];
		Loesung = [true, true, true]; 
	break; 
	case 8:
		Frage = 'Muss der Verantwortliche im Falle einer Datenerhebung beim Betroffenen seinen Informationspflichten nachkommen ? Und wenn Ja, wann ?';
		Antwort[0] = ['Ja'];
		Antwort[1] = ['Nein'];
		Antwort[2] = ['Innerhalb von 72 Stunden bzw. innerhalb eines Monats'];
		Loesung = [true, false, false]; 
	break; 
	case 9:
		Frage = 'Erläutern Sie den Begriff <strong>Pseudonymisieren</strong>.';
		Antwort[0] = ['Austausch der personenbezogenen Daten, so dass eine Nachvollziehbarkeit für Dritte ausgeschlossen ist und nicht mehr spezifisch betroffenen Personen zugeordnet werden kann.'];
		Antwort[1] = ['Bei der Pseudonymisierung wird der Name durch ein Pseudonym, zum Beispiel eine Chiffre oder Hash-Code, ersetzt. Diese zusätzlichen Informationen werden gesondert aufbewahrt und unterliegen technischen und organisatorischen Maßnahmen, die gewährleisten, dass eine Re-Pseudonymisierung nur noch eingeschränkt möglich ist.'];
		Antwort[2] = ['Die pseudonymisierten Daten unterliegen nicht mehr der DSGVO, da diese Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können.'];
		Loesung = [true, true, false]; 
	break; 	
	
} // Switch Ende

	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (!flagListe) finishMaske(aktKarte);

} // Funktion Ende

/******************************************************************************
************** DB alleFragen2 *************************************************
******************************************************************************/	

function alleFragen2(aktKarte){ /* BEAUFTRAGTER 1 */
	
switch (aktKarte) {

	case 0:
		Frage = 'Welche der folgenden Leistungen eines Vertragspartners stellt / stellen eine Auftragsdatenverarbeitung dar ?'; 
		Antwort[0] = ['Wartung und Betreuung einer Telekommunikationsanlage'];
		Antwort[1] = ['Fernwartung eines Lohn- und Gehaltsprogramms'];
		Antwort[2] = ['Beratung bei der Produktauswahl eines Customer Relationship Management Systems (CRM)'];
		Loesung = [true, true, false];	
	break;
	case 1:
		Frage = 'Welche Anforderungen werden an einen internen Auditor gestellt ?';
		Antwort[0] = ['Kompetenz'];
		Antwort[1] = ['Objektivität'];
		Antwort[2] = ['Unabhängigkeit'];
		Antwort[3] = ['Kommunikation'];
		Antwort[4] = ['Moderation'];
		Loesung = [true, true, true, true, true];		
	break;
	case 2:
		Frage = 'Gibt es eine internationale Norm für Datenschutz-Audits ?';
		Antwort[0] = ['Ja, diese werden von der ISO 9001 abgedeckt.'];
		Antwort[1] = ['Nein, diese könnten aber teilweise aus der ISO 19011 abgeleitet werden.'];
		Antwort[2] = ['Ja, diese sind in der ISO 27005 zusammengefasst.'];
		Loesung = [false,true,false];	
	break;
	case 3:
		Frage = 'Welche Daten sind personenbezogen im Sinne einer bestimmten natürlichen Person ?';
		Antwort[0] = ['Geburtsdatum lebender Personen ab 1946'];
		Antwort[1] = ['Schulabschluss, Berufsgruppe'];
		Antwort[2] = ['Name, Vorname, Wohnort, Straße, Hausnummer'];
		Loesung = [false,false,true];	
	break;
	case 4:
		Frage = 'Welche der folgenden Elemente sind mit einer Schwachstellenanalyse in Verbindung zu bringen ?';
		Antwort[0] = ['Freitextsammlungen'];
		Antwort[1] = ['Ishikawa-Diagramm'];
		Antwort[2] = ['Checklisten'];
		Antwort[3] = ['SWOT-Analyse'];
		Antwort[4] = ['unstrukturierte Analytik'];
		Loesung = [false, true, false, false, false];		
	break;
	case 5:
		Frage = 'Nennen Sie bitte die Inhalte, die ein Unternehmen in einer Datenschutzpolitik unterbringen sollte ?';
		Antwort[0] = ['Zweck der Politik'];
		Antwort[1] = ['Definitionen von Schlüsselbegriffen'];
		Antwort[2] = ['Prinzipien und Zwecke der Verarbeitung'];
		Antwort[3] = ['Schlüsselanforderungen oder -kontrollen'];
		Antwort[4] = ['Schlüsselrollen und ihre Verantwortlichkeiten'];
		Antwort[5] = ['Ernennung der federführenden Aufsichtsbehörde'];
		Loesung = [true, true, true, true, true, false];		
	break;
	case 6:
		Frage = 'Ein Softwareunternehmen hat seinen Sitz in Indien und erhebt personenbezogene Daten zu Werbezwecken in Deutschland. Welche Rechtsgrundlage gilt ?';
		Antwort[0] = ['Das Datenschutzabkommen der EU mit der indischen Regierung'];
		Antwort[1] = ['Keine der genannten Rechtsgrundlagen'];
		Antwort[2] = ['Die DSGVO'];
		Loesung = [false,false,true];	
	break;
	case 7:
		Frage = 'Für welche/n Zweck/e dürfen personenbezogene Daten auch ohne Einwilligung des Betroffenen verwendet werden ?';
		Antwort[0] = ['Zur Abwicklung von Verträgen'];
		Antwort[1] = ['Wenn es zur Erfüllung von vertraglichen Verpflichtungen notwendig ist'];
		Antwort[2] = ['Zur Überprüfung der Kreditwürdigkeit'];
		Loesung = [true,true,false];	
	break;
	case 8:
		Frage = 'Nennen Sie die Maßnahmen zum Schutz von personenbezogenen Kundendaten auf einem Notebook, das vom Vertrieb im Außendienst verwendet wird.';
		Antwort[0] = ['Festplattenverschlüsselung'];
		Antwort[1] = ['BIOS Kennwort'];
		Antwort[2] = ['Berechtigungskonzept'];
		Antwort[3] = ['Benutzername + Passwort'];
		Antwort[4] = ['Diebstahlschutz (Kensington-Schloss)'];
		Antwort[5] = ['Aufbewahrung in Safe'];
		Antwort[6] = ['keine Nutzung im WLAN oder am Hot Spot'];
		Antwort[7] = ['Nutzung von VPN Verbindungen'];
		Loesung = [true, true, true, true, true, true, true, true];		
	break;
	case 9:
		Frage = 'Gestattet der Arbeitgeber seinen Arbeitnehmern die private Nutzung des betrieblichen E-Mail-Dienstes,...';
		Antwort[0] = ['darf der Arbeitgeber alle E-Mails einsehen, da er nicht unterscheiden kann, ob eine E-Mail dienstlicher oder privater Natur ist.'];
		Antwort[1] = ['sollte er entsprechende Regelungen zur Nutzung, Archivierung und Einsichtnahme treffen.'];
		Antwort[2] = ['ist der Arbeitgeber Telekommunikationsdiensteanbieter.'];
		Loesung = [false,true,true];	
	break;
	case 10:
		Frage = 'Die Verarbeitung personenbezogener Daten innerhalb internationaler Konzerne durch Konzernteile in Drittstaaten oder einem Drittland ist zulässig, wenn:';
		Antwort[0] = ['ausreichende Garantien zum Schutz des Persönlichkeitsrechtes vorliegen, die von der zuständigen Aufsichtsbehörde genehmigt sind.'];
		Antwort[1] = ['der betroffene Arbeitnehmer eines Konzernbereichs in einem Mitgliedsstaat des Europäischen Wirtschaftsraumes (EWR) beschäftigt ist.'];
		Antwort[2] = ['der Betroffene eingewilligt hat.'];
		Loesung = [true,true,true];	
	break;
	case 11:
		Frage = 'Wann ist eine Datenschutzfolgeabschätzung insbesondere erforderlich ?';
		Antwort[0] = ['bei systematischer und umfassender Bewertung persönlicher Aspekte natürlicher Personen, die auf automatisierte Verarbeitung einschließlich Profiling gründet und die ihrerseits als Grundlage für Entscheidungen dient, die Rechtswirkung gegenüber natürlichen Personen entfalten oder diese in ähnlich erheblicher Weise beeinträchtigen'];
		Antwort[1] = ['bei jeder seit Mai 2009 neu geplanten automatisierten Verarbeitung von personenbezogenen Daten'];
		Loesung = [true,false];	
	break;
	case 12:
		Frage = 'Was versteht man unter Binding Corporate Rules (BCR) ?';
		Antwort[0] = ['Ein ausreichendes Datenschutzniveau in Drittstaaten stellen auch so genannte Binding Corporate Rules (verbindliche Unternehmensregelungen/-richtlinien) sicher. Dabei legt sich eine Gruppe von Unternehmen (z.B. ein Konzern) rechtsverbindlich Regeln in Bezug auf den Umgang mit personenbezogenen Daten in der Gruppe auf.'];
		Antwort[1] = ['Mit Binding Corporate Rules lässt sich entsprechend für alle Datentransfers innerhalb einer Gruppe ein angemessenes Datenschutzniveau sicherstellen (nicht aber für übermittlungen an gruppenfremde Unternehmen).'];
		Antwort[2] = ['BCR müssen von der zuständigen Aufsichtbehörde genehmigt werden'];
		Loesung = [true,true,true];	
	break;
	case 13:
		Frage = 'Nennen Sie Beispiele für Maßnahmen zur Zutrittskontrolle.';
		Antwort[0] = ['Schlüssel'];
		Antwort[1] = ['Empfang / Wachdienst'];
		Antwort[2] = ['Code-Karten, Token, Chips, etc.'];
		Antwort[3] = ['Biometrische Identifikationsverfahren'];
		Antwort[4] = ['Zäune, Mauern, etc.'];
		Antwort[5] = ['Einrichtung von Sicherheitszonen'];
		Antwort[6] = ['Regelungen für Besucher, Lieferanten'];
		Loesung = [true, true, true, true, true, true, true];		
	break;
	case 14:
		Frage = 'Welches ist KEINE reguläre Aufgabe des Beauftragten für den Datenschutz ?';
		Antwort[0] = ['Er entscheidet über den Einsatz einer neuen Software, mit der personenbezogene Daten verarbeitet werden.'];
		Antwort[1] = ['Er hat ein Mitspracherecht bei der Einstellung von neuen Mitarbeitern für die Personalabteilung.'];
		Loesung = [true,true];	
	break;
	case 15:
		Frage = 'Die inhaltliche Änderung von falschen Daten auf Antrag eines Betroffenen ist:';
		Antwort[0] = ['eine Datenerhebung'];
		Antwort[1] = ['eine Datenberichtigung'];
		Antwort[2] = ['eine Datenübermittlung'];
		Loesung = [false,true,false];	
	break;
	case 16:
		Frage = 'Welche Eigenschaften sollte ein Auditor mitbringen ?';
		Antwort[0] = ['Unparteilichkeit / Unabhängigkeit'];
		Antwort[1] = ['Integrität'];
		Antwort[2] = ['Kompetenz'];
		Antwort[4] = ['Sorgfalt'];
		Loesung = [true, true, true, true, true];		
	break;
	case 17:
		Frage = 'Die Veröffentlichung von Personaldaten (Vorname, Name, Funktion im Unternehmen, dienstliche Telefonnummer und Email-Adresse) auf der Webseite eines Unternehmens...';
		Antwort[0] = ['ist zulässig, wenn die Einwilligung des Betroffenen vorliegt.'];
		Antwort[1] = ['ist zulässig, wenn die Nutzung dieser Daten zur Erfüllung des Geschäftszweckes im Rahmen der Zweckbestimmung der Arbeitsverhältnisses liegt.'];
		Antwort[2] = ['bedarf immer der Einwilligung der Betroffenen.'];
		Loesung = [true,true,false];	
	break;
	case 18:
		Frage = 'Ist kein Datenschutz-Beauftragter zu bestellen, so...';
		Antwort[0] = ['muss keine Übersicht der Verarbeitungen geführt werden.'];
		Antwort[1] = ['muss eine Übersicht der Verarbeitungen erstellt werden.'];
		Antwort[2] = ['ist der Leiter der Datenverarbeitung automatisch für die Aufgaben des Datenschutz-Beauftragten zuständig.'];
		Loesung = [false,true,true];	
	break;
	case 19:
		Frage = 'Personenbezogene Daten als Anhang zu einer Email...';
		Antwort[0] = ['dürfen als Email nie versendet werden.'];
		Antwort[1] = ['müssen verschlüsselt sein, wenn eine hinreichende Schutzwürdigkeit der Daten gegeben ist.'];
		Antwort[2] = ['müssen immer nach dem Stand der Technik verschlüsselt sein.'];
		Loesung = [false,true,true];	
	break;
	case 20:
		Frage = 'Ein Konzern aus Frankreich erhebt personenbezogene Daten in Deutschland ohne eigene Niederlassung in Deutschland. Welche Rechtsgrundlage gilt ?';
		Antwort[0] = ['das Bundesdatenschutzgesetz'];
		Antwort[1] = ['die EU-Datenschutzgrundverordnung'];
		Antwort[2] = ['keine der genannten Rechtsgrundlagen'];
		Loesung = [false,true,false];	
	break;
	case 21:
		Frage = 'Welche Arten von Unternehmenszielen gibt es und erläutern Sie diese ?';
		Antwort[0] = ['Formalziele = übergeordnete Ziele, die für das Bestehen eines Unternehmens wichtig sind; Beispiele: Gewinnerzielung, Rentabilität, Umsatzwachstum, Vergrößerung des Marktanteils, Qualitätsverbesserung'];
		Antwort[1] = ['Sachziele = untergeordnete Ziele, die für die Realisierung der Formalziele notwendig sind; Beispiele: Produktinnovation, Rationalisierung, Marktmonopolisierung'];
		Loesung = [true,true];	
	break;
	case 22:
		Frage = 'Ist ein Vertreter für den Datenschutz-Beauftragten zu benennen ?';
		Antwort[0] = ['Nein, muss nicht benannt werden.'];
		Antwort[1] = ['Ja, muss immer benannt werden.'];
		Antwort[2] = ['Das hängt von der Größe des Unternehmens ab.'];
		Loesung = [true,false,false];	
	break;
	case 23:
		Frage = 'Das BDSG (alt) schreibt das Führen einer übersicht vor - mit Angaben zu: Beschreibung der Daten/-kategorien, betroffene Personengruppen, Zweckbestimmung, Maßnahmen zur Gewährleistung der Sicherheit der Verarbeitung. Welche der folgenden Aussage ist korrekt ?';
		Antwort[0] = ['Der Datenschutz-Beauftragte muss diese Übersicht erstellen und führen'];
		Antwort[1] = ['Es ist zulässig, dass der Datenschutz-Beauftragte von der Leitung damit beauftragt wird, die Übersicht gemeinsam mit den Fachabteilungen zu erstellen.'];
		Antwort[2] = ['Die Übersicht ist dem Datenschutz-Beauftragten zur Verfügung zu stellen.'];
		Loesung = [false,true,true];	
	break;
	case 24:
		Frage = 'Welche Anforderungen sollte ein Datenschutzmanagementsystem enthalten ?';
		Antwort[0] = ['Ausrichtung und Ziele des Unternehmens'];
		Antwort[1] = ['Kundenanforderungen'];
		Antwort[2] = ['Regulatorische und gesetzliche Anforderungen'];
		Antwort[4] = ['Unternehmensfähigkeiten'];
		Loesung = [true, true, true, true, true];		
	break;
	case 25:
		Frage = 'Welcher Grundatz gilt für organisatorische und technische Maßnahmen ?';
		Antwort[0] = ['Unter Berücksichtigung des Stands der Technik, der Eintrittswahrscheinlichkeit und Schwere treffen der Verantwortliche und der Auftragsverarbeiter geeignete technische und organisatorische Massnahmen.'];
		Antwort[1] = ['Erforderlich sind Maßnahmen nur, die nach Ermessen der verantwortlichen Stelle geeignet sind, den von ihr angestrebten Schutzzweck zu erreichen.'];
		Antwort[2] = ['Erforderlich sind Maßnahmen nur, die nach Ermessen der Betroffenen geeignet sind, den von den Betroffenen angestrebten Schutzzweck zu erreichen.'];
		Loesung = [true,false,false];	
	break;
	case 26:
		Frage = 'Wo lassen sich im Regelfall die Geschäftszwecke einer nicht-öffentlichen Stelle ableiten ?';
		Antwort[0] = ['aus der Satzung'];
		Antwort[1] = ['aus dem Handelsregistereintrag'];
		Antwort[2] = ['aus einem Werbeflyer'];
		Loesung = [true,true,false];	
	break;
	case 27:
		Frage = 'Was ist die Datenschutz-Grundverordnung ?';
		Antwort[0] = ['Europäische Regelung des Datenschutzrechts'];
		Antwort[1] = ['Weltweite Regelung des Datenschutzrechts'];
		Antwort[2] = ['Bundesdeutsche Regelung des Datenschutzrechts'];
		Loesung = [true,false,false];	
	break;
	case 28:
		Frage = 'Welche Punkte sollten auf jeden Fall im Auditbericht fixiert werden ?';
		Antwort[0] = ['der Fragenkatalog die Checklisten'];
		Antwort[1] = ['die Auditteilnehmer'];
		Antwort[2] = ['die Auditkosten'];
		Loesung = [true,true,false];	
	break;
	case 29:
		Frage = 'Wann ist eine Prüfung der Auftragnehmer notwendig ?';
		Antwort[0] = ['vor Aufnahme der Datenverarbeitung'];
		Antwort[1] = ['in regelmäßigen Abständen'];
		Antwort[2] = ['Auf eine Prüfung kann verzichtet werden, wenn alle Mitarbeiter auf Vertraulichkeit und Geheimhaltung verpflichtet sind.'];
		Loesung = [true,true,false];	
	break;
	case 30:
		Frage = 'Was verstehen Sie unter dem Begriff Audit-Evidenz ?';
		Antwort[0] = ['Auszeichnungen, Aufsätze zu Theorien oder andere Information die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[1] = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[2] = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information die vorliegen und für die Auditkriterien irrelevant sind'];
		Loesung = [false,true,false];	
	break;
	case 31:
		Frage = 'Sie bereiten ein Datenschutz-Audit einer TK-Anlage vor. Welche typischen Gefahrenquellen bei TK-Anlagen treten hierbei auf ?';
		Antwort[0] = ['Die Administrations- und Konfigurationsschnittstelle (z.B. unsicherer Administratorzugang).'];
		Antwort[1] = ['Die Wartung der Anlagen (z.B. Zugriff durch Fernwartung).'];
		Antwort[2] = ['Einbindung von Endgeräten an die TK-Anlage durch offene, unsichere Schnittstellen.'];
		Antwort[3] = ['Auswertungen für die Gebührenabrechnung im Rahmen von Leistungs-und Verhaltenskontrollen.'];
		Antwort[4] = ['Technische Risiken allgemein (Mithören von Gesprächen, Abhören von Räumen, Ausfall der Anlagen, etc.)'];
		Loesung = [true, true, true, true, true];		
	break;
	case 32:
		Frage = 'Welche/s Dokument/e sollten im Rahmen eines Voraudits eingesehen werden ?';
		Antwort[0] = ['Richtlinien und Regeln, gegebenenfalls Verträge mit Kunden und Lieferanten'];
		Antwort[1] = ['das Verfahrensverzeichnis'];
		Antwort[2] = ['Organigramm des Unternehmens'];
		Loesung = [true,true,true];	
	break;
	case 33:
		Frage = 'Welcher aus dem IT Grundschutzkompendium bekannte Eintrag verweist auf das SDM ?';
		Antwort[0] = ['INF.10'];
		Antwort[1] = ['ORP.3'];
		Antwort[2] = ['DER.1'];
		Antwort[3] = ['CON.2'];
		Loesung = [false, false, false, true];
	break;
	case 34:
		Frage = 'Welche Audittypen kennen Sie ?';
		Antwort[0] = ['Internes Audit'];
		Antwort[1] = ['Lieferantenaudit'];
		Antwort[2] = ['Zertifizierungsaudit'];
		Loesung = [true,true,true];	
	break;
	case 35:
		Frage = 'Sie überprüfen das Backup-Konzept in der IT-Abteilung eines Unternehmens. Welche flankierenden, organisatorischen Maßnahmen sind zwingend bei einem Backup zu berücksichtigen ?';
		Antwort[0] = ['Auslagerung der Backups in unterschiedliche Brandschutzsektoren.'];
		Antwort[1] = ['Prüfung der tatsächlich erfolgten Sicherung.'];
		Antwort[2] = ['Prüfung der Wiederherstellbarkeit der Datensicherung.'];
		Antwort[3] = ['Sicherstellung der Rücksicherungs-Reihenfolge.'];
		Antwort[4] = ['Dokumentation der gesamten Abläufe.'];
		Antwort[5] = ['Regelmäßiges Training von Backup und Restore.'];
		Loesung = [true, true, true, true, true, true];		
	break;
	case 36:
		Frage = 'Welche/s Ziel/e soll/en mit einem Datenschutz-Audit erreicht werden ?';
		Antwort[0] = ['Verhinderung von Bußgeldzahlungen'];
		Antwort[1] = ['Absicherung des Managements vor zivil- und strafrechtlichen Verfahren'];
		Antwort[2] = ['Ansehen und Image bei Kunden, Partnern, Mitarbeitern, Lieferanten sichern'];
		Loesung = [true,true,true];	
	break;
	case 37:
		Frage = 'Für das sichere Löschen einer Datei mit besonderen personenbezogenen Daten auf einem magnetischen Datenträger ist es ausreichend...';
		Antwort[0] = ['den Datenträger neu zu formatieren.'];
		Antwort[1] = ['die Datei mit einem speziellen Löschprogramm mehrfach zu überschreiben.'];
		Antwort[2] = ['die Datei mit dem Lösch-Befehl des Betriebssystems MS-Windows zu löschen.'];
		Loesung = [false,true,false];	
	break;
	case 38:
		Frage = 'Gibt es in Deutschland klare und verbindliche Regelungen zur Durchführung von Datenschutz-Audits ?';
		Antwort[0] = ['Ja, diese sind im Datenschutzauditgesetz fixiert.'];
		Antwort[1] = ['Ja, diese sind im Falle einer Auftragsdatenverarbeitung komplett in §11 BDSG (alt) definiert.'];
		Antwort[2] = ['Nein, diese müssen von den Beteiligten festgelegt werden.'];
		Loesung = [false,false,true];	
	break;
	case 39:
		Frage = 'Nennen Sie die Anforderungen, die bei einer Auftragsverarbeitung vom Auftraggeber zu erfüllen sind:';
		Antwort[0] = ['sorgfältige Auswahl des Auftragnehmers'];
		Antwort[1] = ['schriftlicher Auftrag'];
		Antwort[2] = ['Festlegung der technischen und organisatorischen Maßnahmen'];
		Antwort[3] = ['Prüfung der Einhaltung der vereinbarten technischen und organisatorischen Maßnahmen'];
		Antwort[4] = ['fachliche Weisung durch den Auftraggeber'];
		Antwort[5] = ['Vorgaben zur Regelung von Unterauftragnehmerverhältnissen'];
		Antwort[6] = ['Wahrnehmung der Kontrollrechte (z.B. regelmäßige Überwachung des Auftragnehmers)'];
		Loesung = [true, true, true, true, true, true, true];		

	break;
	case 40:
		Frage = 'Gehört die Erstellung eines Datenschutz-Konzeptes zu den Aufgaben des Datenschutz-Beauftragten ?';
		Antwort[0] = ['Ja'];
		Antwort[1] = ['Nein'];
		Antwort[2] = ['Ja, ab einer Unternehmensgröße von mehr als 20 Mitarbeitern.'];
		Loesung = [false,true,false];	
	break;
	case 41:
		Frage = 'Für eine Auftragsverarbeitung spricht, wenn...';
		Antwort[0] = ['die Verarbeitung nur mit Daten erfolgt, die der Auftraggeber zur Verfügung stellt.'];
		Antwort[1] = ['eine eigene Entscheidungsbefugnis des Auftragnehmers über die Daten fehlt.'];
		Antwort[2] = ['der Auftragnehmer mit dem Auftraggeber nicht wirtschaftlich verbunden ist.'];
		Loesung = [false,true,false];	
	break;
	case 42:
		Frage = 'Welche Maßnahmen sind bei einer Beobachtung öffentlich zugänglicher Räume mittels einer Videokamera vorgeschrieben ?';
		Antwort[0] = ['Die Videoüberwachung ist z.B. durch Hinweisschilder erkennbar zu machen.'];
		Antwort[1] = ['Keine, da im öffentlich zugänglichen Raum nur öffentliche Stellen zuständig sind und für diese das BDSG (alt) nicht gilt.'];
		Antwort[2] = ['Die Daten sind unverzüglich zu löschen, wenn sie zur Erreichung des Zwecks nicht mehr erforderlich sind.'];
		Loesung = [true,false,true];	
	break;
	case 43:
		Frage = 'Besondere Arten personenbezogener Daten sind:';
		Antwort[0] = ['Angaben über die persönlichen Vermögensverhältnisse'];
		Antwort[1] = ['personenbezogene Daten zu Kreditkartenkonten'];
		Antwort[2] = ['die Angabe einer Gewerkschaftszugehörigkeit'];
		Loesung = [false,false,true];	
	break;
	case 44:
		Frage = 'Was macht ein gutes internes Audit aus ?';
		Antwort[0] = ['Auditkriterien'];
		Antwort[1] = ['Den richtigen Auditor zu finden'];
		Antwort[2] = ['Die Auditmethoden'];
		Antwort[3] = ['Ein Auditprogramm'];
		Antwort[4] = ['Berichterstattung'];
		Loesung = [true, true, true, true, true];		
	break;
	case 45:
		Frage = 'Was sind personenbezogene Daten in einer Lieferantendatei ?';
		Antwort[0] = ['Firmenname und Ort von anderen Kunden (GmbHs) der Lieferanten (keine Einzel-GmbHs)'];
		Antwort[1] = ['Daten über die Geschäftsführer der Lieferanten und deren Hobby'];
		Antwort[2] = ['Allgemeine Geschäftsbedingungen der Lieferanten'];
		Loesung = [false,true,false];
	break;
	case 46:
		Frage = 'Ersetzt eine Betriebsvereinbarung die Notwendigkeit einer Vorabkontrolle bzw. eine Datenschutzfolgeabschätzung ?';
		Antwort[0] = ['Ja'];
		Antwort[1] = ['Nein'];
		Antwort[2] = ['Nicht mehr seit Einführung der EU-DSGVO'];
		Loesung = [false,true,true];	
	break;
	case 47:
		Frage = 'In welchem/n Fall/ Fällen liegen personenbezogene Daten in einer Datei über Mitbewerber vor ?';
		Antwort[0] = ['bei Angaben über die berufliche Qualifikation von namentlich bekannten Mitarbeitern der Mitbewerber'];
		Antwort[1] = ['bei vollständigen Angaben über Mitbewerber aus dem Handelsregister'];
		Antwort[2] = ['bei technischen Informationen über Patente und Forschungsergebnissen von Mitbewerbern'];
		Loesung = [true,false,false];
	break;
	case 48:
		Frage = 'Ein Datenschutz-Audit...';
		Antwort[0] = ['kann in Einzelfällen sinnvoll sein (z.B. wenn ein Unternehmen der Meldepflicht unterliegt).'];
		Antwort[1] = ['wird immer von der zuständigen Aufsichtsbehörde anlassbezogen angeordnet und ist von der verantwortlichen Stelle durchzuführen.'];
		Antwort[2] = ['muss mindestens alle 2 Jahre durchgeführt werden.'];
		Loesung = [true,false,false];	
	break;
	case 49:
		Frage = 'Die Einführung eines Datenschutzmanagementsystems lohnt sich...';
		Antwort[0] = ['da dies ohnehin die Aufgabe des Datenschutz-Beauftragten ist.'];
		Antwort[1] = ['zur Erhöhung der Akzeptanz der Datenverarbeitung bei Kunden, Lieferanten und Mitarbeitern.'];
		Antwort[2] = ['als Beitrag zur Minimierung der Risiken von Schadensersatzansprüchen und Bußgeldern.'];
		Loesung = [false,true,true];	
	break;
	case 50:
		Frage = 'Können regelmäßige interne Datenschutzaudits in Teilen mit anderen internen Audits verbunden werden ?';
		Antwort[0] = ['Nein, auf keinen Fall.'];
		Antwort[1] = ['Ja, mit Prüfungen des QM-Beauftragten.'];
		Antwort[2] = ['Ja, mit Prüfungen durch die Finanzaufsichtsbehörden.'];
		Loesung = [false,true,false];	
	break;
	case 51:
		Frage = 'Wer bewertet die Konformität einer Anforderungsnorm (in Europa) mit ?';
		Antwort[0] = ['IFA'];
		Antwort[1] = ['IAF'];
		Antwort[2] = ['DAkkS'];
		Antwort[3] = ['FIA'];
		Loesung = [true, false, true,false];
	break;
	case 52:
		Frage = 'Sie führen ein Datenschutz-Audit in einem Unternehmen durch, bei dem die private E-Mail- und Internetnutzung am Arbeitsplatz gestattet ist. Welche Gesetze bilden hierfür die rechtliche Grundlage und was ist im besonderen zu beachten ?';
		Antwort[0] = ['Der Arbeitgeber wird zum Diensteanbieter von Telekommunikations- bzw. Telemediendiensten.'];
		Antwort[1] = ['TKG = Telekommunikationsgesetz'];
		Antwort[2] = ['TMG = Telemediengesetz'];
		Antwort[3] = ['StGB = Strafgesetzbuch'];
		Loesung = [true, true, true,false];
	break;
	case 53:
		Frage = 'Was versteht man unter dem sogenannten Auditprogramm ?';
		Antwort[0] = ['Das Auditprogramm ist eine schriftliche Planung der internen Audits.'];
		Antwort[1] = ['Das Unternehmen muss die Planung der internen Audits nachweisen.'];
		Antwort[2] = ['Es muss dargelegt werden, welche Prozesse oder Bereiche wann auditiert werden und wie lange diese auditiert werden.'];
		Antwort[3] = ['Wenn ein Prozess oder Bereich in der Vergangenheit Probleme aufgeworfen hat, dann kann dieser Bereich eventuell häufiger auditiert werden.'];
		Antwort[4] = ['Diese Erfahrungen müssen also beim Auditprogramm berücksichtigt werden.'];
		Antwort[5] = ['Oftmals erstreckt sich das Auditprogramm über einen dreijährigen Zyklus.'];
		Antwort[6] = ['Daneben werden die Auditoren festgelegt.'];
		Loesung = [true, true, true, true, true, true, true];		
	break;
	case 54:
		Frage = 'Nennen Sie die sieben typischen Auditaktivitäten in der richtigen Reihenfolge.';
		Antwort[0] = ['Planen des Audits'];
		Antwort[1] = ['Prüfung der Dokumentation'];
		Antwort[2] = ['Vorbereitung auf die Audittätigkeiten'];
		Antwort[3] = ['Audittätigkeiten vor Ort'];
		Antwort[4] = ['Auditbericht'];
		Antwort[5] = ['Abschluss des Audits'];
		Antwort[6] = ['Prüfung der Mängelbehebung'];

	break;
	case 55:
		Frage = 'Was verstehen wir im Allgemeinen unter Handlungsgrundsatz ?';
		Antwort[0] = ['Diversifizierung'];
		Antwort[1] = ['Leitlinie'];
		Antwort[2] = ['Zuverlässigkeit'];
		Antwort[3] = ['Maxime'];
		Loesung = [true, true, true, true];		
	break;
	case 56:
		Frage = 'Skizzieren Sie die Vorgehensweise (Zyklus) nach welcher sich ein Datenschutzmanagementsystem orientiert ?';
		Antwort[0] = ['Plan (Planen / Festlegen des DSMS)'];
		Antwort[1] = ['Do (Einführen / Umsetzen)'];
		Antwort[2] = ['Check (überwachen / überprüfen)'];
		Antwort[3] = ['Act (Instandhalten / Verbessern)'];
		Loesung = [true, true, true, true];		
	break;
	case 57:
		Frage = 'Nennen Sie die Ziele eines Datenschutzaudits.';
		Antwort[0] = ['Stärkung der Selbstverantwortung und Stimulierung von Wettbewerb'];
		Antwort[1] = ['Verringerung des Vollzugsdefizits'];
		Antwort[2] = ['Kontinuierliche Verbesserung des Datenschutzes und der Datensicherung'];
		Antwort[3] = ['Datenschutzaudit als Lernsystem'];
		Loesung = [true, true, true, true];		
	break;
	case 58:
		Frage = 'Die Verantwortung in der EU-Datenschutzgrundverordnung (DSGVO) hat:';
		Antwort[0] = ['der Datenschutz-Beauftragte'];
		Antwort[1] = ['die Leitung der verantwortlichen Stelle'];
		Antwort[2] = ['jeder Mitarbeiter'];
		Loesung = [false,true,false];	
	break;
	case 59:
		Frage = 'Was verbirgt sich hinter dem Begriff SDM. Und welche Beschreibung trifft hier zu ?';
		Antwort[0] = ['Begriff SDM = Standard-Datenschutzmodell'];
		Antwort[1] = ['Beschreibung = Als SDM bezeichnen die deutschen Datenschutzaufsichtsbehörden eine Methode, mit der für den Bereich des operativen Datenschutzes sichergestellt ist, dass eine einheitliche Datenschutz-Beratungs- und Prüfpraxis in Bezug, insbesondere, zu den technisch-organisatorischen Maßnahmen der DS-GVO erreicht werden kann.'];
		Loesung = [true,false];	
	break;
	case 60:
		Frage = 'Nennen Sie die Tätigkeiten die zur Vorbereitung eines Auditplans gehören.';
		Antwort[0] = ['Auditzeitplan festlegen'];
		Antwort[1] = ['Auditteam festlegen'];
		Antwort[2] = ['Teilnehmer bestimmen'];
		Antwort[3] = ['Fragenkatalog erstellen'];
		Antwort[4] = ['Auditplan versenden'];
		Loesung = [true, true, true, true, true];		
	break;
	case 61:
		Frage = 'Ein Unternehmen hat seinen Sitz in Liechtenstein und lässt personenbezogene Daten durch eine Niederlassung in Deutschland verarbeiten. Welche Rechtsgrundlage gilt ?';
		Antwort[0] = ['die EU-DSGVO'];
		Antwort[1] = ['das Liechtensteiner Gesetz zum Schutz personenbezogener Daten'];
		Antwort[2] = ['die EU-Verordnung 27-11 zum Datenschutz innerhalb des Europäischen Wirtschaftsraumes (EWR)'];
		Loesung = [true,false,false];	
	break;
	case 62:
		Frage = 'Wann liegt eine automatisierte Verarbeitung vor ?';
		Antwort[0] = ['Personenbezogene Daten werden mittels Datenverarbeitungsanlagen erhoben, verarbeitet oder genutzt.'];
		Antwort[1] = ['Excel-Liste mit Fehlzeiten der Mitarbeiter (namentlich) der Musterfirma GmbH.'];
		Loesung = [true,true];	
	break;
	case 63:
		Frage = 'Was verbirgt sich hinter den folgenden Normen ? DIN EN ISO 9000 BSI IT GS DIN EN ISO/IEC 27001 DIN ISO 31000 ?';
		Antwort[0] = ['DIN EN ISO 9000 - Qualitätsmanagementsysteme - Grundlagen und Begriffe'];
		Antwort[1] = ['BSI IT GS - Bundesamt für Sicherheit in der Informationstechnik &ndash - IT Grundschutz'];
		Antwort[2] = ['DIN EN ISO/IEC 27001 - IT-Sicherheitsverfahren - Informationssicherheits-Managementsysteme - Anforderungen'];
		Antwort[3] = ['DIN ISO 31000 - Risikomanagement - Leitlinien'];
		Loesung = [true, true, true, true];		
	break;
	case 64:
		Frage = 'Wer legt die sogenannte Prüftiefe bei einem Audit fest ?';
		Antwort[0] = ['Vorstand'];
		Antwort[1] = ['Deutsche Akkreditierungsstelle'];
		Antwort[2] = ['Auditor'];
		Antwort[3] = ['Geschäftsführer'];
		Loesung = [false, false, true, false];
	break;
	case 65:
		Frage = 'Was ist der Scope eines Managementsystems ?';
		Antwort[0] = ['Derjenige Bereich der Organisation, in dem das Managementsystem ausgeweitet werden soll'];
		Antwort[1] = ['Derjenige Bereich der Organisation, in dem das Managementsystem abgelöst werden soll'];
		Antwort[2] = ['Derjenige Bereich der Organisation, in dem das Managementsystem angewendet werden soll'];
		Loesung = [false,false,true];	
	break;
	case 66:
		Frage = 'Gegenstand eines Datenschutz-Audit ist/ sind:';
		Antwort[0] = ['die Prüfung der Verpflichtung der Mitarbeiter auf das Datengeheimnis'];
		Antwort[1] = ['die Prüfung der Beachtung der Rechte Betroffener'];
		Antwort[2] = ['die Rechtmäßigkeitsprüfung der Datenverarbeitung'];
		Loesung = [true,true,true];	
	break;
	case 67:
		Frage = 'Mit einem Datenschutz-Audit wird folgendes Ziel verfolgt:';
		Antwort[0] = ['Datenschutz-freundliche Produkte und Dienstleistungen werden gefördert'];
		Antwort[1] = ['positive Darstellung nach außen und innen'];
		Antwort[2] = ['erhöhte Rechtssicherheit gegenüber Behörden, Gerichten und Betroffenen'];
		Loesung = [true,true,true];
	break;
	case 68:
		Frage = 'Die zuständige Aufsichtsbehörde...';
		Antwort[0] = ['darf auch anlassunabhängige Kontrollen durchführen'];
		Antwort[1] = ['bedarf der Zustimmung des Bundesbeauftragten für Datenschutz und Informationsfreiheit, wenn sie ohne konkreten Anlass eine Stelle prüfen will.'];
		Antwort[2] = ['darf eine Stelle nur anlassbezogen prüfen.'];
		Loesung = [true,false,false];
	break;
	case 69:
		Frage = 'Im Unternehmen ABC GmbH ist ein IT-Sicherheitsbeauftragter benannt:';
		Antwort[0] = ['Er führt Aufgaben durch, die durch Auftrag oder Vertrag vom Unternehmen festgelegt sind.'];
		Antwort[1] = ['Er muss Vorgesetzter des Datenschutz-Beauftragten sein.'];
		Antwort[2] = ['Er muss dem Datenschutz-Beauftragten unterstellt sein.'];
		Loesung = [true,false,false];
	break;
	case 70:
		Frage = 'Unter anderem bezieht sich der Anwendungsbereich der ISO 19011:2011 auf First-Party-Audits (interne Audits). Wie ist der Aufbau der Norm ? Sortieren Sie die Begriffe in die richtige Reihenfolge';
		Antwort[0] = ['Kompetenz und Bewertung von Auditoren'];
		Antwort[1] = ['Durchführung eines Audits'];
		Antwort[2] = ['Anwendungsbereich'];
		Antwort[3] = ['Leiten und Lenken eines Auditprogramms'];
		Antwort[4] = ['Begriffe'];
		Antwort[5] = ['Auditprinzipien'];
		Antwort[6] = ['Normative Verweisungen'];
		Loesung = [true, true, true, true, true, true, true];		
	break;
	case 71:
		Frage = 'Die DSGVO ist anzuwenden, wenn...';
		Antwort[0] = ['die verantwortliche Stelle ihren Sitz in Deutschland hat.'];
		Antwort[1] = ['die verantwortliche Stelle ihren Sitz in einem EWR-Mitgliedsstaat mit Niederlassungen in Deutschland hat.'];
		Antwort[2] = ['die verantwortliche Stelle mit Sitz in Frankreich über eine Niederlassung in Deutschland verfügt und diese Niederlassung Datenerhebungen durchführt.'];
		Loesung = [true,true,true];
	break;
	case 72:
		Frage = 'Der Datenschutz-Beauftragte...';
		Antwort[0] = ['berichtet der zuständigen Aufsichtsbehörde.'];
		Antwort[1] = ['ist bei der Anwendung seiner Fachkunde auf dem Gebiet des Datenschutzes weisungsfrei.'];
		Antwort[2] = ['ist berichtspflichtig gegenüber der höchsten Managementebene nach DS-GVO.'];
		Loesung = [true,true,true];
	break;
	case 73:
		Frage = 'Die Erhebung, Verarbeitung und Nutzung von personenbezogenen Daten ist zulässig, wenn...';
		Antwort[0] = ['der Betroffene eingewilligt hat.'];
		Antwort[1] = ['die Datenschutzgrundverordnung (DSGVO) dies erlaubt.'];
		Antwort[2] = ['andere Rechtsvorschriften dies anordnen oder erlauben.'];
		Loesung = [true,true,true];
	break;
	case 74:
		Frage = 'Die Rechte eines Betroffenen auf Auskunft können mittels Vertrag zwischen der verantwortlichen Stelle und dem Betroffenen...';
		Antwort[0] = ['nicht ausgeschlossen werden'];
		Antwort[1] = ['ausgeschlossen werden.'];
		Antwort[2] = ['eingeschränkt werden'];
		Loesung = [true,false,false];
	break;
	case 75:
		Frage = 'Dritter ist...';
		Antwort[0] = ['jede Person der verantwortlichen Stelle außer dem Betroffenen.'];
		Antwort[1] = ['die Konzernmutter in Japan, wenn ihr 95% der verantwortlichen Stelle gehören.'];
		Antwort[2] = ['eine Tochtergesellschaft soweit diese nicht Auftragsverarbeiter ist.'];
		Loesung = [false,true,true];
	break;
	case 76:
		Frage = 'Was ist ein Managementsystem ?';
		Antwort[0] = ['Managementsysteme können als ein systematisches, gezieltes und geplantes Herangehen an die Umsetzung der Unternehmenspolitik und von Unternehmenszielen bezeichnet werden.'];
		Antwort[1] = ['Menge von auf einander bezogenen oder sich gegenseitig beeinflussenden Elementen einer Organisation, mit der bezweckt wird, Richtlinien, Ziele und Prozesse zum Erreichen dieser Ziele festzulegen.'];
		Antwort[1] = ['Managementsysteme geben vor, wie man Prozesse optimieren kann. Diese Vorgaben werden durch die Erfassung und die Beschreibung einer Aufbau- und einer Ablauforganisation sowie deren kontinuierliche Verbesserung erfüllt.'];
		Loesung = [true, true, true];
	break;
	case 77:
		Frage = 'Wo ist ein Datenschutz-Audit vorgeschrieben ?';
		Antwort[0] = ['in der EU-Richtlinie 95/46/EG'];
		Antwort[1] = ['im BDSG und in der DS-GVO'];
		Antwort[2] = ['in keiner der genannten Vorschriften'];
		Loesung = [false,false,true];
	break;
	case 78:
		Frage = 'Was kann zur Bestimmung des konkreten Handlungsbedarfs mittels Gap-Analyse/Soll-Ist-Abgleich beitragen ?';
		Antwort[0] = ['Festlegung der neuen gesetzlichen Anforderungen'];
		Antwort[1] = ['Bestandsaufnahme des betrieblichen Soll-Zustands'];
		Antwort[2] = ['Bestimmung des Handlungs- und Umsetzungsbedarfs'];
		Antwort[3] = ['Risikoanalyse'];
		Loesung = [true, true, true, true];		
	break;
	case 79:
		Frage = 'Welches Recht des Betroffenen ist unabdingbar ?';
		Antwort[0] = ['Widerspruch gegen die Nutzung der Daten zum Zweck der Werbung'];
		Antwort[1] = ['Recht auf Berichtigung inkorrekter Daten'];
		Antwort[2] = ['Jederzeitige Rücknahme einer Einwilligung mit Wirkung für die Zukunft'];
		Loesung = [true,true,true];
	break;
	case 80:
		Frage = 'Erklären Sie in Stichworten die Begriffe Vertraulichkeit und Integrität von personenbezogenen Daten.';
		Antwort[0] = ['Daten dürfen niemals unberechtigten Dritte zugänglich sein.'];
		Antwort[1] = ['Vertraulichkeit ist die Eigenschaft, dass eine Information unautorisierten Personen, Entitäten oder Prozessen weder offenbart noch verfügbar gemacht wird.'];
		Antwort[2] = ['Integrität von Daten ist die Eigenschaft, die seiner unautorisierten Veränderung der Datei vorbeugt.'];
		Antwort[3] = ['Die Manipulation muss verhindert werden.'];
		Loesung = [true, true, true, true];		

	break;
	case 81:
		Frage = 'Nennen Sie bitte die Grundsätze des Qualitätsmanagements aus der DIN EN ISO 9000.';
		Antwort[0] = ['Kundenorientierung'];
		Antwort[1] = ['Führung'];
		Antwort[2] = ['Systemorientierter Managementansatz'];
		Antwort[3] = ['Ständige Verbesserung'];
		Antwort[4] = ['Einbeziehung der Mitarbeiter'];
		Antwort[5] = ['Prozessorientierter Ansatz'];
		Antwort[6] = ['Sachbezogener Ansatz'];
		Antwort[7] = ['Lieferantenbeziehungen'];
		Loesung = [true, true, true, true, true, true, true, true];		
	break;
	case 82:
		Frage = 'Welche Merkmale zeichnen nach BDSG (alt) die Datenverarbeitung aus ?';
		Antwort[0] = ['Erheben'];
		Antwort[1] = ['Speichern'];
		Antwort[2] = ['Verändern'];
		Antwort[3] = ['Übermitteln'];
		Antwort[4] = ['Sperren'];
		Antwort[5] = ['Löschen'];
		Loesung = [true, true, true, true, true, true];		
	break;
	case 83:
		Frage = 'Welche Außenwirkung kann ein Datenschutz-Audit haben ?';
		Antwort[0] = ['mehr Transparenz für Kunden und Lieferanten'];
		Antwort[1] = ['höhere Rechtssicherheit ggü. Aufsichtsbehörden'];
		Loesung = [true,true];
	break;
	case 84:
		Frage = 'Nennen Sie Beispiele für Maßnahmen zur Erhöhung der Verfügbarkeit von IT-Systemen.';
		Antwort[0] = ['USV, unterbrechungsfreie Stromversorgung'];
		Antwort[1] = ['Replikation, redundante Systeme'];
		Antwort[2] = ['Plattenspiegelung, RAID-Systeme'];
		Antwort[3] = ['regelmäßiges Backup'];
		Antwort[4] = ['Ausweich-Rechenzentrum, Remote-Rechenzentrum'];
		Antwort[5] = ['Notfallpläne'];
		Loesung = [true, true, true, true, true];		
	break;
	case 85:
		Frage = 'Nennen Sie die Forderungen, die an eine rechtskonforme Einwilligung zu stellen sind.';
		Antwort[0] = ['Freie und freiwillige Entscheidung'];
		Antwort[1] = ['Hinweis auf den Zweck'];
		Antwort[2] = ['Hinweis auf Folgen und Nachteile bei Verweigerung'];
		Antwort[3] = ['Im Regelfall schriftlich'];
		Antwort[4] = ['Zusammen mit anderen Erklärungen besonders hervorzuheben: Widerspruchmöglichkeit, Hinweis auf ggf. existierende Risiken'];
		Loesung = [true, true, true, true, true];		
	break;
	case 86:
		Frage = 'Nennen Sie die Dinge, die bei der Planung eines Datenschutz-Audits zu beachten sind.';
		Antwort[0] = ['Festlegung: Was wird auditiert (Org-Einheit, Prozess, Aufgabe, ...) ?'];
		Antwort[1] = ['Festlegung: Wie wird auditiert (welche Methoden/Verfahren) ?'];
		Antwort[2] = ['Festlegung: Wann wird auditiert (Terminplanung) ?'];
		Antwort[3] = ['Festlegung der Auditteilnehmer, Festlegung der Auditoren (Auditteam)'];
		Antwort[4] = ['Festlegung der zu verwendenden Checklisten'];
		Antwort[5] = ['Festlegung der Verfahren zur Audit-Auswertung/Bewertung'];
		Antwort[6] = ['Festlegung der Dokumentation des Audit (Art, Gliederung, ...)/Auditbericht'];
		Loesung = [true, true, true, true, true, true, true];		
	break;
	case 87:
		Frage = 'Wer muss bei einer Datenschutzpanne mit erheblichen Auswirkungen für den Betroffenen (Informationspflicht bei unrechtmäßiger Kenntniserlangung von Daten) informiert werden ?';
		Antwort[0] = ['die zuständige Aufsichtsbehörde'];
		Antwort[1] = ['die Staatsanwaltschaft'];
		Antwort[2] = ['die Betroffenen'];
		Loesung = [true,false,true];
	break;
	case 88:
		Frage = 'über welche Qualifikationen müssen Datenschutz-Beauftragte verfügen ?';
		Antwort[0] = ['Notwendige Fachkunde'];
		Antwort[1] = ['Studium der Betriebswirtschaftslehre'];
		Antwort[2] = ['Mindestens ein Jahr Betriebszugehörigkeit im Unternehmen'];
		Loesung = [true,false,false];
	break;
	case 89:
		Frage = 'Nennen Sie bitte die Begriffe die im Zusammenhang mit der IST-Erfassung und- Analyse stehen.';
		Antwort[0] = ['Selbstaufschreibung (Primärerhebung)'];
		Antwort[1] = ['Dokumentenanalyse (Sekundärerhebung)'];
		Antwort[2] = ['Fragebogen (Primärerhebung)'];
		Antwort[3] = ['Befragung (Primärerhebung)'];
		Loesung = [true, true, true, true];		
	break;
	case 90:
		Frage = 'Sicherheit bezeichnet einen Zustand, der frei von ........... ist. Setzen Sie bitte die fehlenden Begriffe ein.';
		Antwort[0] = ['vorhersehbaren Risiken'];
		Antwort[1] = ['kalkulierbaren Risiken'];
		Antwort[2] = ['unvertretbaren Risiken'];
		Loesung = [true,true,true];
	break;
	case 91:
		Frage = 'Wie wirken sich in einem Verfahren gesetzlich vorgeschriebene Aufbewahrungsfristen auf Löschfristen aus ?';
		Antwort[0] = ['Die Aufbewahrungsfristen sind höherrangig als das Gebot der Datensparsamkeit und verändern dadurch die Löschfristen.'];
		Antwort[1] = ['Die im Verfahren definierten Löschfristen sind immer bindend und stehen durch die Stellung des BDSG (alt) über anderen Vorschriften, der Aufbewahrungsfrist entgegen.'];
		Antwort[2] = ['Löschfristen und Aufbewahrungsfristen beziehen sich auf den gleichen Inhalt und stellen lediglich zwei unterschiedliche Bezeichnungen dar.'];
		Loesung = [true,false,false];
	break;
	case 92:
		Frage = 'Beschreiben Sie den klassischen Ablauf eines Datenschutz-Audits.';
		Antwort[0] = ['Vorbereitung'];
		Antwort[1] = ['Durchführung'];
		Antwort[2] = ['Abschluss mit Bericht'];
		Antwort[3] = ['Festlegung von Maßnahmen und deren Verfolgung bis zum Wirksamkeitsnachweis'];
		Loesung = [true, true, true, true];		
	break;
	case 93:
		Frage = 'Welche Angaben müssen in einer übersicht der Verarbeitungen enthalten sein ?';
		Antwort[0] = ['Name der/des betrieblichen Datenschutz-Beauftragten'];
		Antwort[1] = ['Herkunft der Daten'];
		Antwort[2] = ['Regelfristen für die Löschung von Daten'];
		Loesung = [true,true,true];
	break;
	case 94:
		Frage = 'Sie auditieren ein Unternehmen und prüfen dabei auch das Patchmanagement. Erläutern Sie stichpunktartig, was man unter dem Begriff versteht.';
		Antwort[0] = ['Sicherstellung der Softwarepflege.'];
		Antwort[1] = ['Software auf dem aktuellsten Stand halten.'];
		Antwort[2] = ['Einspielen von Sicherheitspatches'];
		Antwort[3] = ['Updates und Upgrades unter Beachtung der allgemeinen administrativen Sicherheitsstandards'];
		Loesung = [true, true, true, true];		
	break;
	case 95:
		Frage = 'Welche verschiedenen Varianten der Datensicherung (Backup) gibt es ?';
		Antwort[0] = ['Vollsicherung'];
		Antwort[1] = ['Speicherabbildsicherung'];
		Antwort[2] = ['Differenzielle Sicherung'];
		Antwort[3] = ['Inkrementelle Sicherung'];
		Loesung = [true, true, true, true];		
	break;
	case 96:
		Frage = 'Welches Gewährleistungsziel muss mit technischen oder organisatorischen Maßnahmen gesichert werden ?';
		Antwort[0] = ['Vertraulichkeit'];
		Antwort[1] = ['Verschlüsselung'];
		Antwort[2] = ['Verfügbarkeit'];
		Loesung = [true,true,true];
	break;
	case 97:
		Frage = 'Welches Dokument wird häufig bei einem Datenschutz-Audit vor Ort eingesehen ?';
		Antwort[0] = ['Schlüsselverwaltungsbuch'];
		Antwort[1] = ['IT-Sicherheitskonzept'];
		Antwort[2] = ['Putzpläne in Sanitärbereichen'];
		Loesung = [true,true,false];
	break;
	case 98:
		Frage = 'Nennen Sie die Bestandteile eines Zwischenberichts zum Datenschutz-Audit.';
		Antwort[0] = ['Namen der Einrichtung'];
		Antwort[1] = ['Namen des Auditors / Gutachters'];
		Antwort[2] = ['Datum des Berichts'];
		Antwort[3] = ['Einleitung, Beschreibung'];
		Antwort[4] = ['Hinweise auf Unterlagen, -auf Nachweise, -auf Verbesserungsmöglichkeiten'];
		Antwort[5] = ['Angaben zu Gesetzen'];
		Antwort[6] = ['Zusammenfassung'];
		Loesung = [true, true,true,true,true,true];		
	break;
	case 99:
		Frage = 'Nennen Sie 3 grundlegende Anforderungen an ein Datenschutzmanagementsystem, welche Sie als Auditor überprüfen sollten.';
		Antwort[0] = ['den geltenden Gesetzen (und Verordnungen/Vorschriften) genügen'];
		Antwort[1] = ['im Rahmen von Kosten und Nutzen angemessen sein'];
		Antwort[2] = ['wirksam sein (tatsächlich gelebt / angewendet werden)'];
		Antwort[3] = ['festgelegt und damit dokumentiert (nachvollziehbar) sein'];

	break;
	case 100:
		Frage = 'Die europäische DSGVO ist anzuwenden, wenn...';
		Antwort[0] = ['die verantwortliche Stelle ihren Sitz in Deutschland hat.'];
		Antwort[1] = ['die verantwortliche Stelle mit Sitz in Frankreich über eine Niederlassung in Deutschland verfügt und diese Niederlassung Datenerhebungen durchführt.'];
		Antwort[2] = ['die verantwortliche Stelle ihren Sitz in einem EWR-Mitgliedsstaat mit Niederlassungen in Deutschland hat.'];
		Loesung = [true, true, true];
	break;
	case 101:
		Frage = 'Nennen Sie Beispiele für Maßnahmen zur Zutrittskontrolle.';
		Antwort[0] = ['Schlüssel'];
		Antwort[1] = ['Empfang / Wachdienst'];
		Antwort[2] = ['Code-Karten, Token, Chips, ...;'];
		Antwort[3] = ['Biometrische Identifikationsverfahren;'];
		Antwort[4] = ['Zäune, Mauern, ...;'];
		Antwort[5] = ['Einrichtung von Sicherheitszonen...;'];
		Antwort[6] = ['Regelungen für Besucher, Lieferanten, ...;'];
		Loesung = [true, true, true, true, true, true, true];		
	break;
	case 102:
		Frage = 'Welche Stellen gelten als öffentlich im Sinne der Datenschutzgrundverordnung ?';
		Antwort[0] = ['Deutsche Rentenversicherung Bund'];
		Antwort[1] = ['Verwaltung der Stadt Berlin'];
		Antwort[2] = ['Tennis Verband Süddeutschland e.V.'];
		Loesung = [true,true,false];
	break;
	case 103:
		Frage = 'Welche Punkte sollten auf jeden Fall im Auditbericht fixiert werden ?';
		Antwort[0] = ['der Fragenkatalog / Checklisten'];
		Antwort[1] = ['die Auditteilnehmer'];
		Antwort[2] = ['die Auditkosten'];
		Loesung = [true,true,false];
	break;
	case 104:
		Frage = 'Welche Maßnahmen, sind bei einer Beobachtung öffentlich zugänglicher Räume mittels einer Videokamera vorgeschrieben ?';
		Antwort[0] = ['Die Videoüberwachung ist z.B. durch Hinweisschilder erkennbar zu machen.'];
		Antwort[1] = ['Keine, da im öffentlich zugänglichen Raum nur öffentliche Stellen zuständig sind und für diese das BDSG (alt) nicht gilt.'];
		Antwort[2] = ['Die Daten sind unverzüglich zu löschen, wenn sie zur Erreichung des Zwecks nicht mehr erforderlich sind.'];
		Loesung = [true,false,true];
	break;
	case 105:
		Frage = 'Eine besondere Art personenbezogener Daten ist:';
		Antwort[0] = ['Angaben über die persönlichen Vermögensverhältnisse'];
		Antwort[1] = ['personenbezogene Daten zu Kreditkartenkonten'];
		Antwort[2] = ['die Angabe einer Gewerkschaftszugehörigkeit'];
		Loesung = [false,false,true];
	break;
	case 106:
		Frage = 'Nennen Sie die technischen und organisatorischen Maßnahmen gem. Art. 32 Abs. 1 DSGVO für Verantwortliche (Art. 30 Abs. 1 lit. g) und Auftragsverarbeiter (Art. 30 Abs. 2 lit. d).';
		Antwort[0] = ['Pseudonymisierung'];
		Antwort[1] = ['Verschlüsselung'];
		Antwort[2] = ['Gewährleistung der Vertraulichkeit'];
		Antwort[3] = ['Gewährleistung der Integrität'];
		Antwort[4] = ['Gewährleistung der Verfügbarkeit'];
		Antwort[5] = ['Gewährleistung der Belastbarkeit der Systeme'];
		Antwort[6] = ['Verfahren zur Wiederherstellung der Verfügbarkeit personenbezogener Daten nach einem physischen oder technischen Zwischenfall'];
		Antwort[7] = ['Verfahren regelmäßiger überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen'];
		Loesung = [true, true, true, true, true, true, true, true];
	break;
	case 107:
		Frage = 'Nennen Sie bitte die Ziele eines Datenschutzaudits.';
		Antwort[0] = ['Stärkung der Selbstverantwortung und Stimulierung von Wettbewerb'];
		Antwort[1] = ['Verringerung des Vollzugsdefizits'];
		Antwort[2] = ['Kontinuierliche Verbesserung des Datenschutzes und der Datensicherung'];
		Antwort[3] = ['Datenschutzaudit als Lernsystem'];
		Loesung = [true, true, true, true];		
	break;
	case 108:
		Frage = 'Welche Stellen gelten als nicht-öffentlich im Sinne der Datenschutzgrundverordnung ?';
		Antwort[0] = ['Deutsche Rentenversicherung Bund'];
		Antwort[1] = ['Verwaltung der Stadt Berlin'];
		Antwort[2] = ['Tennis Verband Süddeutschland e.V.'];
		Loesung = [false,false,true];
	break;
	case 109:
		Frage = 'Nennen Sie die Tätigkeiten, die zur Vorbereitung eines Auditplans gehören.';
		Antwort[0] = ['Auditzeitplan festlegen'];
		Antwort[1] = ['Auditteam festlegen'];
		Antwort[2] = ['Teilnehmer bestimmen'];
		Antwort[3] = ['Fragenkatalog erstellen'];
		Antwort[4] = ['Auditplan versenden'];
		Loesung = [true, true, true, true];		
	break;
	case 110:
		Frage = 'Der Datenschutz-Beauftragte darf neben dieser Funktion...';
		Antwort[0] = ['jede andere Tätigkeit im Unternehmen ausüben.'];
		Antwort[1] = ['nur solche Aufgaben übernehmen, deren Wahrnehmung zu keiner Interessenkollision führt.'];
		Antwort[2] = ['keine anderen Tätigkeiten im Unternehmen ausführen.'];
		Loesung = [false,true,false];
	break;
	case 111:
		Frage = 'Ein Mitarbeiter legt auf einem Personalcomputer seines Unternehmens mit Hilfe einer Tabellenkalkulationssoftware eine Geburtstagsliste an und nimmt hier Anschriften, Telefonnummern, Geburtstage und Hobby naher Angehöriger und guter Freunde auf. Auf was ist zu achten ?';
		Antwort[0] = ['Für dienstliche Zwecke dürfen diese Daten nicht verwendet werden.'];
		Antwort[1] = ['Die Nutzung des Personalcomputer für private Zwecke muss im Unternehmen erlaubt oder geduldet sein.'];
		Antwort[2] = ['Der Datenschutz-Beauftragte des Arbeitgebers muss dem zustimmen.'];
		Loesung = [true,true, false];
	break;
	case 112:
		Frage = 'Wie läuft ein Auditprozess im Rahmen einer Zertifizierung ab. Ordnen Sie die folgenden Begriffe in der richtigen Reihenfolge.';
		Antwort[0] = ['Audit Stufe 1'];
		Antwort[1] = ['Voraudit (optional)'];
		Antwort[2] = ['Zertifizierungsantrag/-auftrag'];
		Antwort[3] = ['Nachbesserungsphase'];
		Antwort[4] = ['Erstellung und übermittlung Auditbericht'];
		Antwort[5] = ['Zertifizierungsvorbereitung'];
		Antwort[6] = ['Audit Stufe 2'];
		Loesung = [true, true, true, true, true, true, true, true];		
	break;
	case 113:
		Frage = 'Ein Ingenieurbüro bietet einem Kunden den Einsatz eines Spezialisten zur Unterstützung an. Der Kunde erhält hierzu ein Angebot mit dem Qualifikationsprofil des vorgesehenen Mitarbeiters.';
		Antwort[0] = ['Ohne Zustimmung des Mitarbeiters'];
		Antwort[1] = ['Mit Zustimmung des Mitarbeiters'];
		Antwort[2] = ['Im Rahmen der Zweckbestimmung des Arbeitsvertrages'];
		Loesung = [false,true,true];
	break;
	case 114:
		Frage = 'Wie können Verstöße gegen die Datenschutzgrundverordnung geahndet werden ?';
		Antwort[0] = ['strafrechtlich'];
		Antwort[1] = ['arbeitsrechtlich'];
		Antwort[2] = ['mit Geldbuße'];
		Loesung = [true,true,true];
	break;
	case 115:
		Frage = 'Sollte vor der eigentlichen Auditierung ein Einführungsgespräch stattfinden ?';
		Antwort[0] = ['Nein, das sollte auf jeden Fall unterbleiben, um die Auditierung nicht zu beeinflussen.'];
		Antwort[1] = ['Ja, um offene Fragen zu klären.'];
		Antwort[2] = ['Ja, um Sinn und Zweck des Audits darzulegen.'];
		Loesung = [false,true,true];
	break;
	case 116:
		Frage = 'Stellen Sie bitte die sieben Begriffe aus der High Level Structure (HLS) der ISO Normen in der richtigen Reihenfolge dar. (Nummer und Bezeichnung z.B. 1. Bezeichnung)';
		Antwort[0] = ['4. Kontext der Organisation'];
		Antwort[1] = ['5. Führung'];
		Antwort[2] = ['6. Planung'];
		Antwort[3] = ['7. Unterstützung'];
		Antwort[4] = ['8. Betrieb'];
		Antwort[5] = ['9. Bewertung der Leistung'];
		Antwort[6] = ['10. Verbesserung'];
		Loesung = [true,true,true,true,true,true,true];
	break;
	case 117:
		Frage = 'Zu den mit der automatisierten Verarbeitung personenbezogener Daten beschäftigten Personen in einem Unternehmen zählen folgende Personengruppen:';
		Antwort[0] = ['Praktikanten mit einer Praktikantenzeit von maximal 4 Wochen'];
		Antwort[1] = ['Leiharbeiter'];
		Antwort[2] = ['freie Mitarbeiter'];
		Loesung = [true,true,true];		
	case 118:
		Frage = 'Die europäische DSGVO ist anzuwenden, wenn...';
		Antwort[0] = ['die verantwortliche Stelle ihren Sitz in Deutschland hat.'];
		Antwort[1] = ['die verantwortliche Stelle mit Sitz in Frankreich über eine Niederlassung in Deutschland verfügt und diese Niederlassung Datenerhebungen durchführt.'];
		Antwort[2] = ['die verantwortliche Stelle ihren Sitz in einem EWR-Mitgliedsstaat mit Niederlassungen in Deutschland hat.'];
		Loesung = [true, true, true];
	break;
	case 119:
		Frage = 'Der Datenschutz-Auditor…';
		Antwort[0] = ['weist auf datenschutzrechtliche Missstände im Unternehmen hin.'];
		Antwort[1] = ['ist berechtigt, den weiteren Einsatz von DV-Anwendungen im Unternehmen bei fehlender Rechtsgrundlage zu verbieten.'];
		Antwort[2] = ['ist berechtigt, bei Bedarf die Aufsichtsbehörde zur Klärung einzuschalten.'];
		Loesung = [true, false, false];		
	break;
	case 120:
		Frage = 'Was sind die möglichen Inhalte eines Datenschutzkonzeptes ? ';
		Antwort[0] = ['Dokumentation'];
		Antwort[1] = ['Organisatorische Mindestregelungen'];
		Antwort[2] = ['Datenschutzpolitik und Verantwortlichkeiten im Unternehmen'];
		Antwort[3] = ['Rechtliche Rahmenbedingungen im Unternehmen'];
		Antwort[4] = ['Bestehende technische und organisatorische Maßnahmen']; 
		Loesung = [true, true, true, true, true];
	break;
	case 121:
		Frage = 'Wer kann in der Regel zum Datenschutz-Beauftragten bestellt werden ?';
		Antwort[0] = ['Leiter der Datenverarbeitung'];
		Antwort[1] = ['Leiter der Logistik'];
		Antwort[2] = ['Geschäftsführer einer GmbH'];
		Loesung = [false, true, false];
	break;
	case 122:
		Frage = 'Nennen Sie die Forderungen, die an eine rechtskonforme Einwilligung zu stellen sind.';
		Antwort[0] = ['Freiwilligkeit'];
		Antwort[1] = ['Zweckbindung'];
		Antwort[2] = ['Widerspruchsmöglichkeit'];
		Antwort[3] = ['Kopplungsverbot'];
		Loesung = [true, true, true, true];
	case 123:
		Frage = 'Nennen Sie die Punkte, die bei der Planung eines Datenschutz-Audits zu beachten sind.';
		Antwort[0] = ['Was wird auditiert'];
		Antwort[1] = ['Wann wird auditiert ?'];
		Antwort[2] = ['Welche Methoden werden angewandt ?'];
		Loesung = [true, true, true];
	case 124:
		Frage = 'Nennen Sie bitte die Ziele eines Datenschutzaudits.';
		Antwort[0] = ['Risikominimierung, Schutz des Unternehmens gegen Geldbußen und Strafen'];
		Antwort[1] = ['Positive Innen- und Außenwirkung'];
		Antwort[2] = ['Kontinuierliche Verbesserungen im Datenschutz erzielen'];
		Antwort[3] = ['Lernsystem, Verbesserung der Datenschutz-Kenntnisse und Verständnis des Zwecks'];
		Loesung = [true, true, true, true];
case 125:
		Frage = '**data protection by default** gem. DSGVO Art. 25 und ErwG. 78 bedeutet:';
		Antwort[0] = ['der Verantwortliche muss interne Strategien festlegen und Maßnahmen ergreifen, die insbesondere den Grundsätzen des Datenschutzes durch datenschutzfreundliche Voreinstellungen Genüge tun'];
		Antwort[1] = ['der Verantwortliche muss interne Strategien festlegen und Maßnahmen ergreifen, die insbesondere den Grundsätzen des Datenschutzes durch Technik Genüge tun'];
		Loesung = [true,false];	
	break;
	case 126:
		Frage = 'Nennen Sie die Gewährleistungsziele nach Art. 32 DSGVO.';
		Antwort[0] = ['Integrität'];
		Antwort[1] = ['Vertraulichkeit'];
		Antwort[2] = ['Verfügbarkeit'];
		Loesung = [true, true, true];
	break;
	case 127:
		Frage = 'Welche Inhalte müssen Sie bei der Erstellung eines Jahresberichtes an die Geschäftsführung der verantwortlichen Stelle berücksichtigen ?';
		Antwort[0] = ['Beschwerden von Betroffenen'];
		Antwort[1] = ['aktuelle Sachstandsmeldung'];
		Antwort[2] = ['noch nicht beglichene Rechnungen für Ihre Dienstleistungen'];
		Antwort[3] = ['Ihre Urlaubsplanung für das kommende Jahr'];
		Antwort[4] = ['Anfragen seitens der Aufsichtsbehörden']; 
		Loesung = [true, true, false, false, true];		
	break;
	case 128:
		Frage = 'Was muss beim Einsatz von Fernwartungstools durch einen externen Dienstleister berücksichtigt werden ?';
		Antwort[0] = ['Der User am Zielrechner muss in die Session aktiv einwilligen'];
		Antwort[1] = ['Es genügt, wenn der Administrator den Zugang und Zugriff telefonisch ankündigt.'];
		Antwort[2] = ['Der User am Zielrechner muss - wenn es das System noch zulässt - alle offenen Dateien (z.B. Worddokumente) schließen, um die Einsicht des Administrators zu verhindern.'];
		Loesung = [true, false, true];	
	break;
	case 129:
		Frage = 'Welche Unterlagen dienen zur Dokumentation technisch organisatorischer Maßnahmen ?';
		Antwort[0] = ['Datensicherungskonzept'];
		Antwort[1] = ['Virenschutzkonzept'];
		Antwort[2] = ['Notfallkonzept'];
		Loesung = [true, true, true];
	break;
	case 130:
		Frage = 'Wie kann die Vertraulichkeit personenbezogener Daten beim Einsatz mobiler Endgeräte erhöht werden ?';
		Antwort[0] = ['Nutzung von WLAN-Hotspots seriöser Anbieter (z.B. Deutsche Bahn, Große Hotelketten)'];
		Antwort[1] = ['Abschalten nicht benötigter drahtloser Schnittstellen (WLAN, Bluetooth)'];
		Antwort[2] = ['Nutzung von VPN-Diensten bei Kommunikation über öffentliche Netzwerke'];
		Loesung = [false, true, true];
	break;		
	case 131:
		Frage = 'Durch welche/n Geräteeinsatz kann die **Verfügbarkeit** von Hardwaresystemen erhöht werden ?';
		Antwort[0] = ['USV-Anlage (unterbrechungsfreie Stromversorgung)'];
		Antwort[1] = ['Notstromaggregate'];
		Loesung = [true, true];
	break;
	case 132:
		Frage = 'Welche Aspekte gilt es bei der Datensicherung zu berücksichtigen ?';
		Antwort[0] = ['Die Aufbewahrung der Sicherungsdatenträger sollte möglichst im selben Brandabschnitt wie die der Originaldaten erfolgen.']; 
		Antwort[1] = ['Die Sicherungsvorgänge und eventuelle Fehlermeldungen sind zu dokumentieren.']; 
		Antwort[2] = ['Es sind regelmäßig Tests zur Datenwiederherstellung durchzuführen.']; 
		Loesung = ['false, true, true'];	
	break;
	case 133:
		Frage = 'Der erfolgreiche Betrieb eines Firewall-Systems ist abhängig von:';
		Antwort[0] = ['der Sicherheits-Policy'];
		Antwort[1] = ['der Größe der Serverfarm'];
		Antwort[2] = ['dem Firewall-Konzept'];
		Loesung = [true, false, true];	
	break;
	case 134:
		Frage = 'Welche flankierenden organisatorischen Maßnahmen sind zwingend bei einem Backup zu berücksichtigen ?';
		Antwort[0] = ['Regelmäßigkeit, Authentizität, Sicherheit, Verfügbarkeit'];
		Antwort[1] = ['Hamburger, Kippen, Kaffee '];
		Loesung = [true, false];	
	break;
	case 135:
		Frage = 'Nennen Sie typische Schwachstellen im Bereich Vertraulichkeit und Integrität (Zugangskontrolle).';
		Antwort[0] = ['Vertrauen darauf das der Kollege ein Buddy ist'];
		Antwort[1] = ['Social Engineering'];
		Antwort[2] = ['Offene Türen und Fenster'];
		Antwort[3] = ['Fehlender Blickschutz'];
		Antwort[4] = ['Passwörter auf Post-It'];
		Loesung = [true, true, true, true, true];	
	break;
	case 136:
		Frage = 'Nennen Sie grundlegende Konzepte zur Dokumentation des technischen Datenschutzes.';
		Antwort[0] = ['Logging, Auditing, Pen-Testing'];
		Antwort[1] = ['Dienstanweisungen, IT-Richtlinien'];
		Antwort[2] = ['TOMs, IT-Sicherheitskonzept, Passwort-Konzept'];
		Antwort[3] = ['Datensicherungskonzept, Löschkonzept, Konzept zum Datenumgang'];
		Antwort[4] = ['Home-Office-Arbeitsplatzrichtlinie, Wiederanlaufkonzept'];
		Loesung = [true, true, true, true, true];	
	break;
	case 137:
		Frage = 'Nennen Sie Maßnahmen, um den unbefugten Zutritt in Unternehmensbereiche zu verhindern';
		Antwort[0] = ['Zäune/Mauern'];
		Antwort[1] = ['Verschlossene und einbruchssichere Türen/Fenster'];
		Antwort[2] = ['Wachschutz'];
		Loesung = [true, true, true];	
	break;
	case 138:
		Frage = 'Beschreiben Sie in einfachen Worte, was unter dem Begriff Asymmetrische Verschlüsselung zu verstehen ist.';
		Antwort[0] = ['Zwei Schlüssel, Privat und Öffentlich'];
		Antwort[1] = ['Drei Schlüssel, Privat, Öffentlich und Vertraulich'];
		Antwort[2] = ['Zwei Schlüssel, Öffentlich und Vertraulich'];
		Loesung = [true, false, false];	
	break;
	case 139:
		Frage = 'Erläutern Sie stichpunktartig den Begriff Patch-Management.';
		Antwort[0] = ['Just in Time Beseitigung von Fehlern in der Software'];
		Antwort[1] = ['Regelmäßige System-Updates'];
		Loesung = [true, true];	
	break;
	case 140:
		Frage = 'Um eine Applikationskontrolle (Application Access Control) sinnvoll im Unternehmen einzuführen, benötigt der Betreiber';
		Antwort[0] = ['eine Entscheidung, welche Anwendungen im Unternehmen ausgeführt werden dürfen.'];
		Antwort[1] = ['die Sicherstellung von Kontrollen und Freigabeverfahren.'];
		Antwort[2] = ['die Unbedenklichkeitsliste von iTunes.'];
		Loesung = [true, true, false];	
	break;
	case 141:
		Frage = 'Ein White-List-Verfahren basiert auf dem Konzept:';
		Antwort[0] = ['Alles ist verboten, was nicht explizit erlaubt ist.'];
		Antwort[1] = ['Alles ist erlaubt, was nicht explizit verboten ist.'];
		Loesung = [true, false];	
	break;
	case 142:
		Frage = 'Welche Varianten stehen für einen ausreichenden Virenschutz im Firmennetzwerk ?';
		Antwort[0] = ['Viruswall + Antivirensoftware nur auf dem Client (Workstation)'];
		Antwort[1] = ['Antivirensoftware nur auf dem Server'];
		Antwort[2] = ['Viruswall + Antivirensoftware auf Client und Server '];
		Loesung = [true, false, true];	
	break;
	case 143:
		Frage = 'Die Protokollierung von IT-Systemen ist zum Zwecke der Datenschutzkontrolle notwendig. Wie ist mit den Protokolldaten umzugehen ?';
		Antwort[0] = ['Sie sind zur Evaluation regelmäßig der Personalleitung und dem Betriebsrat zukommen zu lassen.'];
		Antwort[1] = ['Es genügt, wenn die Abteilungsleiter die Protokolle ihrer direkten Mitarbeiter zur Auswertung erhalten.'];
		Antwort[2] = ['Die Protokolle sind – sofern kein konkreter Verdacht besteht – anonymisiert und von dazu befugten Sicherheitsverantwortlichen zu überprüfen.'];
		Loesung = [true, false, true];	
	break;
	case 144:
		Frage = 'Ein Black-List-Verfahren basiert auf dem Konzept:';
		Antwort[0] = ['Alles ist verboten, was nicht explizit erlaubt ist.'];
		Antwort[1] = ['Alles ist erlaubt, was nicht explizit verboten ist.'];
		Loesung = [false, true];	
	break;
		
} // Switch Ende

	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (!flagListe) finishMaske(aktKarte);


} // Funktion Ende

/******************************************************************************
************** DB alleFragen3 *************************************************
******************************************************************************/	

function alleFragen3(aktKarte){
	
switch (aktKarte) {

	case 0:
		Frage = 'Sie sollen eine datenschutzrechtliche Fragestellung klären. Geben Sie die einzelnen Faktoren an, die dafür geprüft werden müssen.';
		Antwort[0]	= ['Wer ist Ansprechpartner ?'];
		Antwort[1]	= ['Welche personenbezogenen Daten werden verarbeitet ?'];
		Antwort[2]	= ['Welcher Zweck ?'];
		Antwort[3]	= ['Wie werden diese Daten verarbeitet ?'];
		Antwort[4]	= ['Welche Voraussetzung für die Weitergabe an Dritte ? Speicherdauer ? Rechte (Auskunftsrecht, Widerspruchsrecht etc.)'];
		Loesung = [true, true, true, true, true, ];	
	break;
	case 1:
		Frage		= 'Was versteht man unter dem Begriff Integrität der Daten ?';
		Antwort[0]	= ['Integrität stellt sicher, daß die Daten weder verfälscht, noch verändert oder gelöscht werden'];
		Antwort[1]	= ['Integrität stellt sicher, daß die Daten gesichert gelöscht werden'];
		Antwort[2]	= ['Integrität ist ein informativer Begriff. Man versteht darunter die Bedingung nur auf existierende Datensätze verarbeitet werden.'];
		Loesung = [true, false, false];	
	break;
	case 2:
		Frage		= 'Was versteht man unter dem Begriff Vertraulichkeit ?';
		Antwort[0]	= ['Verbergen von Informationen gegen unbefugten Zugriff, Verarbeitung oder Veränderung. '];
		Antwort[1]	= ['Verhinderung von Weitergabe der Daten an Unbefugte.'];
		Loesung = [true, true];	
	break;
	case 3:
		Frage		= 'Nennen Sie drei Möglichkeiten, wie der Datenschutz-Beauftragte im Unternehmen vorgestellt werden kann.';
		Antwort[0]	= ['Persönliche Vorstellung durch den Verantwortlichen'];
		Antwort[1]	= ['Schulung'];
		Antwort[2]	= ['Per Bekanntmachung durch E-Mail, Infoblatt, Newsletter etc.'];
		Loesung = [true, true, true];	
	break;
	case 4:
		Frage		= 'Mit welcher Unterlage verschaffen Sie sich einen Überblick über die im Unternehmen vorhandenen Abteilungen ?';
		Antwort[0]	= ['Aktuelles Organigramm'];
		Antwort[1]	= ['Telefonliste'];
		Antwort[2]	= ['Inventarisierungslisten'];
		Loesung = [true, false, false];	
	break;
	case 5:
		Frage		= 'Welche Rolle spielt der Datenschutz-Beauftragte bei der Datenschutz-Folgenabschätzung ?';
		Antwort[0]	= ['Er ist nur beratend tätig und prüft nach DSGVO. Er schätzt aufgrund der ihm zugänglichen Informationen das datenschutzrechtliche Risiko ein.'];
		Antwort[1]	= ['Es ist Aufgabe der Verantwortlichen, und nicht der Datenschutz-Beauftragten, eine Datenschutz-Folgenabschätzung, durchzuführen'];
		Loesung = [true, true];	
	break;
	case 6:
		Frage		= 'Im Rahmen der Datenschutz-Vorgaben gilt der risikobasierte Ansatz. Bitte nennen Sie die Artikel der Datenschutz-Grundverordnung, die hier eine Rolle spielen.';
		Antwort[0]	= ['Artikel 35'];
		Antwort[1]	= ['Artikel 83'];
		Antwort[2]	= ['Artikel 82'];
		Loesung = [true, false, false];	
	break;
	case 7:
		Frage		= 'Bitte nennen Sie die persönlichen Eigenschaften, über die der Datenschutz-Beauftragte verfügen sollte.';
		Antwort[0]	= ['freundlich'];
		Antwort[1]	= ['vertrauenswürdig'];
		Antwort[2]	= ['fachlich kompetent'];
		Antwort[3]	= ['teamfähig'];
		Antwort[4]	= ['zuverlässig'];
		Antwort[5]	= ['offen'];
		Antwort[6]	= ['kommunikativ)'];
		Loesung = [true, true, true, true, true, true, true];	
	break;
	case 8:
		Frage		= 'Welches sind die Basisforderungen an die Umsetzung des Datenschutzes im Unternehmen ?';
		Antwort[0]	= ['Soviel Datenschutz wie nötig, so wenig Aufwand wie möglich! Pflichtprogramm vor Nice-to-have.'];
		Antwort[1]	= ['Der Datenschutz muss immer mit größtmöglichem Einsatz der IT-Abteilung umgesetzt werden.'];
		Antwort[2]	= ['Der Datenschutz im Unternehmen soll die Geschäftsabläufe bremsen.'];
		Loesung = [true, false, false];	
	break;
	case 9:
		Frage		= 'Welche Aufgaben haben Datenschutz-Beauftragte ?';
		Antwort[0]	= ['Überwachung der betrieblichen Datenverarbeitung '];
		Antwort[1]	= ['Sie können die Information / Weiterbildung der Mitarbeiter zu datenschutzrechtlichen Themen übernehmen.'];
		Antwort[2]	= ['Erstellung des Verfahrensverzeichnisses'];
		Loesung = [true, true, false];	
	break;
	case 10:
		Frage		= 'Zu den Aufgaben des Datenschutz-Beauftragten gehört es auch, dass sie';
		Antwort[0]	= ['Ortsbegehungen durchführen.'];
		Antwort[1]	= ['evtl. Betriebsstätten bzw. Filialen Vor-Ort besichtigen.'];
		Antwort[2]	= ['die personenbezogenen Daten auf dem Rechner des Betriebsrates kontrollieren.'];
		Antwort[3]	= ['zu Kontrollzwecken Einsicht in die Personalakte eines Mitarbeiters - auch ohne dessen Einverständnis - nehmen.'];
		Antwort[4]	= ['zu Kontrollzwecken Einsicht in die Gesundheitsakte eines Patienten - auch ohne dessen Einverständnis - nehmen.'];
		Loesung = [true, true, false, false, false];	
	break;
	case 11:
		Frage		= 'Welche Inhalte müssen Sie in einer Datenschutz-Basisschulung für Mitarbeiter/innen Ihres Auftraggebers vermitteln ?';
		Antwort[0]	= ['Verbot mit Erlaubnisvorbehalt'];
		Antwort[1]	= ['Aufforderung zur Datensparsamkeit'];
		Antwort[2]	= ['Umgang mit eigenen privaten Kreditkarten'];
		Antwort[3]	= ['Umgang mit eigenen privaten Payback-Karten'];
		Loesung = [true, true, false, false];	
	break;
	case 12:
		Frage		= 'Eine von Ihnen vorbereitete Arbeitsanweisung zu datenschutzrechtlichen Themen darf';
		Antwort[0]	= ['in jedem Fall ohne Zustimmung des beim Arbeitgeber vorhandenen Betriebsrates durch die verantwortliche Stelle umgesetzt werden.'];
		Antwort[1]	= ['gegebenenfalls nur mit Zustimmung des beim Arbeitgeber vorhandenen Betriebsrates durch die verantwortliche Stelle umgesetzt werden.'];
		Antwort[2]	= ['Es genügt, wenn die Mitarbeiter/innen rechtzeitig informiert werden.'];
		Loesung = [false, true, false];	
	break;
	case 13:
		Frage		= 'Welche/s Dokument/e benötigen Sie als Datenschutz-Beauftragte , um ein effizientes Voraudit durchführen zu können ?';
		Antwort[0]	= ['Gebäudepläne'];
		Antwort[1]	= ['Richtlinien / Betriebsvereinbarungen'];
		Antwort[2]	= ['Handelsregisterauszug'];
		Antwort[3]	= ['AGB (Allgemeine Geschäftsbedingungen)'];
		Antwort[4]	= ['Fahrzeugkennzeichen des Firmenwagens des Geschäftsführers.'];
		Loesung = [true, true, true, true, false];	
	break;
	case 14:
		Frage		= 'Welche/n Inhalt/e müssen Sie bei der Erstellung eines Jahresberichtes an die Geschäftsführung der verantwortlichen Stelle berücksichtigen ?';
		Antwort[0]	= ['Beschwerden von Betroffenen'];
		Antwort[1]	= ['aktuelle Sachstandsmeldung'];
		Antwort[2]	= ['noch nicht beglichene Rechnungen für Ihre Dienstleistungen'];
		Antwort[3]	= ['Ihre Urlaubsplanung für das kommende Jahr'];
		Antwort[4]	= ['Anfragen seitens der Aufsichtsbehörden'];
		Loesung = [true, true, false, false, true];	
	break;
	case 15:
		Frage		= 'Welche der folgenden Aussage/n ist/sind datenschutzrechtlich korrekt ?';
		Antwort[0]	= ['Nicht automatisiert verarbeitete personenbezogene Daten, die nicht mehr erforderlich sind, sind zu archivieren.'];
		Antwort[1]	= ['Nicht automatisiert verarbeitete personenbezogene Daten, die nicht mehr erforderlich sind, sind zu vernichten.'];
		Antwort[2]	= ['Datenträger jeder Form sind immer, unabhängig einer Aufbewahrungsfrist, zu archivieren.'];
		Antwort[3]	= ['Automatisiert verarbeitete personenbezogene Daten, die nicht mehr erforderlich sind und nicht gelöscht werden können, sind zu sperren.'];
		Antwort[4]	= ['Vor einer Datenträgervernichtung ist immer zu prüfen, ob die Daten gemäß einer gesetzlichen Aufbewahrungsfrist zu archivieren sind.'];
		Loesung = [false, true, false, true, true];	
	break;
	case 16:
		Frage		= 'Warum hat die Personalabteilung für den Datenschutz-Beauftragten eine besondere Bedeutung ?';
		Antwort[0]	= ['Die Personalabteilung hat Einfluss auf die Tätigkeit des Datenschutz-Beauftragten hinsichtlich seiner Weisungsbefugnis.'];
		Antwort[1]	= ['Die Daten der Mitarbeiter sind grundsätzlich personenbezogen.'];
		Antwort[2]	= ['Hier finden sich Verpflichtungen der Mitarbeiter zur Verschwiegenheit und zum Datenschutz.'];
		Antwort[3]	= ['Hier erhalten die Mitarbeiter Informationen über ihre personenbezogenen Daten.'];
		Loesung = [false, true, true, true];	
	break;
	case 17:
		Frage		= 'Zu Beginn seiner Tätigkeit sollte sich der Datenschutz-Beauftragte unterschiedliche Informationen dem Unternehmen zu beschaffen, wie etwa:';
		Antwort[0]	= ['Dokumentation der Standorte'];
		Antwort[1]	= ['das gültige Organigramm'];
		Antwort[2]	= ['Kopien der Verträge der leitenden Angestellten '];
		Antwort[3]	= ['Überblick über verwendete Softwaresysteme'];
		Loesung = [true, true, false, true];	
	break;
	case 18:
		Frage		= 'Für welche der nachfolgenden Länder wurde gemäß der Beurteilung der EU-Kommission nach Art. 46 Abs. 3 der Datenschutz-Grundverordnung ein angemessenes Schutzniveau verbindlich festgestellt ?;'
		Antwort[0]	= ['Schweiz'];
		Antwort[1]	= ['Uruguay'];
		Antwort[2]	= ['Kanada (teilweise, Ausnahme für öffentliche und nichtkommerzielle Stellen)'];
		Antwort[3]	= ['USA'];
		Loesung = [true, true, true, true];	
	break;
	case 19:
		Frage		= 'Welche Schutzziele gehören zu den Technikregelungen der Datenschutzgesetze ?';
		Antwort[0]	= ['Verfügbarkeit'];
		Antwort[1]	= ['Integrität'];
		Antwort[2]	= ['Vertraulichkeit'];
		Loesung = [true, true, true];	
	break;
	case 20:
		Frage		= 'Um die Rechenschaftspflichten der Unternehmen zu gewährleisten, ist es erforderlich, ein Datenschutzmanagementsystem einzuführen. Diese Aussage ist:';
		Antwort[0]	= ['Richtig'];
		Antwort[1]	= ['Falsch'];
		Loesung = [true, false];	
	break;
	case 21:
		Frage		= 'Welcher Artikel oder Paragraf weist auf folgendes Merkmal hin - Videoüberwachung öffentlich zugänglicher Räume ?;'
		Antwort[0]	= ['DSGVO Art. 42'];
		Antwort[1]	= ['DSGVO Art. 4'];
		Antwort[2]	= ['BDSG § 42'];
		Antwort[3]	= ['BDSG § 4'];
		Loesung = [false, false, false, true];	
	break;
	case 22:
		Frage		= 'Was versteht man nach der DSGVO unter Einschränkung der Verarbeitung ?';
		Antwort[0]	= ['Die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken'];
		Antwort[1]	= ['Jedes mit oder ohne Hilfe automatisiertes Verfahren'];
		Antwort[2]	= ['Jede strukturierte Sammlung personenbezogener Daten'];
		Antwort[3]	= ['Die Verletzung des Schutzes personenbezogener Daten'];
		Loesung = [true, false, false, false];	
	break;
	case 23:
		Frage		= 'Unter welchem Artikel der DSGVO finden wir folgenden Aussage: Diese Verordnung findet Anwendung auf die Verarbeitung personenbezogener Daten, soweit diese im Rahmen der Tätigkeiten einer Niederlassung eines Verantwortlichen oder eines Auftragsverarbeiters in der Union erfolgt, unabhängig davon, ob die Verarbeitung in der Union stattfindet.';
		Antwort[0]	= ['DSGVO Art. 26'];
		Antwort[1]	= ['DSGVO Art. 13'];
		Antwort[2]	= ['DSGVO Art. 3'];
		Antwort[3]	= ['DSGVO Art. 51'];
		Loesung = [false, false, true, false];	
	break;
	case 24:
		Frage		= 'Was besagt §5 BDSG (alt) ?';
		Antwort[0]	= ['Datenschutzaudit'];
		Antwort[1]	= ['Datensparsamkeit'];
		Antwort[2]	= ['Datenvermeidung'];
		Antwort[3]	= ['Datengeheimnis'];
		Loesung = [false, false, false, true];	
	break;
		
} // Switch Ende

	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (!flagListe) finishMaske(aktKarte);


} // Funktion Ende

/******************************************************************************
************** DB alleFragen4 *************************************************
******************************************************************************/	

function alleFragen4(aktKarte){
	
switch (aktKarte) {

	case 0:
		Frage = 'Welche wesentlichen Voraussetzungen müssen entsprechend der DSGVO vorliegen, damit eine Person zum Datenschutzbeauftragten benannt werden kann ?';
		Antwort[0] = ['Art. 37 Abs. 5 DSGVO: Fachwissen auf dem Gebiet des Datenschutzes und der Datenschutzpraxis'];
		Antwort[1] = ['Fähigkeit Aufgaben gem. Art. 39 DSGVO zu erfüllen.'];
		Antwort[2] = ['Art. 38 Abs. 6 S. 2 DSGVO: Nichtvorliegen eines Interessenkonflikts'];
		Loesung = [true, true, true];		
	break;
	case 1:
		Frage = 'Um die Rechenschaftspflichten der Unternehmen zu gewährleisten, ist es erforderlich, ein Datenschutzmanagementsystem einzuführen. Diese Aussage ist:';
		Antwort[0] = ['nicht notwendig'];
		Antwort[1] = ['Falsch'];
		Antwort[2] = ['Richtig'];
		Loesung = [false, false, true];		
	break;
	case 2:
		Frage = 'Was ist bei der Erstellung "Verbindlicher, konzernweiter Regelungen für den internationalen Datentransfer" (Binding Corporate Rules) zu beachten ?';
		Antwort[0] = ['Die Aufsichtsbehörden müssen nicht einwilligen.'];
		Antwort[1] = ['Die Aufsichtsbehörden müssen hierzu einwilligen'];
		Loesung = [false, true];		
	break;
	case 3:
		Frage = 'Welche Angaben beinhaltet die Meldepflicht gem. Art. 33 DSGVO ?';
		Antwort[0] = ['eine Beschreibung der Art der Verletzung des Schutzes personenbezogener Daten, soweit möglich mit Angabe der Kategorien und der ungefähren Zahl der betroffenen Personen, der betroffenen Kategorien und der ungefähren Zahl der betroffenen personenbezogenen Datensätze'];
		Antwort[1] = ['den Namen und die Kontaktdaten des Datenschutzbeauftragten oder einer sonstigen Anlaufstelle für weitere Informationen'];
		Antwort[2] = ['Handelsregisterauszug-Nr.'];
		Antwort[3] = ['eine Beschreibung der wahrscheinlichen Folgen der Verletzung des Schutzes personenbezogener Daten'];
		Loesung = [true, true, false, true];
	break;
	case 4:
		Frage = 'Wann muss der Verantwortliche im Falle einer Datenerhebung beim Betroffenen seinen Informationspflichten nachkommen ?';
		Antwort[0] = ['innerhalb eines Monats'];
		Antwort[1] = ['bei Erhebung'];
		Antwort[2] = ['innerhalb von 72 Stunden'];
		Loesung = [false, true, true];		
	break;
	case 5:
		Frage = 'Als "Datenschutzbeauftragte(r)" gehört es auch zu meinen Aufgaben, dass ich...';
		Antwort[0] = ['...evtl. Betriebsstätten bzw. Filialen Vor-Ort besichtige.'];
		Antwort[1] = ['...Ortsbegehungen durchführe'];
		Antwort[2] = ['...zu Kontrollzwecken Einsicht in die Gesundheitsakte eines Patienten - auch ohne dessen Einverständnis - nehme.'];
		Antwort[3] = ['...zu Kontrollzwecken Einsicht in die Personalakte eines Mitarbeiters - auch ohne dessen Einverständnis - nehme.'];
		Loesung = [true, true, false, false];
	break;
	case 6:
		Frage = 'Welche Vorteile hat ein externer Datenschutzbeauftragter gegenüber einem internen Datenschutzbeauftragten ?';
		Antwort[0] = ['1. verfügt über unternehmensübergreifendes Fachwissen'];
		Antwort[1] = ['2. hat die nötigen Dokumente ggfs. bereits vorbereitet'];
		Antwort[2] = ['3. hat Kenntnisse in der Umsetzung des Datenschutzes'];
		Antwort[3] = ['4. hat umfangreichere Erfahrung und Kenntnisse in der Umsetzung des Datenschutzes'];
		Antwort[4] = ['5. ist nicht betriebsblind'];
		Antwort[5] = ['6. ist nicht durch andere Aufgaben (Teilzeit-DSB) im Unternehmen gebunden'];
		Antwort[6] = ['7. i.d.R. keine Weiterbildungskosten'];
		Loesung = [true, true, true, true, true, true, true];
	break;
	case 7:
		Frage = 'Nennen Sie bitte eine mögliche Maßnahme, welche die Kontrolle eines Auftragnehmers in Ihrem Unternehmen gewährleistet.';
		Antwort[0] = ['Vertrag zur Auftragsdatenverarbeitung'];
		Antwort[0] = ['vertragliche Regelung'];
		Loesung = [true, true];
	break;
	case 8:
		Frage = 'Wem gegenüber macht der Betroffene seine Betroffenenrechte geltend, wenn die Daten im Rahmen einer Auftragsverarbeitung verarbeitet werden?';
		Antwort[0] = ['dem Verantwortlichen'];
		Antwort[1] = ['der Aufsichtsbehörde'];
		Antwort[2] = ['dem Auftragsverarbeiter'];
		Loesung = [true, false, false];
	break;
	case 9:
		Frage = 'Nennen Sie Konfliktsituationen oder Probleme, die für den internen Datenschutzbeauftragten entstehen können.';
		Antwort[0] = ['Mangelnde Zeit'];
 		Antwort[1] = ['fehlende Aus- und Weiterbildung'];
 		Antwort[2] = ['fehlende Erfahrung'];
 		Antwort[3] = ['der Datenschutzbeauftragte muss auf Verletzungen zum Datenschutz hinweisen (Loyalitätsfalle)'];
 		Antwort[4] = ['der Datenschutzbeauftragte kann und darf nicht anweisen (fehlendes Weisungsrecht)'];
 		Antwort[5] = ['Interessenkonflikt bei eigenem Aufgabenbereich'];
 		Antwort[6] = ['notwendige Ressourcen werden nicht bewilligt'];
		Loesung = [true, true, true, true, true, true, true];
	break;
	case 10:
		Frage = 'Wer hat das Verzeichnis von Verarbeitungstätigkeiten zu erstellen ?';
		Antwort[0] = ['die Aufsichtsbehörde'];
		Antwort[1] = ['der/die Datenschutzbeauftragte'];
		Antwort[2] = ['der Verantwortliche'];
		Loesung = [false, false, true];
	break;
	case 11:
		Frage = 'Eine Einbindung des Datenschutzbeauftragten in die Kommunikationskette eines Unternehmens können Sie gewährleisten durch:';
		Antwort[0] = ['Mailumleitungen aller Mitarbeiter-Mailkonten auf Ihr eigenes Mail-Postfach'];
		Antwort[1] = ['Organisationsanweisung'];
		Loesung = [false, true];
	break;
	case 12:
		Frage = 'In welchem Zeitraum sind die Betroffenenrechte vom Verantwortlichen zu erfüllen ?';
		Antwort[0] = ['innerhalb von 24 Stunden'];
		Antwort[1] = ['innerhalb von 72 Stunden'];
		Antwort[2] = ['unverzüglich, innerhalb von einem Monat'];
		Loesung = [false, false, true];
	break;
	case 13:
		Frage = 'Welche Inhalte müssen Sie bei der Erstellung eines Jahresberichtes an die Geschäftsführung der verantwortlichen Stelle berücksichtigen ?';
		Antwort[0] = ['Ihre Urlaubsplanung für das kommende Jahr'];
		Antwort[1] = ['Beschwerden von Betroffenen'];
		Antwort[2] = ['aktuelle Sachstandsmeldung'];
		Antwort[4] = ['Anfragen seitens der Aufsichtsbehörden'];
		Loesung = [false, true, true, true];
	break;
	case 14:
		Frage = 'Welche Bereiche muss der Datenschutzbeauftragte bei einer "Ortsbegehung" in Augenschein nehmen ?';
		Antwort[0] = ['Serverraum'];
		Antwort[1] = ['Archiv'];
		Antwort[2] = ['Personalabteilung'];
		Antwort[3] = ['Unternehmensgelände (mögliche Videoüberwachung)'];
		Antwort[4] = ['Einfriedung, Zugänglichkeit zum Gelände'];
		Antwort[5] = ['Zentrale'];
		Loesung = [true, true, true, true, true, true];
	break;
	case 15:
		Frage = 'Fällt ein Unternehmen mit Geschäftssitz in den Vereinigten Staaten und ohne Niederlassung innerhalb der EU in der Anwendungsbereich der DSGVO, wenn es personenbezogene Daten von betroffenen Personen erhebt, die sich in der EU aufhalten ?';
		Antwort[0] = ['Ja, wenn das US-Unternehmen das Verhalten betroffener Personen (z.B. durch Tracking-Systeme) beobachtet, soweit das Verhalten in der Union erfolgt.'];
		Antwort[1] = ['Ja, wenn das US-Unternehmen Waren oder Dienstleistungen auf dem europäischen Markt anbietet und die Daten der betroffenen Personen im Zusammenhang mit diesem Angebot verarbeitet.'];
		Antwort[2] = ['Nein, die DSGVO entfaltet keine Bindungswirkung für US-Unternehmen.'];
		Loesung = [true, true, false];
	break;
	case 16:
		Frage = 'Sie prüfen eine schriftliche Einwilligung gem. Art. 7 sowie 13 DSGVO des Betroffenen zur Datenerhebung. Worauf müssen Sie achten, damit diese Einwilligung formal-juristisch korrekt ist ?';
		Antwort[0] = ['auf die Zwecke, für die die personenbezogenen Daten verarbeitet werden sollen, sowie die Rechtsgrundlage für die Verarbeitung'];
		Antwort[1] = ['Der Betroffene muss auf die Folgen der "Nichteinwilligung" schriftlich hingewiesen sein. (informed consent)'];
		Antwort[2] = ['Der Betroffene muss auf den jederzeit möglichen "Widerruf" schriftlich hingewiesen sein.'];
		Loesung = [true, true, true];
	break;
	case 17:
		Frage = 'Was bedeutet Weisungsfreiheit und Weisungsrecht des betrieblichen Datenschutzbeauftragten ?';
		Antwort[0] = ['Der Datenschutzbeauftragte kann den IT-Leiter anweisen, ein Berechtigungskonzept zu erstellen.'];
		Antwort[1] = ['Der Datenschutzbeauftragte ist in Ausübung seiner Fachkunde auf dem Gebiet des Datenschutzes weisungsfrei'];
		Loesung = [false, true];
	break;
	case 18:
		Frage = 'Für welche der nachfolgenden Länder wurde gemäß der Beurteilung der EU-Kommission nach Art. 46 Abs. 3 der Datenschutz-Grundverordnung ein angemessenes Schutzniveau verbindlich festgestellt ?';
		Antwort[0] = ['Schweiz'];
		Antwort[1] = ['USA'];
		Antwort[2] = ['Uruguay'];
		Antwort[3] = ['Kanada (teilweise, Ausnahme für öffentliche und nichtkommerzielle Stellen)'];
		Loesung = [true, true, true, true];
	break;
	case 19:
		Frage = 'Welche Vorteile hat ein externer Datenschutzbeauftragter gegenüber einem internen Datenschutzbeauftragten ?';
		Antwort[0] = ['ist nicht betriebsblind'];
		Antwort[1] = ['verfügt über unternehmensübergreifendes Fachwissen'];
		Antwort[2] = ['hat die nötigen Dokumente ggfs. bereits vorbereitet'];
		Antwort[3] = ['i.d.R. keine Weiterbildungskosten'];
		Loesung = [true, true, true, true];
	break;
	case 20:
		Frage = 'Welche Stellung hat der Datenschutzbeauftragte inne ?';
		Antwort[0] = ['Der interne Datenschutzbeauftragte ist Angestellter des Verantwortlichen und hat auch bei Ausübung seiner Tätigkeit Weisungen des Verantwortlichen Folge zu leisten.'];
		Antwort[1] = ['Der Datenschutzbeauftragte "berichtet unmittelbar" der höchsten Managementebene des Verantwortlichen.'];
		Loesung = [false, true];
	break;
	case 21:
		Frage = 'Fällt ein Unternehmen mit Geschäftssitz in den Vereinigten Staaten und ohne Niederlassung innerhalb der EU in der Anwendungsbereich der DSGVO, wenn es personenbezogene Daten von betroffenen Personen erhebt, die sich in der EU aufhalten ?';
		Antwort[0] = ['Ja, wenn das US-Unternehmen das Verhalten betroffener Personen (z.B. durch Tracking-Systeme) beobachtet, soweit das Verhalten in der Union erfolgt.'];
		Antwort[1] = ['Ja, wenn das US-Unternehmen Waren oder Dienstleistungen auf dem europäischen Markt anbietet und die Daten der betroffenen Personen im Zusammenhang mit diesem Angebot verarbeitet.'];
		Antwort[2] = ['Nein, die DSGVO entfaltet keine Bindungswirkung für US-Unternehmen.'];
		Loesung = [true, true, false];
	break;
	case 22:
		Frage = 'Welche Angaben beinhaltet die Meldepflicht gem. Art. 33 DSGVO ?';
		Antwort[0] = ['eine Beschreibung der wahrscheinlichen Folgen der Verletzung des Schutzes personenbezogener Daten'];
		Antwort[1] = ['eine Beschreibung der Art der Verletzung des Schutzes personenbezogener Daten, soweit möglich mit Angabe der Kategorien und der ungefähren Zahl der betroffenen Personen, der betroffenen Kategorien und der ungefähren Zahl der betroffenen personenbezogenen Datensätze'];
		Antwort[2] = ['den Namen und die Kontaktdaten des Datenschutzbeauftragten (wenn vorhanden) oder einer sonstigen Anlaufstelle für weitere Informationen'];
		Antwort[3] = ['Gesellschaftsvertrag'];
		Loesung = [true, true, true, false];
	break;
	case 23:
		Frage = 'In welchem Zeitraum ist der Aufsichtsbehörde mitzuteilen, dass es zu einer Verletzung des Schutzes personenbezogener Daten gekommen ist ?';
		Antwort[0] = ['Innerhalb eines Monats ab Kenntnisnahme der Verletzung'];
		Antwort[1] = ['Die Meldung ist möglichst innerhalb von 72 Stunden ab Kenntnis der Verletzung vorzunehmen, wenn die Datenschutzverletzung voraussichtlich ein Risiko für die Rechte und Freiheiten der betroffenen Personen bedeutet.'];
		Antwort[2] = ['Auch noch nach 72 Stunden, sofern der Verzögerung eine Begründung beigefügt ist.'];
		Loesung = [false, true, true];
	break;
	case 24:
		Frage = 'Ist der Datenschutzbeauftragte der Aufsichtsbehörde mitzuteilen ?';
		Antwort[0] = ['Nein, entfällt auf Grund der Benennung des DSB'];
		Antwort[1] = ['Nein, der DSB muss nicht mitgeteilt werden, die Mitteilung ist freiwillig'];
		Antwort[2] = ['Es besteht eine Pflicht, den Datenschutzbeauftragten gegenüber der Aufsichtsbehörde mitzuteilen'];
		Loesung = [false, false, true];
	break;
	case 25:
		Frage = 'Kann die Aufsichtsbehörde wegen einer Missachtung der Datenschutzgrundsätze in Art. 5 DSGVO Bußgelder verhängen ?';
		Antwort[0] = ['Die Datenschutzgrundsätze haben nur empfehlenden Charakter, ziehen aber keine Bußgeldbewehrung nach sich.'];
		Antwort[1] = ['Die Verletzung der Datenschutzgrundsätze kann mit Geldbuße von bis zu 20.000.000 Euro oder 4% des weltweiten Umsatzes bestraft werden.'];
		Antwort[2] = ['Die Verletzung der Datenschutzgrundsätze kann mit Geldbuße von bis zu 10.000.000 Euro oder 2% des weltweiten Umsatzes bestraft werden.'];
		Loesung = [false, true, false];
	break;
	case 26:
		Frage = 'Datenübermittlung an Drittstaaten: In welcher Unterlage/ Register muss ein Unternehmen dies festlegen ?';
		Antwort[0] = ['Verarbeitungsübersicht'];
		Antwort[1] = ['Technisch-Organisatorische Maßnahmen'];
		Loesung = [true, false];
	break;
	case 27:
		Frage = 'In welcher Form kann der Datenschutzbeauftragte die Mitarbeiter mit den Datenschutzgesetzen (BDSG, DSGVO) vertraut machen ?';
		Antwort[0] = ['Verteilen einer PowerPoint-Schulung zur DSGVO & BDSG'];
		Antwort[1] = ['Online-Schulung'];
		Antwort[2] = ['Präsenzschulung'];
		Loesung = [true, true, true];
	break;
	case 28:
		Frage = 'Können alte Einwilligungen nach Inkrafttreten der DSGVO weiter verwendet werden ?';
		Antwort[0] = ['Ja, wenn die Einwilligung einmal eingeholt wurde, gilt sie bis zum Widerruf fort, sie muss sicher nicht erneuert werden.'];
		Antwort[1] = ['Es ist zu prüfen, ob die Alteinwilligungen auch den Anforderungen entsprechen, welche die DSGVO an Einwilligungen stellt. Ist dies der Fall, kann weiter auf die alte Einwilligung zurückgegriffen werden.'];
		Loesung = [false, true];
	break;
	case 29:
		Frage = 'Der Kündigungsschutz des betrieblichen Datenschutzbeauftragten...';
		Antwort[0] = ['...ist über das BDSG "neu" weiterhin gewährleistet, sofern eine Pflicht zur Bestellung eines Datenschutzbeauftragten für den Verantwortlichen besteht.'];
		Antwort[1] = ['...ist im AGG weiterihn geregelt'];
		Antwort[2] = ['...ist in der DSGVO weiterhin geregelt.'];
		Loesung = [true, false, false];
	break;
	case 30:
		Frage = 'Wer ist für die RECHTMÄSSIGKEIT einer im Auftrag durchgeführten Verarbeitung verantwortlich ?';
		Antwort[0] = ['der Auftragsverarbeiter'];
		Antwort[1] = ['der Betroffene, sofern er in die Verarbeitung ausdrücklich eingewilligt hat'];
		Antwort[2] = ['die Aufsichtsbehörde'];
		Antwort[3] = ['der Verantwortliche'];
		Loesung = [false, false, false, true];
	break;
	case 31:
		Frage = 'Die DSGVO ist für die Verantwortlichen zwingend ab wann zu beachten ?';
		Antwort[0] = ['Die DSGVO ist am 24.05.2016 in Kraft getreten, verbindlich anzuwenden erst ab 25.05.2018'];
		Antwort[1] = ['Am 24.05.2016 und unmittelbar anwendbar'];
		Antwort[2] = ['Verstöße können auch vor dem 25.05.2018 gegen die DSGVO sanktioniert werden von den Behörden'];
		Loesung = [true, false, false];
	break;
	case 32:
		Frage = 'Bitte erläutern Sie den Begriff Pseudonymisieren.';
		Antwort[0] = ['die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden'];
		Antwort[1] = ['Bei der Pseudonymisierung wird der Name oder ein anderes Identifikationsmerkmal durch ein Pseudonym (zumeist ein Code, bestehend aus mehrstelligen Buchstaben- oder Zahlenkombinationen) ersetzt, um die Feststellung der Identität des Betroffenen auszuschließen oder wesentlich zu erschweren'];
		Antwort[2] = ['Die Pseudonymisierung ist das Verändern personenbezogener Daten derart, dass diese Daten endgültig nicht mehr einer Person zugeordnet werden können.'];
		Loesung = [true, true, false];
	break;
	case 33:
		Frage = 'Nennen Sie bitte eine mögliche Maßnahme, welche den Zugang zu einem Laptop in Ihrem Unternehmen gewährleisten könnte.';
		Antwort[0] = ['ID-Card'];
		Antwort[1] = ['Token'];
		Antwort[2] = ['Abschalten'];
		Antwort[3] = ['Passwort'];
		Loesung = [true, true, false, true];
	break;
	case 34:
		Frage = 'In welchem Zeitraum sind die Betroffenenrechte vom Verantwortlichen zu erfüllen ?';
		Antwort[0] = ['innerhalb von 42 Tagen ab Geltendmachung der Betroffenenrechte'];
		Antwort[1] = ['unverzüglich bzw. grundsätzlich innerhalb von einem Monat'];
		Antwort[2] = ['innerhalb von 24 Stunden nach Eingang des Antrags des Betroffenen mit der Option, diese Frist auf 72 Stunden zu verlängern'];
		Loesung = [false, false, true];
	break;
	case 35:
		Frage = 'Die Datenschutzgrundverordnung...';
		Antwort[0] = ['...gilt unmittelbar in allen Mitgliedstaaten'];
		Antwort[1] = ['...enthält Öffnungsklauseln, welche es den Mitgliedstaaten ermöglichen, im Rahmen der DSGVO ergänzend eigene Datenschutzvorschriften zu erlassen.'];
		Antwort[2] = ['...muss erst in eigenes Rechts (BDSG umgesetzt werden und gilt dann unmittelbar'];
		Loesung = [true, true, false];
	break;
	case 36:
		Frage = 'Wann ist ein Datenschutzbeauftragter nach der DSGVO zu bestellen ?';
		Antwort[0] = ['Wenn die Kerntätigkeit des Verantwortlichen oder des Auftragverarbeiters in der umfangreichen Verarbeitung besonderer Kategorien von Daten oder von personenbezogenen Daten über strafrechtliche Verurteilungen und Straftaten besteht.'];
		Antwort[1] = ['Wenn die Kerntätigkeit des Verantwortlichen oder des Auftragverarbeiters in der Durchführung von Verarbeitungsvorgängen besteht, welche aufgrund ihrer Art, ihres Umfangs und/oder ihrer Zwecke eine umfangreiche und systematische Überwachung von betroffenen Personen erforderlich machen.'];
		Antwort[2] = ['Wenn mindestens 20 Personen ständig mit der automatisierten Verarbeitung beschäftigt sind.'];
		Loesung = [true, true, false];
	break;
	case 37:
		Frage = 'Nennen Sie Zieldefinitionen eines Unternehmens zur Risikominimierung.';
		Antwort[0] = ['Verlust („Know-How“ / Marktposition)'];
		Antwort[1] = ['Imageschäden'];
		Antwort[2] = ['Monetäre Schäden'];  
		Antwort[3] = ['Arbeitsrechtliche Konsequenzen'];
		Antwort[4] = ['Strafrechtliche Konsequenzen'];
		Loesung = [true, true, true, true, true];
	break;
	case 38:
		Frage = 'In welcher Form kann der Datenschutzbeauftragte die Mitarbeiter mit den Datenschutzgesetzen (BDSG, DSGVO) vertraut machen ?';
		Antwort[0] = ['Präsenzschulung'];
		Antwort[1] = ['Verteilen einer PowerPoint-Schulung zum Thema Datenschutz'];
		Antwort[2] = ['Online-Schulung'];
		Loesung = [true, true, true];
	break;
	case 39:
		Frage = 'Welche Grundsätze benennt die DSGVO ?';
		Antwort[0] = ['Rechtmäßigkeit, Verarbeitung nach Treu und Glauben'];
		Antwort[1] = ['Transparenz'];
		Antwort[2] = ['Zweckbindung'];
		Antwort[3] = ['Datenminimierung'];
		Antwort[4] = ['Richtigkeit'];
		Antwort[5] = ['Speicherbegrenzung'];
		Antwort[6] = ['Integrität und Vertraulichkeit'];
		Antwort[7] = ['Rechenschaftspflicht'];
		Loesung = [true, true, true, true, true, true, true, true];
	break;
	case 40:
		Frage = 'Welche Aufgaben haben Datenschutzbeauftragte ?';
		Antwort[0] = ['Erstellung der DSFA'];
		Antwort[1] = ['Er kann die Information und Weiterbildung der Mitarbeiter zu datenschutzrechtlichen Themen übernehmen.'];
		Antwort[2] = ['Erstellung des Verfahrensverzeichnisses'];
		Antwort[3] = ['Überwachung der betrieblichen Datenverarbeitung'];
		Loesung = [false, true, false, true];
	break;
	case 41:
		Frage = 'Anonymisierte Daten...';
		Antwort[0] = ['...fallen in den Schutzbereich der DSGVO.'];
		Antwort[1] = ['...fallen nicht in den Schutzbereich der DSGVO.'];
		Antwort[2] = ['...werden in Art. 5 DSGVO definiert.'];
		Loesung = [false, true, false];
	break;
	case 42:
		Frage = 'Die Personaldaten auf dem Rechner des Betriebsrates unterliegen zwingend der Kontrolle durch den Datenschutzbeauftragten. Diese Aussage ist:';
		Antwort[0] = ['Richtig'];
		Antwort[1] = ['Falsch'];
		Loesung = [false, true];
	break;
	case 43:
		Frage = 'Welche technischen Einrichtungen im Büroalltag sollte sich der DSB genauer anschauen bzw. hinterfragen? Benennen Sie technische Büro- bzw. Kommunikationsgeräte.';
		Antwort[0] = ['Kopierer, Faxgeräte, Scanner, Multifunktionsgeräte'];
		Antwort[1] = ['Überwachungskameras'];
 		Antwort[2] = ['Telefonanlagen']; 
		Antwort[3] = ['Arbeitsplatz-PC'];
		Antwort[4] = ['Switche, Router']; 
		Antwort[5] = ['Smartphone, Tablets'];
		Antwort[6] = ['Schlüsselsysteme'];
		Loesung = [true, false, true, true, true, true, false];
	break;
	case 44:
		Frage = 'Das BDSG "neu"...';
		Antwort[0] = ['...setzt die DSGVO um.'];
		Antwort[0] = ['...ist mit Wirkung zum 25.05.2018 angepasst wurden, sowie Teil des Datenschutz-Anpassungs- u. Umsetzungsgesetz (DSAnpUG-EU), mit den zahlreichen nationalen Vorschriften.'];
		Antwort[0] = ['...spezifiziert in Teil 1 und 2 datenschutzrechtliche Regelungen entsprechend der Öffnungsklauseln der DSGVO.'];
		Loesung = [false, true, true];
	break;
	case 45:
		Frage = 'Was sind personenbezogene Daten ?';
		Antwort[0] = ['Einzelangaben über persönliche und sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person'];
		Antwort[1] = ['Einzelangaben über persönliche und sachliche Verhältnisse einer bestimmten oder bestimmbaren juristischen Person'];
		Antwort[2] = ['Einzelangaben über persönliche und sachliche Verhältnisse bestimmter oder bestimmbarer juristischer und natürlicher Personen'];
		Antwort[3] = ['Angaben über eine Person, wie z.B. Name, Blutgruppe, Bankdaten etc.'];
		Loesung = [true, false, false, false];
	break;
	case 46:
		Frage = 'Nennen Sie die Datenkategorien, die gem. Art. 9 DSGVO zu den besonderen personenbezogenen Daten gehören.';
		Antwort[0] = ['rassische und ethnische Herkunft'];
		Antwort[1] = ['politische Meinungen'];
		Antwort[2] = ['religiöse oder weltanschauliche Überzeugungen'];
		Antwort[3] = ['die Gewerkschaftszugehörigkeit'];
		Antwort[4] = ['die Verarbeitung von genetischen Daten'];
		Antwort[5] = ['biometrischen Daten zur eindeutigen Identifizierung einer natürlichen Person'];
		Antwort[6] = ['Gesundheitsdaten'];
		Antwort[7] = ['Daten zum Sexualleben oder der sexuellen Orientierung einer natürlichen Person'];
		Loesung = [true, true, true, true, true, true, true, true];
	break;
	case 47:
		Frage = 'Ein Auftragsverarbeiter (gem. Art. 28 DSGVO)...';
		Antwort[0] = ['...haftet für seine Auftragsverarbeitung ggf. gegenüber dem Betroffenen. Ihn betrifft auch der Art. 28, Absatz 10, Art. 82 DSGVO.'];
		Antwort[1] = ['...muss entweder einen AV-Vertrag unterzeichnen oder durch ein anderes Rechtsinstrument nach Unionsrecht oder dem Recht der Mitgliedsstaaten verpflichtet werden.'];
		Antwort[2] = ['Die Verpflichtung durch einen AV-Vertrag oder ein anderes Rechtsinstrument stellt nur eine Empfehlung dar und ist nicht zwingend zu erfüllen.'];
		Loesung = [true, true, false];
	break;
	case 48:
		Frage = 'Welches Strafmaß sieht die DSGVO bei Datenschutzverstößen vor ?';
		Antwort[0] = ['2 Jahre Haft oder Geldbuße'];
		Antwort[1] = ['4 Jahre Haft bei besonders schweren Fällen oder Geldbuße'];
		Antwort[2] = ['strafrechtliche Sanktionen bleiben den Mitgliedstaaten vorbehalten'];
		Loesung = [false, false, true];
	break;
	case 49:
		Frage = 'Was versteht man nach der DSGVO unter „Einschränkung der Verarbeitung“ ?';
		Antwort[0] = ['Jedes mit oder ohne Hilfe automatisiertes Verfahren'];
		Antwort[1] = ['Die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken'];
		Antwort[2] = ['Jede strukturierte Sammlung personenbezogener Daten'];
		Loesung = [false, true, false];
	break;
	case 50:
		Frage = 'Gibt es auch in der DSGVO noch eine Norm, welche die Datenverarbeitung zur Erfüllung des Vertrages mit der betroffenen Person erlaubt ?';
		Antwort[0] = ['Nein, es ist immer eine Einwilligung für die Datenverarbeitung in Verträgen einzuholen, Art. 7 DSGVO.'];
		Antwort[1] = ['Ja, die Verarbeitung personenbezogener Daten ist für die Erfüllung eines Vertrages mit der betroffenen Person zulässig, soweit die Verarbeitung erforderlich ist, Art. 6 DSGVO.'];
		Loesung = [false, true];
	break;

} // Switch Ende
	
	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (!flagListe) finishMaske(aktKarte);


} // Funktion Ende

/******************************************************************************
************** DB alleFragen5 *************************************************
******************************************************************************/	

function alleFragen5(aktKarte){
	
switch (aktKarte) {

	case 0:	
		Frage      = 'Durch welche/n Geräteeinsatz kann die <strong>Verfügbarkeit</strong> von Hardwaresystemen erhöht werden ?';
		Antwort[0] = ['USV-Anlage (unterbrechungsfreie Stromversorgung)'];
		Antwort[1] = ['Notstromaggregate'];
		Loesung    = [true, true];	
	break;
	case 1:
		Frage      = 'Welche Aspekte gilt es bei der Datensicherung zu berücksichtigen ?';
		Antwort[0] = ['Die Aufbewahrung der Sicherungsdatenträger sollte möglichst im selben Brandabschnitt wie die der Originaldaten erfolgen.'];
		Antwort[1] = ['Die Sicherungsvorgänge und eventuelle Fehlermeldungen sind zu dokumentieren.'];
		Antwort[2] = ['Es sind regelmäßig Tests zur Datenwiederherstellung durchzuführen.'];
		Loesung    = [false, true, true];	
	break;
	case 2:
		Frage      = 'Der erfolgreiche Betrieb eines Firewall-Systems ist abhängig von:';
		Antwort[0] = ['der Sicherheits-Policy'];
		Antwort[1] = ['der Größe der Serverfarm'];
		Antwort[2] = ['dem Firewall-Konzept'];
		Loesung    = [true, false, true];	
	break;
	case 3:
		Frage      = 'Welche flankierenden organisatorischen Maßnahmen sind zwingend bei einem Backup zu berücksichtigen ?';
		Antwort[0] = ['Regelmäßigkeit, Authentizität, Sicherheit, Verfügbarkeit'];
		Antwort[1] = ['Hamburger, Kippen, Kaffee '];
		Loesung    = [true, false];	
	break;
	case 4:
		Frage      = 'Nennen Sie typische Schwachstellen im Bereich Vertraulichkeit und Integrität (Zugangskontrolle).';
		Antwort[0] = ['Vertrauen darauf das der Kollege ein Buddy ist'];
		Antwort[1] = ['Social Engineering'];
		Antwort[2] = ['Offene Türen und Fenster'];
		Antwort[3] = ['Fehlender Blickschutz'];
		Antwort[4] = ['Passwörter auf Post-It'];
		Loesung    = [true, true, true, true, true];	
	break;
	case 5:
		Frage      = 'Nennen Sie grundlegende Konzepte zur Dokumentation des technischen Datenschutzes.';
		Antwort[0] = ['Logging, Auditing, Pen-Testing'];
		Antwort[1] = ['Dienstanweisungen, IT-Richtlinien'];
		Antwort[2] = ['TOMs, IT-Sicherheitskonzept, Passwort-Konzept'];
		Antwort[3] = ['Datensicherungskonzept, Löschkonzept, Konzept zum Datenumgang'];
		Antwort[4] = ['Home-Office-Arbeitsplatzrichtlinie, Wiederanlaufkonzept'];
		Loesung    = [true, true, true, true, true];	
	break;
	case 6:
		Frage      = 'Nennen Sie Maßnahmen, um den unbefugten Zutritt in Unternehmensbereiche zu verhindern';
		Antwort[0] = ['Zäune/Mauern'];
		Antwort[1] = ['Verschlossene und einbruchssichere Türen/Fenster'];
		Antwort[2] = ['Wachschutz'];
		Loesung    = [true, true, true];	
	break;
	case 7:
		Frage      = 'Was ist unter dem Begriff "Asymmetrische Verschlüsselung" zu verstehen ?';
		Antwort[0] = ['Zwei Schlüssel, Privat und Öffentlich'];
		Antwort[1] = ['Drei Schlüssel, Privat, Öffentlich und Vertraulich'];
		Antwort[2] = ['Zwei Schlüssel, Öffentlich und Vertraulich'];
		Loesung    = [true, false, false];	
	break;
	case 8:
		Frage      = 'Erläutern Sie stichpunktartig den Begriff "Patch-Management".';
		Antwort[0] = ['Just in Time Beseitigung von Fehlern in der Software'];
		Antwort[1] = ['Regelmäßige System-Updates'];
		Loesung    = [true, true];	
	break;
	case 9:
		Frage      = 'Um eine "Applikationskontrolle" (Application Access Control) sinnvoll im Unternehmen einzuführen, benötigt der Betreiber';
		Antwort[0] = ['eine Entscheidung, welche Anwendungen im Unternehmen ausgeführt werden dürfen.'];
		Antwort[1] = ['die Sicherstellung von Kontrollen und Freigabeverfahren.'];
		Antwort[2] = ['die "Unbedenklichkeitsliste" von iTunes.'];
		Loesung    = [true, true, false];	
	break;
	case 10:
		Frage      = 'Ein "White-List-Verfahren" basiert auf dem Konzept:';
		Antwort[0] = ['Alles ist verboten, was nicht explizit erlaubt ist.'];
		Antwort[1] = ['Alles ist erlaubt, was nicht explizit verboten ist.'];
		Loesung    = [true, false];	
	break;
	case 11:
		Frage      = 'Welche Varianten stehen für einen ausreichenden Virenschutz im Firmennetzwerk ?';
		Antwort[0] = ['Viruswall + Antivirensoftware nur auf dem Client (Workstation)'];
		Antwort[1] = ['Antivirensoftware nur auf dem Server'];
		Antwort[2] = ['Viruswall + Antivirensoftware auf Client und Server '];
		Loesung    = [false, false, true];	
	break;
	case 12:
		Frage      = 'Die Protokollierung von IT-Systemen ist zum Zwecke der Datenschutzkontrolle notwendig. Wie ist mit den Protokolldaten umzugehen ?';
		Antwort[0] = ['Personalleitung und Betriebsrat benötigen sie regelmäßig zur Evaluation.'];
		Antwort[1] = ['Es genügt, wenn die Abteilungsleiter die Protokolle ihrer direkten Mitarbeiter zur Auswertung erhalten.'];
		Antwort[2] = ['Die Protokolle sind – sofern kein konkreter Verdacht besteht – anonymisiert und von dazu befugten Sicherheitsverantwortlichen zu überprüfen.'];
		Loesung    = [false, false, true];	
	break;
	case 13:
		Frage      = 'Ein "Black-List-Verfahren" basiert auf dem Konzept:';
		Antwort[0] = ['Alles ist verboten, was nicht explizit erlaubt ist.'];
		Antwort[1] = ['Alles ist erlaubt, was nicht explizit verboten ist.'];
		Loesung    = [false, true];	
	break;

} // Switch Ende
	
	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (!flagListe) finishMaske(aktKarte);

} // Funktion Ende

/******************************************************************************
************** OnDownloadFile File Download ***********************************
******************************************************************************/	

var oLastUrl = null; // zum Testen

function OnDownloadFile(){
 var sText, oBlob, elLink;
 
 // Letzte Objekt-URL löschen (falls vorhanden)
 if (oLastUrl == null){
 window.URL.revokeObjectURL(oLastUrl);
 oLastUrl = null;
 }

	sText = "<!DOCTYPE html>\r\n<html lang='en'>\r\n<head>\r\n<meta charset='utf-8'>\r\n<title>Testfile</title>\r\n<meta name='author' content='Axel Larator'>\r\n<meta name='description' content='Liste Flashcard'>\r\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\r\n<link rel='stylesheet' href='/css/custom.css'>\r\n<link rel='stylesheet' href='/css/flash01-dsa.css'>\r\n</head>\r\n<body>\r\n"


 sText = sText + '---\r\n' + 'title: Liste\r\n' + 'author: Blog Author\r\n' + '---\r\n'; // Kopie anlegen
	sText = sText + dsaListe01(3) + '</body>\r\n</html>\r\n'; // Inhalt Liste DSA erzeugen
 
 // Blob-Objekt erzeugen
 oBlob = new Blob([ sText ], { type: "text/html" });
 
 // Download-Element laden
 // elLink = zeigt auf richtiges directory

		elLink = document.getElementById("downloadLink");
 
 // URL erzeugen und merken
 oLastUrl = window.URL.createObjectURL(oBlob);
 
 // URL dem HTML-Element zuweisen
 elLink.href = oLastUrl;
 
		// var openingPreview = browser.tabs.printPreview();
 
		// Klick auslösen
 elLink.click();
		
		// oLastUrl = window.URL.revokeObjectURL(oBlob);
} // Ende OnDownloadFile
	