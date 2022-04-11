import React from 'react'
import { useEffect } from 'react'
import AdminTitle from '../../components/text/adminTitle.page'
import NavbarComponent from '../../components/navbar/navbar.component'
import ContainerContent from '../../components/container/container.component'
import Container from '../container'
import Footer from '../../components/footer/footer.component'
import Pagination from '../../components/pagination/pagination.component'
import { connect } from 'react-redux'
import SummaryCarrot from '../../components/admin/summary.component'

const CarrotStaffPage = (props) => {
    useEffect(() => {
        props.loadCarrotStaff()
        console.log(props)
      }, [])
  return (
    <div className="">
            <ContainerContent title="CARROT SUMMARY">
                <div className="row mt-3">
                    {/* <SummaryCarrot lists={props.lists} isLoading={props.isLoading}/> */}
                    {/* <ManagerComponent lists={props.lists} isLoading={props.isLoading} /> */}
                    {/* <Pagination {...props.pagination}/> */}
                </div>
            </ContainerContent>
        <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      lists: state.carrotStaff.lists,
      isLoading: state.carrotStaff.isLoading,
      error: state.carrotStaff.error,
      pagination: state.carrotStaff.pagination,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      loadCarrotStaff: () => {
        return dispatch({
          type: "GetCarrotStaff",
          payload: {
            url: "/admin/basket/sort-by-amount",
            method: "POST",
            data: {
              pageNumber: "0",
              pageSize: "10",
              sortBy: "id",
              sortDir: "asc",
            },
          },
        });
      },
      onPageChange: (pageNumber) => {
        return dispatch({
          type: "GetCarrotStaff",
          payload: {
            url: "/admin/basket/sort-by-amount",
            method: "POST",
            data: {
              pageNumber: pageNumber - 1,
              pageSize: "10",
              sortBy: "id",
              sortDir: "asc",
            },
          },
        });
      },
    };
  };

export default connect (mapStateToProps, mapDispatchToProps)(CarrotStaffPage);