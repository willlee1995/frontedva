import React from "react";
import {Grid} from '@material-ui/core'
import TextField from '../FormsUI/Textfield'


import DatePicker from '../FormsUI/DatePicker'

function Demographics() {
  return (
    <Grid container spacing={1}>
      {/* <Grid item xs={12}>
        <Typography variant="h6">Patient Demographics</Typography>
      </Grid> */}
      <Grid item xs={6}>
        <TextField name="name" label="Patient Name" />
      </Grid>
      <Grid item xs={6}>
        <TextField name="patientID" label="Paitent ID" />
      </Grid>
      <Grid item xs={12}>
        <DatePicker name="dob" label="Date of Birth" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="diagnosis" label="Diagnosis" />
      </Grid>
    </Grid>
  );
}

export default Demographics;
