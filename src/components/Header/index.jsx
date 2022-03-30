import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../../constants/images";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import './style.scss'

function Header(props) {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Container className="container-fixed">
          <Row>
            <Col lg={2}>
              <div className="header-logo">
                <Link to="/">
                  <img src={Images.LOGO} alt="" className="header-logo__img" />
                </Link>
              </div>
            </Col>

            <Col lg={8}>
              <div className="header-nav">
                <ul className="header-nav__list">
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                      Chó cảnh
                    </Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                      Mèo cảnh
                    </Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                      Hamster
                    </Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                      Thỏ
                    </Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                     Phụ kiện
                    </Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                     Tin tức
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={2}>
              <div className="header-search">
                <ul className="header-search__list">
                  <li className="header-search__item">
                    <AiOutlineSearch />
                  </li>
                  <li className="header-search__item">
                    <AiOutlineUser />
                  </li>

                  <li className="header-search__item">
                    <Link to="/">
                      <AiOutlineShoppingCart />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
