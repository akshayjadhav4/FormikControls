import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../FormikControl";
function CourseEnrollmentForm() {
  const dropdownOptions = [
    { key: "Choose your option", value: " " },
    { key: "React", value: "react" },
    { key: "Kotlin", value: "kotlin" },
    { key: "Flutter", value: "flutter" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JS", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Inavalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    // skills: Yup.array().required("Required"),
    skills: Yup.array().when('course',{
        is: 'react',
        then :Yup.array().required("Required")
    }),
    courseDate: Yup.date().required("Required").nullable(),
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

          <FormikControl control="textarea" label="Bio" name="bio" />

          <FormikControl
            control="select"
            label="Course"
            name="course"
            options={dropdownOptions}
          />
          <FormikControl
            control="checkbox"
            label="Skills"
            name="skills"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Course Date" name="courseDate" />

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

export default CourseEnrollmentForm;
