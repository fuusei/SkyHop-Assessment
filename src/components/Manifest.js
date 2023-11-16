import {
  Button,
  Divider,
  styled,
  LinearProgress as MUILinearProgress,
} from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";
import { PiFileTextFill } from "react-icons/pi";

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

let timer = undefined;

export default function Manifest() {
  const [fileName, setFileName] = useState("Enter a file...");
  const [fileSize, setFileSize] = useState("0");
  const [progress, setProgress] = useState(0);
  const [startProgress, setStartProgress] = useState(false);

  useEffect(() => {
    if (startProgress) {
      timer = setInterval(() => {
        setProgress((prev) => {
          const diff = Math.random() * 30;
          return Math.min(prev + diff, 100);
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
  }, [startProgress]);

  useEffect(() => {
    if (progress === 100) {
      setStartProgress(false);
      clearInterval(timer);
    }
  }, [progress]);

  const toReadableSize = (size) => {
    var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      ["B", "kB", "MB", "GB", "TB"][i]
    );
  };

  const handleChange = (file) => {
    if (!file) return;
    setFileName(file.name);
    setFileSize(toReadableSize(Number(file.size)));
    setProgress(0);
    setTimeout(setStartProgress(true), 1000);
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleChange(e.dataTransfer.files[0]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[500px] h-[250px] border-2 border-[#bfbfbf] rounded-lg">
        <form
          className="mx-4 mt-4 border-2 border-dashed border-[#bfbfbf] basis-2/3 rounded-lg"
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input type="file" hidden id="input" />
          <label
            className="h-full w-full flex flex-col justify-center"
            htmlFor="input"
          >
            <div className="flex justify-center mb-2">
              <PiFileTextFill color="#f99d26" fontSize="1.8em" />
            </div>
            <div className="flex flex-row justify-center">
              <div className="text-skyhop-blue font-semibold mr-1">
                Drag & Drop Here or
              </div>
              <div className="text-skyhop-blue font-extrabold">Browse</div>
            </div>
          </label>
        </form>
        <div className="basis-1/3 flex justify-center">
          <Button
            variant="contained"
            size="medium"
            component="label"
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
            <input
              type="file"
              hidden
              onChange={(e) => handleChange(e.target.files[0])}
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <Divider flexItem sx={{ marginY: 2, width: 500 }} />
        <div className="flex flex-row w-full items-center">
          <TextSnippetIcon sx={{ fill: "#f99d26", scale: "1.5" }} />
          <div className="flex flex-col pl-5">
            <div className="flex flex-row justify-between">
              <div className="text-gray">{fileName}</div>
              <div className="text-sm">
                {fileSize === "0" ? fileSize + "MB" : fileSize}
              </div>
            </div>
            <LinearProgress variant="determinate" value={progress} />
          </div>
        </div>
        <Divider flexItem sx={{ marginTop: 2, width: 500 }} />
      </div>
    </div>
  );
}
