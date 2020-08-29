import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAddressCard,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
export default function Stat({ sum, email, total, full, free, discount }) {
  return (
    <div className="box">
      <ul>
        <li>{sum}</li>
        <li>{email}</li>
        <li>{total}</li>
        <li>{full}</li>
        <li>{free}</li>
        <li>{discount}</li>
      </ul>
    </div>
  );
}
