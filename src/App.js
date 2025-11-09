import { useState } from "react";

function App() {
  const [totalSales, setTotalSales] = useState("");
  const [startTime, setStartTime] = useState("6:00");
  const [endTime, setEndTime] = useState("14:00");

  return (
    <div className="bg-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Hourly Sales Calculator</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Total Sales</label>
        <input
          type="number"
          value={totalSales}
          onChange={(e) => setTotalSales(e.target.value)}
          className="w-full p-2 text-black rounded"
          placeholder="Enter total sales"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold"> Enter Start Time</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full p-2 text-black rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold"> Enter End Time</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full p-2 text-black rounded"
        />
      </div>
    </div>
  );
}
export default App;
