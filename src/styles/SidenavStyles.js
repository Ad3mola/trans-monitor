import styled from "styled-components";

const SidenavStyle = styled.div`
  font-size: 0.8rem;
  & a {
    display: block;
    margin: 0.5em 0;
    color: black;
    padding: 1em 0;
    width: 100%;
  }
  .active {
    background: rgba(24, 117, 240, 0.1);
    border-left: 3px solid #1875f0;
  }
  .btn-container,
  .link,
  p {
    padding-left: 2.6em;
  }
  .invoice-button {
    background: #27ae60;
    border-radius: 30px;
    width: 163px;
    height: 33px;
    font-size: 12px;
    color: white;
    letter-spacing: 0.2px;
  }
`;

export default SidenavStyle;
