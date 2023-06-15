import React from "react";
import LineChartAnalytics from "../../components/chart/lineChart";
import LogTypeWidget from "../../components/logTypeWidget";
import LargeWidget from "../../components/widget/largeWidget";
import SmallWidget from "../../components/widget/smallWidget";
import styled from "styled-components";
import PieChartAnalytics from "../../components/chart/pieChart";

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Dashboard = ({ data, dataPie }) => {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <LogTypeWidget />
        <ChartContainer>
          <LineChartAnalytics
            title="Logs Analytics"
            data={data}
            dataKey="Active User"
            grid
          />
          <PieChartAnalytics 
            data={ dataPie }
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value" />
        </ChartContainer>
        <HomeWidgets>
          <SmallWidget />
          <LargeWidget />
        </HomeWidgets>
      </DashboardWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
