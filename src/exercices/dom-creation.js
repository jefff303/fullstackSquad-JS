//!-----------------------Exercice DOM afficher profil utilisateur-----------------------

const userData = {
    name: 'Janine delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: false,
    img: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };
  // JS qui va customiser la div du profile utilisateur
  let divUser = document.querySelector('.userProfile');
  divUser.setAttribute('productId','9876543E4R567')
  console.log(divUser);


  divUser.addEventListener('click',()=>{
    console.log('CA CLICK');
    divUser.style.backgroundColor = 'red';
  })

  divUser.style.backgroundColor = `#4158D0`;
  divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
  divUser.style.color = `white`;
  divUser.style.width = '500px';
  divUser.style.margin = 'auto';
  divUser.style.padding = '2rem';
  //JS crée une image, renseigne la src , modif taille
  const imgTemplate = document.createElement('img');
  imgTemplate.src = userData.img;
  imgTemplate.alt = userData.name;
  imgTemplate.style.height = '500px';
  imgTemplate.style.width = '500px';
  divUser.appendChild(imgTemplate);
  // JS crée le titre du name
  const nameTemplate = document.createElement('h1');//phase 1 creation
  nameTemplate.innerText = userData['name'];
//   nameTemplate.innerText = userData.name;
  divUser.appendChild(nameTemplate);
  // JS crée le titre du email
  const emailTemplate = document.createElement('h2');//phase 1 creation
  emailTemplate.innerText = userData.email;
  divUser.append(emailTemplate);
  // JS crée le titre du age
  const ageTemplate = document.createElement('h2');//phase 1 creation
  ageTemplate.innerText = userData.age;
  divUser.appendChild(ageTemplate);
  // JS crée le titre du dob
  const dobTemplate = document.createElement('h2');//phase 1 creation
  dobTemplate.innerText = userData.dob;
  divUser.appendChild(dobTemplate);
  // JS crée le titre du active
  const activeTemplate = document.createElement('h2');//phase 1 creation
  // activeTemplate.innerText = userData.active;
  activeTemplate.innerText = userData.active ? 'OnLine' : 'OffLine';
//   activeTemplate.innerText = userData.active===true ? 'OnLine' : 'OffLine';
  divUser.append(activeTemplate);


//!-----------------------Exercice Fonction ajouterTexte-----------------------


function ajouterTexte(prenom, nom) {
  const containerAdd = document.querySelector('#textAdd');
  console.log(containerAdd);
  // On créer un élément p
  const nouveauParagraphe = document.createElement('p');
// On créer un élément strong
const strong = document.createElement('strong');
// On ajoute le texte au strong
strong.textContent = prenom;
// On ajoute le strong au p
nouveauParagraphe.append(strong);
// On ajoute le texte au p
nouveauParagraphe.append(` - ${nom}`);
// On ajoute le p au body
containerAdd.append(nouveauParagraphe);
}


ajouterTexte('Daniel','Gracia');
ajouterTexte('Jarry','La Borne');
ajouterTexte('Jean-Claude','Vandamme');
ajouterTexte('Bernard','De LaVitreArrière');

// ajouterTexte('Denis','La Mailce');
// ajouterTexte('Janine','Delavega');


