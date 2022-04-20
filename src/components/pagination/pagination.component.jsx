import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const Pagination = (props) => {
  const cookies = new Cookies();
  const [getId, setId] = useState(cookies.get("id"));
  const [getToken, setToken] = useState(cookies.get("access_token"));

  const [isOnlyOnePage, setOnlyOnePage] = useState(true);
  const [isFirstPage, setFirstPage] = useState(true);
  const [getPagination, setPagination] = useState();

  useEffect(() => {
    if (props.data) {
      setPagination(props.data);
    }
  }, [props.data]);

  useEffect(() => {
    if (getPagination) {
      setOnlyOnePage(getPagination.pageNumber + 1 === getPagination.totalPage);
      setFirstPage(getPagination.pageNumber === 0);
    }
  }, [getPagination]);

  const clickHandler = (pageNumber) => {
    if (props.type === "share") {
      props.onPageChange(getId, getToken, pageNumber);
    } else if (props.type === "donation") {
      props.onPageChangeDonation(getId, getToken, pageNumber);
    } else if (props.type === "bazaar") {
      props.onPageChangeReward(getId, getToken, pageNumber);
    } else if (props.type === "userList") {
      props.onPageChange(getToken, pageNumber);
    } else if (props.type === "group") {
      props.loadGroups(pageNumber, getToken);
    } else if (props.type === "userListRole") {
      props.getAllUser(pageNumber);
    } else if (props.type === "recentBirthday") {
      props.onPageChangeRecentBirthday(getToken, pageNumber);
    } else if (props.type === "dist") {
      props.getHistoryDist(getId, getToken, pageNumber);
    }
  };

  const activePagination = (index) => {
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

  return getPagination ? (
    <nav aria-label="...">
      <ul className="pagination pagination-sm justify-content-center">
        <li className={`page-item ${isFirstPage ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => clickHandler(getPagination.pageNumber)}
          >
            Previous
          </a>
        </li>
        {[...Array(getPagination.totalPage)].map((x, i) => {
          const pageNumber = i + 1;
          const isCurrentPage = getPagination.pageNumber === i;
          return (
            <li
              id={x}
              key={i}
              className={`page-item ${isCurrentPage ? "active" : ""}`}
            >
              {isCurrentPage
                ? activePagination(pageNumber)
                : otherPagination(pageNumber)}
            </li>
          );
        })}
        <li className={`page-item ${isOnlyOnePage ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => clickHandler(getPagination.pageNumber + 2)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  ) : null;
};

export default Pagination;
