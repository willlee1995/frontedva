import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
//import { Link } from "react-router-dom";






export default function DataTable({data, columns, pageSize}) {
  

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={pageSize}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
