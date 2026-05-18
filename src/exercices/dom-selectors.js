console.log('---------------ExerciceDOM Selectors---------------');
// TODO : Dans une page avec plein de paragraphes.
// TODO : Se débrouiller pour selectionner tous les paragraphes dans une HTMLCollection.
// TODO : Avec Array.from(), convertir la HTMLCollection en tableau.
// TODO : Sur le tableau on va utiliser la méthode .map() pour parcourir chaque paragraphe et modifier leur contenu via innerText ainsi que leur style.backgroundColor.

const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

// On va transformer la HTMLCollection en tableau
let tabCollection = Array.from(allParagraphs);
console.log(tabCollection);

tabCollection.map(unP => {
    console.log(unP);
    unP.innerText = 'Hello la fullstackSquad';
    unP.style.backgroundColor = 'chartreuse';
    unP.style.fontSize = '20px';
    unP.style.fontFamily = 'comic sans ms';
    unP.style.fontWeight = 'bold';
    unP.style.textAlign = 'center';
    unP.style.textTransform = 'uppercase';
    unP.style.textDecoration = 'underline';
    unP.style.textShadow = '2px 2px 2px rgba(0, 0, 0, 0.5)';
    unP.style.textOverflow = 'ellipsis';
    unP.style.whiteSpace = 'nowrap';
});

// let tableau = ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"];

// tableau.map(element => {
//     console.log(element);
//     element = 0;
// });