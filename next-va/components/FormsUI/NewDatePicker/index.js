import React, { Fragment, useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { useField, useFormikContext } from "formik";

function NewDatePicker({ format, name, ...otherProps }) {
  const { field } = useField(name);
  const [selectedDate, handleDateChange] = useState(null);
  const { setFieldValue } = useFormikContext();
  const configNewDatePicker = {
    ...field,
    ...otherProps,
    placeholder: "",
    value: selectedDate,
    onChange: handleChange,
    format: format,
    clearable: true,
    disableFuture: false,
    fullWidth: true,
    inputVariant: "outlined",  
    allowKeyboardControl: true,
    openTo: "date"
  };

  function handleChange(date) {
    handleDateChange(date);
    let dateofDate = date.toDateString().split(' ').slice(1).join(' ')
    setFieldValue(name, dateofDate)
    
  }
  return (
    <Fragment>
      <DateTimePicker
        {...configNewDatePicker}
      />
    </Fragment>
  );
}

export default NewDatePicker;
