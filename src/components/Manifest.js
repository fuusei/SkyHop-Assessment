import {
  Button,
  Divider,
  styled,
  LinearProgress as MUILinearProgress,
} from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { linearProgressClasses } from "@mui/material/LinearProgress";

const LinearProgress = styled(MUILinearProgress)(() => ({
  height: 4,
  width: 450,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e5e5e5",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#f99d26",
  },
}));

export default function Manifest() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[500px] h-[250px] border-2 border-[#bfbfbf] rounded-lg">
        <div className="mx-4 mt-4 border-2 border-dashed border-[#bfbfbf] basis-2/3 rounded-lg"></div>
        <div className="basis-1/3 flex justify-center">
          <Button
            variant="contained"
            size="medium"
            sx={{
              textTransform: "none",
              margin: 2,
              fontSize: "16px",
              backgroundColor: "#1c3e6e",
              borderRadius: "8px",
              fontWeight: 550,
              width: 250,
              height: 40,
            }}
          >
            Upload Manifest
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <Divider flexItem sx={{ marginY: 2, width: 500 }} />
        <div className="flex flex-row w-full items-center">
          <TextSnippetIcon sx={{ fill: "#f99d26", scale: "1.5" }} />
          <div className="flex flex-col pl-5">
            <div className="flex flex-row justify-between">
                <div className="text-gray">
                    Enter a file...
                </div>
                <div className="text-sm">
                    {"0.0" + "MB"}
                </div>
            </div>
            <LinearProgress />
          </div>
        </div>
        <Divider flexItem sx={{ marginTop: 2, width: 500 }} />
      </div>
    </div>
  );
}
