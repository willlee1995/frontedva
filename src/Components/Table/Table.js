import { DataGrid } from "@material-ui/data-grid";
//import { Link } from "react-router-dom";

export default function DataTable({ data, columns }) {
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        autoPageSize
      />
    </div>
  );
}
