
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';

// const SecurityAndCompliance: React.FC = () => {
//   const [activeLink, setActiveLink] = useState('Security and Compliance');
//   useEffect(() => {
//     AOS.init({
//       duration: 500,
//       offset: 120,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, []);

//   return (
//     <section id="security" className="mt-0 pt-0">
//       {/* Banner Section */}
//       <div
//         className="position-relative text-white text-center d-flex align-items-center justify-content-center"
//         style={{
//           backgroundImage: "url('./images/pexels-yankrukov-7792818.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '300px',
//         }}
//       >
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
//         ></div>
//         <div className="position-relative z-1">
//           <h1 className="display-4 fw-bold">Security and Compliance</h1>
//           <p className="mt-2 fs-6">
//             <Link to="#" className="text-white-50 text-decoration-none">Home</Link>   -  
//             <span className="text-orange fw-semibold">Security and Compliance</span>
//           </p>
//         </div>
//       </div>

//       <div className="container py-5">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-lg-3 mb-4 mb-lg-0">
//             <div className="bg-success text-white rounded shadow">
//               <div className="p-3 border-bottom border-white-50 fw-bold text-uppercase fs-6">
//                 All Solutions
//               </div>
//               <ul className="list-unstyled m-0">
//                 {[
//                   { label: 'Enterprise Software', href: '#enterprise' },
//                   { label: 'Technology Infrastructure', href: '#technology' },
//                   { label: 'Development and Operations', href: '#development' },
//                   { label: 'Security and Compliance', href: '#security' },
//                   { label: 'Data Science', href: '#datascience' },
//                   { label: 'Our Products', href: '#ourproducts' },
//                   { label: 'ESG Solutions', href: 'http://www.esgucator.com/', external: true },
//                 ].map(({ label, href, external }) => (
//                   <li
//                     className={`sidebar-link-wrapper ${label === 'ESG Solutions' ? 'pb-3' : ''}`}
//                     key={label}
//                   >
//                     <a
//                       href={href}
//                       onClick={() => setActiveLink(label)}
//                       className={`d-flex align-items-center justify-content-between text-white text-decoration-none px-3 py-2 w-100 sidebar-link-item ${activeLink === label ? 'active' : ''}`}
//                       style={{
//                         whiteSpace: 'nowrap',
//                         overflow: 'hidden',
//                         textOverflow: 'ellipsis',
//                         borderRadius: '20px',
//                         transition: 'all 0.3s ease',
//                       }}
//                       target={external ? "_blank" : undefined}
//                       rel={external ? "noopener noreferrer" : undefined}
//                     >
//                       <span className="sidebar-label">{label}</span>
//                       <span className="sidebar-arrow">→</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Help Box */}
//             <div className="bg-dark text-white rounded shadow p-3 mt-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
//               <h6 className="fw-bold mb-2">Need help?</h6>
//               <p className="mb-1">
//                 Prefer speaking with a human to filling out a form? Call our corporate office and we’ll connect you with a team member who can help.
//               </p>
//               <div className="fw-bold text-success mt-2">📞 +91 9063222969</div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="col-lg-9 ps-lg-4 lh-lg">
//             <div style={{ maxWidth: '95%', textAlign: 'justify' }}>
//               <h2 className="text-success mb-4">Security and Compliance</h2>
//               <p className="text-secondary mb-4">
//                 We deliver comprehensive security and compliance solutions to protect enterprise systems, ensure data integrity, and meet industry-specific regulatory requirements. Our services are tailored to align with both technical and legal frameworks.
//               </p>
//               <div className="split-wrapper">
//                 <img
//                   src="./images/image (7).jpg"
//                   alt="Enterprise Development"
//                   className="img-fluid split-reveal"
//                   style={{
//                     height: '445px',
//                     objectFit: 'cover',
//                     width: '100%',
//                     borderRadius: '10px',
//                     opacity: 0,
//                   }}
//                 />
//                 <div className="split-overlay">
//                   <div className="split-panel split-panel-left"></div>
//                   <div className="split-panel split-panel-right"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Subheading */}
//         <div className="row mt-5">
//           <div className="col">
//             <h2 className="text-orange fw-bold text-start mb-4">Explore Our Sub-Domains</h2>
//           </div>
//         </div>

