import React from "react";

import TransactionWrapper from "../components/TransactionWrapper";
import { MonitorStyle } from "../styles/MonitorStyles";

function Monitor() {
  return (
    <MonitorStyle className="container">
      <TransactionWrapper />
    </MonitorStyle>
  );
}

export default Monitor;
