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




const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
        console.log(rawData);
        
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        apiDiv.innerHTML = transformedData.longitude;
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}
contactApiSecurePlus();
