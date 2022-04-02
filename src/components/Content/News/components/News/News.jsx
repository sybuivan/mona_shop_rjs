import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function News(props) {
  return (
    <div className="news">
      <div className="news-box">
        <div className="news-box__image">
          <img
            src="http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/AMPS_DoggieDaycareBanner_1000x500.jpg"
            alt=""
          />
        </div>
        <div className="news-box__content">
          <h2 className="news-box__title">
            Duis luctus elit nisi, et cursus magna pellentesque non.
          </h2>
          <p className="news-box__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quis consequuntur placeat quae magni nobis autem saepe rerum
            veritatis illum.
          </p>
        </div>
      </div>
    </div>
  );
}

News.propTypes = {};

export default News;
