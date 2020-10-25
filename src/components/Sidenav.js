import React from "react";
import SidenavStyle from "../styles/SidenavStyles";
import {
  ManualIcon,
  MerchantIcon,
  OrdersIcon,
  OverviewIcon,
  PendingOrdersIcon,
  ReconciledIcon,
  ReconciledOrdersIcon,
  UnreconciledIcon,
  WalletIcon,
} from "./SVGs";

function Sidenav() {
  return (
    <SidenavStyle>
      <div className="mt-5 d-flex flex-column justify-content-center">
        <div className="btn-container">
          <a
            href="/"
            className="btn my-auto py-2 font-weight-bold invoice-button"
          >
            GENERATE INVOICE
          </a>
        </div>

        <div className="mt-5 link-category">
          <div className="main-category">
            <p>Main</p>
            <a href="/" className="link active">
              <OverviewIcon />
              <span className="ml-4">Overview</span>
            </a>
          </div>
          <div className="payment-category mt-5">
            <p>Payments</p>
            <a href="/" className="link">
              <WalletIcon />
              <span className="ml-4">All Payments</span>
            </a>
            <a href="/" className="link">
              <ReconciledIcon />
              <span className="ml-4">Reconciled Payments</span>
            </a>
            <a href="/" className="link">
              <UnreconciledIcon />
              <span className="ml-4">Un - Reconciled Payments</span>
            </a>
            <a href="/" className="link">
              <ManualIcon />
              <span className="ml-4">Manual Settlement</span>
            </a>
          </div>
          <div className="orders-category mt-5">
            <p>Orders</p>
            <a href="/" className="link">
              <OrdersIcon />
              <span className="ml-4">All Orders</span>
            </a>
            <a href="/" className="link">
              <PendingOrdersIcon />
              <span className="ml-4">Pending Orders</span>
            </a>
            <a href="/" className="link">
              <ReconciledOrdersIcon />
              <span className="ml-4">Reconciled Orders</span>
            </a>
          </div>
          <div className="merchant-profile mt-3">
            <a href="/" className="link">
              <MerchantIcon />
              <span className="ml-4">Merchant Profile</span>
            </a>
          </div>
        </div>
      </div>
    </SidenavStyle>
  );
}

export default Sidenav;
