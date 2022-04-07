import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListProduct from "./ListProduct";
import Information from "./Information";
import BannerFill from "./BannerFill";
import NewsComponent from "./News/index";
import "../../assets/css/titleHome.scss";
import Banner from "../Banner";
import productApi from "../../api/productApi";

function Content(props) {
  const [productDog, setProductDog] = useState([]);
  const [productCat, setProductCat] = useState([]);
  const [productAccessory, setProductAccessory] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const data_dog = await productApi.getProductByCategory(1);
        const data_cat = await productApi.getProductByCategory(2);
        const data_accessory = await productApi.getProductByCategory(5);
        const { products } = data_dog.data;
        // const { products } = data_cat.data;
        // const { productAccessory } = data_accessory.data;
        console.log(products);

        setProductDog(data_dog.data.products);
        setProductCat(data_cat.data.products);
        setProductAccessory(data_accessory.data.products);
      })();
    } catch (error) {}
  }, []);

  return (
    <section className="section-content">
      <Banner />

      <ListProduct title="CHÓ CẢNH" products={productDog} />

      <Information />

      <ListProduct title="MÈO CẢNH" products={productCat} />

      <BannerFill />

      <ListProduct title="PHỤ KIỆN" products={productAccessory} />

      <NewsComponent />
    </section>
  );
}

Content.propTypes = {};

export default Content;
