import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import Header from './Components/Header'
import {makeStyles} from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography}
  from '@material-ui/core'

  const useStyles = makeStyles((theme) =>({
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    }
  }))


  const iValues = {}
  const valSchema = Yup.object().shape({})
  const onSubmit = (values) => {
    console.log(values)
  }
function App() {
  const classes = useStyles()
  return (

    <Grid container>
      <Grid item xs={12}>
        <Header />      
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md"> 
          <div className={classes.formWrapper}>
            <Formik
            initialValues={{...iValues}}
            validationSchema={valSchema}
            onSubmit={onSubmit}
            >

              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography>
                      Your detail
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Booking information
                    </Typography>
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
