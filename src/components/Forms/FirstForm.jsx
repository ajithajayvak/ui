import React from "react";
// import "../../components/Thankyou.css";
import logo from "../../images/logo.png";
import thumb from "../../images/thumb.png";
import "./FirstForm.css";
import Footer from "../../Footer";
import banner from "../../images/banner-thank.jpg";
import FormDesignn from "./FormDesignn";

const Thankyou = () => {
  return (
    <div className="containerrs">
      <img src={banner} alt="" className="imgg" />
      <div className="image-sec">
        <span className="firstHead">MISSED the PPI Deadline?</span>
        <span className="secondHead">
          Banks face second wave of PPI payouts due to "secret commissions"...
        </span>
        <hr className="lines"></hr>
      </div>
      <img src={logo} alt="" className="logoo" />
      {/* <div className="formstart"></div> */}

      <FormDesignn />
      <Footer />
    </div>
  );
};

export default Thankyou;
