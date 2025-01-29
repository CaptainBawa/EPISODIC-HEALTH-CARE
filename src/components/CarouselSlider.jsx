import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import medi from "../assets/medi.jpg";

const CarouselSlider = () => (
    <section>
         <Carousel showThumbs={false} showArrows infiniteLoop autoPlay interval={5000}>
          <div className="carousel_img_container">
            <img src={medi} alt="banner" />
          </div>
        </Carousel>
    </section>
    );

export default CarouselSlider;