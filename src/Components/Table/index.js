import React from "react";
import DataTable from "./Table";
import TabelToolBar from "./TableToolBar";
import { Grid, Container } from "@material-ui/core";

function Table() {
  return (
    <div>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <div>
            <br/>
              <TabelToolBar />
              <br/>
              <DataTable />
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Table;
