import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export const About = (props: any) => {
   const { id } = props;
   const classes = useStyles();

   return (
      <div className={classes.aboutDiv} id={id}>
         <Grid container style={{ minHeight: "100vh" }}></Grid>
      </div>
   );
};
