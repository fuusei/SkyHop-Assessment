import {
  RadioGroup as MUIRadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState } from "react";

function RadioGroup({ options }) {
  const [value, setValue] = useState(options[0]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const controlProps = (item) => ({
    checked: value === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button",
    inputProps: { "aria-label": item },
  });
  return (
    <FormControl>
      <MUIRadioGroup
        row
        aria-labelledby="radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {options.map((label) => (
          <FormControlLabel
            key={label}
            value={label}
            sx={{
              ".MuiFormControlLabel-label": {
                color: "#1c3e6e",
              },
            }}
            control={
              <Radio
                sx={{
                  color: "#828282",
                  padding: "8px",
                  "&.Mui-checked": {
                    color: "#1c3e6e",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 32,
                  },
                }}
                {...controlProps(label)}
              />
            }
            label={label}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;
