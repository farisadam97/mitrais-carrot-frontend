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
  const [getSharedList, setSharedList] = useState([]);
  const [getBazaarList, setBazaarList] = useState([]);
  const [getDonateList, setDonateList] = useState([]);
  const [getSharedPagination, setSharedPagination] = useState({});
  const [getBazaarPagination, setBazaarPagination] = useState({});
  const [getDonatePagination, setDonatePagination] = useState({});

  useEffect(() => {
    props.loadHistories(getId, getToken, getStartDate, getEndDate);
  }, []);

  useEffect(() => {
    if (props.errorShared) {
      alert(props.errorShared, "please try again!");
    } else {
      setSharedList(props.listShared);
      setSharedPagination(props.paginationShared);
    }
  }, [props.errorShared, props.listShared, props.paginationShared]);

  useEffect(() => {
    if (props.errorDonation) {
      alert(props.errorDonation, "please try again!");
    } else {
      setDonateList(props.listDonation);
      setDonatePagination(props.paginationDonation);
    }
  }, [props.errorDonation, props.listDonation, props.paginationDonation]);

  useEffect(() => {
    if (props.errorReward) {
      alert(props.errorReward, "please try again!");
    } else {
      setBazaarList(props.listReward);
      setBazaarPagination(props.paginationReward);
    }
  }, [props.errorReward, props.listReward, props.paginationReward]);

  const printTable = () => {
    if(getSharedList.length > 0) {
      return (
        <HistoryItem
          items={getSharedList}
          pagination={getSharedPagination}
          isLoading={props.isLoadingShared}
          {...props}
        />
      );
    } else if (getDonateList.length > 0) { 
      return (
        <DonationHistoryItem
          items={getDonateList}
          pagination={getDonatePagination}
          isLoading={props.isLoadingDonation}
          {...props}
        />
      );
    } else if (getBazaarList.length > 0) {
      return (
        <RewardHistoryItem
          items={getBazaarList}
          pagination={getBazaarPagination}
          isLoading={props.isLoadingReward}
          {...props}
        />
      );
    } else {
      return <div style={{ textAlign: "center" }}>Data Not Found</div>
    }
  };

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
    listShared: state.history.lists,
    isLoadingShared: state.history.isLoading,
    errorShared: state.history.error,
    paginationShared: state.history.pagination,
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
            pageSize: "1",
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
            pageSize: "1",
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
