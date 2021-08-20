import React from "react";
import listtypesInd from "../../../data/listtypesInd.json";
import { Grid } from "@material-ui/core";
import TextField from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import NewDatePicker from "../../FormsUI/NewDatePicker";

function index() {
  return (
    // <Grid container spacing={1}>
    //   
    //   <Grid item xs={6}>
    //     <TextField name="lastName" label="Patient Name" />
    //   </Grid>
    //   <Grid item xs={6}>
    //     <TextField name="patientID" label="Paitent ID" />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <NewDatePicker name="dob" label="Date of Birth" />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <TextField name="diagnosis" label="Diagnosis" />
    //   </Grid>
    // </Grid>
    <Grid container alignItems="stretch" spacing={1}>
      <Grid item xs={12} >
        <Select name="typesOfComplication" label="Types of complications" options={listtypesInd} />
      </Grid>
      <Grid item xs={12} >
        <NewDatePicker format="dd/MM/yy" name="complicationDate" label="Complications occured at?" />
      </Grid>      
      <Grid item xs={12} >
        <TextField
           name="detailsOfContraindication" label="Details of Complications"
        />
      </Grid>
      <Grid item xs={12} >
        <TextField
           name="outcome" label="Outcome"
        />
      </Grid>
    </Grid>


  );
}

export default index;
