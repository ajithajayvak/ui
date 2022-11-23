import React from "react";

const TextField = ({
  name,
  id,
  type,
  placeholder,
  className,
  validation,
  validationMsg,
  value,
}) => {
  return (
    <>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        type={type}
        // onChange={onChange}
        // onBlur={onBlur}
        // onKeyPress={onkeypress}
        ref={validation}
        defaultValue={value}
        // maxLength={maxlength}
        // style={style}
      />
      {validationMsg && (
        <>
          <span className="error_msg">{validationMsg}</span>
        </>
      )}
    </>
  );
};

export default TextField;
