import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import ContainerContent from "../../../components/container/container.component";
import { connect } from "react-redux";
import FilterComponent from "../../../components/history/filter.component";
import Basket from "../../../components/basket/basket.component";
import HistoryTitle from "../../../components/text/historyTitle.component";
import HistoryRewardItem from "../../../components/history/reward.component";

const RewardRedeemHistory = (props) => {
  useEffect(() => {
    props.loadRewardHistory();
    console.log(props);
  }, []);

  return (
    <div className="">
      <NavbarComponent />
      <Container>
        <HistoryTitle />
        <Basket />
        <ContainerContent>
          <FilterComponent {...props} />
          <div className="row mt-3">
            <HistoryRewardItem
              lists={props.lists}
              isLoading={props.isLoading}
            />
          </div>
        </ContainerContent>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.rewardHistory.lists,
    isLoading: state.rewardHistory.isLoading,
    error: state.rewardHistory.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRewardHistory: () => {
      return dispatch({
        type: "GetRewardHistory",
        payload: {
          url: "/history/shared/4",
          method: "POST",
          data: {
            startDate: "2022-03-26",
            endDate: "2022-03-26",
            fields:
              "id, sender_name, receiver_name, shared_at, amount_shared, message",
            pageNumber: "0",
            pageSize: "10",
            sortBy: "shared_at",
            sortDir: "asc",
          },
        },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardRedeemHistory);
