import React from "react";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";

//decides which form field to render dependingon passed prop.
function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
    case "radio":
    case "checkbox":
    case "date":

    default:
      return null;
  }
}

export default FormikControl;
