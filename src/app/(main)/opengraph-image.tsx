import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Top Web Hosting - Compare The Top Web Hosting Companies 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #B49CF2 0%, #6A45C9 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "white",
            }}
          >
            +
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
            }}
          >
            thetopwebhosting.com
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          Best Web Hosting Providers 2026
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.5,
          }}
        >
          Compare top web hosting providers side by side. Coverage, pricing, and honest reviews.
        </div>
      </div>
    ),
    { ...size }
  );
}
