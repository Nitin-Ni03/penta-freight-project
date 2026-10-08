import HoverButton from "../common/smalls/HoverButton";
import { section2Data, section3Data } from "../../data/data";

const Philosophy = () => {
  return (
    <>
      {/* About Us Section */}
      <section
        id="section-2"
        style={{
          position: "relative",
          width: "100%",
          height: "1000px",
          overflow: "hidden",
        }}
      >
        <img
          src={section2Data.image}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <img
          src={section2Data.banner}
          alt=""
          className="section2-banner"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div className="section2-content">
          <div className="section2-left">
            <h3>{section2Data.badge}</h3>

            <div className="section2-line" />

            <h2>{section2Data.title}</h2>
          </div>

          <div className="section2-right">
            <p>
              {section2Data.description.split(" ").map((word, i) => {
                const isHighlight = section2Data.highlights.includes(word);

                return (
                  <span
                    key={i}
                    style={{
                      color: isHighlight ? "#111827" : "#5b6470",
                      fontWeight: isHighlight ? "600" : "400",
                    }}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section
        style={{
          width: "100%",
          padding: "40px 20px",
          backgroundColor: "#46596b",
          backgroundImage: `url(${section3Data.backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 className="section3-title">{section3Data.title}</h2>

          <p className="section3-desc">{section3Data.description}</p>

          <div className="section3-btn">
            <HoverButton
              text={section3Data.buttonText}
              hoverText={section3Data.hoverText}
            />
          </div>
        </div>
      </section>

      <style>{`
        .section2-content{
          position:absolute;
          top:30px;
          left:50%;
          transform:translateX(-50%);
          width:min(90%,900px);
          z-index:5;

          display:grid;
          grid-template-columns:220px 1fr;
          gap:70px;
          align-items:start;
        }

        .section2-left h3{
          margin:0 0 8px;
          color:#f97316;
          font-size:14px;
          font-weight:700;
          letter-spacing:1px;
        }

        .section2-line{
          width:60px;
          height:2px;
          background:#f97316;
          margin-bottom:12px;
        }

        .section2-left h2{
          margin:0;
          color:#f97316;
          font-size:24px;
          font-weight:700;
          line-height:1.1;
        }

        .section2-right p{
          margin:0;
          color:#5b6470;
          font-size:17px;
          line-height:1.8;
          font-weight:400;
        }

        .section3-title{
          color:#f97316;
          font-size:56px;
          font-weight:700;
          line-height:1.2;
          margin-bottom:16px;
        }

        .section3-desc{
          max-width:1000px;
          margin:0 auto;
          color:#fff;
          font-size:22px;
          line-height:1.8;
        }

        .section3-btn{
          margin-top:30px;
          display:flex;
          justify-content:center;
          align-items:center;
          width:100%;
        }

        @media (max-width:1024px){
          .section2-content{
            width:90%;
            gap:40px;
          }

          .section2-right p{
            font-size:15px;
          }

          .section2-left h2{
            font-size:20px;
          }
        }

        @media (max-width:768px){
          #section-2{
            height:850px !important;
          }

          .section2-banner{
            width:100%;
            min-height:320px;
          }

          .section2-content{
            top:40px;
            width:88%;
            display:flex;
            flex-direction:column;
            align-items:center;
            text-align:center;
            gap:18px;
          }

          .section2-left{
            display:flex;
            flex-direction:column;
            align-items:center;
          }

          .section2-line{
            width:80px;
            margin:10px auto;
          }

          .section2-left h3{
            font-size:15px;
            margin-bottom:6px;
          }

          .section2-left h2{
            font-size:24px;
          }

          .section2-right{
            max-width:420px;
          }

          .section2-right p{
            font-size:15px;
            line-height:1.8;
          }

          .section3-title{
            font-size:32px;
            margin-bottom:12px;
          }

          .section3-desc{
            font-size:16px;
            line-height:1.6;
          }

          .section3-btn{
            margin-top:20px;
          }
        }

        @media (max-width:480px){
          #section-2{
            height:700px !important;
          }

          .section2-banner{
            width:100%;
            min-height:660px;
          }

          .section2-content{
            top:30px;
            width:88%;
            gap:14px;
          }

          .section2-line{
            width:70px;
          }

          .section2-left h3{
            font-size:13px;
          }

          .section2-left h2{
            font-size:20px;
          }

          .section2-right{
            max-width:320px;
          }

          .section2-right p{
            font-size:13px;
            line-height:1.8;
          }

          .section3-title{
            font-size:26px;
          }

          .section3-desc{
            font-size:14px;
            line-height:1.5;
          }

          .section3-btn{
            margin-top:16px;
          }
        }
      `}</style>
    </>
  );
};

export default Philosophy;
