import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../../constants/images";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineDelete,
} from "react-icons/ai";
import "./style.scss";
import classNames from "classnames";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/userSlice";
import categoryApi from "../../api/categoryApi";
import { hiddenMiniCart } from "../../features/Cart/cartSlice";
import NotistackCart from "../../features/Cart/components/NotistackCart";
import formatPrice from "../../utils/common";
import {
  countCartItems,
  totalPriceCartItems,
} from "../../features/Cart/selector";

function Header({ showHeader }) {
  const loggedInUser = useSelector((state) => state.user.current);
  const showCart = useSelector((state) => state.cart.showMiniCart);
  const listCart = useSelector((state) => state.cart.cartItems);
  const countCart = useSelector(countCartItems);
  const totalPrice = useSelector(totalPriceCartItems);
  console.log("totalPriceCartItems", totalPrice);

  const isLogged = !!loggedInUser.idUser;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const classHeader = classNames("header", { "header-fiexd": showHeader });
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);

  // check status showMiniCart
  if (showCart) {
    setTimeout(() => {
      dispatch(hiddenMiniCart());
    }, 2000);
  }

  // call API data category home page
  useEffect(() => {
    try {
      (async () => {
        const data = await categoryApi.getAll({});

        const { category } = data.data;

        setCategories(category);

        console.log("data category", category);
      })();
    } catch (error) {
      console.log("fail to get product: ", error);
    }
  }, []);

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
    // navigate("/login");
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    // navigate("/");
    console.log("da click");
  };
  return (
    <header className={classHeader}>
      <div className="header-wrapper">
        <Container className="container-fixed header-wrapper__style">
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

                  {categories.map((category) => (
                    <li className="header-nav__item" key={category.idCategory}>
                      <Link
                        to={`/${category.path}`}
                        className="header-nav__link"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}

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
                  {!isLogged ? (
                    <li className="header-search__item">
                      <Link to="/login">
                        <AiOutlineUser />
                      </Link>
                    </li>
                  ) : (
                    <li className="header-search__item">
                      <IconButton onClick={handleClickMenu}>
                        <AiOutlineUser />
                      </IconButton>
                    </li>
                  )}

                  <li className="header-search__item">
                    <div className="header-search__cart-wrapper">
                      <AiOutlineShoppingCart />

                      <span className="header-search__cart-icon">
                        {countCart}
                      </span>

                      <div className="header-search__cart-down">
                        <div className="header-search__cart-down-wrapper">
                          {listCart.length > 0 ? (
                            <div>
                              <ul className="header-search__cart-list">
                                {listCart.map((cart, index) => (
                                  <li className="header-search__cart-item">
                                    <div className="header-search__cart-info">
                                      <div className="header-search__cart-info-image">
                                        <img
                                          src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/1-300x300.jpg"
                                          alt=""
                                        />
                                      </div>

                                      <div className="header-search__cart-info-box">
                                        <span>{cart.product[0].name}</span>

                                        <p>
                                          {cart.quantity} x{" "}
                                          {formatPrice(cart.product[0].price)}
                                        </p>
                                      </div>

                                      <div className="header-search__cart-detele">
                                        <AiOutlineDelete />
                                      </div>
                                    </div>
                                  </li>
                                ))}

                                <p className="header-search__cart-total">
                                  <span>Tổng cộng: </span>
                                  <span style={{ fontSize: "1.2em",color: 'red' }}>
                                    {formatPrice(totalPrice)}
                                  </span>
                                </p>
                              </ul>

                              <div className="header-search__button-box">
                                <button className="header-search__button-cart header-search__button-cart--view">
                                  Xem giỏ hàng
                                </button>
                                <button className="header-search__button-cart header-search__button-cart--checkout">
                                  Thanh toán
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <img
                                src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
                                alt=""
                                className="header-search__cart-image--empty"
                              />

                              <p className="header-search__cart-empty">
                                Chưa có sản phẩm nào trong giỏ hàng
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      {showCart ? <NotistackCart /> : ""}
    </header>
  );
}

Header.propTypes = {};

export default Header;
