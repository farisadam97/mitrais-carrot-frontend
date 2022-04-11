import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import ContainerContent from "../../../components/container/container.component";
import { connect } from "react-redux";
import RecentBirthdayItem from "../../../components/birthday/recent.birthday.component";
import PageTitle from "../../../components/text/pageTitle.component";
import Footer from "../../../components/footer/footer.component";
import HistoryTitle from "../../../components/text/historyTitle.component";

const RecentBirthday = (props) => {
  useEffect(() => {
    props.loadRecentBirthday()
    console.log(props)
  }, [])
  
  return (
    <div className="">
      {/* <NavbarComponent />
        <Container> */}
          <HistoryTitle title="RECENT COLLEAGUE BIRTHDAY"/>
            <ContainerContent>
              <div className="row mt-3">
              <RecentBirthdayItem lists={props.lists} isLoading={props.isLoading}/>
              </div>  
            </ContainerContent>
        {/* </Container> */}
      <Footer />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lists: state.RecentBirthdayItem.lists,
    isLoading: state.RecentBirthdayItem.isLoading,
    error: state.RecentBirthdayItem.error
  }
}

const mapDispatchToProps = dispatch => {
    return {
        loadRecentBirthday: () => {
            return dispatch({
                type: 'GetRecentBirthday',
                payload: {
                    url: '/user/recent-birthday',
                    method: 'POST',
                    data:{
                        fields: "id, name, position, office, email, birthday_date",
                        pageNumber: "0",
                        pageSize: "10",
                        sortBy: "birthday_date",
                        sortDir: "asc"
                    }
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentBirthday)