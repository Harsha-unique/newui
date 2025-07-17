
import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="row gy-4">
                    {/* LEFT: Image with fade-in */}
                    <div
                        className="col-lg-6 position-relative about-us-img d-flex align-items-center"
                        data-aos="fade-in"
                        data-aos-delay="100"
                    >
                        <img src="./images/about.png" className="img-fluid" alt="About Us" />
                    </div>

                    {/* RIGHT: Text with fade-up */}
                    <div
                        className="col-lg-6 ps-lg-4 content d-flex flex-column justify-content-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3>About Us</h3>
                        <p>
                            About Our Vision and Services: Driving Growth Through Cutting-Edge Technology and Strategic Insight
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-diagram-3"></i>
                                <div>
                                    <h5>Comprehensive Business Solutions</h5>
                                    <p>
                                        Discover the power of SAP, Odoo, Microsoft Dynamics, Salesforce, and RPA. These platforms empower your enterprise, streamline processes, enhance customer engagement, and automate operations for optimal efficiency.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-fullscreen-exit"></i>
                                <div>
                                    <h5>End-to-End Digital Services</h5>
                                    <p>
                                        Transform your business with our engineering, consulting, cloud, technology, and automation solutions. From application development to cloud migration and AI-driven insights, we drive innovation and efficiency across every aspect of your enterprise.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-broadcast"></i>
                                <div>
                                    <h5>Industries We Serve</h5>
                                    <p>
                                        Partnering with leaders in FMCG, oil and gas, fintech, and financial services, we deliver tailored solutions that drive growth, innovation, and efficiency across diverse sectors.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
