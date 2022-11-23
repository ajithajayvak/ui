import React from "react";

const InputButton = ({ value, className, btnType, name, id }) => {
  return (
    <input
      className={className}
      name={name}
      id={id}
      type={btnType}
      value={value}
    />
  );
};

export default InputButton;
