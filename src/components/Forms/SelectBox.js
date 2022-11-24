import React, { useEffect, useState } from "react";
// import "./PersonalDetails.css";
const SelectBox = ({
  className,
  OptionValue,
  disableFirstOption,
  myRef,
  name,
  validationMsg,
  id,
  changeChecker,
}) => {
  console.log(OptionValue + "option value");
  console.log(validationMsg, "validation message in select box");
  const [isClicked, setIsClicked] = useState(false);
  const [validationMsgState, setValidationMsgState] = useState(validationMsg);
  const OptionData = OptionValue?.map((dobData, index) => {
    let isDisabled = disableFirstOption === true && index === 0 && isClicked;
    return (
      <option value={dobData.value} key={index} disabled={isDisabled}>
        {dobData.label}
      </option>
    );
  });

  useEffect(() => {
    // console.log(validationMsg, "change checker ran");
    setValidationMsgState(validationMsg);
  }, [validationMsg]);

  return (
    <>
      <select
        className={className}
        name={name}
        ref={myRef}
        id={id}
        onClick={() => {
          setIsClicked(true);
        }}
      >
        {OptionData}
      </select>

      {validationMsgState && (
        <>
          <span className="error_msg">{validationMsgState} </span>
        </>
      )}
    </>
  );
};

export default SelectBox;
