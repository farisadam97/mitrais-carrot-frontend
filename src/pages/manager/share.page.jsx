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

const ShareCarrotPageManager = () => {
    const [getStartDate, setStartDate] = useState(date.GetLastMonthDate("-"));
    const [getEndDate, setEndDate] = useState(date.GetCurrentDate("-"));
  
    useEffect(() => {
      props.loadHistories(getStartDate, getEndDate);
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
            <Pagination {...props} pagination={props.pagination} type={"share"}/></>
        )
      } else if (props.listDonation.length > 0) {
        return (
          <><DonationHistoryItem lists={props.listDonation} isLoading={props.isLoadingDonation} />
            <Pagination {...props} pagination={props.paginationDonation} type={"donation"} /></>
        )
      } else if (props.listReward.length > 0) {
        return (
          <><RewardHistoryItem lists={props.listReward} isLoading={props.isLoadingReward} />
          <Pagination {...props} pagination={props.paginationReward} type={"bazaar"} /></>)
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
      loadHistories: (startDate, endDate) => {
        if (startDate === "") {
          startDate = date.GetLastMonthDate("-");
        }
        if (endDate === "") {
          endDate = date.GetCurrentDate("-");
        }
        return dispatch({
          type: "GetSharedHistory",
          payload: {
            url: "/history/shared/24",
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
      loadDonationHistory: (startDate, endDate) => {
        if (startDate === "") {
          startDate = date.GetLastMonthDate("-");
        }
        if (endDate === "") {
          endDate = date.GetCurrentDate("-");
        }
        return dispatch({
          type: "GetDonationHistory",
          payload: {
          url: "/rewardSort/history/25",
          method: "POST",
          data: {
            buyer_id: 25,
            category: "socFound",
            startDate: startDate,
            endDate: endDate,
            pageNumber: "0",
            pageSize: "1",
            sortBy: "trx_date",
            sortDir: "desc",
          },
          },
        });
      },
      onPageChangeDonation: (pageNumber, startDate, endDate) => {
        if (startDate === undefined) {
          startDate = date.GetLastMonthDate("-");
        }
        if (endDate === undefined) {
          endDate = date.GetCurrentDate("-");
        }
        return dispatch({
          type: "GetDonationHistory",
          payload: {
            url: "/rewardSort/history/25",
            method: "POST",
            data: {
              buyer_id: 25,
              category: "socFound",
              startDate: startDate,
              endDate: endDate,
              pageNumber: pageNumber - 1,
              pageSize: "1",
              sortBy: "trx_date",
              sortDir: "desc",
            },
          },
        });
      },
      loadRewardHistory: (startDate, endDate) => {
        if (startDate === "") {
          startDate = date.GetLastMonthDate("-");
        }
        if (endDate === "") {
          endDate = date.GetCurrentDate("-");
        }
        return dispatch({
          type: "GetRewardHistory",
          payload: {
          url: "/rewardSort/history/25",
          method: "POST",
          data: {
            buyer_id: 25,
            category: "reward",
            startDate: startDate,
            endDate: endDate,
            pageNumber: "0",
            pageSize: "1",
            sortBy: "trx_date",
            sortDir: "desc",
          },
          },
        });
      },
      onPageChangeReward: (pageNumber, startDate, endDate) => {
        if (startDate === undefined) {
          startDate = date.GetLastMonthDate("-");
        }
        if (endDate === undefined) {
          endDate = date.GetCurrentDate("-");
        }
        return dispatch({
          type: "GetRewardHistory",
          payload: {
            url: "/rewardSort/history/25",
            method: "POST",
            data: {
              buyer_id: 25,
              category: "reward",
              startDate: startDate,
              endDate: endDate,
              pageNumber: pageNumber - 1,
              pageSize: "1",
              sortBy: "trx_date",
              sortDir: "desc",
            },
          },
        });
      },
      onPageChange: (pageNumber, startDate, endDate) => {
        if (startDate === undefined) {
          startDate = date.GetLastMonthDate("-");
        }
        if (endDate === undefined) {
          endDate = date.GetCurrentDate("-");
        }
        return dispatch({
          type: "GetSharedHistory",
          payload: {
            url: "/history/shared/7",
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShareCarrotPageManager);