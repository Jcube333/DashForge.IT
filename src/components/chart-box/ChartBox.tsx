import { Link } from "react-router-dom";
import "./chart-box.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};
export default function ChartBox(props: Props) {
  return (
    <div className="chart-box">
      <div className="box-info">
        <div className="box-top">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h2>{props.number}</h2>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>

      <div className="chart-info">
        {/* //Graph Container */}
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              {/* Tooltip For the data on hover */}
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                  fontSize: "10px",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 20, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="metrics">
          <span
            className="percentage"
            style={{ color: props.percentage >= 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage > 0 ? "+" + props.percentage : props.percentage}
          </span>
          <span className="duration">this-month</span>
        </div>
      </div>
    </div>
  );
}