//         {/* Cybersecurity Infrastructure Section */}
//         <div className="row mt-4 align-items-start" data-aos="fade-up">
//           <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
//             <h5 className="text-success fw-bold mb-3">Cybersecurity Infrastructure</h5>
//             <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
//               <li className="mb-2">
//                 Deployment and management of firewalls (hardware and software-based) to protect against unauthorized access.
//               </li>
//               <li className="mb-2">
//                 Intrusion Detection Systems (IDS) to monitor and alert on suspicious network activities.
//               </li>
//               <li>
//                 Advanced antivirus and anti-malware solutions to detect, quarantine, and remove threats across endpoints and servers.
//               </li>
//               <li>
//                 Implementation of Data Loss Prevention (DLP) tools to safeguard sensitive information from leakage or theft.
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
//             <img
//               src="./images/security.jpg"
//               alt="ERP"
//               className="img-fluid scale-hover"
//               style={{
//                 width: '100%',
//                 height: '200px',
//                 objectFit: 'cover',
//                 borderRadius: '18px',
//                 boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//                 marginLeft: '70px',
//               }}
//             />
//           </div>
//         </div>

//         {/* Identity and Access Management (IAM) Section */}
//         <div className="row mt-5 align-items-start" data-aos="fade-up">
//           <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
//             <img
//               src="./images/56389.jpg"
//               alt="CRM"
//               className="img-fluid scale-hover"
//               style={{
//                 width: '70%',
//                 height: '230px',
//                 objectFit: 'cover',
//                 borderRadius: '18px',
//                 boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//               }}
//             />
//           </div>
//           <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
//             <h5 className="text-success fw-bold mb-3">Identity and Access Management (IAM)</h5>
//             <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
//               <li className="mb-2">
//                 Enforcement of role-based access controls (RBAC), multi-factor authentication (MFA), and single sign-on (SSO).
//               </li>
//               <li className="mb-2">
//                 Secure user provisioning, deprovisioning, and audit trails for access management.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Regulatory Compliance Section */}
//         <div className="row mt-5 align-items-start" data-aos="fade-up">
//           <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
//             <h5 className="text-success fw-bold mb-3">Regulatory Compliance</h5>
//             <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
//               <li className="mb-2">
//                 Alignment with global and industry-specific standards such as:
//                 <ul style={{ listStyleType: "'-'", paddingLeft: '20px' }}>
//                   <li>GDPR (General Data Protection Regulation)</li>
//                   <li>ISO 27001 (Information Security Management)</li>
//                   <li>PCI DSS (Payment Card Industry Data Security Standard)</li>
//                   <li>SOX, HIPAA, and other domain-specific regulations</li>
//                 </ul>
//               </li>
//               <li className="mb-2">
//                 Policy documentation, gap analysis, audit readiness, and compliance reporting services.
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
//             <img
//               src="./images/4463668.png"
//               alt="DevOps"
//               className="img-fluid scale-hover"
//               style={{
//                 width: '100%',
//                 height: '200px',
//                 objectFit: 'cover',
//                 objectPosition: 'top',
//                 borderRadius: '18px',
//                 boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//                 marginLeft: '70px',
//               }}
//             />
//           </div>
//         </div>

