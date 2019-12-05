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
		Frage = 'Um die Rechenschaftspflichten der Unternehmen zu gewährleisten, ist es erforderlich, ein Datenschutzmanagementsystem einzuführen. Diese Aussage ist:
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
		Loesung = [true, true, false, false];		'];
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
		Frage = 'Eine Einbindung des Datenschutzbeauftragten in die Kommunikationskette eines Unternehmens können Sie gewährleisten durch:
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
		Loesung = [true, false false];
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
		Antwort[2] = ['Die Pseudonymisierung ist das Verändern personenbezogener Daten derart, dass diese Daten endgültig nicht mehr einer Person zugeordnet werden können.];
		Loesung = [true, true, false];
	break;
	case 33:
		Frage = 'Nennen Sie bitte eine mögliche Maßnahme, welche den Zugang zu einem Laptop in Ihrem Unternehmen gewährleisten könnte.'];
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
		Frage = 'Die Personaldaten auf dem Rechner des Betriebsrates unterliegen zwingend der Kontrolle durch den Datenschutzbeauftragten. Diese Aussage ist:
		Antwort[0] = ['Richtig'];
		Antwort[1] = ['Falsch'];
		Loesung = [false, true];
	break;
	case 43:
		Frage = 'Welche technischen Einrichtungen im Büroalltag sollte sich der DSB genauer anschauen bzw. hinterfragen? Benennen Sie technische Büro- bzw. Kommunikationsgeräte.';
		Antwort[0] = ['Kopierer, Faxgeräte, Scanner, Multifunktionsgeräte]';
		Antwort[1] = ['Überwachungskameras'];
 		Antwort[2] = ['Telefonanlagen']: 
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
	
	if (flagListe) return;

let y = 0;
let anzAnt = "";
let anzVer = "";

	document.getElementById("dsaFrage").innerHTML = Frage; 
	
	for (y = 0; y < anzAntworten; y++){
		anzAnt = "antwort"+y;
		document.getElementById(anzAnt).innerHTML = Antwort[y]; 

	}	
	for (y = anzAntworten; y < maxAntworten; y++){
		anzAnt = "antwort"+y;
		anzVer = "versteck"+y;
		document.getElementById(anzVer).style.visibility = "hidden"; 
		document.getElementById(anzVer).style.borderBottom = "solid white";
		document.getElementById(anzAnt).style.visibility = "hidden"; 
		document.getElementById(anzAnt).style.borderBottom = "solid white";
	}	
	scroll(0,0); // Experiment

} // Funktion Ende