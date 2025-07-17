
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
const DataScience: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Data Science');
useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 120,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <section id="datascience" className="mt-0 pt-0">
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
          <h1 className="display-4 fw-bold">Data Science and Analytics</h1>
          <p className="mt-2 fs-6">
            <Link to="#" className="text-white-50 text-decoration-none">Home</Link> &nbsp; - &nbsp;
            {/* <Link to="#solutions" className="text-white-50 text-decoration-none">Solutions</Link> &nbsp; - &nbsp; */}
            <span className="text-orange fw-semibold">Data Science and Analytics</span>
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
              <h2 className="text-success mb-4">Data Science</h2>
              <p className="text-secondary mb-4">
              We empower organizations to make data-driven decisions through advanced analytics, machine learning, and intuitive data visualization. Our data science services turn raw data into actionable business insights.
              </p>
              <div className="image-bubble-wrapper">
              <img
                src="./images/datascience.jpg"
                alt="Enterprise Development"
                className="img-fluid image-reveal"
                style={{
                    height: '475px',
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '10px',
                    opacity: 0,
                  }}
              />
               <div className="image-bubble-overlay">
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
        <div className="row mt-4 align-items-start"  data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Advanced Analytics</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
              Leverage powerful statistical tools like SAS, Python, and R to perform predictive modelling, trend analysis, and forecasting.
              </li>
              <li className="mb-2">
              Apply techniques such as regression analysis, time-series forecasting, clustering, and classification to uncover hidden patterns in large datasets.
              </li>
              <li>
              Domain-specific analytics solutions for finance, healthcare, retail, and manufacturing.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/image (10).png"
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
              src="./images/machinelearning.jpg"
              alt="CRM"
              className="img-fluid scale-hover"
              style={{
                width: '75%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Machine Learning & AI</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
              Development of machine learning models for automation, recommendation systems, fraud detection, and customer segmentation.
              </li>
              <li className="mb-2">
              Implementation of supervised and unsupervised learning algorithms using scikit-learn, TensorFlow, and XGBoost.
              </li>
              <li>
              Model training, testing, tuning, and deployment for real-time and batch data scenarios.
              </li>
            </ul>
          </div>
        </div>

        {/* DevOps Section (Duplicate of ERP) */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Data Engineering & Preparation</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
              Data cleansing, transformation, and pipeline development to ensure high-quality inputs for analysis.
              </li>
              <li className="mb-2">
               Use of ETL tools and custom scripts in Python or R to handle structured and unstructured data.
              </li>
              <li>
              Integration with data warehouses, data lakes, and cloud platforms for seamless data flow.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/image (6).jpg"
              alt="DevOps"
              className="img-fluid scale-hover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                objectPosition: 'top', // or 'center', 'bottom' etc.
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                marginLeft: '70px',
              }}
            />
          </div>

        </div>

        {/* Security Section (Duplicate of CRM) */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
            <img
              src="./images/image (5).png"
              alt="Security"
              className="img-fluid scale-hover"
              style={{
                width: '75%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Business Intelligence (BI)</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
               Design and development of interactive dashboards and reports using Tableau, Power BI, and QlikView.
              </li>
              <li className="mb-2">
                Real-time KPI tracking, executive reporting, and customized visualizations for different business functions.
              </li>
              <li>
              Drill-down capabilities and data storytelling features to support strategic decision-making.
              </li>
            </ul>
          </div>
        </div>

        {/* ERP Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Big Data Analytics</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
              Support for large-scale data processing using Apache Spark, Hadoop, and cloud-native tools (e.g., AWS EMR, Azure Synapse).
              </li>
              <li className="mb-2">
              Batch and real-time data analysis for customer behaviour, operational efficiency, and market trends.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/bigdata.jpg"
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
              src="./images/image (4).jpg"
              alt="CRM"
              className="img-fluid scale-hover"
              style={{
                width: '75%',
                height: '230px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
            <h5 className="text-success fw-bold mb-3">Data Governance & Compliance</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
              Ensuring data quality, lineage, and privacy through well-defined governance frameworks.
              </li>
              <li className="mb-2">
               Compliance with data protection laws such as GDPR, CCPA, and HIPAA in all analytics workflows.
              </li>
            </ul>
          </div>
        </div>

        {/* DevOps Section (Duplicate of ERP) */}
        <div className="row mt-5 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Consulting & Use Case Development</h5>
            <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
              <li className="mb-2">
              Collaborative workshops to identify high-impact data science use cases.
              </li>
              <li className="mb-2">
               Proof-of-concept (PoC) and pilot projects to validate models before full-scale deployment.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/image (3).jpg"
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
           .image-bubble-wrapper {
          overflow: hidden;
          position: relative;
          border-radius: 10px;
        }

        .image-bubble-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(
            circle at center,
            transparent 0%,
            transparent 10%,
            #000 10%,
            #000 100%
          );
          animation: bubble-reveal-img 1.2s ease forwards;
          border-radius: 10px;
        }

        .image-reveal {
          animation: image-reveal 1.2s ease forwards;
        }

        @keyframes bubble-reveal-img {
          0% {
            transform: scale(0.1);
            opacity: 1;
          }
          100% {
            transform: scale(3);
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

export default DataScience;


