import React from "react";
import {Grid, Typography} from '@material-ui/core'
import TextField from '../../FormsUI/Textfield'

import NewDatePicker from "../../FormsUI/NewDatePicker";
function Demographics() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography>Patient Demographics</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField name="lastName" label="Patient Name" />
      </Grid>
      <Grid item xs={6}>
        <TextField name="patientID" label="Paitent ID" />
      </Grid>
      <Grid item xs={12}>
        <NewDatePicker name="dob" label="Date of Birth" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="diagnosis" label="Diagnosis" />
      </Grid>
    </Grid>
  );
}

export default Demographics;
