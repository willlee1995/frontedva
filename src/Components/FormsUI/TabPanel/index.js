import {Grid} from '@material-ui/core'

export default function TabPanel(props) {
    const { spacing, children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Grid container xs={12} spacing={ spacing ? spacing : 2 } justify="center">
            {children}
          </Grid>
        )}
      </div>
    );
  }