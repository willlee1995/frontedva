import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button } from "@material-ui/core";
//import Autocomplete from '../FormsUI/Autocomplete'


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'

import TabPanel from '../components/FormsUI/TabPanel'
import PatientDemo from "../components/InputForm/PatientDemo";
import VenMap from "../components/InputForm/VenMap";
import AccessDevice from "../components/InputForm/AccessDevice";
import Complications from "../components/InputForm/Complications";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
    flexGrow: 1,
  },
}));



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const iValues = {
  name: "Addie Franceschi",
  patientID: "A1234563",
  dob: new Date(2020, 1, 1),
  diagnosis: "Congenital Heart disease",  
  initialAccess: [{ top: 49.89298846022498, left: 49.157301966140636 },], //for demo purpose
  patency: 1,
  examDate: new Date(2021, 1, 1),
  provider: "IR",
  fr: "6Fr",
  device: "Bioflo double lumen PICC",  
  accessVein: "EIV",
  laterality: "L",
  tipPos: 'SVC/RA junction',
  removalDate: new Date(2021, 3, 1),
  treatmentEndpoint: 1,
  complications: 1,
  remarks: 'None',
  typesOfComplication: 'PR',
  complicationDate: new Date(),
  detailsOfComplication: "Failed initial puncture",
  managementOfComp: "",
  outcome: "",
};
const valSchema = Yup.object().shape({
  patientID: Yup.string()
    .matches(
      /^[A-Z]{1,2}[0-9]{6}[0-9A-F]{1}/,
      "This is not a valid HKID format"
    )
    .required("Required"),
  name: Yup.string().required("Required"),
  
  // initialAccess: Yup.array().min(1, "Click me "), // require an alert for user if no apply is pressed before
});
const onSubmit = (values) => {
  console.log("This is the submitted result", values);
};

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNext = (event) => {
    let newValue = value + 1
    setValue(newValue)
  }
  const handleBack = (event) => {
    let newValue = value - 1
    setValue(newValue)
  }

  return (

    <Grid container spacing={1}>
      <Grid item xs={12}>
        <AppBar color="transparent" position="static">
          <Tabs centered indicatorColor="secondary" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Patient Demographic" {...a11yProps(0)} />
            <Tab label="Venous Mapping" {...a11yProps(1)} />
            <Tab label="Access Device" {...a11yProps(2)} />
            <Tab label="Complications" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...iValues }}
              validationSchema={valSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <Grid container justifyContent="center" alignItems="center">
                  <TabPanel value={value} index={0}>
                    <Grid item xs={12}>
                      <PatientDemo /> {/* Tab 1 */}
                    </Grid>
                    <Grid item xs={4}>
                      <Button fullWidth variant="contained" onClick={handleNext}>Next</Button>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Grid item xs={12}>
                      <VenMap /> {/* Tab 2 */}
                    </Grid>
                    <Grid alignContent="center" item xs={4}>
                      <Button fullWidth variant="contained" onClick={handleNext}>Next</Button>
                    </Grid>
                    <Grid alignContent="center" item xs={4}>
                      <Button fullWidth variant="contained" onClick={handleBack}>Back</Button>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Grid item xs={12}>
                      <AccessDevice /> {/* Tab 3 */}
                    </Grid>
                    <Grid alignContent="center" item xs={4}>
                      <Button fullWidth variant="contained" onClick={handleNext}>Next</Button>
                    </Grid>
                    <Grid alignContent="center" item xs={4}>
                      <Button fullWidth variant="contained" onClick={handleBack}>Back</Button>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Grid item xs={12}>
                      <Complications /> {/* Tab 4 */}
                    </Grid>
                    <Grid item xs={4}>
                      <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
                    </Grid>
                  </TabPanel>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
