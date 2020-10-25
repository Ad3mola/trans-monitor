import React from "react";
import Dropdown from "../components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import styled from "styled-components";

const Select = styled.div`
  position: relative;
  .form-gorup {
    position: relative;
  }

  .input {
    display: flex;
    background: white;
    color: #cccfd4;
    padding: 0.1em;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    height: 31px;
    /* border: ${(props) =>
      props.dropDown ? `1px solid ${props.theme.darkRed}` : `none`}; */
    input {
      border: 0;
      width: 100%;
      height: 100% !important;
      cursor: pointer;
      &:focus {
        box-shadow: none !important;
        border: none !important;
      }
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .dropdown-items {
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 29px;
    right: 0;
    min-width: 0;
    width: 100%;
    border-radius: 0 0 4px 4px;
    max-height: 160px;
    overflow-y: auto;
    border-top: 0;

    ul {
      list-style-type: none;
      li {
        padding: 0.9em 0.5em;
        &:hover {
          background: #f0eceb;
        }
      }
    }
  }
`;

function SelectField({
  data,
  inputState,
  handleInputState,
  dropDown,
  setDropDown,
  containerClassName,
  placeholder,
  inputClassName,
  FieldContainerClassName,
}) {
  return (
    <Select className={"form-group " + containerClassName} dropDown={dropDown}>
      <div
        className={"input " + FieldContainerClassName}
        onClick={() => setDropDown(!dropDown)}
        onMouseLeave={() => setDropDown(false)}
      >
        <input
          readOnly
          type="text"
          value={inputState}
          placeholder={placeholder}
          className={"form-control " + inputClassName}
          aria-describedby="amountInput"
        />
        <span className="pr-3">
          <FontAwesomeIcon
            icon={dropDown ? faAngleUp : faAngleDown}
            className=" ml-2"
          />
          <Dropdown
            dropdown={dropDown}
            setDropdown={setDropDown}
            className="dropdown-items"
          >
            <ul className="m-0 p-0">
              {data.map((each, index) => (
                <li key={index} onClick={(e) => handleInputState(each)}>
                  {each}
                </li>
              ))}
            </ul>
          </Dropdown>
        </span>
      </div>
    </Select>
  );
}

export default SelectField;
