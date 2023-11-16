import { Switch, styled, FormControlLabel, Divider } from "@mui/material";

const Toggle = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 52,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(26px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#1c3e6e",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: "#39393D",
    opacity: 1,
  },
}));
export default function Tolerance() {
  return (
    <div className="flex flex-row items-center my-1">
      <FormControlLabel control={<Toggle defaultChecked sx={{ m: 1 }} />} />
      <div className="text-skyhop-blue mr-3">Toggle ON</div>
      <Divider
        orientation="vertical"
        flexItem
        variant="middle"
        sx={{ backgroundColor: "#cacfdc", width:"2px" }}
      />
      <div className="flex flex-row">
        <div className="mx-4">Picture</div>
        <div className="text-skyhop-blue ">Select Tolerance Level</div>
      </div>
    </div>
  );
}
