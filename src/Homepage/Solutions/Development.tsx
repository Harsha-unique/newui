

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Development: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Development and Operations');
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 120,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="development" className="mt-0 pt-0">
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
          <h1 className="display-4 fw-bold">Development and Operations</h1>
          <p className="mt-2 fs-6">
            <Link to="#" className="text-white-50 text-decoration-none">Home</Link>   -  
            <span className="text-orange fw-semibold">Development and Operations</span>
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
                  { label: 'Enterprise Software', href: '#enterprise' },
                  { label: 'Technology Infrastructure', href: '#technology' },
                  { label: 'Development and Operations', href: '#development' },
                  { label: 'Security and Compliance', href: '#security' },
                  { label: 'Data Science', href: '#datascience' },
                  { label: 'Our Products', href: '#ourproducts' },
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
              <h2 className="text-success mb-4">Development and Operations</h2>
              <p className="text-secondary mb-4">
                We provide end-to-end development and DevOps services that ensure robust, scalable, and secure software delivery. Our focus spans application development, automated testing, and streamlined deployment practices.
              </p>
              <div className="dissolve-wrapper">
                <img
                  src="./images/development1.jpg"
                  alt="Enterprise Development"
                  className="img-fluid dissolve-reveal"
                  style={{
                    height: '475px',
                    // objectFit: 'cover',
                    width: '100%',
                    borderRadius: '10px',
                    opacity: 0,
                  }}
                />
                <div className="dissolve-overlay">
                  {Array.from({ length: 100 }).map((_, index) => (
                    <div key={index} className="dissolve-square" style={{ '--square-index': index } as React.CSSProperties}></div>
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

        {/* Application Development Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Application Development</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Custom software development using leading technologies such as Java, Python, and .NET for enterprise-grade applications.
              </li>
              <li className="mb-2">
                Full-stack capabilities covering frontend (React, Angular) and backend (Spring Boot, Django, ASP.NET Core) development.
              </li>
              <li>
                Microservices architecture, API development, and containerized solutions for high scalability and modularity.
              </li>
              <li>
                Agile and DevOps-driven development approach for faster time-to-market.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/1720.png"
              alt="ERP"
              className="img-fluid scale-hover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>
        </div>

        {/* Cross-Platform and Mobile Development Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/smartphone.jpg"
              alt="CRM"
              className="img-fluid scale-hover"
              style={{
                width: '70%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Cross-Platform and Mobile Development</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Development of mobile apps and cross-platform solutions using technologies like Flutter, React Native, and Xamarin.
              </li>
              <li className="mb-2">
                Seamless integration with backend systems and third-party APIs.
              </li>
            </ul>
          </div>
        </div>

        {/* DevOps Practices & Automation Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">DevOps Practices & Automation</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Implementation of CI/CD pipelines for continuous integration and delivery using tools like Jenkins, GitLab CI, and Azure DevOps.
              </li>
              <li className="mb-2">
                Infrastructure as Code (IaC) for environment provisioning using Terraform or Ansible.
              </li>
              <li>
                Streamlined collaboration between development and operations teams to improve reliability and release speed.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/7041508.png"
              alt="DevOps"
              className="img-fluid scale-hover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '10px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>
        </div>

        {/* Quality Control & Testing Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/testing.jpg"
              alt="Security"
              className="img-fluid scale-hover"
              style={{
                width: '70%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Quality Control & Testing</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Comprehensive test strategy covering unit, integration, system, and acceptance testing.
              </li>
              <li className="mb-2">
                We utilize automated testing tools such as Selenium for functional and regression testing, JMeter for performance/load testing, and TestRail for test case management and reporting.
              </li>
              <li>
                Test automation frameworks to ensure high coverage, consistency, and faster release cycles.
              </li>
            </ul>
          </div>
        </div>

        {/* Security & Code Quality Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Security & Code Quality</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Incorporation of static code analysis, code review practices, and secure coding guidelines.
              </li>
              <li className="mb-2">
                Use of tools like SonarQube and OWASP ZAP for code quality and vulnerability scanning.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/protection.png"
              alt="ERP"
              className="img-fluid scale-hover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>
        </div>

        {/* Maintenance & Continuous Improvement Section */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/maintenance.jpg"
              alt="CRM"
              className="img-fluid scale-hover"
              style={{
                width: '70%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Maintenance & Continuous Improvement</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
                Post-deployment support and feature enhancements based on user feedback.
              </li>
              <li className="mb-2">
                Continuous performance monitoring and iterative updates to ensure business alignment.
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

        .dissolve-wrapper {
          overflow: hidden;
          position: relative;
          border-radius: 10px;
        }

        .dissolve-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(10, 1fr);
        }

        .dissolve-square {
          background: #000;
          opacity: 1;
          animation: dissolve-reveal 1.5s ease forwards;
          animation-delay: calc(0.03s * var(--square-index));
        }

        .dissolve-reveal {
          animation: image-reveal 1.5s ease forwards;
        }

        @keyframes dissolve-reveal {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes image-reveal {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Development;