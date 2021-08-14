import React from 'react'
import DataTable from "./Components/Table/Table";
import TabelToolBar from './TableToolBar';
import { Grid } from "@material-ui/core";

import React from "react";

  function Table() {
    return (
      <div>
        <Grid container spacing={3} justifyContent={'center'}>
          <Grid item xs={10} spacing={1}>
            <TabelToolBar />
          </Grid>
          <Grid item xs={10}>
            <DataTable />
          </Grid>
        </Grid>
      </div>
    )}

    export default Table
