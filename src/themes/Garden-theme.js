import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen, lime, teal, yellow, deepOrange } from "@material-ui/core/colors";


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
