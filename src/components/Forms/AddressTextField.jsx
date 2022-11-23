import React from "react";

const AddressTextField = ({ name, type, placeholder, className, id }) => {
  return (
    <>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        type={type}
      />
    </>
  );
};

export default AddressTextField;
