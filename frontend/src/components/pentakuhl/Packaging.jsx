// src/components/pentakuhl/Packaging.jsx
import { useState } from "react";

const Packaging = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // 'parcel', 'pallet', or null

  const handleCardClick = () => {
    const section = document.getElementById("series-guide-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        width: "100%",
        background: "#f8fafc",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#f97316", letterSpacing: "2px" }}>
            PACKAGING SOLUTIONS
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: "800",
              color: "#0f172a",
              margin: "10px 0 0 0",
            }}
          >
            Product Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            alignItems: "stretch",
          }}
        >
          {/* Card 1: Parcel Shippers */}
          <div
            onMouseEnter={() => setHoveredCard("parcel")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick("parcel")}
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "40px 30px",
              boxShadow: hoveredCard === "parcel" 
                ? "0 20px 40px rgba(15, 23, 42, 0.12)" 
                : "0 4px 20px rgba(0, 0, 0, 0.03)",
              transform: hoveredCard === "parcel" ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
              opacity: hoveredCard === "pallet" ? 0.4 : 1,
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "pointer",
              border: hoveredCard === "parcel" ? "1px solid rgba(249, 115, 22, 0.3)" : "1px solid #f1f5f9",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Card Header */}
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "15px",
                }}
              >
                Parcel Shippers
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#475569",
                  marginBottom: "30px",
                }}
              >
                We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.
              </p>

              {/* Product Lines */}
              <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginBottom: "40px" }}>
                {/* Single Use */}
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                    Single Use
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#f8fafc", padding: "10px", borderRadius: "8px", width: "110px", height: "80px", justifyContent: "center" }}>
                      <img src="/Home_page/coolguard.png" alt="COOLGUARD" style={{ maxHeight: "40px", maxWidth: "90px", objectFit: "contain" }} />
                      <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>PCM</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#f8fafc", padding: "10px", borderRadius: "8px", width: "110px", height: "80px", justifyContent: "center" }}>
                      <img src="/Home_page/coolguardadvancelogo.png" alt="COOLGUARD ADVANCE" style={{ maxHeight: "40px", maxWidth: "90px", objectFit: "contain" }} />
                      <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>ADVANCE</span>
                    </div>
                  </div>
                </div>

                {/* Reusable */}
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                    Reusable
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#f8fafc", padding: "10px", borderRadius: "8px", width: "110px", height: "80px", justifyContent: "center" }}>
                      <img src="/Home_page/credocubelogo.png" alt="Crēdo Cube" style={{ maxHeight: "40px", maxWidth: "90px", objectFit: "contain" }} />
                      <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>Cube</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              style={{
                width: "100%",
                background: hoveredCard === "parcel" ? "#f97316" : "#f1f5f9",
                color: hoveredCard === "parcel" ? "#ffffff" : "#0f172a",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Parcel Shippers
            </button>
          </div>

          {/* Card 2: Pallet Shippers */}
          <div
            onMouseEnter={() => setHoveredCard("pallet")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick("pallet")}
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "40px 30px",
              boxShadow: hoveredCard === "pallet" 
                ? "0 20px 40px rgba(15, 23, 42, 0.12)" 
                : "0 4px 20px rgba(0, 0, 0, 0.03)",
              transform: hoveredCard === "pallet" ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
              opacity: hoveredCard === "parcel" ? 0.4 : 1,
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "pointer",
              border: hoveredCard === "pallet" ? "1px solid rgba(249, 115, 22, 0.3)" : "1px solid #f1f5f9",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Card Header */}
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "15px",
                }}
              >
                Pallet Shippers
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#475569",
                  marginBottom: "30px",
                }}
              >
                We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently.
              </p>

              {/* Product Lines */}
              <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginBottom: "40px" }}>
                {/* Single Use */}
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                    Single Use
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#f8fafc", padding: "10px", borderRadius: "8px", width: "110px", height: "80px", justifyContent: "center" }}>
                      <img src="/Home_page/coolpalllogo.png" alt="COOLPALL" style={{ maxHeight: "40px", maxWidth: "90px", objectFit: "contain" }} />
                      <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>VERTOS</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#f8fafc", padding: "10px", borderRadius: "8px", width: "110px", height: "80px", justifyContent: "center" }}>
                      <img src="/Home_page/coolpalladvancelogo.png" alt="COOLPALL ADVANCE" style={{ maxHeight: "40px", maxWidth: "90px", objectFit: "contain" }} />
                      <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>ADVANCE</span>
                    </div>
                  </div>
                </div>

                {/* Reusable */}
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                    Reusable
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#f8fafc", padding: "10px", borderRadius: "8px", width: "110px", height: "80px", justifyContent: "center" }}>
                      <img src="/Home_page/credoextremelogo.png" alt="Crēdo XTREME" style={{ maxHeight: "40px", maxWidth: "90px", objectFit: "contain" }} />
                      <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>XTREME</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#f8fafc", padding: "10px", borderRadius: "8px", width: "110px", height: "80px", justifyContent: "center" }}>
                      <img src="/Home_page/credocargologo.png" alt="Crēdo CARGO" style={{ maxHeight: "40px", maxWidth: "90px", objectFit: "contain" }} />
                      <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>CARGO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              style={{
                width: "100%",
                background: hoveredCard === "pallet" ? "#f97316" : "#f1f5f9",
                color: hoveredCard === "pallet" ? "#ffffff" : "#0f172a",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Pallet Shippers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
