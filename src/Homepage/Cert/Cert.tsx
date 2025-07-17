import React from "react";

const Cert: React.FC = () => {
    return (
        <section id="Cert" className="stats section light-background certi-sec">
            <img src="./images/stats-bg.jpg" alt="" data-aos="fade-in" />
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-6 col-md-6 ">
                        <div className=" w-100 h-100 d-flex flex-column justify-content-center">
                            <h2>World-Class Standards Met</h2>
                            <p>Soarswell Consulting Private Limited is ISO 9001:2015 and ISO/IEC 27001:2022 certified. Our Quality Management System (QMS) and Information Security Management System (ISMS) are independently assessed and compliant.</p>
                            <h5>Soarswell Consulting Pvt Ltd holds a membership with MyCII</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="certi-sec-item d-flex justify-content-around">
                            <div className="text-center">
                                <p className="mb-1">ISO 9001:2015 For</p>
                                <p>Quality Management</p>
                                <img src="./images/iso-1.png" className="w-auto h-auto" />
                            </div>
                            <div className="text-center">
                                <p className="mb-1">ISO 9001:2015 For</p>
                                <p>Quality Management</p>
                                <img src="./images/iso-2.1.png" className="w-auto h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cert;