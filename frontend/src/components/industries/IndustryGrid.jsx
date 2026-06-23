import { useEffect, useState, useRef } from "react";
import IndustryCard from "./IndustryCard";
import pharmaIcon from "../../assets/images/logos/pharma.png";
import automobileIcon from "../../assets/images/logos/automobile.png";
import chemicalIcon from "../../assets/images/logos/chemical.png";
import electronicsIcon from "../../assets/images/logos/electronics.png";
import energyIcon from "../../assets/images/logos/energy.png";
import glasswareIcon from "../../assets/images/logos/glassware.png";
import packingIcon from "../../assets/images/logos/packing.png";
import textileIcon from "../../assets/images/logos/textile.png";
import timeCriticalIcon from "../../assets/images/logos/timeCritical.png";

const industriesData = [
  {
    icon: pharmaIcon,
    title: "Pharmaceuticals",
    description: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments."
  },
  {
    icon: automobileIcon,
    title: "Automobile",
    description: "SOur adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network."
  },
  {
    icon: chemicalIcon,
    title: "Chemicals",
    description: "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience."
  },
  {
    icon: electronicsIcon,
    title: "Electronics",
    description: "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs."
  },
  {
    icon: energyIcon,
    title: "Energy",
    description: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets."
  },
  {
    icon: glasswareIcon,
    title: "Glassware",
    description: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently."
  },
  {
    icon: packingIcon,
    title: "Packaging",
    description: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions."
  },
  {
    icon: textileIcon,
    title: "Textiles",
    description: "We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments."
  },
  {
    icon: timeCriticalIcon,
    title: "Time Critical",
    description: "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo. "
  }
];

const IndustryGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ width: "100%", padding: "100px 20px", background: "#f8fafc" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div ref={gridRef} className="industries-grid">
          {industriesData.map((item, index) => (
            <IndustryCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Grid Responsive Style */}
      <style>
        {`
          .industries-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px 30px;
          }

          @media (max-width: 1024px) {
            .industries-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
            }
          }

          @media (max-width: 768px) {
            .industries-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default IndustryGrid;
