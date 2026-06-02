# MUJAWARA 🗺️

Application React pour cartographier des conférences et meetups tech à travers le monde.

## Stack

- **React 18** + react-scripts (Create React App)
- **Leaflet** + react-leaflet pour la carte interactive
- Données JSON statiques (facilement remplaçables par une API)

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm start
```

L'app sera disponible sur http://localhost:3000

## Structure

```
src/
├── data/
│   └── events.js        ← Toutes les données des événements
├── components/
│   ├── MapView.jsx       ← Vue carte (Leaflet)
│   ├── ListView.jsx      ← Vue liste (groupée par pays > ville)
│   └── EventCard.jsx     ← Carte d'un événement (réutilisée)
├── App.jsx               ← Layout principal + navigation
└── index.css             ← Variables CSS globales
```

## Ajouter un événement

Ouvre `src/data/events.js` et ajoute un objet dans le tableau :

```js
{
  id: 10,                          // Unique
  name: "Nom de la conférence",
  city: "Ville",
  country: "Pays",
  lat: 48.858,                     // Latitude GPS
  lng: 2.347,                      // Longitude GPS
  date: "15–16 mars 2025",
  time: "09:00 – 18:00",
  description: "Description...",
  speakers: "Speaker 1, Speaker 2",
  website: "https://...",
  tags: ["JavaScript", "Frontend"],
}
```

## Prochaines étapes possibles

- Connecter une vraie base de données (Airtable, Supabase, Notion...)
- Ajouter un formulaire de soumission d'événement
- Filtrer par date (événements à venir uniquement)
- Déployer sur Vercel : `npm run build` puis `vercel --prod`
