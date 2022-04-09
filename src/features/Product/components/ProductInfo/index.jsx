import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
import AddToCardForm from "../AddToCardForm";
import { Box } from "@mui/system";
import ProductTabs from "../ProductTabs";

function ProductInfo(props) {
  return (
    <Box className="product-detail-wrapper">
      <div className="product-main">
        <div className="product-main__wrapper">
          <Row>
            <Col lg={6}>
              <div className="product-main__images">
                <div className="product-main__images-key">
                  <img
                    src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/01.jpg"
                    alt=""
                  />
                </div>
                <ul className="product-main__list-images">
                  <li>
                    <img
                      src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/01.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/01.jpg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6}>
              <div className="product-main__info">
                <nav className="product-main__breadcrumb">
                  <Link to="/">Trang chủ</Link>
                  <span>/</span>
                  <Link to="/">Chó cảnh</Link>
                </nav>
                <h1 className="product-main__title">
                  Chó Phú Quốc thuần chủng
                </h1>
                <span className="is-divider small"></span>
                <span className="product-main__price">5,896,000 ₫</span>

                <p className="product-main__desc-short">
                  Phú Quốc là một trong số rất hiếm hoi những giống chó thuần
                  Việt nổi tiếng thế giới. Chó Phú Quốc cũng được coi là một
                  trong tứ đại quốc khuyển của Việt Nam, vốn rất được giới yêu
                  chó yêu thích, bao gồm: Phú Quốc, Dingo Đông Dương, H’Mông Cộc
                  và Bắc Hà. Có những chú chó Phú Quốc đã được đưa sang châu Âu
                  và bán với giá vài chục tới vài trăm triệu. Ở Việt Nam, giá
                  chó Phú Quốc cũng rất đa dạng tùy theo màu sắc và các đặc điểm
                  cơ thể.
                </p>

                <AddToCardForm />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="product-footer">
        <ProductTabs />
      </div>
    </Box>
  );
}

ProductInfo.propTypes = {};

export default ProductInfo;
