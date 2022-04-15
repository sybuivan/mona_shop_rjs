import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function ProductSidebar(props) {
  return (
    <div className="product-sidebar">
      <div className="product-sidebar__box">
        <span className="product-sidebar__title">Sản phẩm</span>

        <ul className="product-sidebar__list">
          <li className="product-sidebar__item">
            <Link to="/helo">
              <img
                src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/9-2.jpg"
                alt=""
              />
              <span className="product-sidebar__info">
                <p className="product-sidebar__info-name">Thỏ CHINCHILLA</p>
                <p className="product-sidebar__info-price">578,000 ₫</p>
              </span>
            </Link>
          </li>
          <li className="product-sidebar__item">
            <Link to="/helo">
              <img
                src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/9-2.jpg"
                alt=""
              />
              <span className="product-sidebar__info">
                <p className="product-sidebar__info-name">Thỏ CHINCHILLA</p>
                <p className="product-sidebar__info-price">578,000 ₫</p>
              </span>
            </Link>
          </li>
          <li className="product-sidebar__item">
            <Link to="/helo">
              <img
                src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/9-2.jpg"
                alt=""
              />
              <span className="product-sidebar__info">
                <p className="product-sidebar__info-name">Thỏ CHINCHILLA</p>
                <p className="product-sidebar__info-price">578,000 ₫</p>
              </span>
            </Link>
          </li>
          <li className="product-sidebar__item">
            <Link to="/helo">
              <img
                src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/9-2.jpg"
                alt=""
              />
              <span className="product-sidebar__info">
                <p className="product-sidebar__info-name">Thỏ CHINCHILLA</p>
                <p className="product-sidebar__info-price">578,000 ₫</p>
              </span>
            </Link>
          </li>
          <li className="product-sidebar__item">
            <Link to="/helo">
              <img
                src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/9-2.jpg"
                alt=""
              />
              <span className="product-sidebar__info">
                <p className="product-sidebar__info-name">Thỏ CHINCHILLA</p>
                <p className="product-sidebar__info-price">578,000 ₫</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductSidebar;
