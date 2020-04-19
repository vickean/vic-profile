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
   useScrollTrigger,
} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import PanToolIcon from "@material-ui/icons/PanTool";
import WorkIcon from "@material-ui/icons/Work";
import React, { useState } from "react";
import { useStyles } from "./styles";

export const NavBarDrawer = (props: any) => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };

   const scrollTrig = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
   });

   const menuOptions = [
      {
         label: "Hello",
         icon: <PanToolIcon />,
         divId: "helloSec",
      },
      {
         label: "About",
         icon: <InfoIcon />,
         divId: "aboutSec",
      },
      {
         label: "Skills",
         icon: <BuildIcon />,
         divId: "skillsSec",
      },
      {
         label: "Work",
         icon: <WorkIcon />,
         divId: "workSec",
      },
      {
         label: "Contact",
         icon: <MailIcon />,
         divId: "contactSec",
      },
   ];

   return (
      <div className={classes.root}>
         <AppBar
            position="fixed"
            style={{
               background: "rgba(0,0,0,0)",
            }}
            className={classes.appBar}
            elevation={0}
         >
            <Toolbar>
               <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                  className={classes.menuButton}
               >
                  <MenuIcon
                     fontSize="large"
                     style={{ color: scrollTrig ? "#555" : "#eee" }}
                  />
               </IconButton>
            </Toolbar>
         </AppBar>
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
            <Divider style={{ backgroundColor: "#aaa" }} />
            <List>
               {menuOptions.map(({ label, icon, divId }, index) => (
                  <ListItem
                     button
                     key={label + index}
                     onClick={() => document.getElementById(divId)?.scrollIntoView()}
                  >
                     <ListItemIcon style={{ color: "#fff" }}>{icon}</ListItemIcon>
                     <ListItemText primary={label} style={{ color: "#fff" }} />
                  </ListItem>
               ))}
            </List>
         </Drawer>
      </div>
   );
};
