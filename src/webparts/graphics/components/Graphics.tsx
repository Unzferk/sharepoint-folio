import * as React from "react";
import {
  Pie,
  Cell,
  PieChart,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import styles from "./Graphics.module.scss";
import { IGraphicsProps } from "./IGraphicsProps";
import {
  bardata,
  pieManWoman,
  pieMan,
  pieWoman,
  bardataman,
  bardatawoman,
  pieD,
} from "./fakedata";

const Graphics: React.FC<IGraphicsProps> = () => {
  const [barchart, setBarchart] = React.useState(bardata);
  const [piechart, setPiechart] = React.useState(pieD);
  const [barchartColor, setBarchartColor] = React.useState("#5192ca");

  const setValue = (key: string) => {
    if (key === "global") {
      setBarchart(bardata);
      setPiechart(pieD);
      setBarchartColor("#5192ca");
    } else if (key === "man") {
      setBarchart(bardataman);
      setPiechart(pieMan);
      setBarchartColor("#8884d8");
    } else if (key === "woman") {
      setBarchart(bardatawoman);
      setPiechart(pieWoman);
      setBarchartColor("#82ca9d");
    } else {
      setBarchart(bardata);
      setPiechart(pieD);
      setBarchartColor("#5192ca");
    }
  };

  return (
    <>
      <div>
        <h2 style={{ cursor: "pointer" }} onClick={() => setValue("global")}>
          We have a YOUNG community!
        </h2>
        <p />
      </div>
      <div className={styles["graphics-container"]}>
        <BarChart
          width={300}
          height={200}
          data={barchart}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="age"
            fill={barchartColor}
            background={{ fill: "#eee" }}
          />
        </BarChart>

        <PieChart width={220} height={210}>
          <Pie
            startAngle={-270}
            endAngle={90}
            data={piechart}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="60%"
            dataKey="value"
            label
          >
            <Cell fill={barchartColor} />
            <Cell fill="#E8E6E6" />
          </Pie>
        </PieChart>

        <PieChart width={220} height={210}>
          <Pie
            startAngle={-270}
            endAngle={90}
            data={pieManWoman}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="60%"
            dataKey="value"
            label
          >
            <Cell
              fill="#8884d8"
              onClick={() => {
                setValue("man");
              }}
              style={{ cursor: "pointer" }}
            />
            <Cell
              fill="#82ca9d"
              onClick={() => {
                setValue("woman");
              }}
              style={{ cursor: "pointer" }}
            />
            <Legend />
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default Graphics;
