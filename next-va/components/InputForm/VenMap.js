import React from "react";
import { Grid } from "@material-ui/core"
import ImageMarker from "../FormsUI/ImageMarker";
import Select from "../FormsUI/Select";


const optionsPatency = {
  1: "Patent",
  2: "Narrowed",
  3: "Obstructed",
  4: "Unknown",

}

function VenMap() {
  return (
    <Grid container spacing={2}>
      <Grid alignContent="center" item xs={12}>
        <ImageMarker height="1200" name="initialAccess" label="Anatomy map" />
      </Grid>
      <Grid alignContent="center" item xs={12}>
        <Grid item xs={12} >
          <Select name="patency" label="Patency" options={optionsPatency} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VenMap;
