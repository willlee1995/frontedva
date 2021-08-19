import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button } from "@material-ui/core";
//import Autocomplete from '../FormsUI/Autocomplete'


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'

import PatientDemo from "./PatientDemo";
import VenMap from "./VenMap";
import AccessDevice from "./AccessDevice";
import Complications from "./Complications";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const iValues = {
  lastName: "Chan Tai Man",
  patientID: "Y3731231",
  diagnosis: "some disease",
  dob: new Date(2020, 1, 1),
  initialAccess: [{top: 49.89298846022498, left: 49.157301966140636},], //for demo purpose
  accessVein: "EIV",
  laterality: "L",
  examDate: "",  
  tipPos: '',
  removalDate: '',
  treatmentEndpoint: '',
  complications: '',
  typesOfComplication: 'PR',
  indication: "CT",
  detailsOfContraindication: "Failed initial puncture",
  managementOfComp: "",
  Outcome: "",
};
const valSchema = Yup.object().shape({
  patientID: Yup.string()
    .matches(
      /^[A-Z]{1,2}[0-9]{6}[0-9A-F]{1}/,
      "This is not a valid HKID format"
    )
    .required("Required"),
  lastName: Yup.string().required("Required"),
  diagnosis: Yup.string().required("Required"),
  // initialAccess: Yup.array().min(1, "Click me "), // require an alert for user if no apply is pressed before
});
const onSubmit = (values) => {
  console.log("hi", values);


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

  return (

    <Grid container spacing={1}>
      <Grid item xs={12}>
        <AppBar color="transparent" position="static">
          <Tabs color="transparent" centered indicatorColor="secondary" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Patient Demographic" {...a11yProps(0)} />
            <Tab label="Venous Mapping" {...a11yProps(1)} />
            <Tab label="Access Device" {...a11yProps(2)} />
            <Tab label="Complication" {...a11yProps(3)} />
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
                      <Button fullWidth variant="outlined" onClick={handleNext}>Next</Button>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Grid item xs={12}>
                      <VenMap /> {/* Tab 2 */}
                    </Grid>
                    <Grid alignContent="center" item xs={4}>
                      <Button variant="outlined" onClick={handleNext}>Next</Button>
                    </Grid>
                  </TabPanel>

                  <TabPanel value={value} index={2}>
                    <Grid item xs={12}>
                      <AccessDevice /> {/* Tab 3 */}
                    </Grid>
                    <Grid alignContent="center" item xs={4}>
                      <Button variant="outlined" onClick={handleNext}>Next</Button>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={3}>

                    <Complications /> {/* Tab 4 */}
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={4}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Grid>
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
