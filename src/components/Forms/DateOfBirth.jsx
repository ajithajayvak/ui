import React from "react";
import SelectBox from "./SelectBox";
import { DobYear, DobMonth, DobDay } from "./Question";
const DateOfBirth = ({ textDob }) => {
  return (
    <>
      <legend>{textDob}</legend>
      <div className="boxes">
        <SelectBox
          className="btns"
          OptionValue={DobDay}
          name="lstSalutation"
          id="lstSalutation"
          disableFirstOption={true}
        />
        <SelectBox
          className="btns"
          OptionValue={DobMonth}
          name="lstSalutation"
          id="lstSalutation"
          disableFirstOption={true}
        />
        <SelectBox
          className="btns"
          OptionValue={DobYear}
          name="lstSalutation"
          id="lstSalutation"
          disableFirstOption={true}
        />
      </div>
    </>
  );
};

export default DateOfBirth;
