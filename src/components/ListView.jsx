import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ListView({ cities }) {
	const [search, setSearch] = useState("");
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	const filtered = useMemo(() => {
		return cities.filter((c) => {
			const q = search.toLowerCase();
			return (
				!q ||
				c.name[lang].toLowerCase().includes(q) ||
				c.country[lang].toLowerCase().includes(q)
			);
		});
	}, [cities, search, lang]);

	const grouped = useMemo(() => {
		const map = {};
		filtered.forEach((c) => {
			const country = c.country[lang];
			if (!map[country]) map[country] = [];
			map[country].push(c);
		});
		const sorted = {};
		Object.keys(map)
			.sort()
			.forEach((country) => {
				sorted[country] = map[country];
			});
		return sorted;
	}, [filtered, lang]);

	return (
		<div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px" }}>
			<div style={{ marginBottom: 28 }}>
				<input
					type="text"
					placeholder={t("search.placeholder")}
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
					{t("list.not_found")}
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
						{filtered.length}{" "}
						{filtered.length > 1
							? t("list.cities_plural")
							: t("list.cities")}{" "}
						· {Object.keys(grouped).length} {t("list.countries")}
					</div>

					{Object.entries(grouped).map(([country, countryCities]) => (
						<div key={country} style={{ marginBottom: 32 }}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 10,
									marginBottom: 12,
								}}
							>
								<h2
									style={{
										fontFamily: "var(--font-title)",
										fontStyle: "normal",
										fontSize: 20,
										fontWeight: 700,
										color: "var(--text-primary)",
									}}
								>
									{country}
								</h2>
							</div>

							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									gap: 8,
									paddingLeft: 12,
									borderLeft: "2px solid var(--accent)",
								}}
							>
								{countryCities.map((c) => (
									<span
										key={c.id}
										style={{
											fontSize: 13,
											padding: "4px 12px",
											border: "1px solid var(--border)",
											borderRadius: 99,
											color: "var(--text-secondary)",
											background: "var(--surface)",
										}}
									>
										{c.name[lang]}
									</span>
								))}
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
}
