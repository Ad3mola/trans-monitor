import React from "react";
import styled from "styled-components";

import TransactionCard from "./TransactionCard";

const WrapperStyle = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;

  .transaction-card {
    width: 253px;
    height: 75px;
    border: 0;
    display: inline-block;
    margin-right: 0.5em;
  }
`;

const transactions = [
  {
    title: "Daily Transaction Volume",
    figure: "2,342",
  },
  {
    title: "Daily Transaction Value",
    figure: "₦4,000,000",
  },
  {
    title: "Total Transaction Volume",
    figure: "452,000",
  },
  {
    title: "Total Transaction Value",
    figure: "₦4, 000,000",
  },
];

function TransactionWrapper() {
  return (
    <WrapperStyle className="mt-5 scrolling-wrapper">
      {transactions.map((c) => (
        <TransactionCard key={c.title} title={c.title} figure={c.figure} />
      ))}
    </WrapperStyle>
  );
}

export default TransactionWrapper;
