import React from "react";

const Services: React.FC = () => {
    return (
        <section id="services" className="services section light-background">
            <div className="container section-title section-heading" data-aos="fade-up">
            <span className="text-uppercase fs-6 text-success mb-5 ls-2 fw-medium">
 SERVICES
</span>

                <h2 className="pt-4">What we're offering</h2>
                <h3>Dealing in all professional IT services.</h3>
            </div>
            <div className="container">

                <div className="row gy-4 d-none">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item  position-relative">
                            <div className="icon">
                                <i className="bi bi-cash-stack"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Engineering</h3>
                            </a>
                            <p>At Soarswell, we offer comprehensive solutions in application development, quality control, and DevOps. We specialize in creating custom software, mobile apps, and web platforms, with a focus on seamless testing.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-calendar4-week"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Consulting</h3>
                            </a>
                            <p>At Soarswell, we offer expert cloud consulting, migration, and development services, including cloud-native applications and Kubernetes management. Our iPaaS solutions seamlessly connect applications.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-chat-text"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Technology</h3>
                            </a>
                            <p>At Soarswell, we provide advanced big data engineering services, including data warehousing, data lakes, and data pipelines to handle large-scale data efficiently. Our AI and machine learning capabilities span chatbots.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-globe"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Automation</h3>
                            </a>
                            <p>We drive digital transformation by modernizing business processes and operations to enhance efficiency and agility. Our approach includes leveraging robotic process automation to streamline and automate repetitive tasks.</p>
                            <a href="service-details.html" className="stretched-link"></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-clock"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Cloud</h3>
                            </a>
                            <p>We offer comprehensive cloud services, including assessment, migration planning, and optimization for a seamless transition to cloud platforms. Our expertise extends to cloud-native application development.</p>
                            <a href="service-details.html" className="stretched-link"></a>
                        </div>
                    </div>
                </div>



                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-card">
                            <img src=".\images\pexels-thisisengineering-3862627 (1).png" alt="" width={530}/>
                            <div className="details">
                                <h2 className="cardHeader">Engineering</h2>
                                <p className="cardText">
                                At Soarswell, we offer comprehensive solutions in application development, quality control, and DevOps. We specialize in creating custom software, mobile apps, and web platforms, with a focus on seamless testing.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card">
                            <img src="./images/consulting-one.jpg" alt="" width={530}/>
                            <div className="details">
                                <h2 className="cardHeader">Consulting</h2>
                                <p className="cardText">
                                At Soarswell, we offer expert cloud consulting, migration, and development services, including cloud-native applications and Kubernetes management. Our iPaaS solutions seamlessly connect applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-card">
                            <img src=".\public\images\standard-quality-control-concept-m (1).png" alt="" width={530}/>
                            <div className="details">
                                <h2 className="cardHeader">Technology</h2>
                                <p className="cardText">
                                At Soarswell, we provide advanced big data engineering services, including data warehousing, data lakes, and data pipelines to handle large-scale data efficiently. Our AI and machine learning capabilities span chatbots.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-card">
                            <img src="./images/istockphoto-1698710873-612x612.jpg" alt="" width={530}/>
                            <div className="details">
                                <h2 className="cardHeader">Automation</h2>
                                <p className="cardText">
                                We drive digital transformation by modernizing business processes and operations to enhance efficiency and agility. Our approach includes leveraging robotic process automation to streamline and automate repetitive tasks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-card">
                            <img src="./images/cloud.jpg" alt="" width={530}/>
                            <div className="details">
                                <h2 className="cardHeader">Cloud</h2>
                                <p className="cardText">
                                We offer comprehensive cloud services, including assessment, migration planning, and optimization for a seamless transition to cloud platforms. Our expertise extends to cloud-native application development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-card">
                            <img src="./images/esg.jpg" alt="" width={530}/>
                            <div className="details">
                                <h2 className="cardHeader">ESG Solutions</h2>
                                <p className="cardText">
                                Soarswell is deeply committed to sustainability and responsible business practices. Our ESG solutions help organizations seamlessly integrate environmental, social, and governance principles into their operations, driving long-term value and positive global impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;