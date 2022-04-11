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
import { useLocation } from "react-router-dom"

const InsertUpdateUser = (props) => {
  const url = useLocation();

  useEffect(() => {
    props.loadUsers();

  }, []);

  return(
      <div className="">
          <Container>
              <div className="row align-items-center" >
                  <div className="col-md-6">
                      <PageTitle title="BARN MANAGEMENT" />
                  </div>
                  {/* <div className="col-md-6 text-end">
                      <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                  </div> */}
              </div>
              <RootTabs url/>
              <ContainerContent title={"INSERT/UPDATE STAFF"} >
                  <FormTab />
                  <TableUser lists={props.lists} isLoading={props.isLoading} />
                  {props.pagination && <Pagination {...props} pagination={props.pagination} type="userList" />}
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
    loadUsers: () => {
      return dispatch({
        type: "GetUsersList",
        payload: {
          url: "/user",
          method: "POST",
          data: {
            roleId: "0",
            pageNumber: "0",
            pageSize: "10",
            sortBy: "id",
            sortDir: "desc",
          },
        },
      });
    },
    onPageChange: (pageNumber) => {
      return dispatch({
        type: "GetUsersList",
        payload: {
          url: "/user",
          method: "POST",
          data: {
            roleId: "0",
            pageNumber: pageNumber -1,
            pageSize: "10",
            sortBy: "id",
            sortDir: "desc",
          },
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertUpdateUser);