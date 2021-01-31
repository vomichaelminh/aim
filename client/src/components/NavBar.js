import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    fontSize: `10`,
  },
  linkText: {
    paddingRight: `40px`,
    paddingLeft: `20px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `grey`,
    fontSize: `12`,
  },
  logout: {
    color: "grey",
  },
  toolbar: {
    backgroundColor: `white`,
    color: `black`,
  },
});

const navLinks = [
  { title: `Goals`, path: `/feed` },
  { title: `My Committed Goals`, path: `/committedGoals` },
  { title: `My Created Goals`, path: `/createdGoals` },
  { title: `New Event`, path: `/newEvent` },
];

const logOff = () => {
  localStorage.setItem("auth-token", "");
  window.location.href = "/";
};

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="xs" className={classes.navbarDisplayFlex}>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItemText primary={title} />
              </a>
            ))}
          </List>
          <button onClick={logOff}> Log out</button>
        </Container>
        <div>
          <IconButton onClick={logOff}>
            <ExitToAppIcon className={classes.logout} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
