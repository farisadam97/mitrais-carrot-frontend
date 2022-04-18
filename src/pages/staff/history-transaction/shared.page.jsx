import NavbarComponent from "../../../components/navbar/navbar.component";
import React, { useEffect, useState } from "react";
import Container from "../../container";
import ContainerContent from "../../../components/container/container.component";
import HistoryItem from "../../../components/history/shared.component";
import { connect } from "react-redux";
import FilterComponent from "../../../components/history/filter.component";
import Basket from "../../../components/basket/basket.component";
import HistoryTitle from "../../../components/text/historyTitle.component";
import Pagination from "../../../components/pagination/pagination.component";
import * as date from "../../../utils/date/date.util";
import DonationHistoryItem from "../../../components/history/donation.component";
import RewardHistoryItem from "../../../components/history/reward.component";
import Cookies from "universal-cookie";

const HistoryTransaction = (props) => {
  const cookies = new Cookies();
  const [getToken, setToken] = useState(cookies.get('access_token'));
  const [getId, setId] = useState(cookies.get('id'));
  const [getStartDate, setStartDate] = useState(date.GetLastMonthDate("-"));
  const [getEndDate, setEndDate] = useState(date.GetCurrentDate("-"));

  useEffect(() => {
    props.loadHistories(getId, getToken, getStartDate, getEndDate);
  }, []);

  useEffect(() => {
    if (props.error) {
      alert(props.error, "please try again!");
    }
  }, [props]);

  const printTable = () => {
    if (props.lists.length > 0) {
      return (
        <><HistoryItem lists={props.lists} isLoading={props.isLoading} />
          <Pagination token={getToken} pagination={props.pagination} type={"share"} {...props}/></>
      )
    } else if (props.listDonation.length > 0) {
      return (
        <><DonationHistoryItem lists={props.listDonation} isLoading={props.isLoadingDonation} />
          <Pagination token={getToken} pagination={props.paginationDonation} type={"donation"} {...props}/></>
      )
    } else if (props.listReward.length > 0) {
      return (
        <><RewardHistoryItem lists={props.listReward} isLoading={props.isLoadingReward} />
        <Pagination token={getToken} pagination={props.paginationReward} type={"bazaar"} {...props}/></>)
    } else {
      return <div style={{textAlign: "center"}}>Loading...</div>
    }
  }

  return (
    <div>
      <Container>
        <HistoryTitle title="History Transactions" />
        <Basket />
        <ContainerContent>
          <FilterComponent {...props} />
          <div className="row mt-3 text-center">
            {printTable()}
          </div>
        </ContainerContent>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.history.lists,
    isLoading: state.history.isLoading,
    error: state.history.error,
    pagination: state.history.pagination,
    listDonation: state.donationHistory.lists,
    isLoadingDonation: state.donationHistory.isLoading,
    errorDonation: state.donationHistory.error,
    paginationDonation: state.donationHistory.pagination,
    listReward: state.rewardHistory.lists,
    isLoadingReward: state.rewardHistory.isLoading,
    errorReward: state.rewardHistory.error,
    paginationReward: state.rewardHistory.pagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetDonationHistories: () => {
      return dispatch({type: "ResetDonationHistory", payload:{}})
    },
    resetHistories: () => {
      return dispatch({type: "ResetSharedHistory", payload:{}})
    },
    resetRewardHistories: () => {
      return dispatch({type: "ResetRewardHistory", payload:{}})
    },
    loadHistories: (id, token, startDate, endDate) => {
      if (startDate === "") {
        startDate = date.GetLastMonthDate("-");
      }
      if (endDate === "") {
        endDate = date.GetCurrentDate("-");
      }
      return dispatch({
        type: "GetSharedHistory",
        payload: {
          url: `/history/shared/${id}`,
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
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
    loadDonationHistory: (id, token, startDate, endDate) => {
      if (startDate === "") {
        startDate = date.GetLastMonthDate("-");
      }
      if (endDate === "") {
        endDate = date.GetCurrentDate("-");
      }
      return dispatch({
        type: "GetDonationHistory",
        payload: {
        url: `/rewardSort/history/${id}`,
        method: "POST",
        data: {
          buyer_id: id,
          category: "socFound",
          startDate: startDate,
          endDate: endDate,
          pageNumber: "0",
          pageSize: "1",
          sortBy: "trx_date",
          sortDir: "desc",
          },
        headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
    onPageChangeDonation: (id, token, pageNumber, startDate, endDate) => {
      if (startDate === undefined) {
        startDate = date.GetLastMonthDate("-");
      }
      if (endDate === undefined) {
        endDate = date.GetCurrentDate("-");
      }
      return dispatch({
        type: "GetDonationHistory",
        payload: {
          url: `/rewardSort/history/${id}`,
          method: "POST",
          data: {
            buyer_id: id,
            category: "socFound",
            startDate: startDate,
            endDate: endDate,
            pageNumber: pageNumber - 1,
            pageSize: "1",
            sortBy: "trx_date",
            sortDir: "desc",
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
    loadRewardHistory: (id, token, startDate, endDate) => {
      if (startDate === "") {
        startDate = date.GetLastMonthDate("-");
      }
      if (endDate === "") {
        endDate = date.GetCurrentDate("-");
      }
      return dispatch({
        type: "GetRewardHistory",
        payload: {
        url: `/rewardSort/history/${id}`,
        method: "POST",
        data: {
          buyer_id: id,
          category: "reward",
          startDate: startDate,
          endDate: endDate,
          pageNumber: "0",
          pageSize: "1",
          sortBy: "trx_date",
          sortDir: "desc",
          },
        headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
    onPageChangeReward: (id, token, pageNumber, startDate, endDate) => {
      if (startDate === undefined) {
        startDate = date.GetLastMonthDate("-");
      }
      if (endDate === undefined) {
        endDate = date.GetCurrentDate("-");
      }
      return dispatch({
        type: "GetRewardHistory",
        payload: {
          url: `/rewardSort/history/${id}`,
          method: "POST",
          data: {
            buyer_id: id,
            category: "reward",
            startDate: startDate,
            endDate: endDate,
            pageNumber: pageNumber - 1,
            pageSize: "1",
            sortBy: "trx_date",
            sortDir: "desc",
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
    onPageChange: (id, token, pageNumber, startDate, endDate) => {
      if (startDate === undefined) {
        startDate = date.GetLastMonthDate("-");
      }
      if (endDate === undefined) {
        endDate = date.GetCurrentDate("-");
      }
      return dispatch({
        type: "GetSharedHistory",
        payload: {
          url: `/history/shared/${id}`,
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
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTransaction);
