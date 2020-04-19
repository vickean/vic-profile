import { makeStyles } from "@material-ui/core";
import BgImage from "../../assets/sebastian-pena-lambarri-7Tl5rytGDPg-unsplash.jpg";

export const useStyles = makeStyles((theme) => ({
   helloDiv: {
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
}));
