import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import styled from 'styled-components'

const ChartContainer = styled.div`
  /* width: 1150px;
  height: 450px; */
  flex: 3.5;
  margin: 20px;
  padding: 20px;
  box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -webkit-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -moz-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  border-radius: 7px;
`;

const ChartTitle = styled.h3`
  margin-bottom: 30px;
  color: rgb(73, 140, 200);
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 75%;
`;

const LineChartAnalytics = ({ title, data, dataKey, grid}) => {
  return (
    <ChartContainer>
      <ChartTitle>{ title }</ChartTitle>
      <ChartWrapper>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={ data }>
            <XAxis dataKey="name" tick={{fontSize: 14}} stroke="rgb(73, 140, 200)" />
            <Tooltip />
            <Line type="monotone" dataKey={ dataKey } stroke="rgb(73, 140, 200)"/>
            { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/> }
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </ChartContainer>
  );
};

export default LineChartAnalytics;
