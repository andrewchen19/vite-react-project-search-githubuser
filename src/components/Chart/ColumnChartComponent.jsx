import { useSelector } from "react-redux";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ColumnChartComponent = () => {
  const { repos } = useSelector((store) => store.github);
  // console.log(repos);

  // reduce
  // 第一個參數是 callbackFn
  // 第二個參數是 initialValue
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;

      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };

      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  // console.log(stars);

  // Object.values() 會拿到 array of objects (每個 value 都是 object)
  // .slice(-5) 拿取最後五個 object
  // .reverse() 反轉，將最後五個從最大排到最小
  stars = Object.values(stars).slice(-5).reverse();
  // console.log(stars);

  const dataSource = {
    chart: {
      // 標頭
      caption: "Most Popular",
      captionFontColor: "#102a42",
      // x 座標的文字
      xAxisName: "Repos",
      // y座標的文字
      yAxisName: "Stars",
      // hover plot 時，要顯示什麼文字
      plottooltext: "$label, $value",
      // 設定背景顏色
      bgColor: "#ffffff",
      theme: "fusion",
      // 可以自行提供顏色
      paletteColors:
        "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
    },
    data: stars,
  };

  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: 350,
    dataFormat: "json",
    dataSource,
  };

  return <ReactFC {...chartConfigs} />;
};

export default ColumnChartComponent;
