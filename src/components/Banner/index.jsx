import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Images from "../../constants/images";

function Banner(props) {
  return (
    <section className="banner">
      <Container className="container-fixed">
        <div className="banner-wrapper">
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
            {Images.BANNER.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="" className="banner-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

Banner.propTypes = {};

export default Banner;
