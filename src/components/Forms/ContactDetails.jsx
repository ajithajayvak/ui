import React from "react";

import Email from "./Email";
import Telephone from "./Telephone";
import "./PersonalDetails.css";
import "./ContactDetails.css";
import privacy from "../../images/privacy.png";
import RadioButtonQuestionType from "./RadioTypeButton";
import { useState } from "react";
const ContactDetails = () => {
  const [weCannotAcceptYourClaimVisibility, setWeCannotAcceptVisibility] =
    useState("none");

  const [yesFirst, setYesFirstBgcolor] = useState();
  const [noFirst, setNoFirstBgcolor] = useState();
  const [yesSecond, setYesSecondBgcolor] = useState();
  const [noSecond, setNoSecondBgcolor] = useState();
  const Yescliked = () => {
    setWeCannotAcceptVisibility("block");
    setYesFirstBgcolor("blues");
    setNoFirstBgcolor("nocolor");
  };
  const Nocliked = () => {
    setYesFirstBgcolor("nocolor");
    setNoFirstBgcolor("blues");
  };
  const YesSecondcliked = () => {
    setYesSecondBgcolor("blues");
    setNoSecondBgcolor("nocolor");
  };
  const NoSecondcliked = () => {
    setYesSecondBgcolor("nocolor");
    setNoSecondBgcolor("blues");
  };
  return (
    <>
      <div className="insideform">
        <div className="insideHead">
          <div className="birth">
            <fieldset className="d2">
              <legend>
                What's the best way to contact you about your case?
              </legend>
              <div className="spnas">
                <Email
                  name="txtEmail"
                  className="btns"
                  id="txtEmail"
                  placeholder="Email Address"
                />
                <span className="img2">
                  <img src={privacy} alt="" />
                </span>
              </div>
              <div className="spnas">
                <Telephone
                  name="txtPhone"
                  className="btns"
                  placeholder="Phone Number"
                />
                <span className="img2">
                  <img src={privacy} alt="" />
                </span>
              </div>
              <div className="alerts">
                <p>
                  <i>
                    {" "}
                    <strong>Mobile Phone</strong> is recommended. An automated
                    SMS is sent when we receive news from your lender, and we’ll
                    need to speak to you in order to finalise details
                  </i>
                </p>
              </div>
            </fieldset>
          </div>

          <div className="birth">
            <fieldset className="d2">
              <legend>Are you in an IVA or currently Bankrupt</legend>
              <div className="spnass">
                <RadioButtonQuestionType
                  name="iva_or_bankrupt"
                  className="radio"
                  id={yesFirst}
                  labelName="Yes hhghgfdh"
                  labelClassName="labelss3"
                  value="Yes"
                  onClick={Yescliked}

                  // onClick={() => {
                  //   setWeCannotAcceptVisibility("block");
                  // }}
                />
                <RadioButtonQuestionType
                  name="iva_or_bankrupt"
                  className="radio"
                  id={noFirst}
                  labelName="No"
                  labelClassName="labelss3"
                  value="No"
                  onClick={Nocliked}
                />
              </div>
            </fieldset>
          </div>
          <div className="birth">
            <fieldset className="d2">
              <legend>
                Has the policy been jointly held for any of the lenders you have
                selected?
              </legend>
              <div className="spnass">
                <RadioButtonQuestionType
                  name="iva_or_bankrupt"
                  className="radio"
                  labelName="Yes"
                  id={yesSecond}
                  labelClassName="labelss3"
                  value="Yes"
                  onClick={YesSecondcliked}
                />
                <RadioButtonQuestionType
                  name="iva_or_bankrupt"
                  className="radio"
                  labelName="No"
                  id={noSecond}
                  labelClassName="labelss3"
                  value="No"
                  onClick={NoSecondcliked}
                />
              </div>
            </fieldset>
          </div>
          <div className="onlybtn">
            <input type="button" className="btnsArea1" value="< Back" />
            <input type="button" className="btnsArea2" value="SUBMIT" />
          </div>
        </div>
      </div>
      <div
        className="show_box"
        id="shw-bx2"
        style={{ display: weCannotAcceptYourClaimVisibility }}
      >
        <div className=" text-center show_txt">
          <p className="sorry">Sorry, we cannot accept your claim</p>
          <div style={{ width: "100%", textAlign: "center" }}>
            <input
              className="btn bckbt"
              id="shwlast-bak"
              value=" < Back"
              type="button"
              onClick={() => {
                setWeCannotAcceptVisibility("none");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
