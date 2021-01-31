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
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `center`,
    gap: `10px`,
  },
  linkText: {
    paddingRight: `40px`,
    paddingLeft: `20px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `grey`,
    fontWeight: 545,
  },
  logout: {
    color: "grey",
  },
  toolbar: {
    backgroundColor: `white`,
  },
  title: {
    fontSize: 10,
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
        <Container>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItemText primary={title} className={classes.title} />
              </a>
            ))}
          </List>
         
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
