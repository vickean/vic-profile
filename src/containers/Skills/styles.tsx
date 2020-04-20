import { makeStyles } from "@material-ui/core";
import BgImage from "../../assets/carlos-quintero-_wbpK1imCrs-unsplash.jpg";

export const useStyles = makeStyles((theme) => ({
   skillsDiv: {
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
}));