//         {/* Fintech Compliance with TLM Tools Section */}
//         <div className="row mt-5 align-items-start" data-aos="fade-up">
//           <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
//             <img
//               src="./images/fintech.png"
//               alt="Security"
//               className="img-fluid scale-hover"
//               style={{
//                 width: '70%',
//                 height: '230px',
//                 objectFit: 'cover',
//                 borderRadius: '18px',
//                 boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//               }}
//             />
//           </div>
//           <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
//             <h5 className="text-success fw-bold mb-3">Fintech Compliance with TLM Tools</h5>
//             <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
//               <li className="mb-2">
//                 Specialized compliance support for fintech companies using Transaction Lifecycle Management (TLM) tools.
//               </li>
//               <li className="mb-2">
//                 Integration of TLM with existing platforms to ensure transaction transparency, auditability, and regulatory adherence.
//               </li>
//               <li>
//                 Monitoring of reconciliation workflows and anti-money laundering (AML) flags using intelligent compliance dashboards.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Risk Assessment and Vulnerability Management Section */}
//         <div className="row mt-4 align-items-start" data-aos="fade-up">
//           <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
//             <h5 className="text-success fw-bold mb-3">Risk Assessment and Vulnerability Management</h5>
//             <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
//               <li className="mb-2">
//                 Regular security risk assessments and penetration testing to identify and remediate vulnerabilities.
//               </li>
//               <li className="mb-2">
//                 Use of vulnerability scanning tools (e.g., Nessus, Qualys) and patch management systems.
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
//             <img
//               src="./images/risk-management1.png"
//               alt="ERP"
//               className="img-fluid scale-hover"
//               style={{
//                 width: '100%',
//                 height: '200px',
//                 objectFit: 'cover',
//                 borderRadius: '18px',
//                 boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//                 marginLeft: '70px',
//               }}
//             />
//           </div>
//         </div>

//         {/* Security Monitoring & Incident Response Section */}
//         <div className="row mt-5 align-items-start" data-aos="fade-up">
//           <div className="col-md-5 mb-4 mb-md-0" style={{ paddingLeft: '30px' }}>
//             <img
//               src="./images/image (8).jpg"
//               alt="CRM"
//               className="img-fluid scale-hover"
//               style={{
//                 width: '70%',
//                 height: '230px',
//                 objectFit: 'cover',
//                 borderRadius: '18px',
//                 boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//               }}
//             />
//           </div>
//           <div className="col-md-7 lh-lg" style={{ textAlign: 'justify', marginLeft: '-40px' }}>
//             <h5 className="text-success fw-bold mb-3">Security Monitoring & Incident Response</h5>
//             <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
//               <li className="mb-2">
//                 24/7 Security Operations Centre (SOC) monitoring and real-time threat response.
//               </li>
//               <li className="mb-2">
//                 Incident response planning and execution to minimize damage and recovery time.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Data Encryption & Backup Section */}
//         <div className="row mt-5 align-items-start" data-aos="fade-up">
//           <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
//             <h5 className="text-success fw-bold mb-3">Data Encryption & Backup</h5>
//             <ul className="text-secondary mb-4 ps-3" style={{ listStyleType: "'✔️ '", textAlign: 'justify' }}>
//               <li className="mb-2">
//                 End-to-end encryption of data at rest and in transit using industry-standard protocols.
//               </li>
//               <li className="mb-2">
//                 Secure backup solutions and disaster recovery frameworks to ensure data availability.
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-3 offset-lg-0 col-md-4 text-center mb-4 mb-md-0">
//             <img
//               src="./images/image (9).jpg"
//               alt="DevOps"
//               className="img-fluid scale-hover"
//               style={{
//                 width: '100%',
//                 height: '200px',
//                 objectFit: 'cover',
//                 borderRadius: '18px',
//                 boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//                 marginLeft: '70px',
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS */}
//       <style>{`
//         .sidebar-link-wrapper {
//           margin: 10px;
//         }

//         .sidebar-link-item {
//           background-color: transparent;
//           color: white;
//         }

//         .sidebar-link-item:hover,
//         .sidebar-link-item.active {
//           background-color: white !important;
//           color: black !important;
//           border-radius: 20px !important;
//         }

//         .sidebar-link-item:hover .sidebar-label,
//         .sidebar-link-item:hover .sidebar-arrow,
//         .sidebar-link-item.active .sidebar-label,
//         .sidebar-link-item.active .sidebar-arrow {
//           color: black !important;
//         }

//         .sidebar-label,
//         .sidebar-arrow {
//           transition: color 0.3s ease;
//         }

//         .text-orange {
//           color: #fd7e14 !important;
//         }

//         .scale-hover {
//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//         }

//         .scale-hover:hover {
//           transform: scale(1.05);
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//           cursor: pointer;
//         }

