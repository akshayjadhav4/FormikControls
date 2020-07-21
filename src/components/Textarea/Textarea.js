import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../ErrorComponent/TextError";
// as = "textarea" need to pass to render textarea
function Textarea(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="input-field">
      <Field as="textarea" id={name} name={name} {...rest} className="materialize-textarea" />
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Textarea;
