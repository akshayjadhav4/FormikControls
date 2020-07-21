import React from "react";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import Select from "./Select/Select";
import RadioButtons from "./Radio Buttons/RadioButtons";
import CheckboxGroup from "./Checkbox Group/CheckboxGroup";

//decides which form field to render dependingon passed prop.
function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":

    default:
      return null;
  }
}

export default FormikControl;
