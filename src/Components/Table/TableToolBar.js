import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";

const TabelToolBar = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={1}><Button variant="contained">Edit</Button></Grid>
            <Grid item xs={4}><Button variant="contained" color="primary">Remove</Button></Grid>
            <Grid item container xs={6}>
                <Grid item xs={2}><label>Filter:</label></Grid>
                <Grid item xs={4}><input type='text'></input></Grid>
                <Grid item xs={3}><Button variant="contained" >Search</Button></Grid>
                <Grid item xs={3}><Button variant="contained">Reset</Button></Grid>
            </Grid>
        </Grid>
    )
}

export default TabelToolBar