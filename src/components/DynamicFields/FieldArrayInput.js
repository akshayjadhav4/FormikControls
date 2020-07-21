import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray } from "formik";
function FieldArrayInput() {
  const initialValues = {
    phoneNumber: [""],
  };

  const validationSchema = Yup.object({
    
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data", values);
    onSubmitProps.setSubmitting(false); //enable button after all process
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FieldArray name="phoneNumber">
            {(fieldArrayProps) => {
              // console.log(fieldArrayProps);
              const { push, remove, form } = fieldArrayProps;
              const { values,errors } = form;
              const { phoneNumber } = values;
                console.log(errors);
              return (
                <div>
                  {phoneNumber.map((item, index) => {
                    return (
                      <div key={index}>
                        <Field
                          type="text"
                          name={`phoneNumber[${index}]`}
                          placeholder={`Phone Number ${index + 1}`}
                        />
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              remove(index);
                            }}
                          >
                            -
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            push("");
                          }}
                        >
                          +
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </FieldArray>
          <button
            type="submit"
            className="waves-effect waves-light btn"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FieldArrayInput;
