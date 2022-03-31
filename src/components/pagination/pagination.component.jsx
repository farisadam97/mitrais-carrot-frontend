import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const [isOnlyOnePage, setOnlyOnePage] = useState(true);

  useEffect(() => {
    setOnlyOnePage(props.pageNumber + 1 === props.totalPage);
  }, [props]);

  if (props == undefined || props.totalElement === 0) {
    return null;
  }

  const clickHandler = (pageNumber) => {
    props.onPageChange(pageNumber);
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
      <a className="page-link" href="#">
        {index}
      </a>
    );
  };

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm justify-content-center">
        <li className="page-item disabled">
          <a className="page-link">Previous</a>
        </li>
        {[...Array(props.totalPage)].map((x, i) => {
          const pageNumber = i + 1;
          const isCurrentPage = props.pageNumber === i;
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
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
