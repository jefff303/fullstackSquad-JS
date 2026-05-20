//! Exercice DOM Events au click on change le texte d'un titre
// TODO : On récupère le Titre
// TODO : On place un écouteurs d'évènement sur le Titre (qui réagit au click)
// TODO : Dans la fonction de l'écouteur d'évènement on se débrouille pour modifier le texte du titre
//TODO : Bonus comment faire pour quand on reclick ca remet le contenu de base du titre ;) ?    

// On selectionne le titre
const mainTitle = document.querySelector('h1');
// ?pour le reclick il nous faudra un booleen (on sait si ca a été clické ou pas)
let isClicked = false;
// On place l'écouteur d'events
mainTitle.addEventListener('click', () => {
    console.log('Ok le titre est clickable');
    // ON modifie le innerText de ce meme titre
    mainTitle.innerText = '😄';
    // ? Condition ternaire (un if else avec un syntaxe plus light)
    // ? si le booleen est vrai dans le contenu du titre on met un smiley sinon on met 'hello world'
    mainTitle.innerText = isClicked ? '😄' : 'Hello World'
    // ? a chaque click le booleen passe à sonn inverse
    isClicked = !isClicked;
});

//! Exercice au click sur des buttons on applique une classe CSS sur un titre
// ? On récupère dans des variables les élements sur lesquels on va travailler.
const secondTitle = document.querySelector('h2');
// console.log(secondTitle);

const allBtn = document.querySelectorAll('.btn-exo-classList');
// console.log(allBtn);
// console.log(allBtn[0]);
// console.log(allBtn[1]);
// console.log(allBtn[2]);

// allBtn[0].addEventListener('click', () => {
//     console.log('Click sur ADD');
//     secondTitle.classList.add('superClass')
// });

allBtn[1].addEventListener('click', () => {
    console.log('Click sur REMOVE');
    secondTitle.classList.remove('superClass')
    
});
allBtn[2].addEventListener('click', () => {
    console.log('Click sur TOGGLE');
    secondTitle.classList.toggle('superClass')
});

//! Exercice au click dans la page cela créer et place une img pile au coordonées X Y du click

// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui capte l'event en paramètre
// TODO 2: On va console log cet event pour aller voir les propiété des coordonnées

//TODO 3 : On crée une image (avec la position en absolute), avec top et left on la place aux coord du click (on oublie pas un petit append pour qu'elle s'affiche)  


document.addEventListener('click',(clickEvent)=>{
    console.log('clickEvent',clickEvent);
    console.log('clickEvent Coord X',clickEvent.x);
    console.log('clickEvent Coord Y',clickEvent.y);
    
})









