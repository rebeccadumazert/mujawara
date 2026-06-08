import React from "react";
import {
	MapContainer,
	TileLayer,
	CircleMarker,
	Popup,
	Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";

export default function MapView({ cities }) {
	const { i18n } = useTranslation();
	const lang = i18n.language;

	const lines = [];
	cities.forEach((a, i) => {
		cities.slice(i + 1).forEach((b) => {
			lines.push([
				[a.lat, a.lng],
				[b.lat, b.lng],
			]);
		});
	});
	return (
		<div style={{ height: "calc(100vh - 60px)" }}>
			<MapContainer
				center={[20, 10]}
				zoom={2}
				minZoom={2}
				maxZoom={10}
				maxBounds={[
					[-90, -180],
					[90, 180],
				]}
				maxBoundsViscosity={1.0}
				style={{ width: "100%", height: "100%" }}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://carto.com/">CARTO</a>'
					url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				/>
				{cities.map((city) => (
					<CircleMarker
						key={city.id}
						center={[city.lat, city.lng]}
						radius={8}
						pathOptions={{
							fillColor: "#c0392b",
							fillOpacity: 1,
							color: "#fff",
							weight: 2,
						}}
					>
						<Popup closeButton={false} maxWidth={200}>
							<div
								style={{
									padding: "4px 2px",
									fontFamily: "var(--font-body)",
								}}
							>
								<div
									style={{
										fontFamily: "var(--font-title)",
										fontWeight: 800,
										fontStyle: "italic",
										fontSize: 18,
										color: "var(--text-primary)",
										marginBottom: 4,
										lineHeight: 1.2,
									}}
								>
									{city.name[lang]}
								</div>
								<div
									style={{
										fontSize: 12,
										color: "var(--text-muted)",
									}}
								>
									{city.country[lang]}
								</div>
							</div>
						</Popup>
					</CircleMarker>
				))}
				{lines.map((positions, i) => (
					<Polyline
						key={i}
						positions={positions}
						pathOptions={{
							color: "#c0392b",
							weight: 0.5,
							opacity: 0.15,
						}}
					/>
				))}
			</MapContainer>
		</div>
	);
}
