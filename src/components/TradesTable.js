import React from "react";

import { TradesTableStyle } from "../styles/MonitorStyles";
import TableRow from "./TableRow";
import payments from "../payments.json";
import TableNav from "./TableNav";

function TradesTable() {
  return (
    <>
      <TradesTableStyle className="card w-100 p-0 trades-table-card">
        <table className="table">
          <thead className="table-head">
            <tr className="table-row">
              <th>Item Type</th>
              <th>Price</th>
              <th>Transaction No</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((c) => (
              <TableRow
                product={c.product}
                price={c.price}
                transactionNumber={c.transactionNumber}
                status={c.status}
                time={c.time}
              />
            ))}
          </tbody>
        </table>
      </TradesTableStyle>
      <TableNav />
    </>
  );
}

export default TradesTable;
