// TODO : On récupère le Titre
// TODO : On place un écouteurs d'évènement sur le Titre (qui réagit au click)
// TODO : Dans la fonction de l'écouteur d'évènement on se débrouille pour modifier le texte du titre
//TODO : Bonus comment faire pour quand on reclick ca remet le contenu de base du titre ;) ?    

// On selectionne le titre
const mainTitle = document.querySelector('h1');
let isClicked = false;
// console.log(mainTitle);
// On place l'écouteur d'events


mainTitle.addEventListener('click',()=>{
    console.log('Ok le titre est clickable');
    // ON modifie le innerText de ce meme titre
    // mainTitle.innerText = '😄';
    mainTitle.innerText = isClicked  ? '😄' : 'Hello World'
    isClicked = !isClicked;
});

