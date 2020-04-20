import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export const Work = (props: any) => {
   const { id } = props;
   const classes = useStyles();

   return (
      <div className={classes.workDiv} id={id}>
         <Grid container style={{ minHeight: "100vh" }}></Grid>
      </div>
   );
};
