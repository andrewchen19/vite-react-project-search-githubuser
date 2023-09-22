import {
  BarChartComponent,
  ColumnChartComponent,
  DoughnutChartComponent,
  PieChartComponent,
} from "../components/Chart";

import styled from "styled-components";

const Repos = () => {
  return (
    <Wrapper>
      <PieChartComponent />
      <ColumnChartComponent />
      <DoughnutChartComponent />
      <BarChartComponent />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  column-gap: 1rem;
  row-gap: 3rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  /* 一定要這樣設定，否則 chart 會跑版 */
  /* 這邊三個 element 可以從 devTool 查看 */
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
