import React from 'react';
import Header from './Header';
import CarouselSlider from './CarouselSlider';
import Products from './Products';
import Testimonies from './Testimonies';
import Gallery from './Gallery';
import HealthcareDirections from './HealthcareDirections';
import Contact from './Contact';
import Services from './Services';
import About from './AboutUs';
import Footer from './Footer';
import locationRoutes from './LocationRoutes';

const MainLayout = () => (
  <>
    <Header />
    <CarouselSlider />
    <Products />
    <Testimonies />
    <Gallery />
    <HealthcareDirections routes={locationRoutes} />
    <Contact />
    <Services />
    <About />
    <Footer />
  </>
);

export default MainLayout;
