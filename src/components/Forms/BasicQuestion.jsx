import React from "react";
import "./BasicQuestion.css";
import CheckBox from "./CheckBox";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useNavigate } from "react-router-dom";
const BasicQuestion = () => {
  const navigate = useNavigate();
  // const handleclick = () => {
  //   navigate("/postcode");
  // };
  const [multiOptions] = useState([
    { name: "Egg(Barclaycard)", id: 32 },
    { name: "Goldfish", id: 24 },
    { name: "Sainsbury's Bank", id: 25 },
    { name: "Marbles", id: 26 },
    { name: "Monument", id: 27 },
    { name: "Santander Consumer Finance", id: 28 },
    { name: "Northern Rock (NRAM)", id: 29 },
    { name: "Aqua", id: 30 },
    { name: "Argos", id: 31 },
  ]);
  return (
    <div className="insideform">
      <div className="insideHead">
        <span className="insidetext">
          Select which Banks or Lenders you may have had PPI on (Loan, Credit
          Cards, Store Cards)
        </span>
        <fieldset className="d2">
          <legend>Capital One Loan Products</legend>

          <ul>
            <li className="fullwidth">
              <CheckBox
                value="1"
                // defaultChecked={checkedBanks.indexOf(1) !== -1}
                CheckBoxText="Capital One"
                // name="chkBankName[]"
                dataId="chkBankName0"
                className="checkk"
                onclick={() => {
                  console.log("orange");
                }}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset className="d2">
          <legend>I also had a loan from one of these lenders:</legend>

          <ul className="halfarea">
            <li className="halfwidth">
              <CheckBox
                value="2"
                CheckBoxText="Santander (Credit Card Loans)"
                name="chkBankName[]"
                dataId="chkBankName2"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="3"
                CheckBoxText="Barclaycard"
                name="chkBankName[]"
                dataId="chkBankName3"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="4"
                CheckBoxText="Lloyds"
                name="chkBankName[]"
                dataId="chkBankName4"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="5"
                CheckBoxText="MBNA"
                name="chkBankName[]"
                dataId="chkBankName5"
                className="custom-checkbox"
                //  labelClassName={` ${checkedQuestionTwo}`}
                //  validation={validation()}
                //  onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="6"
                CheckBoxText="Halifax Bank of Scotland"
                name="chkBankName[]"
                dataId="chkBankName6"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="7"
                CheckBoxText="First Direct"
                name="chkBankName[]"
                dataId="chkBankName7"
                className="custom-checkbox"
                //  labelClassName={` ${checkedQuestionTwo}`}
                //  validation={validation()}
                //  onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="8"
                CheckBoxText="Barclays"
                name="chkBankName[]"
                dataId="chkBankName8"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="9"
                CheckBoxText="Marks & Spencer Bank"
                name="chkBankName[]"
                dataId="chkBankName9"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="10"
                CheckBoxText="HSBC Bank"
                name="chkBankName[]"
                dataId="chkBankName10"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="11"
                CheckBoxText="Black Horse"
                name="chkBankName[]"
                dataId="chkBankName11"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="12"
                CheckBoxText="Liverpool Victoria"
                name="chkBankName[]"
                dataId="chkBankName12"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="13"
                CheckBoxText="Firstplus Financial Group"
                name="chkBankName[]"
                dataId="chkBankName13"
                className="custom-checkbox"
                //  labelClassName={` ${checkedQuestionTwo}`}
                //  validation={validation()}
                //  onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="14"
                CheckBoxText="Santander (Store Cards)"
                name="chkBankName[]"
                dataId="chkBankName14"
                className="custom-checkbox"
                //  labelClassName={` ${checkedQuestionTwo}`}
                //  validation={validation()}
                //  onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="15"
                CheckBoxText="Citifinancial Europe Limited"
                name="chkBankName[]"
                dataId="chkBankName15"
                className="custom-checkbox"
                //  labelClassName={` ${checkedQuestionTwo}`}
                //  validation={validation()}
                //  onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="16"
                CheckBoxText="NewDay Ltd"
                name="chkBankName[]"
                dataId="chkBankName16"
                className="custom-checkbox"
                //  labelClassName={` ${checkedQuestionTwo}`}
                //  validation={validation()}
                //  onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="17"
                CheckBoxText="John Lewis"
                name="chkBankName[]"
                dataId="chkBankName17"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="18"
                CheckBoxText="American Express"
                name="chkBankName[]"
                dataId="chkBankName18"
                className="custom-checkbox"
                //  labelClassName={` ${checkedQuestionTwo}`}
                //  validation={validation()}
                //  onClick={setCheckedBanks}
              />
            </li>
            <li className="halfwidth">
              <CheckBox
                value="19"
                CheckBoxText="The Co-Operative Bank"
                name="chkBankName[]"
                dataId="chkBankName19"
                className="custom-checkbox"
                // labelClassName={` ${checkedQuestionTwo}`}
                // validation={validation()}
                // onClick={setCheckedBanks}
              />
            </li>
            <ul>
              <li className="fullwidth">
                <CheckBox
                  value="20"
                  CheckBoxText="J D Williams & Company Limited"
                  name="chkBankName[]"
                  dataId="chkBankName20"
                  className="custom-checkbox"
                  // labelClassName={` ${checkedQuestionTwo}`}
                  // validation={validation()}
                  // onClick={setCheckedBanks}
                />
              </li>
              <li className="fullwidth">
                <CheckBox
                  value="21"
                  CheckBoxText="Shop Direct Finance Company Limited"
                  name="chkBankName[]"
                  dataId="chkBankName21"
                  className="custom-checkbox"
                  // labelClassName={` ${checkedQuestionTwo}`}
                  // validation={validation()}
                  // onClick={setCheckedBanks}
                />
              </li>
            </ul>
          </ul>
        </fieldset>
        <label>Others</label>
        <Multiselect
          options={multiOptions}
          selectedValues={""}
          displayValue="name"
          onSelect={(e) => {
            // otherBankOptionChanged(e);
            console.log("onselect");
          }}
          onRemove={(e) => {
            // otherBankOptionChanged(e);
            console.log("onremove");
          }}
        />

        <div className="btnsArea">
          <input
            type="button"
            value="NEXT"
            // onClick={handleclick}
          />
          <h6>PERSONAL INFORMATION GUARANTEE</h6>
          <p>We do not cold call, spam or pass on your data for marketing</p>
        </div>
      </div>
    </div>
  );
};

export default BasicQuestion;
