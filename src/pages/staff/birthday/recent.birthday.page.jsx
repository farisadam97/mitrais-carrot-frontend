import React, { useEffect, useState } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import ContainerContent from "../../../components/container/container.component";
import { connect } from "react-redux";
import RecentBirthdayItem from "../../../components/birthday/recent.birthday.component";
import Footer from "../../../components/footer/footer.component";
import HistoryTitle from "../../../components/text/historyTitle.component";
import Cookies from "universal-cookie";
import Pagination from "../../../components/pagination/pagination.component";

const RecentBirthday = (props) => {
  const cookies = new Cookies();
  const date = new Date();
  const [getToken, setToken] = useState(cookies.get('access_token'));

  useEffect(() => {
    props.loadRecentBirthday(getToken)
  }, [])
  
  return (
    <div className="">
      <HistoryTitle title={`Colleagues' birthdays in ${date.toLocaleString('default', { month: 'long' })}`}/>
      <ContainerContent>
        <div className="row mt-3" style={{textAlign:"center"}}>
        <RecentBirthdayItem lists={props.lists} isLoading={props.isLoading}/>
        </div>  
        {props.pagination && <Pagination token={getToken} pagination={props.pagination} type={"recentBirthday"} {...props}/>}
      </ContainerContent>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lists: state.RecentBirthdayItem.lists,
    isLoading: state.RecentBirthdayItem.isLoading,
    error: state.RecentBirthdayItem.error,
    pagination: state.RecentBirthdayItem.pagination,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadRecentBirthday: (token) => {
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
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      })
    },
    onPageChangeRecentBirthday: (token, pageNumber) => {
      return dispatch({
        type: 'GetRecentBirthday',
        payload: {
          url: '/user/recent-birthday',
          method: 'POST',
          data:{
              fields: "id, name, position, office, email, birthday_date",
              pageNumber: pageNumber - 1,
              pageSize: "10",
              sortBy: "birthday_date",
              sortDir: "asc"
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentBirthday)