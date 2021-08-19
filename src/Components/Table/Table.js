import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
//import { Link } from "react-router-dom";

const columns = [
  { 
    field:"id",
    headerName: "id",
    width: 90,
  },
  {
    field: "Name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  { field: "hkid", headerName: "HKID", width: 150 },
  {
    field: "Age",
    headerName: "Age",
    type: "number",
    width: 120,
    editable: true,
  },
  {
    field: "DOB",
    headerName: "DOB", 
    width: 150,
    editable: true,
  },
  {
    field: "Sex",
    headerName: "Sex",
    width: 110,
    editable: true,
  },
  {
    field: "Diagnosis",
    headerName: "Diagnosis / Underlying Disease",
    width: 200,
    editable: true,
  },
  {
    field: "",
    headerName: "Action",
    disableClickEventBubbling: true,
    width: 400,
    renderCell: (params) => {
      const onClickEdit = () => {
        console.log(params.id, "Edit");
      };
      const onClickView = () => {
        console.log(params.id, "View");
      };
      const onClickViewPP = () => {
        console.log(params.id, "View PP");
      };
      const onClickDelete = () => {
        console.log(params.id, "Delete");
      };
      return (
        <div>
          <Button variant="outlined" onClick={onClickEdit}>
            Edit
          </Button>
          <Button variant="outlined" onClick={onClickView}>
            View
          </Button>
          <Button variant="outlined" onClick={onClickViewPP}>
            View Patient Panel
          </Button>
          <Button variant="outlined" onClick={onClickDelete}>
            Delete
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  {
    id:1,
    Name: "Chan Tai",
    hkid: "T1231",
    Age: 33,
    DOB: "11-11-11",
    Sex: "M",
    Diagnosis: "GG",
  },
  {
    id:2,
    Name: "Chan 2",
    hkid: "T122231",
    Age: 33,
    DOB: "11-11-11",
    Sex: "M",
    Diagnosis: "GG",
  },
  {
    id:3,
    Name: "Chan aTi",
    hkid: "T123551",
    Age: 33,
    DOB: "11-11-11",
    Sex: "M",
    Diagnosis: "GG",
  },
  {
    id:4,
    Name: "Chan 233i",
    hkid: "T441231",
    Age: 33,
    DOB: "11-11-11",
    Sex: "M",
    Diagnosis: "GG",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
