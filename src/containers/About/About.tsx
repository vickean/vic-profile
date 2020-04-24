import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export const About = (props: any) => {
   const { id } = props;
   const classes = useStyles();

   return (
      <div className={classes.aboutDiv} id={id}>
         <Grid
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
         >
            <Grid
               item
               xs={12}
               style={{
                  textAlign: "right",
                  padding: "2rem",
                  color: "#fff",
                  maxWidth: "400px",
               }}
            >
               <Typography variant="h4" component="span">
                  I'm a <b>maker</b> by <b>passion</b> and <b>profession</b>. I've
                  helped design and built interactive escape room props as well as
                  contract management apps.
               </Typography>
            </Grid>
            <Grid
               item
               xs={12}
               style={{
                  textAlign: "left",
                  padding: "2rem",
                  color: "#fff",
                  maxWidth: "400px",
               }}
            >
               <Typography variant="h4" component="span">
                  <b>Web technologies</b> both inspire and enable me to build things
                  that merge <b>art</b> and <b>engineering</b>. I aspire to create
                  things that <b>positively impact lives</b>.
               </Typography>
            </Grid>
         </Grid>
      </div>
   );
};
