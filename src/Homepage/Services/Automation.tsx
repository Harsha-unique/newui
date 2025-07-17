// import React from 'react';

// const Automation: React.FC = () => {
//   return (
//     <div className="row">
//       <div id="automation" className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
//         <div className="solution-card">
//           <div className="icon">
//             <img src="./images/automation.svg" alt="Automation Icon" />
//           </div>
//           <h2>Automation Services</h2>
//           <p>
//             Our automation services streamline your business processes, improve efficiency, and reduce operational costs with intelligent technology.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Automation;
// import React from 'react';

// const Engineering: React.FC = () => {
//   return (
//     <div className="row">
//       <div id="engineering" className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
//         <div className="solution-card">
//           <div className="icon">
//             <img src="./images/engineering.svg" alt="Engineering Icon" />
//           </div>
//           <h2>Engineering Services</h2>
//           <p>
//             We provide expert engineering solutions including design, development, and optimization of complex systems, tailored to your business needs.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Engineering;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Automation: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Automation');
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 120,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="automation" className="mt-0 pt-0">
      {/* Banner Section */}
      <div
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('./images/pexels-yankrukov-7792818.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        ></div>
        <div className="position-relative z-1">
          <h1 className="display-4 fw-bold">Automation services</h1>
          <p className="mt-2 fs-6">
            <Link to="#" className="text-white-50 text-decoration-none">Home</Link> &nbsp; - &nbsp;
            <span className="text-orange fw-semibold">Automation services</span>
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="bg-success text-white rounded shadow">
              <div className="p-3 border-bottom border-white-50 fw-bold text-uppercase fs-6">
                All Solutions
              </div>
              <ul className="list-unstyled m-0">
                {[
                  { label: 'Engineering', href: '#engineering' },
                  { label: 'Consulting', href: '#consulting' },
                  { label: 'Technology', href: '#technologys' },
                  { label: 'Cloud', href: '#cloud' },
                  { label: 'Automation', href: '#automation' },
                  { label: 'ESG Solutions', href: 'http://www.esgucator.com/', external: true },
                ].map(({ label, href, external }) => (
                  <li
                    className={`sidebar-link-wrapper ${label === 'ESG Solutions' ? 'pb-3' : ''}`}
                    key={label}
                  >
                    <a
                      href={href}
                      onClick={() => setActiveLink(label)}
                      className={`d-flex align-items-center justify-content-between text-white text-decoration-none px-3 py-2 w-100 sidebar-link-item ${activeLink === label ? 'active' : ''}`}
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        borderRadius: '20px',
                        transition: 'all 0.3s ease',
                      }}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      <span className="sidebar-label">{label}</span>
                      <span className="sidebar-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Box */}
            <div className="bg-dark text-white rounded shadow p-3 mt-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <h6 className="fw-bold mb-2">Need help?</h6>
              <p className="mb-1">
                Prefer speaking with a human to filling out a form? Call our corporate office and we’ll connect you with a team member who can help.
              </p>
              <div className="fw-bold text-success mt-2">📞 +91 9063222969</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 ps-lg-4 lh-lg">
            <div style={{ maxWidth: '95%', textAlign: 'justify' }}>
              <h2 className="text-success mb-4">Automation Services</h2>
              <p className="text-secondary mb-4">
                We offer comprehensive and scalable automation services designed to enhance operational efficiency, decision-making, and business agility. Our core offerings include:
              </p>
              <div className="blinds-wrapper">
                <img
                  src="./images/pexels-divinetechygirl-1181357.jpg"
                  alt="Enterprise Development"
                  className="img-fluid blinds-reveal"
                  style={{
                    height: '475px',
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '10px',
                    opacity: 0,
                  }}
                />
                <div className="blinds-overlay">
                  <div className="blind"></div>
                  <div className="blind"></div>
                  <div className="blind"></div>
                  <div className="blind"></div>
                  <div className="blind"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-orange fw-bold text-start mb-4">Explore Our Sub-Domains</h2>
          </div>
        </div>

        {/* ERP Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Enterprise Resource Planning (ERP)</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Implementation and support for leading ERP platforms like SAP S/4HANA, Oracle ERP Cloud, and Microsoft Dynamics 365.
              </li>
              <li className="mb-2">
                Streamline financials, procurement, inventory, manufacturing, and operations.
              </li>
              <li>
                Tailored configurations to suit specific industry and business needs.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/ERP.jpg"
              alt="ERP"
              className="img-fluid scale-hover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>
        </div>

        {/* CRM Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/customer-relationship-management-concept (1).jpg"
              alt="CRM"
              className="img-fluid scale-hover"
              style={{
                width: '70%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Customer Relationship Management (CRM)</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Deploy and optimize CRM solutions to improve sales, marketing, and customer service workflows.
              </li>
              <li className="mb-2">
                Support for Microsoft Dynamics CRM, Oracle CX, and SAP C/4HANA.
              </li>
              <li>
                Enhance customer engagement through data-driven insights and automation.
              </li>
            </ul>
          </div>
        </div>

        {/* DevOps Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Supply Chain Management (SCM)</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Design and integrate robust SCM platforms to improve logistics, sourcing, demand forecasting, and inventory management.
              </li>
              <li className="mb-2">
                Experience with tools such as SAP SCM, Oracle SCM Cloud, and Dynamics 365 Supply Chain.
              </li>
              <li>
                Enable end-to-end visibility and resilience in supply chain operations.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/scm.jpg"
              alt="DevOps"
              className="img-fluid scale-hover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>
        </div>

        {/* Security Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/pexels-edmond-dantes-4344860.png"
              alt="Security"
              className="img-fluid scale-hover"
              style={{
                width: '70%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Human Capital Management (HCM)</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Implement and support HCM platforms for better talent acquisition, workforce planning, payroll, and employee engagement.
              </li>
              <li className="mb-2">
                Expertise in SAP SuccessFactors, Oracle HCM Cloud, and Microsoft Dynamics 365 HR.
              </li>
              <li>
                Facilitate employee lifecycle management and compliance automation.
              </li>
            </ul>
          </div>
        </div>

        {/* Seamless Integration Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Seamless Integration Services</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Integration of ERP, CRM, SCM, and HCM with existing IT infrastructure.
              </li>
              <li className="mb-2">
                Use of middleware platforms (e.g., MuleSoft, SAP PI/PO, Microsoft Power Platform) for streamlined data flow.
              </li>
              <li>
                Custom API and connector development for third-party systems.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/330291de-c1ed-4cbd-bae9-b30ace056fb4.jpg"
              alt="ERP"
              className="img-fluid scale-hover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>
        </div>

        {/* System Optimization Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/6503739.jpg"
              alt="CRM"
              className="img-fluid scale-hover"
              style={{
                width: '70%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">System Optimization & Upgrades</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Performance tuning, data migration, and system upgrades to cloud or hybrid environments.
              </li>
              <li className="mb-2">
                Continuous support for enhancements, version upgrades, and patch management.
              </li>
            </ul>
          </div>
        </div>

        {/* Consulting Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Consulting & Custom Development</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Business process reengineering and system advisory services.
              </li>
              <li className="mb-2">
                Development of custom modules, dashboards, and reports tailored to enterprise needs.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/consulting&custom.png"
              alt="DevOps"
              className="img-fluid scale-hover"
              style={{
                width: '100EMENTS',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>
        </div>

        {/* End-User Training Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/pexels-mart-production-7709227.jpg"
              alt="Security"
              className="img-fluid scale-hover"
              style={{
                width: '70%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">End-User Training & Support</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Role-based user training and change management strategies for better adoption.
              </li>
              <li>
                24/7 support services for incident management, SLA tracking, and functional helpdesk.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .sidebar-link-wrapper {
          margin: 10px;
        }

        .sidebar-link-item {
          background-color: transparent;
          color: white;
        }

        .sidebar-link-item:hover,
        .sidebar-link-item.active {
          background-color: white !important;
          color: black !important;
          borderRadius: '20px !important;
        }

        .sidebar-link-item:hover .sidebar-label,
        .sidebar-link-item:hover .sidebar-arrow,
        .sidebar-link-item.active .sidebar-label,
        .sidebar-link-item.active .sidebar-arrow {
          color: black !important;
        }

        .sidebar-label,
        .sidebar-arrow {
          transition: color 0.3s ease;
        }

        .text-orange {
          color: #fd7e14 !important;
        }

        .scale-hover {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .scale-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .blinds-wrapper {
          overflow: hidden;
          position: relative;
          border-radius: 10px;
        }

        .blinds-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          display: flex;
          flex-direction: column;
        }

        .blind {
          flex: 1;
          background: #000;
          transform: translateY(0);
          animation: blinds-reveal 1.2s ease forwards;
          animation-delay: calc(0.1s * var(--blind-index));
        }

        .blinds-reveal {
          animation: image-reveal 1.2s ease forwards;
        }

        @keyframes blinds-reveal {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes image-reveal {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Automation;