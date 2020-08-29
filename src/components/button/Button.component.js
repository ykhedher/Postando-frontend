import React from "react";
import "./Button.css";

function Button({ label, onSelect }) {
  return (
    <button onClick={onSelect} className="item__button item">
      {label}
    </button>
  );
}

export default Button;
