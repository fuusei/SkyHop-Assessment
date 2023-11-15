import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ExitButton() {
  return (
    <Tooltip arrow title="I don't actually close." placement="bottom">
      <IconButton
        size="medium"
        sx={{
          backgroundColor: "#041c58",
          color: "white",
          borderRadius: "25%",
          "&.MuiIconButton-root:hover": {
            backgroundColor: "#1c3e6e",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
}
