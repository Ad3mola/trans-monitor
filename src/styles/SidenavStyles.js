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
    background: ${(props) => props.theme.sideActiveBg};
    border-left: 3px solid ${(props) => props.theme.sideActiveBorder};
  }
  .btn-container,
  .link,
  p {
    padding-left: 2.6em;
  }
  .invoice-button {
    background: ${props => props.theme.invoiceBg};
    border-radius: 30px;
    width: 163px;
    height: 33px;
    font-size: 12px;
    color: white;
    letter-spacing: 0.2px;
  }
`;

export default SidenavStyle;
