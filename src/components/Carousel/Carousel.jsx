import React from "react";
import styles from "./Carousel.module.css";
import { img } from "./carouselData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {img?.map((imgItem, index) => {
          return <img key={index} src={imgItem} />;
        })}
      </Carousel>
      <div className={styles.hero_img}></div>
    </>
  );
}

export default CarouselEffect;
