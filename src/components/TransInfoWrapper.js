import React from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";

const TransWrapperStyle = styled.div`
  .progress {
    height: 4px;
    background: #fdc203;
  }
  .progress-bar {
    background-color: #27ae60;
  }
  .transaction-info-card {
    border: 0;
    ul {
      list-style-type: none;
      p {
        margin-bottom: 0.7em;
        span {
          font-weight: bold;
        }
      }
    }
  }
  .yellow {
    color: #fdc203;
  }
  .green {
    color: #27ae60;
  }
  .blue {
    color: blue;
  }
`;

function TransInfoWrapper() {
  return (
    <TransWrapperStyle>
      <div className="card transaction-info-card p-3">
        <h6 className="font-weight-bold">Orders</h6>
        <ProgressBar now={80} className="progress" />
        <ul className="mt-3 mb-0">
          <li>
            <p>
              Pending Orders: <span className="yellow">20</span>
            </p>
          </li>
          <li>
            <p>
              Reconciled Orders: <span className="green">80</span>
            </p>
          </li>
          <li>
            <p>
              Total Orders: <span className="blue">100</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="card mt-2 transaction-info-card p-3">
        <h6 className="font-weight-bold">Paymnents</h6>
        <ProgressBar now={80} className="progress" />
        <ul className="mt-3 mb-0">
          <li>
            <p>
              Un-green Payments: <span className="yellow">20</span>
            </p>
          </li>
          <li>
            <p>
              Reconciled Payments: <span className="green">80</span>
            </p>
          </li>
          <li>
            <p>
              Total Payments: <span className="blue">100</span>
            </p>
          </li>
        </ul>
      </div>
    </TransWrapperStyle>
  );
}

export default TransInfoWrapper;
