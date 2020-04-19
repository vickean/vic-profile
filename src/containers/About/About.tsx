import { Card } from "@material-ui/core";
import React from "react";
import { LoremIpsum } from "../../assets/LoremIpsum";

export const About = (props: any) => {
   const { id } = props;
   // Demo Data
   const loremIpsum = LoremIpsum();

   const demoArr = new Array(4).fill("x");

   return (
      <div id={id}>
         <Card style={{ margin: "1rem", padding: "1rem" }}>
            Welcome to vickean.com! It's still being built so bookmark this page and
            check back often.
         </Card>
         {demoArr.map((el, i) => {
            return (
               <Card key={i} style={{ margin: "1rem", padding: "1rem" }}>
                  {loremIpsum}
               </Card>
            );
         })}
      </div>
   );
};
