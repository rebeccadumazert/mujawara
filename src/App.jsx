import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import MapView from "./components/MapView";
import ListView from "./components/ListView";
import events from "./data/events";
import "./index.css";

const NAV_ITEMS = [
	{ label: "CARTE", path: "/" },
	{ label: "ÉVÉNEMENTS", path: "/evenements" },
	{ label: "À PROPOS", path: "/a-propos" },
];

function About() {
	return (
		<div style={{ maxWidth: 640, margin: "64px auto", padding: "0 24px" }}>
			<h1 style={{ fontSize: 56, marginBottom: 24, lineHeight: 1 }}>
				Mujawara
			</h1>
			<p
				style={{
					fontSize: 15,
					lineHeight: 1.8,
					color: "var(--text-secondary)",
					fontWeight: 300,
				}}
			>
				Rejoignez-nous pour un mois d'actions internationalistes tout au
				long du mois de juin ! Il s'agit d'un appel mondial lancé à tous
				les espaces et collectifs locaux pour organiser des
				rassemblements, des actions, des repas, des célébrations, des
				collectes de fonds, des marches et des rituels en l'honneur de
				ceux qui sont tombés. L'objectif est de tisser de nouveaux liens
				internationalistes et de mettre en commun nos ressources afin de
				soutenir deux espaces animés par des révolutionnaires syriens et
				soudanais.
			</p>
			<h2
				style={{
					fontSize: 30,
					marginBottom: 24,
					marginTop: 24,
					lineHeight: 1,
				}}
			>
				Mujawara : tisser un voisinage révolutionnaire par-delà les
				frontières
			</h2>
			<div
				style={{
					fontSize: 15,
					lineHeight: 1.8,
					color: "var(--text-secondary)",
					fontWeight: 300,
				}}
			>
				<p>
					Nous pourrions commencer à nouveau par une liste. Liste de
					menaces, de guerres, de révoltes fauchées, de révolutions
					incomplètes. Une liste de tous ces morts, de tous·tes nos
					mort·es.
				</p>
				<p>
					Mais pourquoi rappeler encore ce que tous·tes savent,
					lisent, voient, sentent : Le monde, une fois de plus, est
					ravagé par la soif de pouvoir et la cupidité des puissants.
				</p>
				<p>
					Alors comment continuer ? Pour nous qui avons connu les
					foules exultantes, les palais mis à sac et la puissance de
					notre tendresse. Comment continuer face à l'horreur et
					l'impuissance ? Comment continuer en révolutionnaire ?
				</p>
				<p>
					Il y a les cyniques, les "réalistes", qui aveuglés par
					l'angoisse de leur faiblesse nous disent qu'il faudrait
					choisir. Choisir entre ceux qui massacrent leurs propres
					peuples et ceux qui pensent pouvoir ralentir leur propre
					chute en déclarant la guerre au monde.
				</p>
				<p>
					Il y a ceux et celles qui abandonnent ou qui cessent
					d'espérer. Épuisé·es, résigné·es. Mais qui un jour
					pourraient bien se retrouver à nouveau à nos côtés.
				</p>
				<p>Et puis il y a nous.</p>
				<p>
					Nous qui pleurons, nous qui nous sentons faibles, nous qui
					doutons parfois. Mais nous, aussi, qui n'avons pas
					abandonné. Ni notre boussole, ni notre flamme. Ni l'espoir
					de venger les nôtres, ni celui de voir un jour la fin de la
					nuit.
				</p>
				<p>
					Nous qui plutôt que rester enfermé dans la sidération du
					présent et de ses bombes cherchons partout celles et ceux
					qui continuent de résister. Car nous nous rappelons que, de
					nos révoltes, une force s'est réveillée. Et que si les têtes
					ont tendance à oublier, les corps -eux- se souviennent.
				</p>
				<p>
					Nous qui voyons que cette force continue de vivre au grand
					jour, qu'elle est portée par une génération pirate qui hurle
					à la gueule du monde que les jeux ne sont pas faits.
				</p>
				<p>
					C'est cette force que nos camarades au Népal ont refait
					éclater au grand jour en faisant disparaître leur assemblée
					dans les flammes. C'est elle que l'on a aperçue au sein des
					plénums de Serbie, ces gigantesques assemblées organisant
					pendant des mois et des mois la révolte par le bas. C'est
					elle aussi qu'incarnent les habitant.es des villages
					libanais restant sur leur terre malgré un énième ordre
					d'évacuation de Tsahal tout comme ces paysans qui en
					Palestine replantent encore et encore leurs cultures après
					les bombes. C'est elle que l'on ressent au sein des chambres
					d'urgence soudanaises nées dans la guerre pour prendre la
					relève, sur place comme en exil, des puissants comités de
					résistances de la révolution.
				</p>
				<p>
					C'est cette force qui fait tenir bon nos camarades dans la
					jungle du Myanmar ou du Chiapas, au sein des tranchées
					ukrainiennes ou dans les montagnes du Rojhelat. C'est elle
					que l'on voit flotter en haut de ces bateaux qui prennent la
					mer pour défier Israël le génocidaire. C'est elle, enfin,
					qui pousse les foules d'Iran, de Minneapolis, du Pérou,
					d'Indonésie, des Philippines, du Maroc ou de Madagascar à
					braver encore et encore la mort promise par tous ces régimes
					qui haïssent leurs peuples.
				</p>
				<p>
					Oui notre force est réelle. Balbutiante, incomplète,
					fragmentée, mais réelle. Contrairement à ce que les
					contre-révolutionnaires de droite comme de gauche essaient
					de nous faire croire. Et aucun parti ou sauveur suprême ne
					pourra l'unifier à notre place.
				</p>
				<p>
					Alors la tâche nous revient : de nous chercher, de nous
					reconnaître et de rendre visible au monde comme à nous même
					la puissance qui pourrait émerger de notre rencontre.
				</p>
				<p>
					C'est ce que nous nommons Mujawara. La mise en commun de nos
					efforts et de nos moyens par l'entrelacement de cordages
					suffisamment étendus et solides pour nous permettre de tenir
					ensemble face aux défis de notre temps. Un voisinage
					révolutionnaire que nous avons déjà commencé à tisser depuis
					tous ces territoires, ces espaces et pouvoirs populaires nés
					de nos combats. Ce Mujawara ne sera pas fait de palabre ou
					de grands communiqués sur chaque soubresaut que notre monde
					connaît. Il se construit et se construira sous les radars,
					dans les tunnels des révolutions à venir.
				</p>
				<p>
					C'est pour l'inaugurer et commencer à tisser ce voisinage
					qui traversent les frontières, que nous allons organiser,
					sur cinq continents et tout au long du mois de juin des
					actes internationalistes, au sein de tous ces lieux nés
					avant ou dans le sillage de nos révoltes et maintenus toutes
					ces années malgré les difficultés : conseils de quartier,
					espaces autonomes, centres sociaux, maisons refuges, fermes
					collectives, librairies autogérées, coopératives.
				</p>
				<p>
					Tout ce qui permettra de mettre en acte matériellement comme
					symboliquement ce voisinage dont nous avons besoin :
					Rencontres, actions, banquets, grandes fêtes, levées de
					fonds, marches, rituels en l'hommage de celles et ceux qui
					sont tombé.es.
				</p>
				<p>
					De cette entraide planétaire que nous allons déployer en
					juin, de nouveaux lieux sortiront de terre, des routes plus
					sûres seront tracées, des murs seront réparés, de nouvelles
					alliances seront tissées et de tout cela, peut être, des
					blessures seront guéries et de nouveaux espoirs commenceront
					à germer.
				</p>
				<p>
					Ce moment n'est qu'une étape — mais une étape décisive :
					celle de la construction lente mais déterminée, d'une
					puissance matérielle ancrée reliant aux quatre coins de la
					planète les fragments de notre force naissante.
				</p>
				<p>
					Depuis les géographies que nous avons pris l'habitude de
					nommer :
				</p>
				<p>
					Taipei, Mexico, Nancy, la vallée de la Bekaa, Berlin,
					Santiago du Chili, les collines du Galloway,
					Paris/Montreuil, Damas, la Provence, la montagne Limousine
				</p>
			</div>
		</div>
	);
}

