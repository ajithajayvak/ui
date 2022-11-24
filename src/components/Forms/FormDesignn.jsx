import React from "react";
import "../Forms/FormDesign.css";
import BasicQuestion from "./BasicQuestion";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import PostCode from "./PostCode";
import { useForm } from "react-hook-form";

const FormDesignn = () => {
  const {
    register,
    errors,
    trigger,
    setError,
    clearErrors,
    getValues,
    setFocus,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });
  return (
    <div className="main">
      <div className="forms">
        {/* <div className="heading">Begin your PPI "Plevin" Check Online Now</div> */}
        {/* <div className="heading">60% Completed</div> */}
        <div className="heading">90% Completed</div>
        <form>
          {/* <BasicQuestion /> */}

          {/* <PostCode /> */}
          <PersonalDetails
            validation={register}
            validationMsg={errors}
            trigger={trigger}
            clearErrors={clearErrors}
            getValues={getValues}
            setError={setError}
          />
          {/* <ContactDetails /> */}
        </form>
      </div>
    </div>
  );
};

export default FormDesignn;
