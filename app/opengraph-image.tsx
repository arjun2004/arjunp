import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #070b14 0%, #0b1220 55%, #10243a 100%)",
          color: "#e8eff9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22d3ee",
            marginBottom: 28,
          }}
        >
          {profile.role}
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#22d3ee", lineHeight: 1.1 }}>
          Web &amp; AI Developer
        </div>
        <div style={{ fontSize: 30, color: "#98a6bf", marginTop: 36 }}>
          {profile.location}
        </div>
      </div>
    ),
    size
  );
}
