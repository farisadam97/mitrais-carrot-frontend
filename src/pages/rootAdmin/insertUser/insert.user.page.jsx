import React, { useEffect, useState } from "react";
import PageTitle from "../../../components/text/pageTitle.component";
import NavbarComponent from "../../../components/navbar/navbar.component";
import ContainerContent from "../../../components/container/container.component";
import Container from "../../container";
import RootTabs from "../../../components/tab/rootAdmin.tab.component";
import FormTab from "../../../components/tab/form.tab.component";
import TableUser from "../../../components/user/table.user.component";
import Pagination from "../../../components/pagination/pagination.component";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const InsertUpdateUser = (props) => {
  // const url = useLocation();
  const cookies = new Cookies();
  const [getToken, setToken] = useState(cookies.get('access_token'));

  useEffect(() => {
    props.loadUsers(getToken);
  }, []);

  return(
      <div className="">
          <Container>
              <div className="row align-items-center" >
                  {/* <div className="col-md-6 text-end">
                      <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                  </div> */}
              </div>
              <ContainerContent title={"INSERT/UPDATE STAFF"} >
              <FormTab />
                  <TableUser lists={props.lists} isLoading={props.isLoading} />
                  {props.pagination && <Pagination token={getToken} pagination={props.pagination} type="userList" {...props}/>}
              </ContainerContent>
          </Container>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    lists: state.user.lists,
    isLoading: state.user.isLoading,
    error: state.user.error,
    pagination: state.user.pagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (token) => {
      return dispatch({
        type: "GetUsersList",
        payload: {
          url: "/user/get-data",
          method: "POST",
          data: {
            roleId: "0",
            pageNumber: "0",
            pageSize: "10",
            sortBy: "id",
            sortDir: "desc",
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
    onPageChange: (token, pageNumber) => {
      return dispatch({
        type: "GetUsersList",
        payload: {
          url: "/user/get-data",
          method: "POST",
          data: {
            roleId: "0",
            pageNumber: pageNumber -1,
            pageSize: "10",
            sortBy: "id",
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

export default connect(mapStateToProps, mapDispatchToProps)(InsertUpdateUser);