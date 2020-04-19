import React, { Fragment } from "react";
import { LoremIpsum } from "../../assets/LoremIpsum";
import { Card } from "@material-ui/core";

export const About = (props: any) => {
   // Demo Data
   const loremIpsum = LoremIpsum();

   const demoArr = new Array(4).fill("x");

   return (
      <Fragment>
         <Card style={{ margin: "1rem", padding: "1rem" }}>
            Welcome to vickean.com! It's still being built so bookmark this page and
            check back often.
         </Card>
         {demoArr.map(() => {
            return (
               <Card style={{ margin: "1rem", padding: "1rem" }}>{loremIpsum}</Card>
            );
         })}
      </Fragment>
   );
};
