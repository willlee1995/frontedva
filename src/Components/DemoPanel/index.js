import { useState } from 'react'
import { Container, Grid, AppBar, Tabs, Tab, Typography, Divider } from "@material-ui/core";


// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Grid container xs={12} spacing={1} justify="center">
//                     {children}
//                 </Grid>
//             )}
//         </div>
//     );
// }

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const demodata = {
    "name": "Chan Tai Man",
    "patientID": "Y3731231",
    "dob": "2021-01-31T16:00:00.000Z",
    "diagnosis": "Congenital Heart disease",
    "initialAccess": [
        {
            "top": 49.89298846022498,
            "left": 49.157301966140636
        }
    ],
    "patency": 1,
    "examDate": "2021-01-31T16:00:00.000Z",
    "provider": "IR",
    "fr": "6Fr",
    "device": "Bioflo double lumen PICC",
    "accessVein": "EIV",
    "laterality": "L",
    "tipPos": "SVC/RA junction",
    "removalDate": "2021-03-31T16:00:00.000Z",
    "treatmentEndpoint": 1,
    "complications": 1,
    "remarks": "None",
    "typesOfComplication": "PR",
    "complicationDate": "2021-08-20T18:12:03.693Z",
    "detailsOfComplication": "Failed initial puncture",
    "managementOfComp": "",
    "outcome": ""
}

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


    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <AppBar color="transparent" position="static">
                    <Tabs centered indicatorColor="secondary" value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Patient Demographic" {...a11yProps(0)} />
                        <Tab label="Overview of venous patency" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
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
                            <Typography>Patient ID: {demodata.patientID}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Date of Birth: </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Age: </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

