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
import PanToolIcon from "@material-ui/icons/PanTool";
import InfoIcon from "@material-ui/icons/Info";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
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

   const menuOptions = [
      {
         label: "Hello",
         icon: <PanToolIcon />,
         link: "",
      },
      {
         label: "About",
         icon: <InfoIcon />,
         link: "",
      },
      {
         label: "Skills",
         icon: <BuildIcon />,
         link: "",
      },
      {
         label: "Work",
         icon: <WorkIcon />,
         link: "",
      },
      {
         label: "Contact",
         icon: <MailIcon />,
         link: "",
      },
   ];

   return (
      <div className={classes.root}>
         <ElevationScroll>
            <AppBar
               position="fixed"
               style={{ background: "rgba(0, 0, 0, 0)" }}
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
            <Divider style={{ backgroundColor: "#aaa" }} />
            <List>
               {menuOptions.map(({ label, icon, link }, index) => (
                  <ListItem button key={label + index}>
                     <ListItemIcon style={{ color: "#fff" }}>{icon}</ListItemIcon>
                     <ListItemText primary={label} style={{ color: "#fff" }} />
                  </ListItem>
               ))}
            </List>
         </Drawer>
      </div>
   );
};
