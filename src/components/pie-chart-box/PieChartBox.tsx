import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pie-chart-box.scss";
export default function PieChartBox() {
  const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];
  return (
    <div className="pie-chart-box">
      <h1 className="title">Source based Leads</h1>

      <div className="chart">
        <ResponsiveContainer width="100%" height="60%">
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="labels">
        {data.map((item) => (
          <div className="item">
            <div className="item-desc">
              <div
                className="item-color"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name}</span>
            </div>
            <div className="number">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
