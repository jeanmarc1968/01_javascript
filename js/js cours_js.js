
// const est une constante accessible uniquement en lecture dans le contexte global.

// les conditions if...esle if..else, permettent de définir une condition pour laquelle on souhaite exécuteer un code particulier. C'est un bloc de code local.

// opérateurs logiques &&(and), ||(or), !(not) -> NOT transforme ce qui est vrai en faux et vice versa.
// -> les opérateurs logiques sont généralement utilisés avec des valeurs booléennes et renverrons des booléens à l'exception de AND(&&) et OR (||).
// pour en savoir plus:
                    https://developer.mozilla.org/fr/docs/Web/Javascript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison

// les variables (var) sont des boîtes dans lesquelles on stock des données
// ex: var boîte = ["donne1", "donne2", "donne3", "donne4"];
// il existe des variables à portée globale et locale
// global = "cette variable est globale";
var test = 0;
if (test == 0) {  // code à n'exécuter que dans ce contexte
    global = "salut";
}
console.log(global);

function name(params) { // N'exécute ce code que si la fonction name est appeler
    seti = 23;
}

//Manipuler le DOM

// HTML -> Parent
// HEAD -> body -> enfant de html
// HEAD -> META
//         META
//         META

var div = document.getElementById('maDiv');
alert(div);
var classe = document.getElementsByClassName ('maClass');
alert(classe);

var name = document.getElementsByName('samba');
alert(name);

var imgs = document.getElementsByTagName('img');
 for(var i = 0; i < imgs.length; i++) {
     alert ("Elémént n° " + (i + 1) +": " + imgs[i]);
 }

 function faitTournerImage() {
     // code pour faire tourner une image
 }

 faitTournerImage(imgs);

 var query = querySelector('#maDiv .maClass p');
 var query = querySelectorAll('#maDiv .maClass p');

 alert(query.innerHTML);
 alert(queryAll.length);
 alert(queryAll[0].innerHTML +"br" + queryAll[1].innerHTML + "br" + queryAll[2].innerHTML);
 for(var i=0; i < queryAll.length; i++) {
     document.write(queryAll[i]);
     console.log(queryAll);
 }

// le lien entre parenthèse est celui défini dans l'attribut id de notre a (Ex: <a href="#" id="lien">lien</a)
 var lien = document.getElementsByTagName('a');

 // Récupère l'attribut href du lien
 var href = lien.getAttribute('href');

 alert(href);

// modifie la valeur du href dans le lien
 lien.setAttribute('href', 'https://google.com');
 alert(lien);

// Ajoute une classe à la div maDiv
 div.className = 'blue';

 // créé variable classes qui contient nos classes
 var classes = document.getElementsByClassName ('maClasse').className; 

 // je créé un tableau vide qui va contenir mes nouvelles classes
 var nouvelClasses = [];

 // La méthode split() me permet de découper le résultat en plus petit morceaux. Ici je défini la division sur l'espace('');
 classes = classes.split('');

 // On parcours dans le tableau des classes
 for(var i = 0; i < classes.length; i++) {
     if (classes[i]) {
         nouvelClasses.push([i]);
     }
 }

 alert(nouvelClasses);

 var element = document.querySelector('div');
 // Ajouter une classe sur une balise
 div.classList.remove('efface');

 // Retire une classe si elle existe ou bien l'ajoute si elle n'existe pas
 div.classList.toogle('classe-toogle');

// 

 classes.nouvelClasses.add('new');

