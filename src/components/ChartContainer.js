import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

import SelectField from "../components/SelectField";

const timeStamp = ["1 Jan - 1 Jun", "1 Jul - 1 Sep"];

function ChartContainer() {
  const [dropdown, setDropdown] = useState(false);
  const [time, setTime] = useState(timeStamp[0]);

  const handleChange = (arg) => {
    setTime(arg);
  };

  return (
    <div className="card border-0 h-100 chart-card">
      <div className="d-flex p-3 justify-content-between align-items-center">
        <h6 className="font-weight-bold">Today: 5, Aug 2018</h6>
        <div className="nav-group d-flex">
          <SelectField
            data={timeStamp}
            inputState={time}
            dropDown={dropdown}
            setDropDown={setDropdown}
            handleInputState={handleChange}
            containerClassName="dropdown-container"
          />
          <div className="d-flex mt-2 ml-4">
            <a href="/" className="btn nav-btn">
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
            <a href="/" className="btn nav-btn">
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-3 chart">
        <div className="row mx-auto h-100">
          <div className="col-md-2">
            <h5>Jan</h5>
          </div>
          <div className="col-md-2">
            <h5>Feb</h5>
          </div>
          <div className="col-md-2">
            <h5>Mar</h5>
          </div>
          <div className="col-md-2">
            <h5>Apr</h5>
          </div>
          <div className="col-md-2">
            <h5>May</h5>
          </div>
          <div className="col-md-2">
            <h5>Jun</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartContainer;
