import React from "react";

export default function EventCard({ event, onClick, isSelected }) {
	return (
		<div
			onClick={() => onClick && onClick(event)}
			style={{
				background: "var(--surface)",
				border: `1px solid ${isSelected ? "var(--text-primary)" : "var(--border)"}`,
				borderRadius: "var(--radius-lg)",
				padding: "16px",
				cursor: onClick ? "pointer" : "default",
				transition: "border-color 0.15s",
			}}
			onMouseEnter={(e) => {
				if (!isSelected)
					e.currentTarget.style.borderColor = "var(--border-hover)";
			}}
			onMouseLeave={(e) => {
				if (!isSelected)
					e.currentTarget.style.borderColor = "var(--border)";
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					marginBottom: 6,
				}}
			>
				<h3
					style={{
						fontFamily: "var(--font-title)",
						fontWeight: 800,
						fontStyle: "italic",
						fontSize: 22,
						color: "var(--text-primary)",
						lineHeight: 1.1,
					}}
				>
					{event.name}
				</h3>
			</div>

			<div
				style={{
					fontFamily: "var(--font-body)",
					fontSize: 12,
					color: "var(--text-muted)",
					marginBottom: 8,
				}}
			>
				📍 {event.city} · {event.country}
			</div>

			<div
				style={{
					display: "flex",
					gap: 16,
					fontFamily: "var(--font-body)",
					fontSize: 12,
					color: "var(--text-secondary)",
					marginBottom: 10,
				}}
			>
				<span>📅 {event.date}</span>
				<span>🕐 {event.time}</span>
			</div>

			<p
				style={{
					fontFamily: "var(--font-body)",
					fontSize: 13,
					fontWeight: 300,
					color: "var(--text-secondary)",
					lineHeight: 1.7,
					marginBottom: 12,
				}}
			>
				{event.description}
			</p>
		</div>
	);
}
