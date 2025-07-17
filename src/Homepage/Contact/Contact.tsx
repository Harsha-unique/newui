import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container section-title section-heading " data-aos="fade-up">
                <h2>Contact us</h2>
                <h3>Lets get in touch</h3>
                {/* <p>We’d love to hear from you anytime</p> */}
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"></iframe> */}
                    <iframe
                        style={{ border: 0, width: '100%', height: '270px' }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4471.946348434711!2d78.38332897554788!3d17.443624647982613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e01511d911%3A0x104e7368bcfb0af1!2sGowra%20FountainHead!5e0!3m2!1sen!2sin!4v1737526977109!5m2!1sen!2sin"
                        frameBorder="0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>Gowra Fountain Head, Unit 1203, 12th Floor, Near Raheja Mind space, Hitech City, Hyderabad 500081 Telangana.</p>
                            </div>
                        </div>
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 9063222969</p>
                            </div>
                        </div>
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>info@soarswell.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6 ">
                                    <input type="email" className="form-control" name="email" placeholder="Your Email" />
                                </div>
                                {/* <div className="col-md-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" />
                                </div> */}
                                <div className="col-md-12">
                                    <textarea className="form-control" name="message" rows={6} placeholder="Message"></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit" className="btn-one">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact;