import React, { useState } from "react";

const CheckBox = ({
  value,
  defaultChecked,
  CheckBoxText,
  name,
  dataId,
  className,
  onclick,
}) => {
  // const [orangbg, setbg] = useState;

  // const checkCliked = () => {
  //   console.log("clik");
  // };

  return (
    <>
      <input
        type="checkbox"
        className={className}
        value={value}
        id={dataId}
        name={name}
        // checked={checked}
        onClick={onclick}
        // style={{ display: "none" }}
      />

      <label className="labelss">{CheckBoxText}</label>
    </>
  );
};

export default CheckBox;
