import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import holi from '../assets/holi.png';
import delivery from '../assets/delivery.png';
import payment from '../assets/payment.png';
import shop from '../assets/shop.png';
import help from '../assets/help.png';
import service from '../assets/service.png';
import drugs from '../assets/drugs.jpg';
import lip from '../assets/lip.png';
import award from '../assets/award.png';
import advice from '../assets/advice.png';

const CarouselSlider = () => (
  <section>
    <Carousel showThumbs={false} showArrows infiniteLoop autoPlay interval={8000}>
      <div className="carousel_img_container">
        <img src={holi} alt="banner" />
      </div>
      <div className="carousel_img_container">
        <img src={lip} alt="banner" />
      </div>
      <div className="carousel_img_container">
        <img src={advice} alt="banner" />
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
      <img src={award} alt="award winning banner" />
      <img src={drugs} alt="spakan mixture banner" />
    </div>
  </section>
);

export default CarouselSlider;
