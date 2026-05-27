console.log('on est');
//! Création de la map
//! La map est une instance de la classe L.map
//! Avec le setView on définit la position et le zoom de la map
let map = L.map('map').setView([51.505, -0.09], 13);

//! Definition d'un titre placé sur la map
//! Avec le maxZoom on définit le zoom maximum de la map
//! Avec le attribution on définit le titre de la map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//! Definition d'un marqueur placé sur la map
//! Avec le setView on définit la position et le zoom du marqueur
let marker = L.marker([51.505, -0.09]).addTo(map);

