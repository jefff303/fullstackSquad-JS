// *! **************************************
//  *! LOCAL STORAGE
//  *! **************************************
//  */
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable renderZone
// TODO 3: à la valeur contenue dans monTxt on assigne keyup, sur keyup on utilise la fonction getItem("monSuperTexte")
// TODO 4-1: ensuite, SI la valeur dans monTxt est définie,
// TODO 4-2: alors on assigne au innerHTML de renderZone, keyup sur lequel on utilise la fonction getItem("monSuperTexte")
// TODO 5-1: (en dehors du IF)Sur monTxt on place un addEventListener qui surveillle le clavier et exécute une fonction
// TODO 5-2: Dans cette fonction, sur keyup on utilise la fonction setItem
// TODO 5-3: setItem() prend en 1er param "monSuperTexte", et en 2e param la valeur contenue dans monTxt
// TODO 5-4: on assigne au innerHTML de renderZone la valeur contenue dans monTxt 

const myTxt = document.querySelector("#note-textarea");
// console.log(myTxt);

const renderZone = document.querySelector(".textRender");
// console.log(renderZone);

//On va pré remplir le textarea avec ce que l'on récupère dans le local storage
myTxt.value = localStorage.getItem('monSuperTexte');
//Si myTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
// Cela va nous permettre de ne pas perdre les données si on rafraîchit la page
if(myTxt.value){
    renderZone.innerText = localStorage.getItem('monSuperTexte');
};
//On détecte ce que tape l'utilisateur dans le textarea
myTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le keyup sous le nom "monSuperTexte"
localStorage.setItem('monSuperTexte',myTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
    renderZone.innerText =myTxt.value;
    // renderZone.innerHTML =marked(myTxt.value);
});





//! TODO 1: Sélectionner les deux éléments clés :
// - Le bouton bouton toggle (#darkmode-toggle)
// - La balise racine HTML (document.documentElement)


// ==========================================
// ÉTAPE INITIALE : Au chargement de la page
// ==========================================

// TODO 2.1: Récupérer la valeur stockée sous la clé 'monThemeApp' dans le localStorage.


// TODO 2.2: Créer une condition (IF) :
// SI la valeur récupérée vaut 'dark' :
// -> Ajouter l'attribut 'data-theme' (DaisyUI) avec la valeur 'dark' sur la balise racine HTML.
// -> Passer la propriété '.checked' du toggle à true.
// SINON :
// -> Régler l'attribut 'data-theme' (DaisyUI) à 'light'.


// ==========================================
// ÉTAPE DYNAMIQUE : Au clic sur le bouton
// ==========================================

// TODO 3: Écouter l'événement 'change' sur le toggle.


    // TODO 3.1: Créer une condition (IF) :
    // SI le bouton est coché (votre_toggle.checked) :
    // -> Appliquer le thème 'dark' sur la balise racine HTML.
    // -> Sauvegarder 'dark' dans le localStorage sous la clé 'monThemeApp'.
    
    // SINON :
    // -> Appliquer le thème 'light' sur la balise racine HTML.
    // -> Sauvegarder 'light' dans le localStorage.

//! On va tester la checkbox pour faire un dark mode sauvegarder en localstorage
//! Exercice : Le commutateur de Mode Sombre (Dark Mode)
const darkToggle = document.querySelector('#darkmode-toggle');
const rootHtml = document.documentElement; // Cible la balise <html>

// ==========================================
// ÉTAPE 1 : CHARGEMENT INITIAL (Vérification au rafraîchissement)
// ==========================================

// 1. On récupère le choix précédent de l'utilisateur
const savedTheme = localStorage.getItem('monThemeApp');

// 2. Si l'utilisateur avait activé le mode sombre auparavant :
if (savedTheme === 'dark') {
    rootHtml.setAttribute('data-theme', 'dark'); // On applique le thème dark à DaisyUI
    darkToggle.checked = true;                    // On force le bouton toggle à s'allumer
} else {
    rootHtml.setAttribute('data-theme', 'light'); // Sinon, on force le mode clair
    darkToggle.checked = false;                   // Et le bouton reste éteint
}

// ==========================================
// ÉTAPE 2 : ÉCOUTE DU CHANGEMENT (Clic utilisateur)
// ==========================================
darkToggle.addEventListener('change', () => {
    
    // Si le toggle vient d'être activé (coché)
    if (darkToggle.checked) {
        rootHtml.setAttribute('data-theme', 'dark');  // On passe l'application en sombre
        localStorage.setItem('monThemeApp', 'dark');  // On sauvegarde ce choix
    } 
    // Si le toggle vient d'être désactivé (décoché)
    else {
        rootHtml.setAttribute('data-theme', 'light'); // On repasse l'application en clair
        localStorage.setItem('monThemeApp', 'light'); // On sauvegarde ce choix
    }
    
});

// localStorage.clear();