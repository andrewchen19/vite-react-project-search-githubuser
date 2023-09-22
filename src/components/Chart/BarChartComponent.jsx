import { useSelector } from "react-redux";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const BarChartComponent = () => {
  const { repos } = useSelector((store) => store.github);
  // console.log(repos);

  // reduce
  // 第一個參數是 callbackFn
  // 第二個參數是 initialValue
  // total = initialValue
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;

      // key 是數字，會自動由小到大排序 (動態的 key)
      // value 是 object
      // 若有重複的 key 時，前一個 value 會被覆蓋
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };

      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  // console.log(forks);

  // Object.values() 會拿到 array of objects (每個 value 都是 object)
  // .slice(-5) 選取最後五個 object (也就是最大的五個)
  // .reverse() 反轉，將最後五個從最大排序到最小
  forks = Object.values(forks).slice(-5).reverse();
  // console.log(forks);

  const dataSource = {
    chart: {
      // 標頭
      caption: "Most Forked",
      captionFontColor: "#102a42",
      // x 座標的文字
      xAxisName: "Repos",
      // y座標的文字
      yAxisName: "Forks",
      // hover plot 時，要顯示什麼文字
      plottooltext: "$label, $value",
      // 設定背景顏色
      bgColor: "#ffffff",
      theme: "fusion",
      // 可以自行提供顏色
      paletteColors:
        "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
    },
    data: forks,
  };

  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: 350,
    dataFormat: "json",
    dataSource,
  };

  return <ReactFC {...chartConfigs} />;
};

export default BarChartComponent;
