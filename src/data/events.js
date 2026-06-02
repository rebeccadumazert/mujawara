const events = [
	{
		id: 1,
		name: "Assemblée internationaliste de la Bekaa",
		city: "Baalbek",
		country: "Liban",
		lat: 34.004,
		lng: 36.211,
		date: "7–8 juin 2025",
		time: "10:00 – 22:00",
		description:
			"Rassemblement de collectifs libanais, syriens et palestiniens autour des luttes de résistance populaire et de reconstruction communautaire dans la vallée de la Bekaa.",
		speakers:
			"Collectif Samidoun, Comité de résistance de Baalbek, délégations syriennes",
		website: "https://mujawara.org",
	},
	{
		id: 2,
		name: "Fête internationaliste de Montreuil",
		city: "Montreuil",
		country: "France",
		lat: 48.864,
		lng: 2.448,
		date: "14 juin 2025",
		time: "14:00 – 02:00",
		description:
			"Grande fête de soutien aux révolutions syrienne et soudanaise. Banquet, musique, prises de parole et levée de fonds pour les espaces autonomes partenaires.",
		speakers:
			"Collectif Mujawara Paris, exilé·es soudanais·es, militant·es kurdes",
		website: "https://mujawara.org",
	},
	{
		id: 3,
		name: "Marche pour le Rojava",
		city: "Berlin",
		country: "Allemagne",
		lat: 52.52,
		lng: 13.405,
		date: "21 juin 2025",
		time: "13:00 – 18:00",
		description:
			"Marche internationale de solidarité avec la révolution du Rojava et les combattant·es des montagnes du Rojhelat. Rassemblement place Hermannplatz.",
		speakers:
			"Conseil démocratique kurde d'Europe, YXK, militant·es antifascistes",
		website: "https://mujawara.org",
	},
	{
		id: 4,
		name: "Forum révolutionnaire de Taipei",
		city: "Taipei",
		country: "Taïwan",
		lat: 25.032,
		lng: 121.565,
		date: "6–7 juin 2025",
		time: "09:00 – 19:00",
		description:
			"Forum de discussion entre collectifs asiatiques sur les mouvements populaires en Birmanie, aux Philippines et en Indonésie. Ateliers d'auto-organisation et de sécurité numérique.",
		speakers:
			"Résistance birmane, activistes philippins, syndicats indonésiens",
		website: "https://mujawara.org",
	},
	{
		id: 5,
		name: "Acte de solidarité — Khartoum en exil",
		city: "Nairobi",
		country: "Kenya",
		lat: -1.286,
		lng: 36.817,
		date: "15 juin 2025",
		time: "11:00 – 20:00",
		description:
			"Rencontre des comités de résistance soudanais en exil. Mémorial pour les victimes de la guerre au Soudan, échange sur les chambres d'urgence et les réseaux d'entraide.",
		speakers:
			"Comités de résistance de Khartoum, diaspora soudanaise d'Afrique de l'Est",
		website: "https://mujawara.org",
	},
	{
		id: 6,
		name: "Encuentro anticolonial de Santiago",
		city: "Santiago",
		country: "Chili",
		lat: -33.448,
		lng: -70.673,
		date: "20–22 juin 2025",
		time: "10:00 – 21:00",
		description:
			"Encuentro régional des mouvements anticapitalistes d'Amérique latine. Échanges sur les soulèvements au Pérou, en Colombie et au Chili, et construction d'un réseau continental.",
		speakers:
			"Movimiento 8M, collectifs mapuches, délégations péruviennes et colombiennes",
		website: "https://mujawara.org",
	},
	{
		id: 7,
		name: "Rassemblement Chiapas Vivo",
		city: "Mexico",
		country: "Mexique",
		lat: 19.432,
		lng: -99.133,
		date: "28 juin 2025",
		time: "12:00 – 22:00",
		description:
			"Rassemblement de soutien aux communautés zapatistes du Chiapas et aux peuples autochtones en résistance. Rituels, prises de parole et solidarité matérielle.",
		speakers:
			"Redes de Apoyo Zapatista, EZLN sympathisants, collectifs indigènes",
		website: "https://mujawara.org",
	},
	{
		id: 8,
		name: "Assemblée populaire des Balkans",
		city: "Belgrade",
		country: "Serbie",
		lat: 44.817,
		lng: 20.457,
		date: "12 juin 2025",
		time: "15:00 – 21:00",
		description:
			"Dans le sillage des grands plénums serbes, une assemblée populaire ouverte pour faire le bilan des mobilisations et tisser des liens avec les mouvements européens.",
		speakers:
			"Organisateurs des plénums, collectifs étudiants, syndicats indépendants",
		website: "https://mujawara.org",
	},
	{
		id: 9,
		name: "Banquet de solidarité — Galloway",
		city: "Galloway",
		country: "Écosse",
		lat: 55.07,
		lng: -4.42,
		date: "29 juin 2025",
		time: "16:00 – 23:00",
		description:
			"Grand banquet communautaire dans les collines du Galloway, organisé par la ferme collective locale en soutien aux luttes internationalistes. Musique, partage et levée de fonds.",
		speakers: "Ferme collective de Galloway, réseau Rural Resistance UK",
		website: "https://mujawara.org",
	},
	{
		id: 10,
		name: "Veillée pour la Palestine — Nancy",
		city: "Nancy",
		country: "France",
		lat: 48.692,
		lng: 6.184,
		date: "5 juin 2025",
		time: "18:00 – 22:00",
		description:
			"Veillée et marche aux flambeaux en hommage aux victimes du génocide à Gaza. Prise de parole de militant·es et familles palestiniennes de la région.",
		speakers:
			"Collectif Palestine Nancy, familles palestiniennes, BDS France",
		website: "https://mujawara.org",
	},
	{
		id: 11,
		name: "Action navale — Détroit de Gibraltar",
		city: "Algésiras",
		country: "Espagne",
		lat: 36.13,
		lng: -5.453,
		date: "18 juin 2025",
		time: "08:00 – 18:00",
		description:
			"Action de solidarité avec les Palestiniens et les migrant·es en Méditerranée. Départ symbolique d'une flottille citoyenne depuis le port d'Algésiras.",
		speakers:
			"Freedom Flotilla Coalition, No Borders Network, activistes espagnols",
		website: "https://mujawara.org",
	},
	{
		id: 12,
		name: "Rencontre révolutionnaire de Damas",
		city: "Damas",
		country: "Syrie",
		lat: 33.51,
		lng: 36.291,
		date: "25 juin 2025",
		time: "10:00 – 18:00",
		description:
			"Première rencontre publique des collectifs autonomes syriens depuis la chute du régime. Bilan de la révolution, perspectives pour les conseils de quartier et les espaces autogérés.",
		speakers:
			"Tansiqiyyat de Damas, collectifs féministes syriens, révolutionnaires indépendants",
		website: "https://mujawara.org",
	},
];

export default events;
