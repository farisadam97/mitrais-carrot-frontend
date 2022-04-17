import React from "react";
import PageTitle from "../../../components/text/pageTitle.component";
import NavbarComponent from "../../../components/navbar/navbar.component";
import ContainerContent from "../../../components/container/container.component";
import Container from "../../container";
import RootTabs from "../../../components/tab/rootAdmin.tab.component";
import DashboardRootAdmin from "../../../components/rootAdmin/dasboard.component";

const RootAdminIndex = (props) => {
    useEffect(() => {
        props.loadAnnualCarrot()
        props.loadStaff()
        console.log(props)
      }, [])
    return(
        <div className="">
            <Container>
                <div className="row align-items-center" >
                    <div className="col-md-6">
                        <PageTitle title="FARMER DASHBOARD" />
                    </div>
                    {/* <div className="col-md-6 text-end">
                        <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                    </div> */}
                    <DashboardRootAdmin lists={props.lists} isLoading={props.isLoading} />
                </div>
                <RootTabs />
                <ContainerContent title={"SUMMARY"} />
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      lists: state.userList.lists,
      isLoading: state.userList.isLoading,
      error: state.userList.error,
      pagination: state.userList.pagination,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadAnnualCarrot: () => {
        return dispatch({
          type: "GetAnnualCarrot",
          payload: {
            url: "/annual",
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
      loadStaff: (pageNumber) => {
        return dispatch({
          type: "GetStaffList",
          payload: {
            url: "/user/",
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
  
export default connect(mapStateToProps, mapDispatchToProps)(RootAdminIndex);