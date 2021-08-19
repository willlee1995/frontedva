import React from "react";
import listtypesInd from "../../../data/listtypesInd.json";
import { Grid } from "@material-ui/core";
import TextField from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import DateTimePicker from "../../FormsUI/DateTimePicker";

function index() {
  return (
    <Grid container spacing={1} >
      {/* <Grid item xs={12}>
        <Typography variant="h6">Complications</Typography>
      </Grid> */}
      <Grid item xs={12}>
        <DateTimePicker name="examDate" label="Exam Date" />
      </Grid>
      <Grid item xs={12}>
        <Select name="typesOfComplication" label="Types of complications" options={listtypesInd} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="detailsOfContraindication"
          label="Details of Complications"
        />
      </Grid>

    </Grid>


  );
}

export default index;
