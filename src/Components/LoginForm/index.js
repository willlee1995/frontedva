import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../FormsUI/Textfield";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import Password from "../FormsUI/Password";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

function LoginForm() {
  const classes = useStyles();
  const iValues = {
    user: "",
    password: "",
  };
  const validationSchema = Yup.object({
    user: Yup.string().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.values);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={iValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography variant="h5">Please Login</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="user" label="User Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Password name="password" label="Password" />
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

export default LoginForm;
