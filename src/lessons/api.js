const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =   () => {
async function contactApi(){
    //Data va récup Toutes les données de l'api
    const data = await  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(data);
    console.log(data.ok);
    console.log(data.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle devient un OBJET JS (+ pratique)
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.longitude;
};
contactApi();
