import React from "react";
import PageTitle from "../../../components/text/pageTitle.component";
import NavbarComponent from "../../../components/navbar/navbar.component";
import ContainerContent from "../../../components/container/container.component";
import Container from "../../container";
import RootTabs from "../../../components/tab/rootAdmin.tab.component";
import DashboardRootAdmin from "../../../components/rootAdmin/dasboard.component";
import Cookies from "universal-cookie";
import { useState } from "react";

const RootAdminIndex = (props) => {
  const cookies = new Cookies();
  const [getToken, setToken] = useState(cookies.get('access_token'));
  const [getId, setId] = useState(cookies.get('id'));
    useEffect(() => {
        props.loadHarvest(getToken)
        props.loadBasket(getId, getToken)
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
                    {props.listsBasket[0] && props.lists[0] && <DashboardRootAdmin lists={props.lists} listsBasket={props.listsBasket} isLoading={props.isLoading} isLoadingBasket={props.isLoadingBasket} />}
                </div>
                <RootTabs />
                <ContainerContent title={"SUMMARY"} />
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    lists: state.harvestList.lists,
    isLoading: state.harvestList.isLoading,
    error: state.harvestList.error,
    pagination: state.harvestList.pagination,
    listsBasket: state.annualBasket.lists,
    isLoadingBasket : state.annualBasket.isLoadingBasket,
    errorBasket: state.annualBasket.errorBasket,
    paginationBasket : state.annualBasket.paginationBasket,
    // lists: state.annualBasket.lists,
    // isLoading: state.annualBasket.isLoading,
    // error: state.annualBasket.error,
    // pagination: state.annualBasket.pagination,
    // lists: state.usersList.lists,
    // isLoading: state.usersList.isLoading,
    // error: state.usersList.error,
    // pagination: state.usersList.pagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadHarvest: (token) => {
      return dispatch({
        type: "GetHarvest",
        payload: {
          url: "/carrot/annual",
          method: "GET",
          // data: {
          //   pageNumber: "0",
          //   pageSize: "10",
          //   sortBy: "id",
          //   sortDir: "asc",
          // },
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
    onPageChange: (pageNumber) => {
      return dispatch({
        type: "GetHarvest",
        payload: {
          url: "/carrot/annual",
          method: "GET",
          data: {
            pageNumber: pageNumber - 1,
            pageSize: "10",
            sortBy: "id",
            sortDir: "asc",
          },
        },
      });
    },
    loadBasket: (id, token) => {
      return dispatch({
        type: "GetAnnualBasket",
        payload: {
          url: `/basket/user/${id}`,
          method: "POST",
          data: {
            fields: "id, earned_amount, shared_amount, donate_amount, spent_amount, current_amount",
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      });
    },
  };
};

// const mapStateToProps = (state) => {
//     return {
//       lists: state.userList.lists,
//       isLoading: state.userList.isLoading,
//       error: state.userList.error,
//       pagination: state.userList.pagination,
//     };
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       loadAnnualCarrot: () => {
//         return dispatch({
//           type: "GetAnnualCarrot",
//           payload: {
//             url: "/annual",
//             method: "GET",
//             data: {
//               pageNumber: "0",
//               pageSize: "10",
//               sortBy: "id",
//               sortDir: "asc",
//             },
//           },
//         });
//       },
//       loadStaff: (pageNumber) => {
//         return dispatch({
//           type: "GetStaffList",
//           payload: {
//             url: "/user/",
//             method: "POST",
//             data: {
//               role : "5",
//               fields:
//                 "id, name, position, grades, office, email, status, resignDate",
//               pageNumber: "0",
//               pageSize: "100000",
//               sortBy: "id",
//               sortDir: "asc",
//             },
//           },
//         });
//       },
//     };
//   };
  
export default connect(mapStateToProps, mapDispatchToProps)(RootAdminIndex);