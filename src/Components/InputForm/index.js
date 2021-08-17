import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button, Divider } from "@material-ui/core";
//import Autocomplete from '../FormsUI/Autocomplete'

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

const iValues = {
  lastName: "qwewq",
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

  return (
    <Grid container>
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
                  <Grid item xs={12}>
                    <PatientDemo /> {/* Tab 1 */}
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <VenMap /> {/* Tab 2 */}
                  </Grid>
                  <Grid item xs={12}>
                    <AccessDevice /> {/* Tab 3 */}
                  </Grid>
                  <Grid item xs={12}>
                    <Complications /> {/* Tab 4 */}
                  </Grid>

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
