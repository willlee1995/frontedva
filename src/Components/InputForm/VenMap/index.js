import React from "react";
import { Grid, Divider } from "@material-ui/core"
import ImageMarker from "../../FormsUI/ImageMarker";
import Vein from '../../../data/Vein.json';
import Select from "../../FormsUI/Select";
import InputLabel from '@material-ui/core/InputLabel';

const optionLat = {
  "L": "Left",
  "R": "Right",
  "U": "Unspecified"
}

function VenMap() {
  return (
    <Grid
      container

      spacing={1}
    >
      {/* <Grid item xs={12}>
        <Typography variant="h6">Vascular access map</Typography>
      </Grid> */}
      <Divider />
      <Grid alignContent="center" item xs={12}>
        <ImageMarker height="1200" name="initialAccess" label="Anatomy map" />
      </Grid>

      <Grid item xs={12}>
        <InputLabel id="accessVeinLabel">Accessed Vein</InputLabel>
        <Select id="accessVein" name="accessVein" labelId="accessVeinLabel" options={Vein} />
      </Grid>
      <Grid item xs={12}>
        <InputLabel id="lateralityLabel">Laterality</InputLabel>
        <Select id="lateralityLabel" name="laterality" labelId="lateralityLabel" options={optionLat}>
        </Select>
      </Grid>
    </Grid>
  );
}

export default VenMap;
