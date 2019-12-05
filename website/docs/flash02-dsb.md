---
id: flash02-dsb
hide_title: Beauftragte 2
sidebar_label: DSB Lernkarten 2
---

<!-- Die Frage --> 

<p id="dsaFrage"></p>

<!-- Die Antworten -->

<table id="dsaTab1"></table> <!-- CheckBox und dann die Antworten anzeigen -->

<div id="dsaTab4"></div> <!-- Links zur jeweiligen Maske -->

<!-- Die Ausgaben -->

<div id="dsaTab3"></div>

<!-- Initialisierung -->

<p hidden><img src="/img/zur.png" width="20" onload="initDB(5)" /></p> 

<!-- Die Knöpfe -->

<div id="dsaTab2"><!-- Dann die Knöpfe Start, Prüfen, Zurück und Weiter -->
	<div hidden>
## LERNKARTEN Beauftragte 2 <br /><br />

###	<input type="button" class="knopf trans" id="blaKnopf" value="Prüfen"   onClick="dsaFragen(7)"/>   

###	<input type="button" class="knopf trans" id="oraKnopf" value="Weiter"   onClick="dsaFragen(9)"/>   

###	<input type="button" class="knopf trans" id="gruKnopf" value="Zurück"   onClick="dsaFragen(8)"/>   

###	<input type="button" class="knopf trans" id="rotKnopf" value="NeuStart" onClick="initDB(5)"/>   
	</div>
</div>

		