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
    height: 40vh;
    width: 100%;
    .col-md-2 {
      border-right: 1px solid #cfe8fb;
      height: 100%;
      &:last-child {
        border: 0;
      }
    }
  }
`;
