import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TextField from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import Vein from '../../../data/Vein.json'

function index() {
  return (
    <>
    <Grid container spacing={1} >
    <Grid item xs={12}>
        <Typography variant="h6">Vascular access Log</Typography>
      </Grid>
      <Grid item xs={12}>
        <DateTimePicker name="examDate" label="Date of insertion" />
      </Grid>
      <Grid item xs={12}>
        <Select name="accessVein" label="Accessed vein" options={Vein} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="tipPos"
          label="Tip position"
        />
      </Grid>
      <Grid item xs={12}>
        <DateTimePicker name="removalDate" label="Date of removal" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="treatmentEndpoint"
          label="Treatment Endpoint archieved?"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="complications"
          label="Any complications?"
        />
      </Grid>
    </Grid>
      
    </>
  );
}

export default index;
