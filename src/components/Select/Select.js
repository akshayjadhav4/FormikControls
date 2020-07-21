import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../ErrorComponent/TextError";
// className="browser-default" used because select not init for materialize css
function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="input-field">
      <Field as="select" id={name} name={name} {...rest} className="browser-default">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      {/* <label htmlFor={name}>{label}</label> */}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
