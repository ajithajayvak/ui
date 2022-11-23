import React from "react";
import "./Thankyou.css";
import logo from "../images/logo.png";
import thumb from "../images/thumb.png";
import Footer from "../Footer";
// import banner from "../images/banner-thank.jpg";
const Thankyou = () => {
  return (
    <div className="containerrr">
      {/* <img src={banner} alt="" /> */}
      <div className="image-sec">
        <img src={logo} alt="" />

        <hr></hr>
        <img src={thumb} alt="" />
        <h2>Thank You</h2>
        <span>You have successfully submitted your claim</span>
      </div>

      <Footer />
    </div>
  );
};

export default Thankyou;
