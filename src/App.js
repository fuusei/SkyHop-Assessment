function App() {
  return (
    <div className="flex min-h-screen min-w-screen justify-center">
      <div className="bg-white rounded-[22px] min-h-full flex flex-col basis-3/4 my-[3%] p-10">
        <div>Exit</div>
        <div className="flex justify-center">Document Upload</div>
        <div className="flex flex-row">
          <div className="basis-3/5">
            <div className="flex flex-col">
              <div className="text-skyhop-blue font-bold">
                Select import name:
              </div>
              <div>Line</div>
              <div className="text-skyhop-blue font-bold">
                Select a manifest you'd like to import:
              </div>
              <div>Line</div>
              <div className="text-skyhop-blue font-bold">
                Elapse Data Checking:
              </div>
              <div className="text-success font-bold">No Elapsed Dates!</div>
              <div>Line</div>
              <div className="text-skyhop-blue font-bold">
                Tolerance Window:
              </div>
            </div>
          </div>
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="text-skyhop-blue font-bold">
                Split Schedule using social distancing?
              </div>
              <div>Line</div>
              <div className="text-skyhop-blue font-bold">
                Location Checking:
              </div>
              <div className="text-success font-bold">All Available!</div>
              <div>Line</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          Data in the import file is correct. Please press continue to import.
        </div>
        <div className="flex flex-row justify-center">
          <button className="p-4">Continue Import</button>
          <button className="p-4">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default App;
