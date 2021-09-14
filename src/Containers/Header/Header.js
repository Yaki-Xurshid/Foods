import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="d-flex justify headerbetwen">
        <div className="d-flex">
          <img src="food.png" alt="logo" className="logo" />
          <ul className="">
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
        <button className="book">Booking Now</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
