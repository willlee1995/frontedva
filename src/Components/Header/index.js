import { useState, Fragment } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
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

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
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
          {isXS ? (
            <Fragment>
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
                <MenuItem onClick={handleClose}>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/input">Input Form</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/table">Record</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/panel">Panel</Link>
                </MenuItem>
              </Menu>
            </Fragment>
          ) : (
            <Fragment>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
              >
                <Tab component={Link} to="/" label="Home" />
                <Tab component={Link} to="/input" label="Input Form" />
                <Tab component={Link} to="/table" label="Record" />
                <Tab component={Link} to="/panel" label="Panel" />
              </Tabs>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
