import { Button } from "@mui/material";
import {
  Divider,
  Dropdown,
  RadioGroup,
  ExitButton,
  Manifest,
  Tolerance,
  TestingCenters,
} from "./components";

function App() {
  return (
    <div className="flex min-h-screen min-w-screen justify-center">
      <div className="bg-white shadow-xl rounded-[22px] min-h-full flex flex-col basis-2/3 my-[3%] px-10 py-6">
        <div className="flex">
          <ExitButton />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center text-skyhop-blue text-4xl font-bold">
            Document Upload
          </div>
          <Divider />
        </div>
        {/* two column container */}
        <div className="flex flex-row mt-9 mx-10">
          {/* left column */}
          <div className="basis-3/5 mx-4">
            <div className="flex flex-col">
              <Dropdown
                options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                defaultText="Select Import Name:"
                fontWeight={700}
                size="small"
                width="550px"
              />
              <Divider />
              <div className="text-skyhop-blue font-bold mb-2">
                Select a manifest you'd like to import
              </div>
              <Manifest />
              <Divider />
              <div className="text-skyhop-blue font-bold">
                Elapse Data Checking:
              </div>
              <div className="text-success font-bold">No Elapsed Dates!</div>
              <Divider />
              <div className="text-skyhop-blue font-bold">
                Tolerance Window:
              </div>
              <Tolerance />
            </div>
          </div>
          {/* right column */}
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="text-skyhop-blue font-bold">
                Split Schedule using social distancing?
              </div>
              <RadioGroup options={["Yes", "No"]} />
              <Divider />
              <div className="text-skyhop-blue font-bold">
                Location Checking:
              </div>
              <div className="text-success font-bold">All Available!</div>
              <Divider />
              <div className="text-skyhop-blue font-bold">Client:</div>
              <RadioGroup options={["Single", "Multiple"]} />
              <TestingCenters
                info={[
                  {
                    text: "Testing Center 1",
                    options: ["Wendy's", "McDonalds", "Burger King"],
                  },
                  {
                    text: "Testing Center 2",
                    options: ["Optometrist", "Pediatrician", "Pulmonologist"],
                  },
                  {
                    text: "Testing Center 3",
                    options: ["Water", "Soda", "Juice"],
                  },
                  {
                    text: "Testing Center 4",
                    options: ["Chest", "Triceps", "Back"],
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center text-skyhop-blue font-[750] text-lg mt-8 mb-3">
          Data in the import file is correct. Please press Continue to import.
        </div>
        <div className="flex flex-row justify-center">
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              paddingX: 7,
              paddingY: 1,
              margin: 2,
              backgroundColor: "#1c3e6e",
              borderRadius: "8px",
              fontWeight: 550,
              width: 250,
              height: 54,
            }}
          >
            Continue Import
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              textTransform: "none",
              paddingX: 7,
              margin: 2,
              color: "#f99d26",
              borderColor: "#f99d26",
              borderRadius: "8px",
              fontWeight: 550,
              width: 250,
              borderWidth: 2,
              "&.MuiButton-root:hover": {
                backgroundColor: "#f99d26",
                borderWidth: 2,
                borderColor: "#f99d26",
                color: "white",
              },
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
