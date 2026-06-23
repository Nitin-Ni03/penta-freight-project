
import {
  section4TopData,
  section4Cards,
  section4BottomData,
} from "../../data/data";
import HoverButton from "../common/smalls/HoverButton";

const Services = () => {
  return (
    <section className="services-section" style={{ width: "100%", background: "#f3f3f3", color: "#000" }}>
      {/* Top Header Block */}
      <div
        className="services-top-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#000",
              }}
            />
            <div
              style={{
                border: "1px solid #d7d7d7",
                borderRadius: "999px",
                padding: "5px 14px",
                fontSize: "14px",
              }}
            >
              {section4TopData.badge}
            </div>
          </div>

          <h2
            style={{
              fontSize: "38px",
              fontWeight: "500",
              lineHeight: "1.2",
              margin: 0,
            }}
          >
            {section4TopData.titleLine1}
            <br />
            {section4TopData.titleLine2}
          </h2>
        </div>

        <p
          style={{
            margin: 0,
            fontSize: "16px",
            lineHeight: "1.8",
            maxWidth: "450px",
          }}
        >
          {section4TopData.description}
        </p>
      </div>

      {/* Services Sticky Cards */}
      <div style={{ paddingBottom: "80px" }}>
        {section4Cards.map((card, index) => (
          <div
            key={index}
            className="services-card-container"
            style={{
              zIndex: index + 1,
            }}
          >
            <div className="services-card-wrapper">
              <img
                src={card.image}
                alt={card.title}
                className="services-card-image"
              />

              <div
                className="services-card-content"
                style={{
                  right: card.reverse ? undefined : "6%",
                  left: card.reverse ? "6%" : undefined,
                }}
              >
                <h2 style={{ fontSize: "32px", fontWeight: "600", color: "#fff" }}>
                  {card.title}
                </h2>

                {card.description.map((text, i) => (
                  <p key={i} style={{ fontSize: "15px", lineHeight: "1.7", color: "#fff" }}>
                    {text}
                  </p>
                ))}

                {/* Tags Display */}
                {card.tags && card.tags.length > 0 && (
                  <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                          borderRadius: "20px",
                          padding: "8px 14px",
                          fontSize: "13px",
                          color: "#fff",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ marginTop: "20px" }}>
                  <HoverButton text="Read More" hoverText="Let's Go" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Bottom Grid */}
      <div className="services-bottom-grid">
        <div style={{ paddingRight: "40px" }} className="services-bottom-header-col">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#000",
              }}
            />
            <div
              style={{
                border: "1px solid #d7d7d7",
                borderRadius: "999px",
                padding: "5px 14px",
                fontSize: "14px",
              }}
            >
              {section4BottomData.badge}
            </div>
          </div>

          <h2 style={{ fontSize: "34px", fontWeight: "500" }}>
            {section4BottomData.titleLine1}
            <br />
            <span style={{ color: "#7b8086" }}>
              {section4BottomData.titleLine2}
            </span>
          </h2>
        </div>

        {section4BottomData.cards.map((item, index) => (
          <div
            key={index}
            className="services-bottom-card"
            style={{
              borderLeft: index === 0 ? "none" : "1px solid #d9d9d9",
            }}
          >
            <img src={item.icon} alt="" style={{ width: "50px" }} />
            <h3 style={{ fontSize: "16px", marginTop: "12px" }}>{item.title}</h3>
            <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <style>
        {`
          .services-top-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }

          .services-card-container {
            position: sticky;
            top: 100px;
            padding: 0 24px;
            margin-bottom: 60px;
          }

          .services-card-wrapper {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            min-height: 450px;
          }

          .services-card-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
            z-index: 1;
          }

          .services-card-image {
            width: 100%;
            display: block;
            object-fit: cover;
            min-height: 450px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
          }

          .services-card-content {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 38%;
            background: transparent;
            z-index: 2;
          }

          .services-bottom-grid {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px 100px;
            display: grid;
            grid-template-columns: 1.1fr 1fr 1fr 1fr;
            gap: 20px;
          }

          .services-bottom-card {
            padding: 0 25px;
          }

          @media (max-width: 1024px) {
            .services-card-content {
              width: 45%;
            }
          }

          @media (max-width: 768px) {
            .services-top-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              padding: 40px 20px !important;
            }
            
            .services-card-container {
              position: relative !important;
              top: auto !important;
              margin-bottom: 30px !important;
              padding: 0 16px !important;
            }
            
            .services-card-wrapper {
              display: flex !important;
              flex-direction: column !important;
              border-radius: 16px !important;
              min-height: auto !important;
            }

            .services-card-wrapper::before {
              display: none !important;
            }

            .services-card-image {
              position: relative !important;
              min-height: 250px !important;
              height: 250px !important;
              width: 100% !important;
            }
            
            .services-card-content {
              position: relative !important;
              top: auto !important;
              transform: none !important;
              width: 100% !important;
              right: auto !important;
              left: auto !important;
              padding: 24px !important;
              background: #fff !important;
              color: #000 !important;
            }
            
            .services-card-content h2 {
              font-size: 24px !important;
              margin-bottom: 12px !important;
              color: #000 !important;
            }
            
            .services-card-content p {
              font-size: 14px !important;
              line-height: 1.6 !important;
              color: #374151 !important;
            }

            .services-card-content > div > span {
              border-color: rgba(0, 0, 0, 0.2) !important;
              color: #000 !important;
              background-color: rgba(0, 0, 0, 0.05) !important;
            }

            .services-bottom-grid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
              padding: 40px 20px 60px !important;
            }
            
            .services-bottom-card {
              padding: 0 !important;
              border-left: none !important;
              border-bottom: 1px solid #d9d9d9 !important;
              padding-bottom: 20px !important;
            }
            
            .services-bottom-card:last-child {
              border-bottom: none !important;
              padding-bottom: 0 !important;
            }

            .services-bottom-header-col {
              padding-right: 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
