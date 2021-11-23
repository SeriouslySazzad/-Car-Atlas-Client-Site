import React from 'react';
import './About.css';
import about from "./about.png";

const About = () => {
    return (
        <div id="about" className="bg-dark">
            <div className="about-container">
                <br />
                <br />
                <h1 className="text-light">ABOUT US</h1>
                <br />
                <div className="container">
                    <div className="about">
                        <div className="about-left">
                            <img className="w-75 mt-5" src={about} alt="" />
                            <br />
                            <br />
                            <button className="btn btn-primary">Read More <i className="fas fa-arrow-alt-circle-right"></i> <i className="fas fa-arrow-alt-circle-right"></i></button>
                            <hr />
                        </div>
                        <div className="about-right container">
                            <h3 className="text-white text-bold">Welcome to Car Atlus, Equipment Company</h3>
                            <br />
                            <p className="text-white">Our mechanics and technicians are trained in the latest Chevrolet and foreign vehicles and provide top of the line service for your vehicle. Because our garage has been working exclusively on Chevrolet vehicles and our staff have over 35 years of combined experience, we’ve gained a reputation as the best place to bring your German car in for maintenance and repairs.</p>
                            <li>Full Road Service With 24-Hour Towing</li>
                            <li>Morning Drop-off and Evening Pick-up Available</li>
                            <li>GEICO Emergency Road Service Facility</li>
                            <br />
                            <h5 className="text-white">Our Service Number: <span>017675-456787</span></h5>
                        </div>
                        
                        
                    </div>
                    <hr />
                    <hr />
                    <hr />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default About;