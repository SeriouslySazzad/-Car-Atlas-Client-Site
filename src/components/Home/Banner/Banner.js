import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from './images/1.jpg'
import banner2 from './images/2.jpg'
import banner3 from './images/3.jpg'
import banner4 from './images/4.jpg'
import banner5 from './images/5.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel className="banner-container">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Independence and Freedom</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Privacy and Safety</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Health and Emergencies</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Save Time and Flexibility</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Take Pleasure Trips</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;