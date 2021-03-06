import React from "react";

function TransactionCard({ title = "title", figure = "figure" }) {
  return (
    <div className="card transaction-card">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <div className="col-8 pr-0">
          <small className="text-muted">{title}</small>
          <h4>{figure}</h4>
        </div>
        <div className="col-4">
          <svg
            width="64"
            height="38"
            viewBox="0 0 64 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
              stroke="#0294FF"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="5.98077"
                y1="13.257"
                x2="5.98077"
                y2="44.3122"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0294FF" stop-opacity="0.126274" />
                <stop offset="1" stop-color="white" stop-opacity="0.01" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;
