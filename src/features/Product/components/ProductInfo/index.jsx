import { Box } from "@mui/system";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import formatPrice from "../../../../utils/common";
import { addToCart, showMiniCart } from "../../../Cart/cartSlice";
import AddToCardForm from "../AddToCardForm";
import ProductTabs from "../ProductTabs";
import "./style.scss";

function ProductInfo({ product, images }) {
  const [active, setActive] = useState(images[0]?.idImage);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  console.log(product[0]);
  const handleClick = (idImage, index) => {
    setActive(idImage);
    setIndex(index);
  };

  const handleSubmit = ({ quantity }) => {
    console.log("quantity ", quantity);
    const action = addToCart({
      id: product[0].idProduct,
      product: product[0],
      quantity,
      status: false,
    });
    console.log("action ", action);

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
                  <Link to="/">Trang ch???</Link>
                  <span>/</span>
                  <Link to="/">Ch?? c???nh</Link>
                </nav>
                <h1 className="product-main__title">{product[0]?.name}</h1>
                <span className="is-divider small"></span>
                <span className="product-main__price">
                  {formatPrice(product[0]?.price)}
                </span>

                <p className="product-main__desc-short">
                  Ph?? Qu???c l?? m???t trong s??? r???t hi???m hoi nh???ng gi???ng ch?? thu???n
                  Vi???t n???i ti???ng th??? gi???i. Ch?? Ph?? Qu???c c??ng ???????c coi l?? m???t
                  trong t??? ?????i qu???c khuy???n c???a Vi???t Nam, v???n r???t ???????c gi???i y??u
                  ch?? y??u th??ch, bao g???m: Ph?? Qu???c, Dingo ????ng D????ng, H???M??ng C???c
                  v?? B???c H??. C?? nh???ng ch?? ch?? Ph?? Qu???c ???? ???????c ????a sang ch??u ??u
                  v?? b??n v???i gi?? v??i ch???c t???i v??i tr??m tri???u. ??? Vi???t Nam, gi??
                  ch?? Ph?? Qu???c c??ng r???t ??a d???ng t??y theo m??u s???c v?? c??c ?????c ??i???m
                  c?? th???.
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

export default ProductInfo;
