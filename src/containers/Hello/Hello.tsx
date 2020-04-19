import { Grid, Typography } from "@material-ui/core";
import React from "react";

export const Hello = (props: any) => {
   return (
      <div>
         <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
         >
            <Grid item xs={12} style={{ textAlign: "center" }}>
               <Typography variant="h2">VICTOR KEAN</Typography>
               <Typography variant="h4">Web Developer</Typography>
            </Grid>
         </Grid>
      </div>
   );
};
