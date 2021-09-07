import { DataGrid, GridToolbar } from "@material-ui/data-grid";
//import { Link } from "react-router-dom";







export default function DataTable({data, columns, ColumnMenu}) {

  


  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        autoHeight
        autoPageSize pagination
        disableColumnMenu={ColumnMenu}   
        components={{Toolbar: GridToolbar,}}
      />
    </div>
  );
}
