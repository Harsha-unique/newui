
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Ourproducts: React.FC = () => {
  const images = [
    './images/client.png',
    './images/candidate.png',
    './images/employee.png',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getClassName = (index: number) => {
    if (index === activeIndex) return 'carousel-img center';
    if (index === (activeIndex + 1) % images.length) return 'carousel-img right';
    if (index === (activeIndex + 2) % images.length) return 'carousel-img left';
    return 'carousel-img';
  };

  return (
    <section id="ourproducts" className="mt-0 pt-0">
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
          <h1 className="display-4 fw-bold">Our Products</h1>
          <p className="mt-2 fs-6">
            <Link to="#" className="text-white-50 text-decoration-none">Home</Link> &nbsp; - &nbsp;
            <span className="text-orange fw-semibold">Our Products</span>
          </p>
        </div>
      </div>

      {/* ⏩ Image Carousel Section */}
      {/* <div className="container py-5 text-center">
        <div className="carousel-3d-wrapper mx-auto mb-5">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`carousel-${idx}`}
              className={getClassName(idx)}
            />
          ))}
        </div>
      </div> */}

      {/* Products Details */}
      <div className="container pb-5 mt-5">
        <div className="row">
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
                  <li className="sidebar-link-wrapper" key={label}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="d-flex align-items-center justify-content-between text-white text-decoration-none px-3 py-2 w-100 sidebar-link-item"
                    >
                      <span className="sidebar-label">{label}</span>
                      <span className="sidebar-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark text-white rounded shadow p-3 mt-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <h6 className="fw-bold mb-2">Need help?</h6>
              <p className="mb-1">
                Prefer speaking with a human to filling out a form? Call our corporate office and we’ll connect you with a team member who can help.
              </p>
              <div className="fw-bold text-success mt-2">📞 +91 9063222969</div>
            </div>
          </div>

          <div className="col-lg-9 ps-lg-4 lh-lg">
            <div className="text-center mb-5">
              <h2 className="text-success">Explore Our Products</h2>
              <p className="text-secondary">Powerful tools designed to boost efficiency and visibility for your business.</p>
            </div>

            <div className="row mb-5 align-items-center" data-aos="fade-up">
              <h4 className="text-success fw-bold">Invoice Management System</h4>



     <div className="col-md-5 text-center mb-3 mb-md-0">
                {/* <img src="./images/image.png" alt="Invoice" className="img-fluid" style={imgStyle} /> */}
                   <div className="container py-5 text-center">
        <div className="carousel-3d-wrapper mx-auto mb-5">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`carousel-${idx}`}
              className={getClassName(idx)}
            />
          ))}
        </div>
      </div>
              </div>
              <div className="col-md-7" style={{ textAlign: 'justify' }}>
                <p className="text-secondary mb-3">
               Invohub by Soarswell is a smart, scalable invoicing and billing platform designed to streamline financial operations for growing businesses. With built-in automation, multi-currency and tax compliance, and secure client portal access, Invohub simplifies complex billing cycles and reduces manual errors. Its real-time dashboard offers clear insights into billing status, overdue payments, and cash flow, while seamless integration with ERP, CRM, and accounting systems ensures operational efficiency. 
                </p>
              </div>
            </div>
 <div className="row mb-5 align-items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="col-md-7 order-2 order-md-1" style={{ textAlign: 'justify' }}>
                <h4 className="text-success fw-bold">Task & Project Tracker</h4>
                <p className="text-secondary mb-3">
                  Monitor tasks, assign responsibilities, track deadlines, and analyze productivity in real time.
                </p>
                <p className="text-secondary">Ideal for remote teams and enterprises that value collaboration and accountability.</p>
              </div>
              <div className="col-md-5 order-1 order-md-2 text-center mb-3 mb-md-0">
                <img src="./images/tracker.jpg" alt="Tracker" className="img-fluid" style={imgStyle} />
              </div>
            </div> 

            <div className="row mb-5 align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="col-md-5 text-center mb-3 mb-md-0">
                <img src="./images/crm.jpg" alt="CRM" className="img-fluid" style={imgStyle} />
              </div>
              <div className="col-md-7" style={{ textAlign: 'justify' }}>
                <h4 className="text-success fw-bold">Customer Relationship Suite (CRM)</h4>
                <p className="text-secondary mb-3">
                  Manage your customer lifecycle more effectively — from leads to sales to support — all in one CRM system.
                </p>
                <p className="text-secondary">
                  Includes sales pipeline visualization, communication tracking, and AI-powered analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Internal CSS */}
      <style>{`
        .carousel-3d-wrapper {
          height: 150px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .carousel-img {
          position: absolute;
          width: 50%;
          height: 100%;
          object-fit: cover;
          
          opacity: 0;
          transition: all 1s ease-in-out;
          z-index: 1;
        }

        .carousel-img.center {
          transform: translateX(0) scale(1);
          z-index: 3;
          opacity: 1;
          filter: none;
        }

        .carousel-img.left {
          transform: translateX(-80%) scale(0.8);
          z-index: 2;
          opacity: 0.3;
          filter: blur(4px);
        }

        .carousel-img.right {
          transform: translateX(80%) scale(0.8);
          z-index: 2;
          opacity: 0.3;
          filter: blur(4px);
        }

        .sidebar-link-wrapper {
          margin: 10px;
        }

        .sidebar-link-item {
          background-color: transparent;
          color: white;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .sidebar-link-item:hover,
        .sidebar-link-item.active {
          background-color: white !important;
          color: black !important;
        }

        .sidebar-label,
        .sidebar-arrow {
          transition: color 0.3s ease;
        }

        .text-orange {
          color: #fd7e14 !important;
        }
          .carousel-3d-wrapper {
  height: 230px; /* Match the height of the ML image */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  margin-top: -60px;
}

.carousel-img {
  position: absolute;
  width: 50%; /* Already increased */
  height: 50%;
  margin-top: 90px;
 
  object-fit: cover;
  opacity: 0;
  transition: all 1s ease-in-out;
  z-index: 1;
  border-radius: 18px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
}

      `}</style>
    </section>
  );
};

const imgStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover' as const,
  borderRadius: '18px',
  boxShadow: '0 0 12px rgba(0,0,0,0.1)',
};

export default Ourproducts;
