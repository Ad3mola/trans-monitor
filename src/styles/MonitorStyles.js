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
