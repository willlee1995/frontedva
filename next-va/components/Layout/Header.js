import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {  
    flexGrow: 1,  
  },  
}));  
  
  

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  }
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          SMARTER Vein Health
          </Typography> 
          {isXS ? (<Fragment>
            <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          <MenuItem onClick={handleClose}></MenuItem>
          <MenuItem onClick={handleClose}></MenuItem>
          <MenuItem onClick={handleClose}></MenuItem>
          <MenuItem onClick={handleClose}></MenuItem>

          </Menu>
          </Fragment>
          )
           : 
           (<Fragment>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary">
            <Tab label="Home" />
            <Tab label="Input Form" />
            <Tab label="Record" />
            <Tab label="Panel" />
          </Tabs>
          </Fragment>)

        }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
