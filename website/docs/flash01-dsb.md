---
id: flash01-dsb
hide_title: Beauftragte 1
sidebar_label: Beauftragte 1
---

<!-- Die Frage --> 

<p id="dsaFrage"></p>

<!-- Die Antworten -->

<table id="dsaTab1"></table> <!-- CheckBox und dann die Antworten anzeigen -->

<div id="dsaTab4"></div> <!-- Links zur jeweiligen Maske -->

<!-- Die Ausgaben -->

<div id="dsaTab3"></div>

<!-- Initialisierung -->

<p hidden><img src="/img/zur.png" width="20" onload="initDB(2)" /></p> 

<!-- Die Knöpfe -->

<div id="dsaTab2"><!-- Dann die Knöpfe Start, Prüfen, Zurück und Weiter -->
	<div hidden>
## LERNKARTEN Beauftragte 1 <br /><br />

###	<input type="button" class="knopf trans" id="blaKnopf" value="Prüfen"   onClick="dsa01(7)"/>   

###	<input type="button" class="knopf trans" id="oraKnopf" value="Weiter"   onClick="dsa01(9)"/>   

###	<input type="button" class="knopf trans" id="gruKnopf" value="Zurück"   onClick="dsa01(8)"/>   

###	<input type="button" class="knopf trans" id="rotKnopf" value="NeuStart" onClick="initDB(2)"/>   
	</div>
</div>

