---
id: flash01-dsa
hide_title: Lernkarten für DSA
sidebar_label: Lernkarten DSA
---

<!-- Die Frage -->

<p id="dsaFrage"></p>

<!-- Die Antworten -->

<table id="dsaTab1"> </table><!-- CheckBox und dann die Antworten anzeigen-->
	
<form> 

<div id="dsaTab4"></div> <!-- Links zur jeweiligen Maske -->

<!-- Die Ausgaben -->

<div id="dsaTab3">
	<input type="button" class="butknopf" id="Hinweis"  disabled readonly value="Hinweis"/>       <!--Hinweise aller Art ----------->
	<input type="button" class="butknopf" id="lfdKarte" disabled readonly value="Karte"/>         <!--Aktuelle Karte von x Karten--->
	<input type="button" class="butknopf" id="Prozent"  disabled readonly value="Prozent"/>       <!--Kartenauswertung in % -------->
	<input type="button" class="butknopf" id="Ergebnis" disabled readonly value="Gesamtergebnis"/><!--Gesamtergebnis alle Karten---->
	<input type="button" class="butknopf" id="dsaUhr1"  disabled readonly value="Uhrzeit"/>
</div>

<!-- Die Knöpfe -->

<div id="dsaTab2"><!-- Dann die Knöpfe Start, Prüfen, Zurück und Weiter -->
	<input type="button" class="knopf trans" id="rotKnopf" value="Neustart" onClick="initDB(1)"/>
	<input type="button" class="knopf trans" id="blaKnopf" value="Prüfen"   onClick="dsa01(7)"/>
	<input type="button" class="knopf trans" id="gruKnopf" value="Zurück"   onClick="dsa01(8)"/>
	<input type="button" class="knopf trans" id="oraKnopf" value="Weiter"   onClick="dsa01(9)"/>
</div>

</form>

<!-- Initialisierung -->

<p hidden><img src="/img/zur.png" width="20" onload="initDB(1)" /></p> 

