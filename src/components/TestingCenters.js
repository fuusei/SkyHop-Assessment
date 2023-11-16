import Dropdown from "./Dropdown";

export default function TestingCenters({ info }) {
  return (
    <div className="flex flex-col">
      {info.map(({ text, options }, i) => (
        <div key={i} className="flex flex-row items-center py-1">
          <div className="basis-1/2 text-skyhop-blue">{text}</div>
          <div className="basis-1/2 flex flex-row items-center">
            <Dropdown
              options={options}
              defaultText="Select Client"
              fontWeight={500}
              size="small"
              width="160px"
            />
            <div>Picture</div>
          </div>
        </div>
      ))}
    </div>
  );
}
