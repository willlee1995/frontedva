import React from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const TabelToolBar = () => {
  return (
    <Grid container alignItems="flex-end" spacing={1}>
    
      <Grid item align='left' xs={4}>
      <Grid container spacing={1}>
      <Grid item align='left' xs={6}>
      <Button  variant="contained">Edit</Button>
      </Grid>
      <Grid item align='left' xs={6}>
      <Button shrink variant="contained" color="primary">
          Remove
        </Button>
      </Grid>
      </Grid>
        
        
      </Grid>
      <Grid item align='right' xs={8}>
        <TextField label="Filter" type="text" />
      </Grid>
    </Grid>
  );
};

export default TabelToolBar;
