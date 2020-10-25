import React from "react";
import Collapse from "react-bootstrap/Collapse";

import styled from "styled-components";

const DropdownItems = styled.div`
  border: 1px solid gray;
  min-width: 200px;
  /*
  margin: 0 auto;
  text-align: center;
  position: absolute; */
  /* top: 30px; */
  /* a:hover {
      background: #f0eceb;
      text-decoration: none;
    } */
  background-color: white;
  z-index: 500;
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    outline: 1px solid #b50543;
  }
`;

function Dropdown({ dropdown, children, setDropdown, className }) {
  return (
    <Collapse in={dropdown}>
      <DropdownItems
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        onClick={() => setDropdown(!dropdown)}
        className={className}
      >
        {children}
      </DropdownItems>
    </Collapse>
  );
}

export default Dropdown;
