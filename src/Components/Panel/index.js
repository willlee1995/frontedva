import React from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../FormsUI/Textfield";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(8),
        flexGrow: 1,
    },
}));

const onSubmit = (values) => {
    console.log("This is the submitted result");
};

const valSchema = Yup.object().shape()

const iValues = {
    patientID: "A1234563"
}
function Panel() {
    const classes = useStyles();

    return (
        <Grid container alignContent="center" spacing={5}>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <div className={classes.formWrapper}>
                        <Grid container>
                            <Formik
                                initialValues={{ ...iValues }}
                                validationSchema={valSchema}
                                onSubmit={onSubmit}
                            >
                                <Form>
                                    <Grid container justifyContent="center" alignContent="center" alignItems="center" spacing={4}>
                                        <Grid alignContent="flex-start" item xs={12}>
                                          <Typography variant="h4">Please enter patient ID for accessing the panel.</Typography>  
                                        </Grid>
                                        
                                        
                                        <Grid item xs={12}>
                                            <TextField name="patientID" Label="Patient ID" />
                                        </Grid>
                                        <Grid alignContent="center" item xs={3}>
                                            <Link to='/demo-panel'><Button type="button" fullWidth variant="contained" color="primary">Search</Button></Link>
                                         </Grid>   
                                    </Grid>
                                </Form>
                            </Formik>
                        </Grid>
                    </div>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Panel