function Layout() {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<header
				style={{
					height: 60,
					background: "var(--surface)",
					borderBottom: "1px solid var(--border)",
					display: "flex",
					alignItems: "center",
					padding: "0 32px",
					position: "sticky",
					top: 0,
					zIndex: 1000,
				}}
			>
				<Link
					to="/"
					style={{
						textDecoration: "none",
						fontFamily: "var(--font-title)",
						fontWeight: 800,
						fontStyle: "italic",
						fontSize: 30,
						color: "var(--text-primary)",
						letterSpacing: "-0.5px",
						lineHeight: 1,
					}}
				>
					MUJAWARA
				</Link>

				<nav
					style={{
						position: "absolute",
						left: "50%",
						transform: "translateX(-50%)",
						display: "flex",
						gap: 4,
					}}
				>
					{NAV_ITEMS.map(({ label, path }) => (
						<NavLink
							key={path}
							to={path}
							end={path === "/"}
							style={({ isActive }) => ({
								textDecoration: "none",
								border: "none",
								borderBottom: isActive
									? "2px solid var(--text-primary)"
									: "2px solid transparent",
								borderRadius: 0,
								cursor: "pointer",
								fontFamily: "var(--font-title)",
								fontStyle: "italic",
								fontWeight: 600,
								fontSize: 18,
								color: isActive
									? "var(--text-primary)"
									: "var(--text-muted)",
								padding: "6px 14px",
								transition: "all 0.15s",
								letterSpacing: "-0.3px",
							})}
						>
							{label}
						</NavLink>
					))}
				</nav>
			</header>

			<main style={{ flex: 1 }}>
				<Routes>
					<Route path="/" element={<MapView events={events} />} />
					<Route
						path="/evenements"
						element={<ListView events={events} />}
					/>
					<Route path="/a-propos" element={<About />} />
				</Routes>
			</main>
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
}
