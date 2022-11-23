import React from "react";
const Email = ({ placeholder, name, className, textDob }) => {
  return (
    <>
      <input
        type="email"
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </>
  );
};
export default Email;
