import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 d-flex align-items-center justify-content-center justify-content-md-start">
                            <p>&copy; 2025 Soarswell All Rights Reserved.</p>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;