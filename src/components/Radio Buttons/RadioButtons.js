import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../ErrorComponent/TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          // console.log(field);
          return options.map((option) => {
            return (
              <p key={option.key}>
                <label htmlFor={option.value}>
                  <input
                    id={option.value}
                    type="radio"
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <span>{option.key}</span>
                </label>
              </p>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButtons;
