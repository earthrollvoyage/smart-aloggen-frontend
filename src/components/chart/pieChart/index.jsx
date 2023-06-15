import React, { useState } from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const ChartContainer = styled.div`
  flex: 3.5;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 20px;
  padding: 20px;
  box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -webkit-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -moz-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  border-radius: 7px;
`;

const PieChartAnalytics = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={50} height={400}>
          <Pie
            activeIndex={activeIndex}
            // activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default PieChartAnalytics;
