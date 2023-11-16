import Dropdown from "./Dropdown";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export default function TestingCenters({ info }) {
  return (
    <div className="flex flex-col">
      {info.map(({ text, options }, i) => (
        <div key={i} className="flex flex-row items-center py-2">
          <div className="basis-1/2 text-skyhop-blue  text-lg">{text}</div>
          <div className="basis-1/2 flex flex-row items-center">
            <Dropdown
              options={options}
              defaultText="Select Client"
              fontWeight={500}
              size="medium"
              width="170px"
            />
            <QueryBuilderIcon sx={{ marginX: 1, fill: "#1c3e6e" }} />
          </div>
        </div>
      ))}
    </div>
  );
}
