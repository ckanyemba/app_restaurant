import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({
  title,
  data,
  dataKey,
  grid,
}: {
  title: any;
  data: any;
  dataKey: any;
  grid: any;
}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      {/* if the width is 4 units, then the height will be 1 unit */}
      {/* if the width is 400px, then the height will be 100px */}
      <ResponsiveContainer width={"100%"} aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={"name"} stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          {/* <Legend /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
