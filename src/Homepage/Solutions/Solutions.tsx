import React from "react";

const Solutions: React.FC = () => {
    return (
        <section id="solutions" className="services section light-background solutions-section">
            <div className="container section-title section-heading" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>Solutions</h2>
                        <h3>Experienced and Resolute Consulting Solutions</h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                        <a href="#enterprise" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="solution-card">
                                <div className="icon">
                                    <img src="./images/enterprise-software.svg" alt="" />
                                </div>
                                <h2>Enterprise Software</h2>
                                <p>We offer comprehensive enterprise software solutions, including ERP, CRM, SCM, and HCM systems from SAP, Microsoft Dynamics, and Oracle. Our expertise ensures seamless integration and optimization of systems.</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <a href="#technology" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="solution-card">
                                <div className="icon">
                                    <img src="./images/technology.svg" alt="" />
                                </div>
                                <h2>Technology Infrastructure</h2>
                                <p>We specialize in database management with Oracle, MySQL, and PostgreSQL, ensuring robust and scalable data solutions. Our cloud computing expertise covers AWS, Azure, and GCP, providing flexible and reliable cloud services.</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <a href="#development" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="solution-card">
                                <div className="icon">
                                    <img src="./images/development-operations.svg" alt="" />
                                </div>
                                <h2>Development and Operations</h2>
                                <p>We excel in application development using Java, Python, and .NET, ensuring robust and scalable solutions. Our quality control expertise includes Selenium, JMeter, and TestRail for thorough testing and validation.</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                        <a href="#security" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="solution-card">
                                <div className="icon">
                                    <img src="./images/security.svg" alt="" />
                                </div>
                                <h2>Security and complaince</h2>
                                <p>We provide robust security and compliance solutions, utilizing cybersecurity tools such as firewalls, IDS, antivirus, and DLP to safeguard your systems. Our expertise in regulatory compliance includes TLM tools tailored specifically for the fintech industry.</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="500">
                        <a href="#datascience" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="solution-card">
                                <div className="icon">
                                    <img src="./images/datascience.svg" alt="" />
                                </div>
                                <h2>Data Science</h2>
                                <p>We offer advanced data analytics using SAS, Python, and R to derive actionable insights from complex data. Our business intelligence solutions, including Tableau and Power BI, enable impactful data visualization and reporting.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="600">
                        <a
                            href="https://www.esgucator.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="solution-card">
                                <div className="icon">
                                    <img src="./images/fintech.svg" alt="" />
                                </div>
                                <h2>ESG Solutions</h2>
                                <p>
                                   Our ESG tool centralizes data collection, automates workflows, and aligns with global standards like GRI, CSRD, and BRSR. It enables secure, audit-ready reporting, Scope 3 tracking, and real-time ESG performance monitoring all in one platform.
                                </p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Solutions;
