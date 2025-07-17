import React from "react";
import CountUp from 'react-countup';

const Stats: React.FC = () => {
    return (
        <section id="stats" className="stats section light-background">
            <img src="./images/stats-bg.jpg" alt="" data-aos="fade-in" />
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100" >
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center stats-content">
                        <h3 className="mb-4">More than 5 years of experience</h3>
                        <h4 className="mb-3">Building enduring value through bold strategies</h4>
                        {/* <p className="mb-3">If you are an excellent company with a bad image or appearance then you may have loyal clients but new clients will be hard to get</p> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-6 col-md-6">
                                <div className="stats-item text-left ">
                                    <CountUp start={0} end={124} duration={1} enableScrollSpy scrollSpyOnce />
                                    <p>Projects Executed</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="stats-item text-left ">
                                    <CountUp start={0} end={248} duration={1} enableScrollSpy scrollSpyOnce />
                                    <p>Data Analytics</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="stats-item text-left ">
                                    <CountUp start={0} end={450} duration={1} enableScrollSpy scrollSpyOnce />
                                    <p>Data Management</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="stats-item text-left ">
                                    <CountUp start={0} end={27} duration={1} enableScrollSpy scrollSpyOnce />
                                    <p>Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gy-4 d-none">
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <CountUp start={0} end={124} duration={1} enableScrollSpy scrollSpyOnce />
                            <p>Projects Executed</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <CountUp start={0} end={248} duration={1} enableScrollSpy scrollSpyOnce />
                            <p>Data Analytics</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <CountUp start={0} end={450} duration={1} enableScrollSpy scrollSpyOnce />
                            <p>Data Management</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <CountUp start={0} end={27} duration={1} enableScrollSpy scrollSpyOnce />
                            <p>Satisfied Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats;