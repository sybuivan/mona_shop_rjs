import React from "react";

function Button({ text, option }) {
  const styles = {
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "600",
    ...option
  };
  return (
    <button className="button-info-change" style={styles}>
      {text}
    </button>
  );
}

Button.propTypes = {};

export default Button;
