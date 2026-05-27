//! Exercice pour sécuriser un formulaire de connexion avec les Regexp
// // montrer exemple preventDefault sur formulaire 

// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log('formulaire soumis');
// });

const loginInput = document.querySelector('#login-email');
const passwordInput = document.querySelector('#login-password');
const errorList = document.querySelector('.error-list');
const emailRegexp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!+#]/;

// ----------------Écoutage clavier sur l'input mail ----------------

loginInput.addEventListener('keyup', () => {
    console.log('ca écrit dans le mail');
    // ici Faudra faire un check de ce qu'on tape dans l'email avec notre regex du mail
    // Si c'est OK background de l'input en vert 
    // Sinon background en rouge
    if (!emailRegexp.test(loginInput.value)) {
        loginInput.style.backgroundColor = "red";
    }
    else {
        loginInput.style.backgroundColor = "chartreuse";
    }
    // loginInput.style.backgroundColor = emailRegexp.test(loginInput.value) ? "chartreuse" : "red";
});

passwordInput.addEventListener('keyup', () => {

    //LE CORRECTIF : Si le champ est totalement vide
    if (passwordInput.value === '') {
        errorList.innerHTML = '';     // On efface les messages
        errorList.style.border = 'none'; // On retire la bordure rouge/verte
        return;                        
    };

    let errorMessages = '';
    // console.log('ca écrit dans le MDP');
    // Ici faudra tester le MDP avec la longueur 
    //Si trop court on affichera msg "mdp trop court"
    if (passwordInput.value.length < 6) {
        errorMessages += "<li>Votre Mot de passe est trop Court</li>";
    }
    //Sinon Si trop long affichera msg "mdp trop court"
    else if (passwordInput.value.length > 8) {
        errorMessages += "<li>Votre Mot de passe est trop Long</li>"
    }

    // Si le mot de passe ne match pas la regex pour les decimales on affichera "faut un chiffre"
    if (!passwordInput.value.match(charDecimal)) {
        errorMessages += '<li>Le Mot de passe doit contenir 1 chiffre</li>';
    }
    //Si le mot de passe ne match pas la regex pour les charactères spé on affichera "faut un caractère spé"
    if (!passwordInput.value.match(charSpecial)) {
        errorMessages += '<li>Le Mot de passe doit contenir 1 caractère spécial</li>';
    }
    //Si notre errorMessages  n'est pas vide, on affiche les erreurs et on fait un peu de rouge au niveau du style
    if (errorMessages !== '') {
        errorList.innerHTML = `Le mot de passe est : <ul class='list-disc p-3'>${errorMessages}</ul>`;
        errorList.style.border = '5px solid red';
    }
    //Sinon ca veut dire qu'on a bon on affiche un message de confirmation et on fait un peu de style en vert.
    else {
        errorList.innerHTML = `Le mot de passe est VALIDE bien joué`;
        errorList.style.border = '5px solid green';
    }
});
