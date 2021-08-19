import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button, Divider } from "@material-ui/core";
//import Autocomplete from '../FormsUI/Autocomplete'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
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
  dob: "",
  initialAccess: [],
  examDate: "",
  accessVein: "",
  tipPos: '',
  removalDate: '',
  treatmentEndpoint: '',
  complications: '',
  typesOfComplication: '',
  indication: "CT",
  contraindication: "qweqwe",
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
  initialAccess: Yup.array().min(1), // require an alert for user if no apply is pressed before
});
const onSubmit = (values) => {
  console.log(values);

};

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Patient Demographic" {...a11yProps(0)} />
            <Tab label="Venous Mapping" {...a11yProps(1)} />
            <Tab label="Access Device" {...a11yProps(2)} />
            <Tab label="Complication" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...iValues }}
              validationSchema={valSchema}
              onSubmit={onSubmit}
            >
              <Form>

                <Grid container spacing={1}>
                  <TabPanel value={value} index={0}>
                    <Grid item xs={12}>
                      <PatientDemo /> {/* Tab 1 */}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Grid item xs={12}>
                      <VenMap /> {/* Tab 2 */}
                    </Grid>
                  </TabPanel>
                  <Divider />
                  <TabPanel value={value} index={2}>
                    <Grid item xs={12}>
                      <AccessDevice /> {/* Tab 3 */}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Grid item xs={12}>
                      <Complications /> {/* Tab 4 */}
                    </Grid>
                  </TabPanel>


                  <Grid
                    container
                    direction="column"
                    justifycontent="center"
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
