import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
function FormikContaier() {
  const initialValues = {
    email : ""
  };

  const validationSchema = Yup.object({
    email : Yup.string().email('Inavalid email format').required('Required')
  });

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
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <button type="submit" className="waves-effect waves-light btn">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContaier;
