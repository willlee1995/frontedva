import React from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const TabelToolBar = () => {

//   const [filterFn, setFilterFn] = useState()

//   const handleSearch = e => {
//     let target = e.target;
//     setFilterFn ({
//       Fn: items => {
//           if (target.value=="")
//             return items
//           else
//             return items.filter
//       }
//     })
//   }
 
  return (
    <Grid container alignItems="flex-end" spacing={1}>
      <Grid item align='left' xs={8}>
        <TextField fullWidth label="Search" type="text" />
      </Grid>
      <Grid item align='right' xs={4}>
      <Button  variant="contained">+ Add New</Button>
      </Grid>
    </Grid>
  );
};

export default TabelToolBar;
