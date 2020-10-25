import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

function TableRow({ product, price, transactionNumber, time, status }) {
  return (
    <tr>
      <td className="pr-0">
        <div className="d-flex align-items-center ml-2">
          <div className="initials">
            <small>VW</small>
          </div>
          <small className="text-muted ml-4">{product}</small>
        </div>
      </td>
      <td>
        <div>
          <small className="text-muted">{price}</small>
        </div>
      </td>
      <td>
        <div>
          <small className="text-muted">{transactionNumber}</small>
        </div>
      </td>
      <td>
        <div>
          <small className="text-muted">{time}</small>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center justify-content-between mr-2">
          <div className={"status-container " + status}>
            <div className="mr-3 dot "></div>
            <smal className={status}>{status}</smal>
          </div>
          <FontAwesomeIcon icon={faAngleDown} className="table-icon " />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
