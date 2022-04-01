import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../../constants/images";
import './style.scss'

function Footer(props) {
  return (
    <footer className="footer">
      <Container className="container-fixed">
        <Row>
          <Col lg={3}>
            <div className="footer-left">
              <h2 className="footer-text">ĐIỀU HƯỚNG</h2>

              <ul className="footer-left__list">
                <li>
                  <Link to="#" className="active">Trang chủ</Link>
                </li>
                <li>
                  <Link to="#">Về chúng tôi</Link>
                </li>
                <li>
                  <Link to="#">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="#">Điểm tin hữu ích</Link>
                </li>
                <li>
                  <Link to="#">Liên hệ</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="footer-center">
              <div className="footer-center__logo">
                <img src={Images.LOGO} alt="" />
              </div>
              <p className="footer-center__desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet ....
              </p>

              <div className="footer-center__box-send">
                <input type="text" placeholder="Email..." />

                <button className="footer-center__button">Send</button>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-right">
              <h2 className="footer-text">THÔNG TIN LIÊN HỆ</h2>

              <div className="footer-right__address">
                <ul>
                  <li>
                    <span>Address</span>
                    <p>319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                  </li>
                  <li>
                    <span>Tell</span>
                    <p>0126 922 0162</p>
                  </li>
                  <li>
                    <span>Email</span>
                    <p>demonhunter@gmail.com</p>
                  </li>
                  <li>
                    <span>Skype</span>
                    <p>demonhunterp</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;