//         .split-wrapper {
//           overflow: hidden;
//           position: relative;
//           border-radius: 10px;
//         }

//         .split-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 2;
//           pointer-events: none;
//           display: flex;
//         }

//         .split-panel {
//           background: #000;
//           opacity: 1;
//           width: 50%;
//           height: 100%;
//         }

//         .split-panel-left {
//           animation: split-reveal-left 1.2s ease forwards;
//         }

//         .split-panel-right {
//           animation: split-reveal-right 1.2s ease forwards;
//         }

//         .split-reveal {
//           animation: image-reveal 1.2s ease forwards;
//         }

//         @keyframes split-reveal-left {
//           0% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//           100% {
//             opacity: 0;
//             transform: translateX(-100%);
//           }
//         }

//         @keyframes split-reveal-right {
//           0% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//           100% {
//             opacity: 0;
//             transform: translateX(100%);
//           }
//         }

//         @keyframes image-reveal {
//           0% {
//             opacity: 0;
//           }
//           50% {
//             opacity: 0.5;
//           }
//           100% {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SecurityAndCompliance;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const SecurityAndCompliance: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Security and Compliance');

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 120,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="security" className="mt-0 pt-0">
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
          <h1 className="display-4 fw-bold">Security and Compliance</h1>
          <p className="mt-2 fs-6">
            <Link to="#" className="text-white-50 text-decoration-none">Home</Link>   -  
            <span className="text-orange fw-semibold">Security and Compliance</span>
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
              <h2 className="text-success mb-4">Security and Compliance</h2>
              <p className="text-secondary mb-4">
                We deliver comprehensive security and compliance solutions to protect enterprise systems, ensure data integrity, and meet industry-specific regulatory requirements. Our services are tailored to align with both technical and legal frameworks.
              </p>
              <div className="split-wrapper">
                <img
                  src="./images/image (7).jpg"
                  alt="Enterprise Development"
                  className="img-fluid split-reveal"
                  style={{
                    height: '445px',
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '10px',
                    opacity: 0,
                  }}
                />
                <div className="split-overlay">
                  <div className="split-panel split-panel-left"></div>
                  <div className="split-panel split-panel-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Domains Heading */}
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-orange fw-bold text-start mb-4">Explore Our Sub-Domains</h2>
          </div>
        </div>

        {/* Example Section */}
        <div className="row mt-4 align-items-start" data-aos="fade-up">
          <div className="col-lg-8 col-md-8 ps-md-4 lh-lg" style={{ textAlign: 'justify' }}>
            <h5 className="text-success fw-bold mb-3">Cybersecurity Infrastructure</h5>
            <ul className="text-secondary mb-4 ps-4" style={{ listStyleType: 'disc' }}>
              <li className="mb-2">
                Deployment and management of firewalls (hardware and software-based) to protect against unauthorized access.
              </li>
              <li className="mb-2">
                Intrusion Detection Systems (IDS) to monitor and alert on suspicious network activities.
              </li>
              <li>
                Advanced antivirus and anti-malware solutions to detect, quarantine, and remove threats across endpoints and servers.
              </li>
              <li>
                Implementation of Data Loss Prevention (DLP) tools to safeguard sensitive information from leakage or theft.
              </li>
            </ul>
          </div>
        </div>

        {/* Repeat above format for other sections as needed */}
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

        .split-wrapper {
          overflow: hidden;
          position: relative;
          border-radius: 10px;
        }

        .split-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          display: flex;
        }

        .split-panel {
          background: #000;
          opacity: 1;
          width: 50%;
          height: 100%;
        }

        .split-panel-left {
          animation: split-reveal-left 1.2s ease forwards;
        }

        .split-panel-right {
          animation: split-reveal-right 1.2s ease forwards;
        }

        .split-reveal {
          animation: image-reveal 1.2s ease forwards;
        }

        @keyframes split-reveal-left {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-100%); }
        }

        @keyframes split-reveal-right {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100%); }
        }

        @keyframes image-reveal {
          0% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default SecurityAndCompliance;
