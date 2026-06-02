import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import EventCard from "./EventCard";

export default function ListView({ events }) {
	const [search, setSearch] = useState("");
	const { i18n } = useTranslation();
	const lang = i18n.language;

	const filtered = useMemo(() => {
		return events.filter((e) => {
			const q = search.toLowerCase();
			const matchSearch =
				!q ||
				e.name[lang].toLowerCase().includes(q) ||
				e.city.toLowerCase().includes(q) ||
				e.country[lang].toLowerCase().includes(q);
			return matchSearch;
		});
	}, [events, search, lang]);

	const grouped = useMemo(() => {
		const map = {};
		filtered.forEach((e) => {
			const country = e.country[lang];
			if (!map[country]) map[country] = {};
			if (!map[country][e.city]) map[country][e.city] = [];
			map[country][e.city].push(e);
		});
		const sorted = {};
		Object.keys(map)
			.sort()
			.forEach((country) => {
				sorted[country] = {};
				Object.keys(map[country])
					.sort()
					.forEach((city) => {
						sorted[country][city] = map[country][city];
					});
			});
		return sorted;
	}, [filtered, lang]);

	return (
		<div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px" }}>
			<div style={{ marginBottom: 28 }}>
				<input
					type="text"
					placeholder="Rechercher un événement, une ville, un pays…"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					style={{
						width: "100%",
						padding: "10px 14px",
						fontSize: 14,
						border: "1px solid var(--border)",
						borderRadius: "var(--radius-md)",
						background: "var(--surface)",
						color: "var(--text-primary)",
						outline: "none",
						marginBottom: 14,
					}}
				/>
			</div>

			{filtered.length === 0 ? (
				<div
					style={{
						textAlign: "center",
						color: "var(--text-muted)",
						padding: "48px 0",
						fontSize: 14,
					}}
				>
					Aucun événement trouvé.
				</div>
			) : (
				<>
					<div
						style={{
							fontSize: 12,
							color: "var(--text-muted)",
							marginBottom: 24,
						}}
					>
						{filtered.length} événement
						{filtered.length > 1 ? "s" : ""} ·{" "}
						{Object.keys(grouped).length} pays
					</div>

					{Object.entries(grouped).map(([country, cities]) => (
						<div key={country} style={{ marginBottom: 36 }}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 10,
									marginBottom: 16,
								}}
							>
								<h2
									style={{
										fontSize: 18,
										fontWeight: 700,
										color: "var(--text-primary)",
									}}
								>
									{country}
								</h2>
								<span
									style={{
										fontSize: 11,
										padding: "2px 8px",
										borderRadius: 99,
										background: "var(--border)",
										color: "var(--text-muted)",
									}}
								>
									{Object.values(cities).flat().length}{" "}
									événement
									{Object.values(cities).flat().length > 1
										? "s"
										: ""}
								</span>
							</div>

							{Object.entries(cities).map(
								([city, cityEvents]) => (
									<div
										key={city}
										style={{ marginBottom: 20 }}
									>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: 8,
												marginBottom: 10,
												paddingLeft: 12,
												borderLeft:
													"2px solid var(--accent)",
											}}
										>
											<span
												style={{
													fontSize: 13,
													fontWeight: 600,
													color: "var(--text-secondary)",
												}}
											>
												📍 {city}
											</span>
										</div>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												gap: 10,
												paddingLeft: 12,
											}}
										>
											{cityEvents.map((ev) => (
												<EventCard
													key={ev.id}
													event={ev}
												/>
											))}
										</div>
									</div>
								),
							)}
						</div>
					))}
				</>
			)}
		</div>
	);
}
