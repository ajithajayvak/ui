import React from "react";

const AddressSelectBox = ({ className, OptionValue, onChange, name, id }) => {
  const OptionData = OptionValue?.map((addressData, index) => {
    return (
      <option value={addressData.id} key={index}>
        {addressData.address}
      </option>
    );
  });
  return (
    <>
      <select className={className} name={name} id={id}>
        {OptionData}
      </select>
    </>
  );
};

export default AddressSelectBox;
