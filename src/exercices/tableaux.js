console.log("-------------------Exercices Tableaux-------------------");
        //!---------------------------------------------------------------------------
        //!----------------------- EXERCICE ARRAYS -----------------------------------
        //!---------------------------------------------------------------------------

// Exercice 1
let prenom = 'JoSé';
let age = 45;
//! On déclare un tableau avec cette syntaxe : []
//! On peut placer ce que l'on veut dans un tableau 
// let unTableau = [12,'Salut ca va bien?',prenom,age];
// console.log(unTableau);
// console.log(unTableau[2]);

//! Exemple avec un tableau dans un tableau 
let mesPassions = ["Boxe","Jonquilles"];
let tabUser = [prenom, age, mesPassions];
console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);

// Exercice 2
let testTabAjout = [10,10,10];
console.log(`Avant Ajout :',${testTabAjout}`);
testTabAjout.push('Cortex',92,'Les Pyramides');
console.log('Après Ajout : ',testTabAjout);

//Exemple avec POP
let testTabSuppression = [10,10,10];
console.log('Avant Suppression :',testTabSuppression);
testTabSuppression.pop();
console.log('Après Suppression : ',testTabSuppression);

// Exercice 3 
// let leNom = 'Garcia';
// let lePrenom = 'José';
// let initiales = lePrenom[0] + leNom[0];
// let laPhrase = [];
// laPhrase.push(leNom,lePrenom,initiales)
// console.log(laPhrase);