import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { linedata } from "./fakedata";
import "./styles.css";
import { ILinechartProps } from "./ILinechartProps";

const Linechart: React.FC<ILinechartProps> = () => {
  return (
    <>
      <h2 className="title">We are growing!</h2>
      <div className="linechart">
        Our customers increased more than we expected this YEAR!
      </div>
      <p />
      <div className="linechart">
        <LineChart
          width={350}
          height={200}
          data={linedata}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#038387"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line type="monotone" dataKey="expected" stroke="#5c3273" />
        </LineChart>
      </div>
    </>
  );
};

export default Linechart;
