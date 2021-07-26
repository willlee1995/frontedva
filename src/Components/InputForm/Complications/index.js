import React from "react";
import listtypesInd from "../../../data/listtypesInd.json";
import { Grid, Typography } from "@material-ui/core";
import TextField from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import { spacing } from '@material-ui/system';
function index() {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Complications</Typography>
      </Grid>
      <Grid item xs={12}>
        <DateTimePicker name="examDate" label="Exam Date" />
      </Grid>
      <Grid paddingTop={11} item xs={12}>
        <Select name="typesOfComplication" label="Types of complications" options={listtypesInd} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="contraindication"
          label="Contraindications or complicating factors"
        />
      </Grid>
    </>
  );
}

export default index;