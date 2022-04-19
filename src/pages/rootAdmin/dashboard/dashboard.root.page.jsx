import React from "react";
import PageTitle from "../../../components/text/pageTitle.component";
import NavbarComponent from "../../../components/navbar/navbar.component";
import ContainerContent from "../../../components/container/container.component";
import Container from "../../container";
import RootTabs from "../../../components/tab/rootAdmin.tab.component";
import DashboardRootAdmin from "../../../components/rootAdmin/dasboard.component";
import { connect } from 'react-redux';
import { useEffect } from "react";

const RootAdminDashboardPage = (props) => {
    useEffect(() => {
        props.loadAnnualCarrot()
        props.loadStaff()
        console.log(props)
      }, [])
    return(
        <div className="">
            <Container>
                <ContainerContent title={"DASHBOARD"}>
                <div className="row align-items-center" >
                    {/* <div className="col-md-6 text-end">
                        <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                    </div> */}
                    <DashboardRootAdmin lists={props.lists} isLoading={props.isLoading} />
                </div>
                </ContainerContent>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      // lists: state.annualCarrot.lists,
      // isLoading: state.annualCarrot.isLoading,
      // error: state.annualCarrot.error,
      // pagination: state.annualCarrot.pagination,
      lists: state.usersList.lists,
      isLoading: state.usersList.isLoading,
      error: state.usersList.error,
      pagination: state.usersList.pagination,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadAnnualCarrot: () => {
        return dispatch({
          type: "GetAnnualCarrot",
          payload: {
            url: "/carrot/annual",
            method: "GET",
            data: {
              pageNumber: "0",
              pageSize: "10",
              sortBy: "id",
              sortDir: "asc",
            },
          },
        });
      },
      loadStaff: () => {
        return dispatch({
          type: "GetUsersList",
          payload: {
            url: "/user",
            method: "POST",
            data: {
              role : "5",
              fields:
                "id, name, position, grades, office, email, status, resignDate",
              pageNumber: "0",
              pageSize: "100000",
              sortBy: "id",
              sortDir: "asc",
            },
          },
        });
      },
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(RootAdminDashboardPage);