import { useEffect, useState, useRef } from "react";

// Individual Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targetNum = parseInt(target, 10);
    if (isNaN(targetNum)) return;

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * targetNum);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetNum);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasAnimated, target, duration]);

  const isNumeric = !isNaN(parseInt(target, 10));

  return (
    <span ref={elementRef} style={{ transition: "opacity 0.5s ease" }}>
      {isNumeric ? `${count}${suffix}` : target}
    </span>
  );
};

const Achievements = () => {
  const achievements = [
    {
      value: "7",
      suffix: "+",
      label: "Strategic Domestic Offices",
    },
    {
      value: "USA",
      suffix: "",
      label: "Global presence",
    },
    {
      value: "200",
      suffix: "+",
      label: "Logistics Experts",
    },
    {
      value: "50",
      suffix: "+",
      label: "Awards & Accolades",
    },
  ];

  return (
    <section
      className="achievements-section"
      style={{
        width: "100%",
        padding: "100px 20px",
        overflow: "hidden",
        position: "relative",
        backgroundImage: "url(/Home_page/lineas-CSz1CbRe.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(60, 78, 95, 0.92)", // Slate blue overlay
          zIndex: 1,
        }}
      />

      <div
        className="achievements-container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left Column: Heading and description */}
        <div className="achievements-left" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2
            style={{
              color: "#f97316", // Premium brand orange
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: "700",
              margin: 0,
              lineHeight: "1.2",
            }}
          >
            Our Achievements
          </h2>
          <p
            style={{
              color: "#cbd5e1", // Light slate gray text
              fontSize: "17px",
              lineHeight: "1.8",
              margin: 0,
              fontWeight: "400",
              maxWidth: "480px",
            }}
          >
            Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.
          </p>
        </div>

        {/* Right Column: Grid of stats */}
        <div
          className="achievements-right-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px 40px",
          }}
        >
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(44px, 5vw, 60px)",
                  fontWeight: "700",
                  lineHeight: "1",
                }}
              >
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </div>
              <div
                style={{
                  color: "#cbd5e1",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  letterSpacing: "0.3px",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 992px) {
            .achievements-container {
              grid-template-columns: 1fr !important;
              gap: 50px !important;
            }
            .achievements-left {
              text-align: center;
              align-items: center;
            }
            .achievements-left p {
              max-width: 600px !important;
            }
            .achievements-right-grid {
              gap: 40px 30px !important;
              justify-items: center;
              text-align: center;
            }
          }

          @media (max-width: 576px) {
            .achievements-section {
              padding: 70px 16px !important;
            }
            .achievements-right-grid {
              grid-template-columns: 1fr !important;
              gap: 35px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Achievements;
