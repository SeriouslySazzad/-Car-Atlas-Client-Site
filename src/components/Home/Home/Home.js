import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Testminial from '../Testminial/Testminial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Testminial></Testminial>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;