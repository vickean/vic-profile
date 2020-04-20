import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export const Hello = (props: any) => {
   const { id } = props;
   const classes = useStyles();

   return (
      <div className={classes.helloDiv} id={id}>
         <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
         >
            <Grid item xs={12} style={{ textAlign: "left", padding: "2rem" }}>
               <Typography
                  variant="h1"
                  style={{ fontWeight: "bold", color: "#eee" }}
               >
                  Hello!
               </Typography>
               <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", color: "#eee" }}
               >
                  I'm Victor,
               </Typography>
               <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", color: "#eee" }}
               >
                  Web Developer.
               </Typography>
            </Grid>
         </Grid>
      </div>
   );
};
