import { useSelector } from "react-redux";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const PieChartComponent = () => {
  const { repos } = useSelector((store) => store.github);
  // console.log(repos);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});
  // console.log(languages);

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // console.log(mostUsed);

  const dataSource = {
    chart: {
      // 標頭
      caption: "Languages",
      captionFontColor: "#102a42",
      // hover plot 時，要顯示什麼文字
      plottooltext: "$label, $value",
      // plot 外面的輔助文字是否要和 plot 顏色相同 (0不用,1要)
      usedataplotcolorforlabels: "1",
      // 是否將 value 轉換成百分比 (0不用,1要)
      showpercentvalues: "1",
      // 是否要顯示 legend (0不用,1要)
      showlegend: "1",
      // legend 的位置
      legendposition: "bottom",
      // 調整 pie 的大小
      pieRadius: "40%",
      // 設定背景顏色
      bgColor: "#ffffff",
      theme: "fusion",
      // 可以自行提供顏色
      // paletteColors:"#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
    },
    data: mostUsed,
  };

  const chartConfigs = {
    type: "pie2d",
    width: "100%",
    height: 350,
    dataFormat: "json",
    dataSource,
  };

  return <ReactFC {...chartConfigs} />;
};

export default PieChartComponent;
