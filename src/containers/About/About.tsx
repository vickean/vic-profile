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
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
         >
            <Grid
               item
               xs={12}
               style={{ textAlign: "left", padding: "2rem", color: "#fff" }}
            >
               <Typography variant="h4" component="span">
                  I'm a maker by passion and profession. Over the past 5 years, I've
                  designed and built various things from escape room props to
                  contract management software.
               </Typography>
            </Grid>
            <Grid
               item
               xs={12}
               style={{ textAlign: "right", padding: "2rem", color: "#fff" }}
            >
               <Typography variant="h4" component="span">
                  I believe in making things that impact lives through design and
                  engineering and my favourite sculpting tool just happens to be web.
               </Typography>
            </Grid>
         </Grid>
      </div>
   );
};
