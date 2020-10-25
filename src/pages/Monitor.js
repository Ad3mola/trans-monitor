import React from "react";

import TransactionWrapper from "../components/TransactionWrapper";
import { MonitorStyle } from "../styles/MonitorStyles";
import ChartContainer from "../components/ChartContainer";

function Monitor() {
  return (
    <MonitorStyle className="container">
      <TransactionWrapper />
      <div className="my-4">
        <div className="row">
          <div className="col-md-8">
            <ChartContainer />
          </div>
          <div className="col-md-4 pl-0">
            cards
          </div>
        </div>
      </div>
    </MonitorStyle>
  );
}

export default Monitor;
