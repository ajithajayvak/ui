import React from "react";
const Telephone = ({ placeholder, name, className, textDob }) => {
  return (
    <>
      <input
        type="tel"
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </>
  );
};
export default Telephone;
