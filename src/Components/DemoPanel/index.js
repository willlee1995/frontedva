import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Divider,
} from "@material-ui/core";
import TabPanel from "../FormsUI/TabPanel";
import ImageMarker from "react-image-marker";
import Anatomy from "../../images/anatomy.svg";
import DataTable from "../Table/Table";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const demodata = {
  id: 1,
  name: "Addie Franceschi",
  hkid: "A1234563",
  dob: "28/01/2020",
  sex: "M",
  diagnosis:
    "Unspecified injury of peroneal artery, left leg, subsequent encounter",
  examDate: "10/05/2021",
  age: 72,
};

// function calculate_age(dob) {
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms);

//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

export default function Demo() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const initState = [{ top: 49.89298846022498, left: 49.157301966140636 }];
  const [data, setData] = useState([]);
  const [markers, setMarkers] = useState(initState);
  const HandleAdd = (marker) => {
    setMarkers([...markers, marker]);
  };

  useEffect(() => {
    fetch("mockdatafordemo.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      })
      .catch((err) => console.log(err));
  }, []);
  const columns = [
    {
      field: "id",
      headerName: "Case ID",
      width: 90,
    },
    {
      field: "examDate",
      headerName: "Insertion Date",
      width: 170,
    },
    {
      field: "provider",
      headerName: "Provider of vascular access",
      width: 150,
      editable: true,
    },
    {
      field: "accessedVein",
      headerName: "Accessed vein",
      width: 150,
      editable: true,
    },
    {
      field: "diagnosis",
      headerName: "Diagnosis / Underlying Disease",
      width: 200,
      editable: true,
    },
  ];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <AppBar color="transparent" position="static">
          <Tabs
            centered
            indicatorColor="secondary"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Patient Demographic" {...a11yProps(0)} />
            <Tab label="Overview of venous patency" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <TabPanel spacing={3} value={value} index={0}>
              <Grid item xs={12}>
                <Typography variant="h5">Patient Panel</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography>Name: {demodata.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Patient ID: {demodata.hkid}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Date of Birth: {demodata.dob}</Typography>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Previous vascular accesss record(s)
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Container maxWidth="lg">
                  <div>
                    <DataTable columns={columns} data={data} />
                  </div>
                </Container>
              </Grid>
            </TabPanel>
            <TabPanel spacing={3} value={value} index={1}>
              <Grid item xs={12}>
                <Typography variant="h5">Vascular Map</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid alignContent="center" item xs={12}>
                <ImageMarker
                  height="1200"
                  src={Anatomy}
                  markers={markers}
                  onAddMarker={HandleAdd}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Vascular patency summary</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Blocked vessels: None</Typography>
              </Grid>
            </TabPanel>

            <Grid item xs={12}></Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
