import React from "react";
import { Grid, Typography } from "@material-ui/core"
import ImageMarker from "../../FormsUI/ImageMarker";

function VenMap() {
  return (
    <>
      <Grid item xs={12}>
        <Typography>Vascular access map</Typography>
      </Grid>
      <Grid item xs={12}>
        <ImageMarker height="800" name="initialAccess" label="Anatomy map" />
      </Grid>
    </>
  );
}

export default VenMap;
