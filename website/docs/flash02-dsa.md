---
id: flash02-dsa
hide_title: Lernkarten für DSA 123
sidebar_label: Lernkarten DSA [123]
---

<!-- Die Frage -->

<p id="dsaFrage"></p>

<form> 

<!-- Die Antworten -->

<table id="dsaTab1"><!-- CheckBox und dann die Antworten anzeigen -->
	
</table>

<!-- Die Knöpfe -->

<div id=dsaTab2><!--Dann die Knöpfe Start, Prüfen, Zurück und Weiter--->
	<div id="rot">
		<input type="button" class="knopf rot"    id="rotKnopf" value="NeuStart" onClick="initDB(3)"/>
		<input type="button" class="knopf blau"   id="blaKnopf" value="Prüfen"   onClick="dsa01(7)"/>
		<input type="button" class="knopf gruen"  id="gruKnopf" value="Zurück"   onClick="dsa01(8)"/>
		<input type="button" class="knopf orange" id="oraKnopf" value="Weiter"   onClick="dsa01(9)"/>
	</div>
</div>

<!-- Die Ausgaben -->

<div id=dsaTab3>
	<div id="dsaTab3out">
		<input type="button" id="Hinweis"  disabled readonly value="Hinweis"/>       <!--Hinweise aller Art ----------->
		<input type="button" id="lfdKarte" disabled readonly value="Karte"/>         <!--Aktuelle Karte von x Karten--->
		<input type="button" id="Prozent"  disabled readonly value="Prozent"/>       <!--Kartenauswertung in % -------->
		<input type="button" id="Ergebnis" disabled readonly value="Gesamtergebnis"/><!--Gesamtergebnis alle Karten---->
		<input type="button" id="dsaUhr1"  disabled readonly value="Uhrzeit"/>
	</div>
</div>

<!-- Initialisiereung -->

<p hidden><img src="/img/zur.png" width="20" onload="initDB(3)" /></p> 

</form>

<div id=dsaTab4>
	
</div>

