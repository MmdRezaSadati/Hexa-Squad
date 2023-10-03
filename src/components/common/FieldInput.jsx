import React, { Fragment } from "react";
import { ErrorMessage, Field } from "formik";
const FieldInput = ({ placeholder, name, icon, classIcon ,type }) => {
  return (
    <Fragment>
      <div className="relative my-4 w-full h-12">
        <Field placeholder={placeholder} type={type} name={name} className="field-input" />
        <i
          className={"bi bi-" + icon + " absolute top-3 right-1 " + classIcon}
        ></i>
      </div>
      <ErrorMessage name={name}/>
    </Fragment>
  );
};

export default FieldInput;
