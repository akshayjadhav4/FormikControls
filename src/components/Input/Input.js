import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../ErrorComponent/TextError";
// The compount render input field according to pass type , name , label
function Input(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="input-field">
      <Field id={name} name={name} {...rest} />
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
