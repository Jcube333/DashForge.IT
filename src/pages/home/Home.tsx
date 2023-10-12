import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../Data";
import ChartBox from "../../components/chart-box/ChartBox";
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
      <div className="home-box home-box-4">4</div>
      <div className="home-box home-box-5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="home-box home-box-6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="home-box home-box-7">7</div>
      <div className="home-box home-box-8">8</div>
      <div className="home-box home-box-9">9</div>
    </div>
  );
}
