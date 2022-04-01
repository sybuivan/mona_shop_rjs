import React from "react";
import ListNews from "./components/ListNews/ListNews";

function NewsComponent(props) {
  return (
    <section className="section-news" style={{padding: '40px 0'}}>
      <ListNews />
    </section>
  );
}

NewsComponent.propTypes = {};

export default NewsComponent;
