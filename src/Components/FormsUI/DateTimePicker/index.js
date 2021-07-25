
import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'
 
export default function DateTimePicker({name, ...otherProps}) {
    const {field, meta} = useField(name)
    const configDateTimePicker = {
        ...field,
        ...otherProps,
        type: "datetime-local",
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: {
            shrink: true,
        }
    }

    if (meta && meta.touched && meta.error) {
        configDateTimePicker.error = true
        configDateTimePicker.helperText = meta.error
    }
    return (
        <TextField {...configDateTimePicker} />)
}


