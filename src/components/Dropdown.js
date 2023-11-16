import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function Dropdown({
  options,
  defaultText,
  fontWeight,
  size,
  width,
}) {
  // designed for scalability

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl sx={{ width: width }} size={size}>
      <InputLabel
        sx={{
          color: "#1c3e6e",
          fontSize: "17px",
          fontWeight: fontWeight,
          paddingLeft: "3px",
          "&.MuiInputLabel-root.Mui-focused": {
            color: "#1c3e6e",
          },
        }}
      >
        {defaultText}
      </InputLabel>
      <Select
        value={value}
        label="Value"
        IconComponent={KeyboardArrowDownIcon}
        onChange={handleChange}
        input={
          <OutlinedInput
            label={defaultText}
            margin="dense"
            sx={{ padding: 4 }}
          />
        }
        sx={{
          "&.MuiOutlinedInput-root": { borderRadius: "10px" },
          ".MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1c3e6e",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1c3e6e",
          },
        }}
      >
        {options.map((option, i) => (
          <MenuItem value={i} key={i} sx={{ color: "#1c3e6e" }}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
