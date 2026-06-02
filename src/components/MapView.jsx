import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ events }) {
	return (
		<div style={{ height: "calc(100vh - 60px)" }}>
			<MapContainer
				center={[20, 10]}
				zoom={2}
				style={{ width: "100%", height: "100%" }}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://carto.com/">CARTO</a>'
					url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				/>
				{events.map((ev) => (
					<CircleMarker
						key={ev.id}
						center={[ev.lat, ev.lng]}
						radius={8}
						pathOptions={{
							fillColor: "#c0392b",
							fillOpacity: 1,
							color: "#fff",
							weight: 2,
						}}
					>
						<Popup closeButton={true} maxWidth={280}>
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
										fontStyle: "normal",
										fontSize: 20,
										color: "var(--text-primary)",
										marginBottom: 4,
										lineHeight: 1.1,
									}}
								>
									{ev.name}
								</div>
								<div
									style={{
										fontSize: 12,
										color: "var(--text-muted)",
										marginBottom: 10,
									}}
								>
									📍 {ev.city}, {ev.country}
								</div>
								<div
									style={{
										fontSize: 12,
										color: "var(--text-secondary)",
										marginBottom: 4,
									}}
								>
									📅 {ev.date}
								</div>
								<div
									style={{
										fontSize: 12,
										color: "var(--text-secondary)",
										marginBottom: 10,
									}}
								>
									🕐 {ev.time}
								</div>
								<p
									style={{
										fontSize: 12,
										color: "var(--text-secondary)",
										lineHeight: 1.6,
										marginBottom: 10,
										fontWeight: 300,
									}}
								>
									{ev.description}
								</p>
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										gap: 4,
										marginBottom: 12,
									}}
								></div>
							</div>
						</Popup>
					</CircleMarker>
				))}
			</MapContainer>
		</div>
	);
}
