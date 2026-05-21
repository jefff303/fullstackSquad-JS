const pokemonApiContact = async () => {
    const pokemonListe = document.getElementById('pokemonListing');
    console.log(pokemonListe);
    //Data va récup Toutes les données de l'api
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const pokemonDataTransformed = await pokemonData.json();
    console.log('pokemonDataTransformed',pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    // OU stntaxe en mode tableau associatif 
    console.log(pokemonDataTransformed.results[0]['name']);
    // Boucle pour parcourir le tableau results dans la réponse
    pokemonDataTransformed.results.forEach(unPokemon => {
        let listElement = document.createElement('h3');
        listElement.innerText = unPokemon.name;
        pokemonListe.append(listElement);

// SALE NOOB ya aucune Gestion d'erreur JEff (note a soi meme)

    });
};
// pokemonApiContact();


//? Version un peu plus SAFE (try catch if)
const pokemonApiContactSafe = async () => {
    const pokemonListe = document.getElementById('pokemonListing');
    console.log(pokemonListe);

    try {
        // Data va récup toutes les données de l'api
        const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
        console.log('pokemonData', pokemonData);

        if (!pokemonData.ok || pokemonData.status !== 200) {
            console.error('Erreur lors de la récupération des données :', pokemonData.statusText);
            return;
        }

        // Plutôt que de travailler sur la réponse, on la transforme en objet JS
        const pokemonDataTransformed = await pokemonData.json();
        console.log('pokemonDataTransformed', pokemonDataTransformed);
        console.log(pokemonDataTransformed.results);
        console.log(pokemonDataTransformed.results[0].name);
        // console.log(pokemonDataTransformed.results[0]['name']);

        pokemonDataTransformed.results.forEach(unPokemon => {
        // pokemonDataTransformed.results.map(unPokemon => {
            const listElement = document.createElement('p');
            // <p></p>
            listElement.innerText = unPokemon.name;
            // <p>bulbasaur</p>
            pokemonListe.append(listElement);
        });
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error);
    }
};
pokemonApiContactSafe();


async function fetchQuotes  () {    
    let mainTitle = document.querySelector('#chuckNorrisFact');
    
    // Vérifie si l'URL est celle de la page d'accueil
        // if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        //Data va récup Toutes les données de l'api de Chuck Norris
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);
        console.log(response.ok);
        console.log(response.status);
        //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
        const dataTransformed = await response.json();
        console.log(dataTransformed);
        console.log(dataTransformed.value);
        console.log(dataTransformed.icon_url);
        mainTitle.innerText = dataTransformed.value; // Affiche la blague
    // const divChuck = document.querySelector('#chuckDiv')
    //     const chuckIcon = document.createElement('img');
    //     chuckIcon.src = dataTransformed.icon_url;
    //     divChuck.append(chuckIcon)
        //Jeff Noob ya pas de try catch 
};

function fetchQuotesThenCatch() {
    console.log('azert');
    
    let mainTitle = document.querySelector('#chuckNorrisFact');
    
    // 1. On lance la requête vers l'API
    fetch('https://api.chucknorris.io/jokes/random')
        // 2. On convertit la réponse brute en objet JavaScript
        .then(response => response.json())
        // 3. On utilise les données reçues pour mettre à jour le HTML
        .then(dataTransformed => {
            console.log(dataTransformed);
            mainTitle.innerText = dataTransformed.value; // Affiche la blague
        })
        // 4. On gère les erreurs (ex: coupure internet)
        .catch(error => {
            console.error("Erreur lors de l'appel API :", error);
        });
}

const chuckNorrisBtn = document.querySelector('#call-chuck');
// console.log(chuckNorrisBtn);
// On fait référence à la fonction 
// chuckNorrisBtn.addEventListener('click',fetchQuotes)
chuckNorrisBtn.addEventListener('click',fetchQuotesThenCatch)






 function fetchQuotesThenCatchCheckOk() {


    // Vérifie si l'URL est celle de la page d'accueil
        // Data va récupérer la promesse de l'appel API
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => {
                console.log(response);
                console.log(response.ok);
                console.log(response.status);

                // Vérifie si la réponse est OK (statut 200-299)
                if (!response.ok) {
                    // Lance une erreur pour être capturée par le .catch()
                    throw new Error(`Erreur HTTP: Statut ${response.status}`);
                }
                // Transforme la réponse en objet JS (retourne une nouvelle promesse)
                return response.json();
            })
            .then(dataTransformed => {
                console.log(dataTransformed);
                // Affiche la blague dans l'élément DOM
                mainTitle.innerText = dataTransformed.value;
            })
            .catch(error => {
                // Gère toutes les erreurs (réseau, réponse non-OK, erreur de parsing JSON)
                console.error("Erreur lors de la récupération ou du traitement de la blague :", error);
            });
    
}
























function chargerPokemonsLocaux() {
    // 1. On donne le chemin RELATIF vers le fichier JSON
    // Le chemin dans le fetch() est relatif au fichier HTML, PAS au fichier JS.
    fetch('../../data.json')
        // 2. On convertit la réponse brute en tableau/objet JS
        .then(response => {
            if (!response.ok) {
                throw new Error("Impossible de charger le fichier JSON");
            }
            return response.json();
        })
        // 3. On utilise les données reçues
        .then(pokemons => {
            console.log("Données locales reçues :", pokemons);
            
            // Exemple d'affichage dans la console
            pokemons.forEach(pokemon => {
                console.log(`Le Pokémon ${pokemon.nom} est de type ${pokemon.type}`);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la lecture du JSON :", error);
        });
}

// Appel de la fonction
chargerPokemonsLocaux();


