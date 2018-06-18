var string = "string";
var float = 0.01;
var number = 1;
var boolean = false;
var array = [];

//console.log(typeof(string));
//console.log(typeof(float));
//console.log(typeof(number));
//console.log(typeof(boolean));
//console.log(typeof(array));

//var t = float.toString(); //fonction toString(); permet de convertir ma variable en texte

//var f = number.parseFloat();
//console.log(typeof(t));
//console.log(typeof(f));

// const sert à déclarer une constante qui sera accèssible uniquement en lecture(consultable). Ici elle à une portée globale c'est à dire que je peux l'appeler n'importe où dans mon script, elle aura toujours la valeur "Constante".
//const CONSTANTE = "Constante=20"; //valeur globale

//let CONSTANTE = 12; //renvoi une erreur parce que la constante CONSTANTE est déjà défini dans le contexte global.

//début
//if (CONSTANTE === 7) {//début bloc local
//   let CONSTANTE = 20;
//   console.log(CONSTANTE);
  //fin bloc local
//var CONSTANTE = 20;

//console.log(CONSTANTE);
// = affecter une valeur
// == comparer que 2 valeurs sont identiques (ex: 7 et "7")
// === vérifier que 2 valeurs sont identiques et du même type (ex: 7 et 7(vrai) ex: 7 et "7"(faux))
// < inferieur à
// > supérieur
// >= supérieur ou égal
// <= inférieur ou égal
// != vérifier que 2 valeurs sont inégales
// !== vérifie que 2 valeurs sont strictement inégales
/* const AZERTY = 20;

if (AZERTY < 20); {
    let AZERTY = 12;
    console.log(AZERTY);
}
else if(AZERTY >= "test") {
    let AZERTY = 12;
    console.log(AZERTY);
}
} else {
    let AZERTY = 1;
    console.log (AZERTY);
} */

/* var azerty = prompt("Quel est votre âge?");
alert(azerty); */

// ParseInt permet de préciser que l'on attend un nombre en retour
var azerty = parseInt(prompt("Quel est votre âge?"));
//alert(azerty);

// ParseFloat permet de préciser que l'on attend un nombre à virgule en retour
//var azerty = parseFloat(prompt("Quel est votre âge?"));
//alert(âge);

var majorite = 18;

if(azerty >= majorite) {
    alert("Super tu es majeur");
} else{
    alert("Dommage");
    document.location.href = "https://google.fr"; 
}