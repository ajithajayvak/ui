import React, { useState } from "react";
import "./PersonalDetails.css";
import "./SelectBox";
import { Salutation } from "./Question";
import SelectBox from "./SelectBox";
import TextField from "./TextField";
import DateOfBirth from "./DateOfBirth";
const PersonalDetails = ({
  validation,
  trigger,
  validationMsg,
  clearErrors,
  getValues,
  setError,
}) => {
  //   // const question_3 = getValues();
  const [changeChecker, setChangeChecker] = useState(false);
  const basicDetailsValidation = async (e) => {
    console.log("clikkked");
    var lstSalutationResult = await trigger("lstSalutation");

    console.log(lstSalutationResult, "here1st");
    const values = getValues();
    console.log(validationMsg.lstSalutation, "last check");

    var txtFNameResult;
    var txtLNameResult;
    var lstDobDayResult;
    var lstDobMonthResult;
    var lstDobYearResult;
    if (lstSalutationResult) {
      txtFNameResult = await trigger("txtFName");
    } else {
      document.getElementById("lstSalutation").focus();

      return false;
    }
  };

  return (
    <div className="insideform">
      <div className="insideHead">
        <span className="insidetext">PERSONAL INFORMATION GUARANTEE</span>
        <div className="textfilds">
          <SelectBox
            className="btns"
            OptionValue={Salutation}
            name="lstSalutation"
            id="lstSalutation"
            disableFirstOption={true}
            onChange={() => clearErrors("lstSalutation")}
            clearErrors={clearErrors}
            myRef={validation({ required: "Please Select Title" })}
            changeChecker={changeChecker}
            // validationMsg={
            //   validationMsg?.lstSalutation
            //     ? validationMsg?.lstSalutation?.message
            //     : false
            validationMsg={
              validationMsg.lstSalutation && validationMsg.lstSalutation.message
            }
          />
          <TextField
            type="text"
            className="btns"
            placeholder="First Name"
            name="txtFName"
            id="txtFName"
            // validation={validation({
            //   required: "Please Enter First Name",
            // })}
          />
          <TextField
            type="text"
            className="btns"
            placeholder="Middle Name"
            name="txtMName"
            id="txtMName"
          />
          <TextField
            type="text"
            className="btns"
            placeholder="Surname"
            name="txtLName"
            id="txtLName"
          />
        </div>
        <div className="birth">
          <fieldset className="d2">
            <DateOfBirth textDob="Your Date Of Birth" />
          </fieldset>
        </div>

        <div className="onlybtn">
          <input type="button" className="btnsArea1" value="< Back" />
          <input
            name="PersonalDetails"
            type="button"
            className="btnsArea2"
            value="NEXT"
            onClick={basicDetailsValidation}
          />
        </div>
        <div className="btnsArea">
          <h6>PERSONAL INFORMATION GUARANTEE</h6>
          <p>We do not cold call, spam or pass on your data for marketing</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
