import { createMuiTheme } from "@material-ui/core/styles";

import lightGreen from "@material-ui/core/colors/lightGreen";
import amber from "@material-ui/core/colors/amber";

export default createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: amber
  },
  status: {
    danger: "orange"
  }
});
