import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import medi from '../assets/medi.jpg';
import delivery from '../assets/delivery.png';
import payment from '../assets/payment.png';
import shop from '../assets/shop.png';
import help from '../assets/help.png';
import service from '../assets/service.png';
import drug from '../assets/drug.jpg';
import drugs from '../assets/drugs.jpg';

const CarouselSlider = () => (
  <section>
    <Carousel showThumbs={false} showArrows infiniteLoop autoPlay interval={5000}>
      <div className="carousel_img_container">
        <img src={medi} alt="banner" />
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
    <div className="sub-banners-container">
      <img src={drug} alt="manu mixture banner" />
      <img src={drugs} alt="spakan mixture banner" />
    </div>
  </section>
);

export default CarouselSlider;
