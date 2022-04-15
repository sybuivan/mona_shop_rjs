import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";

function BannerFill(props) {
  return (
    <section className="banner-fill">
      <div className="banner-fill-wrapper">
        <Row>
          <Col lg={6}>
            <div className="banner-fill__left banner-fill--general">
              <div className="banner-fill__image">
                <div className="banner-fill__image-zoom"></div>

                <div className="banner-fill__content">
                  <h2 className="banner-fill__title">Mona Shop</h2>
                  <p className="banner-fill__desc">
                    Chuyên các loại vật nuôi thú cưng phong phú về chủng loại
                  </p>

                  <div className="banner-fill__box-button">
                    <button className="banner-fill__button">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="banner-fill__right banner-fill--general">
              <div className="banner-fill__image">
                <div className="banner-fill__image-zoom"></div>

                <div className="banner-fill__content">
                  <h2 className="banner-fill__title">Mona Shop</h2>
                  <p className="banner-fill__desc">
                    Chuyên các loại vật nuôi thú cưng phong phú về chủng loại
                  </p>

                  <div className="banner-fill__box-button">
                    <button className="banner-fill__button">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

BannerFill.propTypes = {};

export default BannerFill;
