import React from "react";

const RadioButtonQuestionType = ({
  name,
  className,
  value,
  id,
  labelName,
  onClick,
  labelClassName,
}) => {
  return (
    <>
      <input
        type="button"
        className={className}
        value={value}
        onClick={onClick}
        name={name}
        id={id}
      />
      {/* <label className={labelClassName}>{labelName}</label> */}
    </>
  );
};
export default RadioButtonQuestionType;
