import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import delivery from '../assets/delivery.png';
import payment from '../assets/payment.png';
import shop from '../assets/shop.png';
import help from '../assets/help.png';
import service from '../assets/service.png';
import boafo from '../assets/boafo.jpg';

const CarouselSlider = () => (
  <section>
    <Carousel showThumbs={false} showArrows infiniteLoop autoPlay interval={8000}>
      <div className="carousel_img_container">
        <img src={boafo} alt="banner" />
      </div>
    </Carousel>
    <div className="buttons-container">
      <div>
        <img src={delivery} alt="delivery" />
        <h4>Fast Delivery</h4>
      </div>
      <div>
        <img src={payment} alt="payment" />
        <h4>Safe Payment</h4>
      </div>
      <div>
        <img src={shop} alt="shop" />
        <h4>Shop with Confidence</h4>
      </div>
      <div>
        <img src={help} alt="help" />
        <h4>24/7 Help Center</h4>
      </div>
      <div>
        <img src={service} alt="service" />
        <h4>Friendly Services</h4>
      </div>
    </div>
  </section>
);

export default CarouselSlider;
