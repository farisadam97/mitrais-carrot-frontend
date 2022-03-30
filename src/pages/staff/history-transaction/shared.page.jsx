import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import PageTitle from "../../../components/text/pageTitle.component";
import ContainerContent from "../../../components/container/container.component";
import StaffSummary from "../../../components/summary/staff.component";
import HistoryItem from "../../../components/history/shared.component";
import { connect } from "react-redux";
import FilterComponent from "../../../components/history/filter.component";
import { getCurrentDate } from "../utils/currentDate";
import Basket from "../../../components/basket/basket.component";
import HistoryTitle from "../../../components/text/historyTitle.component";
import ModalSend from "../../../components/sendCarrot/modal.send.component";
import Footer from "../../../components/footer/footer.component";
  
const HistoryTransaction = (props) => {
  useEffect(() => {
    props.loadHistories()
    console.log(props)
  }, [])
  
  return (
    <div className="">
      <NavbarComponent />
        <Container>
            <HistoryTitle />
        <Basket />
        <ModalSend/>
            <ContainerContent>
              <FilterComponent {...props}/>
              <div className="row mt-3">
                <HistoryItem lists={props.lists} isLoading={props.isLoading}/>
              </div>  
            </ContainerContent>
        </Container>
      <Footer/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lists: state.history.lists,
    isLoading: state.history.isLoading,
    error: state.history.error
  }
}

const mapDispatchToProps = dispatch => {
    return {
        loadHistories: () => {
            return dispatch({
                type: 'GetSharedHistory',
                payload: {
                    url: '/history/shared/4',
                    method: 'POST',
                    data:{
                      startDate: "2022-03-26",
                      endDate: "2022-03-26",
                      fields: "id, sender_name, receiver_name, shared_at, amount_shared, message",
                      pageNumber: "0",
                      pageSize: "10",
                      sortBy: "shared_at",
                      sortDir: "asc"
                    }
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTransaction)