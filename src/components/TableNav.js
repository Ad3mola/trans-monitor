import React from "react";
import styled from "styled-components";

const TableNavStyle = styled.div`
  .pagination {
    border: 1px solid #ced0da;
    border-radius: 2px;
    a {
      color: black;
    }
  }
`;

function TableNav() {
  return (
    <TableNavStyle className="my-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <small>Showing 1 to 10 of 500 entries</small>
        </div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </TableNavStyle>
  );
}

export default TableNav;
