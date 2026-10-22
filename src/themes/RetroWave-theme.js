import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, indigo, purple, amber, deepOrange } from "@material-ui/core/colors";


export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple,
    error: deepOrange,
    action: {
      disabledBackground: amber[400]
    },
    text: {
      primary: indigo[600],
      secondary: indigo[300],
      disabled: lightBlue[100]
    }
  },
  status: {
    danger: "orange"
  }
});
