import React from "react";

import TransactionWrapper from "../components/TransactionWrapper";
import { MonitorStyle } from "../styles/MonitorStyles";
import ChartContainer from "../components/ChartContainer";
import TransInfoWrapper from "../components/TransInfoWrapper";
import TableHeader from "../components/TableHeader";
import TradesTable from "../components/TradesTable";

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
          <TransInfoWrapper />
          </div>
        </div>
      </div>
      <div className="my-4">
        <h2>Payments</h2>
        <TableHeader />
      </div>
      <TradesTable />
    </MonitorStyle>
  );
}

export default Monitor;
