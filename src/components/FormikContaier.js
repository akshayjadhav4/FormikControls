import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
function FormikContaier() {
  const dropdownOptions = [
    {key : 'Choose your option',value:' '},
    {key : 'Option 1',value : '1'},
    {key : 'Option 2',value : '2'},
    {key : 'Option 3',value : '3'},
    {key : 'Option 4',value : '4'},
    {key : 'Option 5',value : '5'},
  ]
  const initialValues = {
    email : "",
    description : "",
    selectOption : ''
  };

  const validationSchema = Yup.object({
    email : Yup.string().email('Inavalid email format').required('Required'),
    description : Yup.string().required('Required'),
    selectOption : Yup.string().required('Required')
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
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl  control='select'  label='Select Option' name='selectOption' options={dropdownOptions}/>
          <button type="submit" className="waves-effect waves-light btn">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContaier;
