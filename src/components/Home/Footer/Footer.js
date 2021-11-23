import React from 'react';
import footerImg from '../../../images/footer-img.jpg'
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container p-5">
                <div className="card-group footer-container">
                    <div className="card text-center bg-dark mt-5">
                        <img className="rounded" src={footerImg} alt="" />
                    </div>
                    <div className="card bg-dark text-center mt-5">
                        {/* <h4 className="text-primary text-center mt-4 follow-us">Follow US:</h4> */}
                        <ul>
                            <li style={{ listStyle: 'none' }} className="text-white mt-3"><h3><i className="fab fa-facebook-square text-info"></i> Facebook</h3></li>
                            <li style={{ listStyle: 'none' }} className="text-white"><h3><i className="fab fa-instagram-square text-danger"></i> Instagram</h3></li>
                            <li style={{ listStyle: 'none' }} className="text-white"><h3><i className="fab fa-twitter text-success"></i> Twitter</h3></li>
                            <li style={{ listStyle: 'none' }} className="text-white"><h3><i className="fab fa-github-square"></i> Github</h3></li>
                        </ul>
                    </div>
                    <div className="card bg-dark text-center justify-content-center">
                        <h5 className="text-warning">Call US: 017675-456787</h5>
                        <hr />
                        <h5 className="text-white">Location: 24/3, Pragati Sarani, North Badda, Dhaka, Bangladesh.</h5>
                        <hr />
                        <h5 className="text-info">Copyright © 2021 Car Atlas, Dhaka.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;