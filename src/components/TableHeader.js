import React, { useState } from "react";

import SelectField from "../components/SelectField";
import { SearchIcon } from "../components/SVGs";

const paymentTypes = [
  "All",
  "Reconciled",
  "Un-reconciled",
  "Settled",
  "Unsettled",
];

function TableHeader() {
  const [dropdown, setDropdown] = useState(false);
  const [paymentType, setPaymentType] = useState(paymentTypes[0]);

  const handleChange = (arg) => {
    setPaymentType(arg);
  };

  return (
    <div className="table-nav">
      <div class="row">
        <div className="col-md-3">
          <small>
            Showing <span>20</span> out of 500 payments
          </small>
        </div>
        <div className="col-md-6 p-0">
          <div className="search-icon">
            <SearchIcon />
          </div>

          <input
            type="text"
            className="w-75 pl-4 payment-search"
            placeholder="Search payments"
          />
        </div>
        <div className="col-md-3 d-flex">
          <small className="mt-2 mr-2">Show</small>
          <SelectField
            data={paymentTypes}
            inputState={paymentType}
            dropDown={dropdown}
            setDropDown={setDropdown}
            handleInputState={handleChange}
            containerClassName="payment-dropdown-container"
          />
        </div>
      </div>
    </div>
  );
}

export default TableHeader;
