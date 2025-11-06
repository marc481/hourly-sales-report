import { useState } from "react";

function App() {
  const [totalSales, setTotalSales] = useState(``);
  const [startTime, setStartTime] = useState("6:00");
  const [endTime, setEndTime] = useState("14:00");

  return (
    <div className="bg-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold">Hourly Sales Calculator</h1>

      <div>
        <label> Total Sales</label>
        <input
          type="number"
          value={totalSales}
          onChange={(e) => setTotalSales(e.target.value)}
          placeholder="Enter Total Sales"
        />

        <div>
          <label>Enter Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div>
          <label>Enter End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
