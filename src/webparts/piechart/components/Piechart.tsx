import * as React from "react";

import { PieChart, Pie, Cell } from "recharts";

import { pieD } from "./fakedata";
import "./styles.css";
import { IPiechartProps } from "./IPiechartProps";

const Piechart: React.FC<IPiechartProps> = () => {
  return (
    <>
      <h2 className="title">Become one of us.</h2>
      <div className="linechart">700 people left to reach 6000 members!</div>
      <div className="linechart">
        <PieChart width={550} height={300}>
          <Pie
            startAngle={-270}
            endAngle={90}
            data={pieD}
            cx="35%"
            cy="50%"
            innerRadius="64%"
            outerRadius="78%"
            dataKey="value"
            label
          >
            <Cell
              fill="#5c3273"
              onClick={() => {
                window.alert("Hi, I'm an event :)");
              }}
            />
            <Cell fill="#E8E6E6" />
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default Piechart;
