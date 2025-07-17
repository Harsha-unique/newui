// import React from 'react';

// const Cloud: React.FC = () => {
//   return (
//     <div className="row">
//       <div id="cloud" className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
//         <div className="solution-card">
//           <div className="icon">
//             <img src="./images/cloud.svg" alt="Cloud Icon" />
//           </div>
//           <h2>Cloud Solutions</h2>
//           <p>
//             We deliver scalable and secure cloud solutions that optimize your infrastructure and empower your business with flexibility and efficiency.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cloud;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Cloud: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Cloud');
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 120,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="cloud" className="mt-0 pt-0">
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
          <h1 className="display-4 fw-bold">Cloud</h1>
          <p className="mt-2 fs-6">
            <Link to="#" className="text-white-50 text-decoration-none">Home</Link> &nbsp; - &nbsp;
            <span className="text-orange fw-semibold">Cloud</span>
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
              <h2 className="text-success mb-4">Cloud</h2>
              <p className="text-secondary mb-4">
                We deliver resilient, scalable, and secure cloud infrastructure services to support enterprise-grade applications and digital transformation initiatives. Our core competencies include:
              </p>
              <div className="checkerboard-wrapper">
                <img
                  src="./images/Technology1.jpg"
                  alt="Enterprise Development"
                  className="img-fluid checkerboard-reveal"
                  style={{
                    height: '475px',
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '10px',
                    opacity: 0,
                  }}
                />
                <div className="checkerboard-overlay">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <div key={index} className="checkerboard-square" style={{ '--square-index': index } as React.CSSProperties}></div>
                  ))}
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

        {/* Database Management Services Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Database Management Services</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Expertise in deploying and managing relational databases like Oracle, MySQL, and PostgreSQL.
              </li>
              <li className="mb-2">
                Database design, optimization, replication, and high availability configurations.
              </li>
              <li>
                Routine performance tuning, indexing, and query optimization to improve data access speeds.
              </li>
              <li>
                Backup, recovery, and disaster recovery planning to ensure data integrity and business continuity.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/2267317.jpg"
              alt="ERP"
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

        {/* Cloud Computing Services Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/clouds.jpg"
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
            <h5 className="text-success fw-bold mb-3">Cloud Computing Services</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                End-to-end cloud strategy and implementation using Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).
              </li>
              <li className="mb-2">
                Cloud architecture design, migration planning, and workload deployment.
              </li>
              <li>
                Support for hybrid and multi-cloud environments with robust monitoring and cost optimization.
              </li>
              <li>
                Expertise in compute, storage, networking, security, and identity management within cloud platforms.
              </li>
            </ul>
          </div>
        </div>

        {/* Infrastructure as Code (IaC) Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Infrastructure as Code (IaC)</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Automation of infrastructure provisioning using tools like Terraform, AWS CloudFormation, and Azure Resource Manager.
              </li>
              <li className="mb-2">
                Enables consistent, repeatable environments across dev, test, and production.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/iac.jpg"
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

        {/* Security and Compliance Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/cyber-security-concept-digital-art.jpg"
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
            <h5 className="text-success fw-bold mb-3">Security and Compliance</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Implementation of firewalls, encryption, identity & access management (IAM) across on-premise and cloud systems.
              </li>
              <li className="mb-2">
                Regular vulnerability assessments, compliance audits (e.g., ISO 27001, GDPR), and patch management.
              </li>
            </ul>
          </div>
        </div>

        {/* Monitoring and Maintenance Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Monitoring and Maintenance</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                24/7 infrastructure monitoring using platforms such as Nagios, Prometheus, Grafana, and native cloud monitoring tools.
              </li>
              <li className="mb-2">
                Proactive issue resolution, resource scaling, and performance analysis.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/employee-navigating-satellite-radar-map-search-routes.jpg"
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

        {/* DevOps Enablement Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/7076118.jpg"
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
            <h5 className="text-success fw-bold mb-3">DevOps Enablement</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Integration of CI/CD pipelines, container orchestration (e.g., Kubernetes, Docker), and environment automation.
              </li>
              <li className="mb-2">
                Align infrastructure with agile development processes for faster deployment cycles.
              </li>
            </ul>
          </div>
        </div>

        {/* Disaster Recovery & Business Continuity Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Disaster Recovery & Business Continuity</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Designing and implementing failover architectures, redundant systems, and data replication strategies.
              </li>
              <li className="mb-2">
                Ensure rapid recovery and minimal downtime in the event of system failure.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/support.jpg"
              alt="DevOps"
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
          border-radius: 20px !important;
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

        .checkerboard-wrapper {
          overflow: hidden;
          position: relative;
          border-radius: 10px;
        }

        .checkerboard-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
        }

        .checkerboard-square {
          background: #000;
          opacity: 1;
          animation: checkerboard-reveal 1.2s ease forwards;
          animation-delay: calc(0.05s * var(--square-index));
        }

        .checkerboard-reveal {
          animation: image-reveal 1.2s ease forwards;
        }

        @keyframes checkerboard-reveal {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
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

export default Cloud;