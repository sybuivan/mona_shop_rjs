import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
import AddToCardForm from "../AddToCardForm";
import { Box } from "@mui/system";
import ProductTabs from "../ProductTabs";
import formatPrice from "../../../../utils/common";
import { useDispatch } from "react-redux";
import { addToCart, showMiniCart } from "../../../Cart/cartSlice";

function ProductInfo({ product, images }) {
  const [active, setActive] = useState(images[0]?.idImage);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (idImage, index) => {
    setActive(idImage);
    setIndex(index);
  };

  const handleSubmit = ({quantity}) => {
    console.log('quantity ', quantity);
    const action = addToCart({
      id: product[0].idProduct,
      product,
      quantity,
    });
    console.log('action ', action)

    dispatch(action);
    dispatch(showMiniCart());
  };

  return (
    <Box className="product-detail-wrapper">
      <div className="product-main">
        <div className="product-main__wrapper">
          <Row>
            <Col lg={6}>
              <div className="product-main__images">
                <div className="product-main__images-key">
                  <img src={images[index]?.thumbnailUrl} alt="" />
                </div>
                <ul className="product-main__list-images">
                  {images.map((image, index) => (
                    <li
                      key={image.idImage}
                      className={image.idImage === active ? "active" : ""}
                      onClick={() => handleClick(image.idImage, index)}
                    >
                      <img src={image.thumbnailUrl} alt="" />
                    </li>
                  ))}
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
                <h1 className="product-main__title">{product[0]?.name}</h1>
                <span className="is-divider small"></span>
                <span className="product-main__price">
                  {formatPrice(product[0]?.price)}
                </span>

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

                <AddToCardForm onSubmit={handleSubmit} />
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
