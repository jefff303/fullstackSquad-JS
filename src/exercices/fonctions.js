// prenom;
// alert('Ce message ne s\'affichera pas');


// try{
//     prenom
//     alert('Bonjour');  
// }catch(err){
//     alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
//         -----------
//         Le Nom de l'erreur 
//         ${err.name}
//         -----------
//         Le Message de l'erreur  :
//         ${err.message}
//         ----------
//         L'emplacement de l'erreur:
//         ${err.stack}`);
// }
// alert(`Ce message s'affiche correctement`);

// function division(){
//     let x = prompt('Entrez un premier nombre (numérateur)');
//     let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
//     if(isNaN(x) || isNaN(y) || x == '' || y == ''){
//         throw new Error('Merci de rentrer deux nombres');
//     }else if(y == 0){
//         throw new Error('Division par 0 impossible')
//     }else{
//         alert(x / y);
//     }
// }

// division();

function division(){
    let x = prompt('Entrez un premier nombre (numérateur)');
    let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
    if(isNaN(x) || isNaN(y) || x == '' || y == ''){
        throw new Error('Merci de rentrer deux nombres');
    }else if(y == 0){
        throw new Error('Division par 0 impossible')
    }else{
        alert(x / y);
    }
}

// division();

try{
    division();
}catch(err){
    // alert(err.message);
    console.log(err);
}finally{
    alert(`Ce message s'affichera quoiqu'il arrive`);
}




































function additionner(nombre = 0) {
    console.log(33 + nombre);
}

additionner(2);

function additionner2(firstNumber = 0, secondNumber = 0) {
    console.log(firstNumber + secondNumber);
}
additionner2(2, 3);

//! Pour mieux séparer la responsabilité de la fonction,on va dire que notre fonction doit retourner un résultat.
//! On fait l'affichage dans un autre endroit.(console.log)
//! On va aussi utiliser des paramètres par défaut pour éviter les erreurs de type "undefined".

function additionnerOpti(firstNumber = 0, secondNumber = 0) {
    return firstNumber + secondNumber;
}
console.log(additionnerOpti(2, 3));

// Ambiance fonction fléchée
const additionnerFleche = (firstNumber = 0, secondNumber = 0) => {
    return firstNumber + secondNumber;
}
console.log(additionnerFleche(2, 3));

// Ambiance fonction fléchée optimisée
const additionnerFlecheOpti = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;
console.log(additionnerFlecheOpti(2, 3));

// Ambiance fonction fléchée optimisée avec paramètre par défaut
const additionnerFlecheOptiDefault = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;
console.log(additionnerFlecheOptiDefault(2, 3));


//! Fonction sécurisée pour éviter les erreurs de type "undefined".
//! Avec gestion d'erreur.
function additionnerOptiSécurisée(firstNumber = 0, secondNumber = 0) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return firstNumber + secondNumber;
}
console.log(additionnerOptiSécurisée("azerty", 3));


//! Exo 5.3 La moyenne au bac.
let notesTiboInShape = [0, 3, 4, 6, 18, 19, 4];
/**
 * Calcule la moyenne arithmétique d'un tableau de notes.
 *
 * @param {number[]} notes - Tableau de nombres à moyenner (somme divisée par la longueur du tableau).
 * @returns {number} La moyenne des éléments, ou `NaN` si le tableau est vide (`0 / 0`).
 * @example
 * calculerMoyenne([10, 12, 8]); // 10
 */
function calculerMoyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        //systeme de cumul des notes
        // somme = somme + notes[i];
        somme += notes[i];
    }
    return somme / notes.length;
}
let moyenneTiboInShape = calculerMoyenne(notesTiboInShape);
console.log('La moyenne des notes de TiboInShape est :', moyenneTiboInShape);


//! Exo 5.3 La moyenne au bac - Logique centralisée avec condition
let notesTibo = [0, 3, 4, 6, 18, 19, 4];

function gererResultatBac(notes) {
    // 1. Calcul de la moyenne
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    let moyenne = somme / notes.length;

    // 2. Affichage de la moyenne
    console.log('La moyenne des notes est :', moyenne.toFixed(2)); // .toFixed(2) pour arrondir proprement

    // 3. Logique de décision (Condition)
    if (moyenne >= 10) {
        console.log("Résultat : Reçu ! Daamn, bien joué ! 💪");
    } 
    else if (moyenne >= 8 && moyenne < 10) {
        console.log("Résultat : Assez bien, mais tu peux mieux faire ! 🏋️‍♂️");
    }
    else if (moyenne >= 5 && moyenne < 8) {
        console.log("Résultat : Pas mal, mais tu peux mieux faire ! 🏋️‍♂️");
    }
    else {
        console.log("Résultat : Direction les rattrapages, Daamn ! 🏋️‍♂️");
    }
}

// Un seul appel suffit maintenant
gererResultatBac(notesTiboInShape);


// faire une fonction d'addition    

