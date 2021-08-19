import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useField, useFormikContext } from "formik";

function NewDatePicker({ name, ...otherProps }) {
  const { field } = useField(name);
  const [selectedDate, handleDateChange] = useState();
  const { setFieldValue } = useFormikContext();
  const configNewDatePicker = {
    ...field,
    ...otherProps,
    placeholder: "",
    value: selectedDate,
    onChange: handleChange,
    format: "dd/MM/yyyy",
    clearable: true,
    disableFuture: true,
    fullWidth: true,
    inputVariant: "outlined"
  };

  function handleChange(date) {
    handleDateChange(date);
    console.log(date);
    setFieldValue(name, date)
    
  }
  return (
    <Fragment>
      <KeyboardDatePicker
        {...configNewDatePicker}
      />
    </Fragment>
  );
}

export default NewDatePicker;
