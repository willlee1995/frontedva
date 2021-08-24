import { useEffect, useState } from "react";
import DataTable from "./Table";
import TabelToolBar from "./TableToolBar";
import { Button, Grid, Container } from "@material-ui/core";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("MOCK_DATA.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("response:", response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        console.log("response:", myJson);
      })
      .catch((err) => console.log(err));
  }, []);
  const columns = [
    {
      field: "id",
      headerName: "Case ID",
      width: 110,
    },
    {
      field: "examDate",
      headerName: "Insertion Date",
      width: 150,
    },

    { field: "hkid", headerName: "HKID", width: 130 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      editable: true,
    },
    {
      field: "dob",
      headerName: "DOB",
      width: 130,
      editable: true,
    },
    {
      field: "sex",
      headerName: "Sex",
      width: 90,
      editable: true,
    },
    {
      field: "diagnosis",
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

  return (
    <div>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <div>
              <br />
              <TabelToolBar />
              <br />
              <DataTable columns={columns} data={data} ColumnMenu={'False'}/>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Table;
