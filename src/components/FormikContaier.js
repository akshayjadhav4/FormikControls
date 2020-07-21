import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
function FormikContaier() {
  const initialValues = {};

  const validationSchema = Yup.object({});

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <button type="submit" className="waves-effect waves-light btn">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContaier;
