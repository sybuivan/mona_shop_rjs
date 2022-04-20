import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiOutlineBars,
  AiOutlineDelete,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Images from "../../constants/images";
import { logout } from "../../features/Auth/userSlice";
import { hiddenMiniCart } from "../../features/Cart/cartSlice";
import NotistackCart from "../../features/Cart/components/NotistackCart";
import {
  countCartItems,
  totalPriceCartItems,
} from "../../features/Cart/selector";
import formatPrice from "../../utils/common";
import "./style.scss";
import { useParams } from "react-router-dom";

function Header({ showHeader }) {
  const loggedInUser = useSelector((state) => state.user.current);
  const showCart = useSelector((state) => state.cart.showMiniCart);
  const listCart = useSelector((state) => state.cart.cartItems);
  const countCart = useSelector(countCartItems);
  const totalPrice = useSelector(totalPriceCartItems);

  const isLogged = !!loggedInUser.idUser;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const classHeader = classNames("header", { "header-fixed": showHeader });
  const [anchorEl, setAnchorEl] = useState(null);

  // setActive class navbar item
  const [active, setActive] = useState(0);
  const handleClickNav = (id) => {
    setActive(id);
  };

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

  useEffect(() => {
    if (window.screen.width <= 768 && showHeader) {
      document.querySelector(".header").classList.remove("header-fixed");
      console.log("remove class");
    }
  }, [showHeader]);

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
            <Col lg={2} md={5}>
              <div className="header-logo">
                <Link to="/">
                  <img src={Images.LOGO} alt="" className="header-logo__img" />
                </Link>
              </div>
            </Col>

            <Col md={2} className="header-nav__bar-tablet">
              <div className="header-nav__bar-icon">
                <IconButton>
                  <AiOutlineBars />
                </IconButton>
              </div>
            </Col>

            <Col lg={8} className="header-nav-tablet">
              <div className="header-nav">
                <ul className="header-nav__list">
                  <li className="header-nav__item">
                    <Link to="/" className="header-nav__link">
                      Giới thiệu
                    </Link>
                  </li>

                  {categories.map((category) => (
                    <li
                      className="header-nav__item"
                      key={category.idCategory}
                      onClick={() => handleClickNav(category.id)}
                    >
                      <Link
                        to={`category/${category.idCategory}`}
                        className={
                          category.idCategory === active
                            ? "header-nav__link header-nav__link--active"
                            : "header-nav__link"
                        }
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

            <Col lg={2} md={5}>
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
                    <div
                      className="header-search__cart-wrapper"
                      onClick={() => navigate("/cart")}
                    >
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
                                          src={cart.product.thumbnailUrl}
                                          alt={cart.product.name}
                                        />
                                      </div>

                                      <div className="header-search__cart-info-box">
                                        <span>{cart.product.name}</span>

                                        <p>
                                          {cart.quantity} x{" "}
                                          {formatPrice(cart.product.price)}
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
                                  <span
                                    style={{ fontSize: "1.2em", color: "red" }}
                                  >
                                    {formatPrice(totalPrice)}
                                  </span>
                                </p>
                              </ul>

                              <div className="header-search__button-box">
                                <button
                                  className="header-search__button-cart header-search__button-cart--view"
                                  onClick={() => navigate("/cart")}
                                >
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
