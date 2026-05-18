# fullstackSquad-JS

Hub de cours et d'exercices JavaScript construit avec Vite, Tailwind CSS et DaisyUI.

## Objectif du projet

Ce repository sert de support pedagogique pour pratiquer JavaScript par theme :

- Variables
- Calculs
- Strings
- Tableaux
- Fonctions
- Histoire de JavaScript

L'application expose une page d'accueil qui centralise les liens vers les lecons et exercices.

## Stack technique

- `JavaScript` (ES modules)
- `Vite` (serveur de dev + build)
- `Tailwind CSS` v4
- `DaisyUI`

## Structure du projet

```text
.
├── index.html
├── package.json
├── src
│   ├── main.js
│   ├── style.css
│   ├── lessons
│   │   ├── history.html
│   │   ├── variables.html
│   │   ├── calculs.html
│   │   ├── strings.html
│   │   ├── tableaux.html
│   │   └── fonctions.html
│   │   └── objets.html
│   │   └── operateurs.html
│   │   └── conditions.html
│   └── exercices
│       ├── variables.html / variables.js
│       ├── calculs.html / calculs.js
│       ├── strings.html / strings.js
│       ├── tableaux.html / tableaux.js
│       └── fonctions.html / fonctions.js
└── iA-rules.md
```

## Demarrage rapide

### 1) Prerequis

- `Node.js` 18+ recommande
- `npm`

### 2) Installation

```bash
npm install
```

### 3) Lancer en local

```bash
npm run dev
```

Puis ouvrir l'URL affichee par Vite (en general `http://localhost:5173`).

## Scripts disponibles

- `npm run dev` : lance le serveur de developpement.
- `npm run build` : genere la version de production.
- `npm run preview` : previsualise le build localement.

## Fonctionnement pedagogique

- Les pages `src/lessons/*.html` presentent les notions theoriques.
- Les pages `src/exercices/*.html` chargent des scripts `*.js` avec des exercices pratiques (affichage console, manipulations de donnees, fonctions, etc.).
- Le point d'entree `index.html` agit comme menu principal vers tous les chapitres.

## Notes utiles

- `src/style.css` active Tailwind et DaisyUI via :
  - `@import "tailwindcss";`
  - `@plugin "daisyui";`
- `src/main.js` contient surtout du code Vite commente (base de demo), ce qui laisse la logique principale directement dans les scripts d'exercices.
- `iA-rules.md` definit un cadre d'usage de l'IA pour privilegier l'apprentissage de la logique JavaScript.

## Pistes d'amelioration

- Ajouter une vraie navigation partagee (navbar/footer) injectee dynamiquement.
- Harmoniser toutes les pages d'exercices avec le meme design que les pages de cours.
- Ajouter des tests unitaires sur les fonctions d'exercices.
- Corriger les petites incoherences de langue/typos dans quelques pages.
