import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export const Contact = (props: any) => {
   const { id } = props;
   const classes = useStyles();

   return (
      <div className={classes.contactDiv} id={id}>
         <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
         ></Grid>
      </div>
   );
};
