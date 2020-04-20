import { makeStyles } from "@material-ui/core";
import BgImage from "../../assets/anthony-cantin-W9ATCsAy6-8-unsplash.jpg";

export const useStyles = makeStyles((theme) => ({
   contactDiv: {
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
}));
