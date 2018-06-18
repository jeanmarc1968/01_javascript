
// == comparer que 2 valeurs sont identiques (ex: 7 et "7")
// === vérifier que 2 valeurs sont identiques et du même type (ex: 7 et 7(vrai) ex: 7 et "7"(faux))
// < inferieur à
// > supérieur
// >= supérieur ou égal
// <= inférieur ou égal
// != vérifier que 2 valeurs sont inégales
// !== vérifie que 2 valeurs sont strictement inégales

// Comparateurs logiques
// && -> AND (et)
// || -> OR (ou)
// ! -> NOT (non)

var t = "quelquechose";
var r = 12;
// si t est identique et de même type que "quelquechose" et que r est égal et du même que 1 on écrit "quelquechose" sinon on écrit r.

if ((t === "quelquechose") && (r === 1)) { 
    document.write(t); //Ne s'exécute qui si les 2 conditions sont vrai
} else {
    document.write(r); // Ne s'exécute que si l'une des conditions est fausse
}

// Si t est identique et du même type que "quelquechose" ou que r est égale et du même type que number on écrit r.
if ((t === "quelquechose") || (t === number)) {
    document.write(r)
}
    document.write("Erreur !!!");

if (!t === "test") {
    document.write('azertyuiop');
} else {
    document.write('poiuytreza');
}