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
    Name: "Chan Tai Man",
    hkid: "Y3731231",
    Age: 10,
    DOB: "11-05-2011",
    Sex: "M",
    Diagnosis: "Congenital Heart Disease",
  },
  {
    id:2,
    Name: "Chuk On Hong",
    hkid: "UL3344569",
    Age: 19,
    DOB: "11-04-2002",
    Sex: "M",
    Diagnosis: "Tetralogy of Fallot",
  },
  {
    id:3,
    Name: "Lam Ka Yee",
    hkid: "Y1235518",
    Age: 13,
    DOB: "11-07-2008",
    Sex: "F",
    Diagnosis: "Transposition of Great Arteries",
  },
  {
    id:4,
    Name: "Wong Zi Ying",
    hkid: "Y9445684",
    Age: 8,
    DOB: "11-06-2013",
    Sex: "F",
    Diagnosis: "Coarctation of Aorta",
  },
  {
    id:5,
    Name: "Lam Chi Shan",
    hkid: "Y5887942",
    Age: 12,
    DOB: "11-06-2009",
    Sex: "F",
    Diagnosis: "Congenital Heart Disease",
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
