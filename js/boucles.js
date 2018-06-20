
// Les boucles

//Dans les parenthèses de la boucle for : départ ; condition ; incrémentation
//Au départ, j’affecte une valeur à ma variable. Cette valeur est un chiffre.
//Ma condition dit « tant que ce chiffre est inférieur à 100 ».
//Mon incrémentation consiste à ajouter +1 à chaque tour de boucle.
//Dans mes accolades, ce code sera exécuté à chaque tour de boucle, donc il sera exécuté 99 fois.
//for(var monChiffre = 1; monChiffre <= 100; monChiffre++){
    //document.write(monChiffre + "<br>");
//}


//La boucle WHILE est une autre manière d’écrire une boucle. Basée sur le même principe que la
//boucle for, ses instructions seront exécutées tant que la condition est remplie.
//La syntaxe de la boucle WHILE est plus proche de l’humain que celle de la boucle FOR même si la
//boucle FOR est très utilisée par les développeurs.
//Reprenons notre exemple du compteur de chiffre. Cette fois écrit en version WHILE:
//var monChiffre = 1;
//while(monChiffre <= 100){
    //document.write(monChiffre + "<br>");
   // monChiffre++; // a chaque tour de boucle tu rajoutes 1
//}


//La boucle DO WHILE, est une boucle qui exécutera d’abord une première fois le code SANS tester la
//condition ; PUIS ensuite, n’exécutera le code que si la condition est remplie pour toutes les fois
//suivantes.
// var monChiffre = 1;
// do{
    // monChiffre += 1;
    // monChiffre = monChiffre +1;

    // monChiffre -= 1;
    // monChiffre = monChiffre -1;
    // document.write("Ce code ne s'exécutera qu'une seule fois");
// } while (monChiffre <= 110) {
    // document.write (monChiffre + "<br>");
    //monChiffre++;
// }


// Incrémentation
//var monChiffre = 1;
//monChiffre++ => monChiffre + 1;
//monChiffre-- => monChiffre -1;


//var monEquipe = ["Loris", "Sidibe", "Varane", "Umtiti", "Mendy", "Kante", "Pogba", "Matuidi", "Mbappé", "Grizman", "Giroud", "Tolisso", "Pavard", "Hernandez",  "Nzonzi","Dembele"];
//for(var i = 0; i < monEquipe.length; i++) {
    //alert("présentation" + monEquipe[i]);
//}

// Les boucles
// La boucle for utilisé dans la plupart des cas ou on connait le nombre de répétition. S'écrit for (var maVariable < 12; maVariable++ ou maVariable--)

var monTableau = [1,2,3,4];

for(var i = 0; i < monTableau.length; i++) {
    document.write(monTableau[i]);
}

var result = "";
monTableauObjet = {
    nom: "samba",
    email: "test@test.fr"
}

// boucle la plus adaptée pour explorer les tableaux d'objet
for(var i in monTableauObjet) {
    result = result + monTableauObjet[i];
    //result += monTableauObjet[i]; // écriture simplifiée
    document.write(result);
}

// La boucle while est plus adaptée dans les cas ou on ne connait pas le nombre de répétitions.

var maVariable = [0,1,2,3];

while (maVariable <= maVariable.length) {
    maVariable++;    
}
document.write(maVariable);



