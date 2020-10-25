import styled from "styled-components";

import chartBackground from "../assets/Gradient.svg";

export const MonitorStyle = styled.div`
  height: 100%;
  .dropdown-container {
    width: 168px;
    height: 100%;
    border: 1px solid #dde0e3;
    border-radius: 4.25px;

    .form-control {
      color: #cccfd4;
      font-size: 0.9rem;
    }
  }
  .nav-btn {
    width: 18.93px;
    height: 19.38px;
    background: linear-gradient(0deg, #f2f4f7 0%, #ffffff 100%);
    border: 1px solid #ced0da;
    box-sizing: border-box;
    border-radius: 4px;
    color: #cccfd4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5em;
  }
  .chart {
    background-image: url(${chartBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
    .col-md-2 {
      border-right: 1px solid #cfe8fb;
      height: 100%;
      &:last-child {
        border: 0;
      }
    }
  }
  .payment-search {
    background: transparent;
    border: 0;
    border-bottom: 0.5px solid #787878;
    position: relative;
    &:focus {
      border-bottom: 1px solid black;
    }
    &::placeholder {
      color: #787878;
      font-size: 0.8rem;
    }
  }
  .search-icon {
    position: absolute;
    top: 0;
    left: 0;
  }
  .payment-dropdown-container {
    border: 1px solid #ced0da;
    border-radius: 2px;
    background: transparent;
    .dropdown-items {
      text-align: left;
      background-color: white;
      color: black;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
      border-radius: 0px 0px 6px 6px;
      border: 0;
      top: 20;
    }
    .input,
    input {
      background: transparent;
    }
  }
  
`;
export const TradesTableStyle = styled.div`
  .table-head {
    background: #eaeef0;
    border: 0;
    color: #bdbdbd;
    th {
      font-size: 0.8rem;
      font-weight: normal;
      color: #7f8fa4;
      border: 0;
    }
    td small {
      color: ${(props) => props.theme.lightBlack};
      font-weight: 700;
    }
  }
  .trader-name {
    color: ${(props) => props.theme.darkRed};
  }
  .table-icon {
    color: #cccfd4;
  }
  .dot {
    width: 9px;
    height: 9px;
    background: #27ae60;
    border-radius: 50%;
  }
  tbody tr {
    border-bottom: 1px solid #f2f2f2;
    /* background: #e5e5e5; */
    cursor: pointer;
    &:hover {
      background: #ffffff;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.06);
    }
  }
  tbody tr:last-child {
    border-bottom: 0;
  }
  .initials {
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #7f8fa4;
    color: white;
  }
  .status-container {
    width: 120px;
    height: 33px;
    border: 1px solid #cccfd4;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 0.52em;
    align-items: center;
    font-size: 0.8rem;
  }
  .Reconciled {
    color: #27ae60;
    .dot {
      background: #27ae60;
    }
  }
  .Pending {
    color: #ebc315;
    .dot {
      background: #ebc315;
    }
  }
  .Un-reconciled {
    color: #7f8fa4;
    .dot {
      background: #7f8fa4;
    }
  }

  @media (max-width: 576px) {
    .table-head {
      th {
        font-size: 0.8rem;
      }
    }
    td {
      font-size: 0.8rem;
    }
  }
`;
