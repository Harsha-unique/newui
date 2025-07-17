// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <section
//       id="hero"
//       className="hero section light-background"
//       style={{
//         backgroundImage: "url('./images/map1.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container">
//         <div className="row gy-4">
//           <div
//             className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-md-start"
//             data-aos="fade-up"
//           >
//             {/* <h1 className="mb-3">Soarswell</h1> */}
//             <h2 className="mb-3">Elevating Businesses to New Heights</h2>
//             <p>
//               Empowering organizations with innovative IT consulting,
//               sustainable ESG solutions, and expert financial services. We guide
//               you through the rapidly changing landscape with strategic insight
//               and unwavering commitment.
//             </p>
//             <div className="d-flex mt-4 justify-content-center justify-content-md-start">
//               <button className="btn-one">Get Started</button>
//             </div>
//           </div>
//           <div
//             className="col-lg-6 order-1 order-lg-2 hero-img d-flex justify-content-center justify-content-lg-end"
//             data-aos="zoom-out"
//             data-aos-delay="100"
//           >
//             <img
//               src="./images\output-onlinetools (1).png"
//               className="img-fluid animated" style={{width:"600px", height:"auto"}}
//               alt="Arrow chart"
//             />
           

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero section light-background position-relative"
      style={{
        backgroundImage: "url('./images/map1.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Fade-in (optional if map1.png is purely decorative) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('./images/map1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
        data-aos="fade-in"
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row gy-4">
          {/* LEFT TEXT SECTION */}
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-md-start"
            data-aos="fade-up"
          >
            <h2 className="mb-3">Elevating Businesses to New Heights</h2>
            <p>
              Empowering organizations with innovative IT consulting,
              sustainable ESG solutions, and expert financial services. We guide
              you through the rapidly changing landscape with strategic insight
              and unwavering commitment.
            </p>
            <div className="d-flex mt-4 justify-content-center justify-content-md-start">
              <button className="btn-one">Get Started</button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img d-flex justify-content-center justify-content-lg-end"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <img
              src="./images/output-onlinetools (1).png"
              className="img-fluid animated"
              alt="Arrow chart"
              style={{ width: "600px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
