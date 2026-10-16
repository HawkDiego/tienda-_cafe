import { ImageResponse } from "next/og";

export const alt = "CafeGuito: café de origen de Pitalito, Huila";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #24150d 0%, #4a2c1d 60%, #3f5a3a 100%)",
          color: "#fbf6ee",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 6, color: "#e7d4b5" }}>PITALITO · HUILA · COLOMBIA</div>
        <div style={{ fontSize: 120, fontWeight: 700, marginTop: 20 }}>CafeGuito</div>
        <div style={{ fontSize: 44, marginTop: 16, color: "#f3e8d6" }}>
          Café de origen, de nuestra finca a tu taza
        </div>
      </div>
    ),
    size,
  );
}
