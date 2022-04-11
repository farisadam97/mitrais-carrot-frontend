import React, { useState, useEffect } from "react";

const Pagination = ({type, pagination, ...props}) => {
  const [isOnlyOnePage, setOnlyOnePage] = useState(true);
  const [isFirstPage, setFirstPage] = useState(true);

  useEffect(() => {
    setOnlyOnePage(pagination.pageNumber + 1 === pagination.totalPage);
    setFirstPage(pagination.pageNumber === 0);
  }, [pagination]);

  if (pagination == undefined || pagination.totalData === 0) {
    return null;
  }

  const clickHandler = (pageNumber) => {
    if (type === "share") {
      props.onPageChange(pageNumber);
    } else if (type === "donation") {
      props.onPageChangeDonation(pageNumber);
    } else if (type === "bazaar") {
      props.onPageChangeReward(pageNumber);
    } else if (type === "userList") {
      props.onPageChange(pageNumber);
    }
  };

  const activePagination = (index, isCurrentPage) => {
    return (
      <span className="page-link">
        {index}
        <span className="sr-only">(current)</span>
      </span>
    );
  };

  const otherPagination = (index) => {
    return (
      <a className="page-link" href="#" onClick={() => clickHandler(index)}>
        {index}
      </a>
    );
  };

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm justify-content-center">
        <li className={`page-item ${isFirstPage ? "disabled" : ""}`}>
          <a className="page-link" href="#" onClick={() => clickHandler(pagination.pageNumber)}>Previous</a>
        </li>
        {[...Array(pagination.totalPage)].map((x, i) => {
          const pageNumber = i + 1;
          const isCurrentPage = pagination.pageNumber === i;
          return (
            <li
              id={x}
              key={i}
              className={`page-item ${isCurrentPage ? "active" : ""}`}
            >
              {isCurrentPage
                ? activePagination(pageNumber, isCurrentPage)
                : otherPagination(pageNumber)}
            </li>
          );
        })}
        <li className={`page-item ${isOnlyOnePage ? "disabled" : ""}`}>
          <a className="page-link" href="#" onClick={() => clickHandler(pagination.pageNumber+2)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
