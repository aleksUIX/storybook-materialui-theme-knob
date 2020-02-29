import { createMuiTheme } from "@material-ui/core/styles";

import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import teal from "@material-ui/core/colors/teal";
import yellow from "@material-ui/core/colors/yellow";
import deepOrange from "@material-ui/core/colors/deepOrange";

export default createMuiTheme({
  palette: {
    primary: lime,
    secondary: teal,
    error: deepOrange,
    action: {
      disabledBackground: teal[400]
    },
    text: {
      primary: lightGreen[900],
      secondary: teal[700],
      disabled: yellow[600]
    }
  },
  status: {
    danger: "orange"
  }
});
