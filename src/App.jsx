import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MapView from "./components/MapView";
import ListView from "./components/ListView";
import cities from "./data/cities";
import "./index.css";

function useWindowWidth() {
	const [width, setWidth] = React.useState(window.innerWidth);
	React.useEffect(() => {
		const handler = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handler);
		return () => window.removeEventListener("resize", handler);
	}, []);
	return width;
}

function About() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "ar";

	return (
		<div
			style={{
				maxWidth: 640,
				margin: "64px auto",
				padding: "0 24px",
				direction: isRTL ? "rtl" : "ltr",
			}}
		>
			<h1 style={{ fontSize: 56, marginBottom: 24, lineHeight: 1 }}>
				{t("about.title")}
			</h1>
			<p
				style={{
					fontSize: 15,
					lineHeight: 1.8,
					color: "var(--text-secondary)",
					fontWeight: 300,
				}}
			>
				{t("about.intro")}
			</p>
			<h2
				style={{
					fontSize: 30,
					marginBottom: 24,
					marginTop: 24,
					lineHeight: 1,
				}}
			>
				{t("about.subtitle")}
			</h2>
			<div
				style={{
					fontSize: 15,
					lineHeight: 1.8,
					color: "var(--text-secondary)",
					fontWeight: 300,
					textAlign: "justify",
				}}
			>
				{[
					"p1",
					"p2",
					"p3",
					"p4",
					"p5",
					"p6",
					"p7",
					"p8",
					"p9",
					"p10",
					"p11",
					"p12",
					"p13",
					"p14",
					"p15",
					"p16",
					"p17",
					"p18",
					"p19",
					"p20",
				].map((key) => (
					<p key={key}>{t(`about.${key}`)}</p>
				))}
			</div>
		</div>
	);
}

function Layout() {
	const { t, i18n } = useTranslation();
	const width = useWindowWidth();
	const isMobile = width < 768;
	const [menuOpen, setMenuOpen] = React.useState(false);

	const NAV_ITEMS = [
		{ label: t("nav.map"), path: "/" },
		{ label: t("nav.events"), path: "/evenements" },
		{ label: t("nav.about"), path: "/a-propos" },
	];

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
					justifyContent: "space-between",
					padding: "0 24px",
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
						color: "#C0392B",
						letterSpacing: "-0.5px",
						lineHeight: 1,
					}}
				>
					MUJAWARA
				</Link>

				{/* Nav desktop */}
				{!isMobile && (
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
									whiteSpace: "nowrap",
								})}
							>
								{label}
							</NavLink>
						))}
					</nav>
				)}

				{/* Sélecteur de langue — desktop seulement */}
				{!isMobile && (
					<div style={{ display: "flex", gap: 8 }}>
						{["fr", "en", "ar", "es"].map((lang) => (
							<button
								key={lang}
								onClick={() => {
									i18n.changeLanguage(lang);
									localStorage.setItem("lang", lang);
								}}
								style={{
									background: "none",
									border: "none",
									cursor: "pointer",
									fontFamily: "var(--font-title)",
									fontStyle: "italic",
									fontWeight:
										i18n.language === lang ? 800 : 400,
									fontSize: 14,
									color:
										i18n.language === lang
											? "var(--text-primary)"
											: "var(--text-muted)",
								}}
							>
								{lang.toUpperCase()}
							</button>
						))}
					</div>
				)}

				{/* Burger mobile */}
				{isMobile && (
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						style={{
							background: "none",
							border: "none",
							cursor: "pointer",
							display: "flex",
							flexDirection: "column",
							gap: 5,
							padding: 4,
						}}
					>
						<span
							style={{
								display: "block",
								width: 24,
								height: 2,
								background: "var(--text-primary)",
								transition: "all 0.2s",
								transform: menuOpen
									? "rotate(45deg) translate(5px, 5px)"
									: "none",
							}}
						/>
						<span
							style={{
								display: "block",
								width: 24,
								height: 2,
								background: "var(--text-primary)",
								transition: "all 0.2s",
								opacity: menuOpen ? 0 : 1,
							}}
						/>
						<span
							style={{
								display: "block",
								width: 24,
								height: 2,
								background: "var(--text-primary)",
								transition: "all 0.2s",
								transform: menuOpen
									? "rotate(-45deg) translate(5px, -5px)"
									: "none",
							}}
						/>
					</button>
				)}
			</header>

			{/* Menu mobile déroulant */}
			{isMobile && menuOpen && (
				<div
					style={{
						position: "fixed",
						top: 60,
						left: 0,
						right: 0,
						background: "var(--surface)",
						borderBottom: "1px solid var(--border)",
						zIndex: 999,
						display: "flex",
						flexDirection: "column",
					}}
				>
					{NAV_ITEMS.map(({ label, path }) => (
						<NavLink
							key={path}
							to={path}
							end={path === "/"}
							onClick={() => setMenuOpen(false)}
							style={({ isActive }) => ({
								textDecoration: "none",
								fontFamily: "var(--font-title)",
								fontStyle: "italic",
								fontWeight: 600,
								fontSize: 24,
								color: isActive
									? "var(--text-primary)"
									: "var(--text-muted)",
								padding: "16px 24px",
								borderBottom: "1px solid var(--border)",
								letterSpacing: "-0.3px",
							})}
						>
							{label}
						</NavLink>
					))}

					{/* Langues dans le burger */}
					<div
						style={{
							display: "flex",
							gap: 16,
							padding: "16px 24px",
						}}
					>
						{["fr", "en", "ar", "es"].map((lang) => (
							<button
								key={lang}
								onClick={() => {
									i18n.changeLanguage(lang);
									localStorage.setItem("lang", lang);
									setMenuOpen(false);
								}}
								style={{
									background: "none",
									border: "none",
									cursor: "pointer",
									fontFamily: "var(--font-title)",
									fontStyle: "italic",
									fontWeight:
										i18n.language === lang ? 800 : 400,
									fontSize: 18,
									color:
										i18n.language === lang
											? "var(--text-primary)"
											: "var(--text-muted)",
								}}
							>
								{lang.toUpperCase()}
							</button>
						))}
					</div>
				</div>
			)}

			<main style={{ flex: 1 }}>
				<Routes>
					<Route path="/" element={<MapView cities={cities} />} />
					<Route
						path="/evenements"
						element={<ListView cities={cities} />}
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
