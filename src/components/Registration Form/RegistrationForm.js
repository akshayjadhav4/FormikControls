import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../FormikControl";

function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telehone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Inavalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Min 6 character required")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .min(6, "Min 6 character required")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
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
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />

          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />

          <FormikControl
            control="radio"
            label="Mode Of Contact"
            name="modeOfContact"
            options={options}
          />

          <FormikControl
            control="input"
            type="text"
            label="Telephone"
            name="phone"
          />
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

export default RegistrationForm;
