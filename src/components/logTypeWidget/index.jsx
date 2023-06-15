import React from "react";
import styled from "styled-components";

const LogTypeWidgetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LogTypeWidgetItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -webkit-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -moz-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
`;

const LogTypeWidgetTitle = styled.span`
  font-size: 20px;
  color: rgb(73, 140, 200);
`;

const LogTypeWidgetINumberContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogTypeWidgetMoney = styled.div`
  font-size: 40px;
  font-weight: 20px;
  margin-left: 60px;
  color: rgb(42, 154, 252);
`;

const LogTypeWidgetMoneyRate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: gray;
`;

const LogTypeWidgetSub = styled.div`
  font-size: 15px;
  color: gray;
`;

const LogTypeWidget = ({ compareTitle="last month" }) => {
  return (
    <LogTypeWidgetContainer>
      <LogTypeWidgetItem>
        <LogTypeWidgetINumberContainer>
          <LogTypeWidgetTitle>Service Request</LogTypeWidgetTitle>
          <LogTypeWidgetMoney>800</LogTypeWidgetMoney>
          {/* <LogTypeWidgetMoneyRate>-11.45</LogTypeWidgetMoneyRate> */}
        </LogTypeWidgetINumberContainer>
        <LogTypeWidgetSub>Compared to { compareTitle }</LogTypeWidgetSub>
      </LogTypeWidgetItem>
      <LogTypeWidgetItem>
        <LogTypeWidgetINumberContainer>
          <LogTypeWidgetTitle>Change Request</LogTypeWidgetTitle>
          <LogTypeWidgetMoney>200</LogTypeWidgetMoney>
          {/* <LogTypeWidgetMoneyRate>-11.45</LogTypeWidgetMoneyRate> */}
        </LogTypeWidgetINumberContainer>
        <LogTypeWidgetSub>Compared to { compareTitle }</LogTypeWidgetSub>
      </LogTypeWidgetItem>
      <LogTypeWidgetItem>
        <LogTypeWidgetINumberContainer>
          <LogTypeWidgetTitle>Incident</LogTypeWidgetTitle>
          <LogTypeWidgetMoney>200</LogTypeWidgetMoney>
          {/* <LogTypeWidgetMoneyRate>-11.45</LogTypeWidgetMoneyRate> */}
        </LogTypeWidgetINumberContainer>
        <LogTypeWidgetSub>Compared to { compareTitle }</LogTypeWidgetSub>
      </LogTypeWidgetItem>
      <LogTypeWidgetItem>
        <LogTypeWidgetINumberContainer>
          <LogTypeWidgetTitle>Inflation</LogTypeWidgetTitle>
          <LogTypeWidgetMoney>300</LogTypeWidgetMoney>
          {/* <LogTypeWidgetMoneyRate>-11.45</LogTypeWidgetMoneyRate> */}
        </LogTypeWidgetINumberContainer>
        <LogTypeWidgetSub>Compared to { compareTitle }</LogTypeWidgetSub>
      </LogTypeWidgetItem>
    </LogTypeWidgetContainer>
  );
};

export default LogTypeWidget;
