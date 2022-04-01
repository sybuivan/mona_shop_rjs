import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Images from "../../constants/images";
import { Link } from "react-router-dom";

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

        <div className="banner-content">
          <Row>
            {Images.HOME_THREE.map((item, index) => (
              <Col lg={6} key={index}>
                <Link to="to">
                  <div className="banner-content__image">
                    <img src={item} alt="" />
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

Banner.propTypes = {};

export default Banner;
