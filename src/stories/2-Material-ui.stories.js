import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";

import ThemeKnob from "./ThemeKnob";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(2)
  }
}));

export const BasicControls = () => {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChangeInput = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <ThemeKnob>
      <div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
          >
            Default
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Primary
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Secondary
          </Button>
          <Button
            variant="contained"
            disabled
            className={classes.button}
          >
            Disabled
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            className={classes.button}
          >
            Link
          </Button>
        </div>
        <div>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            value="primary"
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
          <Checkbox
            defaultChecked
            value="secondary"
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          <Checkbox
            value="uncontrolled"
            inputProps={{
              "aria-label": "uncontrolled-checkbox"
            }}
          />
          <Checkbox
            disabled
            value="disabled"
            inputProps={{
              "aria-label": "disabled checkbox"
            }}
          />
          <Checkbox
            disabled
            checked
            value="disabled checked"
            inputProps={{
              "aria-label": "disabled checked checkbox"
            }}
          />
          <Checkbox
            defaultChecked
            value="indeterminate"
            indeterminate
            inputProps={{
              "aria-label": "indeterminate checkbox"
            }}
          />
          <Checkbox
            defaultChecked
            color="default"
            value="default"
            inputProps={{
              "aria-label": "checkbox with default color"
            }}
          />
          <Checkbox
            defaultChecked
            size="small"
            value="small"
            inputProps={{
              "aria-label": "checkbox with small size"
            }}
          />
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">
              Age
            </InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChangeInput("age")}
              inputProps={{
                name: "age",
                id: "age-native-simple"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-helper">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleChangeInput("age")}
              inputProps={{
                name: "age",
                id: "age-native-helper"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
            <FormHelperText>
              Some important helper text
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={state.age}
              onChange={handleChangeInput("age")}
              name="age"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "age" }}
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
            <FormHelperText>
              With visually hidden label
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              shrink
              htmlFor="age-native-label-placeholder"
            >
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleChangeInput("age")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
            <FormHelperText>
              Label + placeholder
            </FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled
          >
            <InputLabel htmlFor="name-native-disabled">
              Name
            </InputLabel>
            <NativeSelect
              value={state.name}
              onChange={handleChangeInput("name")}
              inputProps={{
                name: "name",
                id: "name-native-disabled"
              }}
            >
              <option value="" />
              <optgroup label="Author">
                <option value="hai">Hai</option>
              </optgroup>
              <optgroup label="Contributors">
                <option value="olivier">Olivier</option>
                <option value="kevin">Kevin</option>
              </optgroup>
            </NativeSelect>
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            error
          >
            <InputLabel htmlFor="name-native-error">
              Name
            </InputLabel>
            <NativeSelect
              value={state.name}
              onChange={handleChangeInput("name")}
              name="name"
              inputProps={{
                id: "name-native-error"
              }}
            >
              <option value="" />
              <optgroup label="Author">
                <option value="hai">Hai</option>
              </optgroup>
              <optgroup label="Contributors">
                <option value="olivier">Olivier</option>
                <option value="kevin">Kevin</option>
              </optgroup>
            </NativeSelect>
            <FormHelperText>Error</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="uncontrolled-native">
              Name
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "name",
                id: "uncontrolled-native"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
            <FormHelperText>Uncontrolled</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              value={state.age}
              name="age"
              onChange={handleChangeInput("age")}
              inputProps={{ "aria-label": "age" }}
            >
              <option value="" disabled>
                Placeholder
              </option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
            <FormHelperText>Placeholder</FormHelperText>
          </FormControl>
          <FormControl
            required
            className={classes.formControl}
          >
            <InputLabel htmlFor="age-native-required">
              Age
            </InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChangeInput("age")}
              name="age"
              inputProps={{
                id: "age-native-required"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel
              ref={inputLabel}
              htmlFor="outlined-age-native-simple"
            >
              Age
            </InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChangeInput("age")}
              labelWidth={labelWidth}
              inputProps={{
                name: "age",
                id: "outlined-age-native-simple"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl
            variant="filled"
            className={classes.formControl}
          >
            <InputLabel htmlFor="filled-age-native-simple">
              Age
            </InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChangeInput("age")}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </ThemeKnob>
  );
};

export default {
  title: "Material Ui",
  component: BasicControls,
  decorators: [withKnobs]
};
