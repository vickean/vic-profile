import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React, { cloneElement, useState } from "react";
import { useStyles } from "./styles";

const ElevationScroll = (props: any) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export const NavBarDrawer = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar
          position="fixed"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              VICTOR KEAN
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} onClick={handleDrawerClose}>
          <ChevronLeftIcon style={{ color: "#fff" }} />
        </div>
        <Divider style={{ color: "#fff" }} />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon style={{ color: "#fff" }} />
                ) : (
                  <MailIcon style={{ color: "#fff" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
        <Divider style={{ color: "#fff" }} />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon style={{ color: "#fff" }} />
                ) : (
                  <MailIcon style={{ color: "#fff" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{ padding: "1rem", opacity: "0" }}>
        <Typography variant="h6">.</Typography>
      </div>
    </div>
  );
};
