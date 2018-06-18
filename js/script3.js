// Enoncer : Dans un nouveau fichier javascript créé une constante nom initialisé avec une donnée string.
//Créé une variable pseudo & mot de passe avec pour valeur des données string.
//Créé une boite de dialogue qui demende à l'utilisateur son pseudo, une qui demande son mot de passe.
//Créé une condition qui redifini la constante nom.
//Créé une condition qui si mot de passe n'est pas égal redirige vers une page web (n'importe laquelle).


const NOM = "Jean-Marc";

var pseudo = prompt ("Quel est ton pseudo?");


if (NOM == "Jean-Marc") {
    let NOM = "mobilier";
    console.log(NOM);
}

if (pseudo != "mobilier") {
    alert("Pseudo incorrect !!");
}   else {
    var motDePasse = prompt("Quel est ton mdp ?");

    if (motDePassse != "mobilier") {
        alert("Mot de passe invalide !!");
    }
}