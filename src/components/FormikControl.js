import React from "react";

//decides which form field to render dependingon passed prop.
function FormikControl({ control }) {
  switch (control) {
    case "input":
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
