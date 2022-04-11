import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import ContainerContent from "../../../components/container/container.component";
import HistoryItem from "../../../components/history/shared.component";
import { connect } from "react-redux";
import FilterComponent from "../../../components/history/filter.component";
import Basket from "../../../components/basket/basket.component";
import HistoryTitle from "../../../components/text/historyTitle.component";
import Footer from "../../../components/footer/footer.component";
import Pagination from "../../../components/pagination/pagination.component";
import * as date from "../../../utils/date/date.util";

const HistoryTransaction = (props) => {
  useEffect(() => {
    const startDate = date.GetCurrentDate("-");
    const endDate = startDate;
    props.loadHistories(startDate, endDate);
  }, []);

  useEffect(() => {
    if (props.error) {
      alert(props.error, "please try again!");
    }
  }, [props]);

  return (
    <div>
      {/* <NavbarComponent />
      <Container> */}
        <HistoryTitle title="History Transactions" />
        <Basket />
        <ContainerContent>
          <FilterComponent {...props} />
          <div className="row mt-3">
            <HistoryItem lists={props.lists} isLoading={props.isLoading} />
            <Pagination {...props.pagination} />
          </div>
        </ContainerContent>
      {/* </Container> */}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.history.lists,
    isLoading: state.history.isLoading,
    error: state.history.error,
    pagination: state.history.pagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadHistories: (startDate, endDate) => {
      if (startDate === "") {
        startDate = date.GetCurrentDate("-");
      }
      if (endDate === "") {
        endDate = startDate;
      }
      return dispatch({
        type: "GetSharedHistory",
        payload: {
          url: "/history/shared/5",
          method: "POST",
          data: {
            startDate: startDate,
            endDate: endDate,
            fields:
              "id, sender_name, receiver_name, shared_at, amount_shared, message",
            pageNumber: "0",
            pageSize: "10",
            sortBy: "shared_at",
            sortDir: "desc",
          },
        },
      });
    },
    onPageChange: (pageNumber, startDate, endDate) => {
      if (startDate === "") {
        startDate = date.GetCurrentDate("-");
      }
      if (endDate === "") {
        endDate = startDate;
      }
      return dispatch({
        type: "GetSharedHistory",
        payload: {
          url: "/history/shared/5",
          method: "POST",
          data: {
            startDate: startDate,
            endDate: endDate,
            fields:
              "id, sender_name, receiver_name, shared_at, amount_shared, message",
            pageNumber: pageNumber - 1,
            pageSize: "10",
            sortBy: "shared_at",
            sortDir: "desc",
          },
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTransaction);
