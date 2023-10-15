import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../Data";
import BarChartBox from "../../components/bar-chart-BOX/BarChartBox";
import BigAreaChart from "../../components/big-area-chart/BigAreaChart";
import ChartBox from "../../components/chart-box/ChartBox";
import PieChartBox from "../../components/pie-chart-box/PieChartBox";
import TopDeals from "../../components/top-deals/TopDeals";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home-box home-box-1">
        <TopDeals />
      </div>
      <div className="home-box home-box-2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="home-box home-box-3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="home-box home-box-4">
        <PieChartBox />
      </div>
      <div className="home-box home-box-5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="home-box home-box-6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="home-box home-box-7">
        <BigAreaChart />
      </div>
      <div className="home-box home-box-8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="home-box home-box-9">
        {" "}
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}
