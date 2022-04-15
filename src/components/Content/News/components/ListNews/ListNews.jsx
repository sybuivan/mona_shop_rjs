import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import News from "../News/News";

function ListNews(props) {
  return (
    <Container className="container-fixed">
      <div className="list-product-title-content">
        <h2 className="list-product-tilte-text">Thông tin hưu ích</h2>
      </div>
      <Row>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Navigation]}
          className="mySwiper"
        >
          <Col lg={4}>
            <SwiperSlide>
              <News />
            </SwiperSlide>
          </Col>
          <Col lg={4}>
            <SwiperSlide>
              <News />
            </SwiperSlide>
          </Col>
          <Col lg={4}>
            <SwiperSlide>
              <News />
            </SwiperSlide>
          </Col>
        </Swiper>
      </Row>
    </Container>
  );
}

ListNews.propTypes = {};

export default ListNews;
