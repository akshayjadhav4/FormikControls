import React from "react";
import Input from "./Input/Input";

//decides which form field to render dependingon passed prop.
function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":

    default:
      return null;
  }
}

export default FormikControl;
