import React from "react";
import ftr_img from "../src/images/ftr_img.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="outers">
      <div className="footer">
        <div className="left-foo">
          <span>
            ClaimLion Law is a trading name of BlackLion Law LLP, a limited
            liability partnership registered in England & Wales and regulated by
            the Solicitors Regulation Authority under SRA number 518911. A list
            of the members of the LLP is displayed at our registered office at
            Berkeley Square House, Berkeley Square, London W1J 6BD
          </span>
          <br />
          <span>
            * If you cancel your claim after the 14-day cancellation period, you
            may be liable for any expenses we have incurred on your behalf up to
            the point of cancellation.
          </span>
        </div>
        <div className="right-foo">
          <img src={ftr_img} alt="" />
        </div>
      </div>
      <div className="privacyy">
        <hr />

        <ul>
          <li>Privacy Policy | </li>
          <li>Complaints Policy | </li>
          <li>Terms of Business | </li>
          <li>Cookie Policy </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
