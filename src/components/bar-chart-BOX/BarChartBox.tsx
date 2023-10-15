import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./bar-chart.scss";

type Props = {
  color: string;
  title: string;
  dataKey: string;
  chartData: object[];
};
export default function BarChartBox(props: Props) {
  return (
    <div className="bar-chart-box">
      <h1 className="bar-chart-title">{props.title}</h1>

      <div className="bar-chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#222b3c", borderRadius: "10px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
