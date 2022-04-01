import React from 'react'
import AdminTitle from '../../components/text/adminTitle.page'
import NavbarComponent from '../../components/navbar/navbar.component'
import ContainerContent from '../../components/container/container.component'
import Container from '../container'
import Footer from '../../components/footer/footer.component'
import ManagerComponent from '../../components/admin/manager.component'
import Pagination from '../../components/pagination/pagination.component'
import { connect } from 'react-redux'


const ManagerPage = (props) => {
  return (
    <div className="">
      <NavbarComponent />
      <Container>
        <AdminTitle active2="active" />
        <ContainerContent title="MANAGER LIST">
          <div className="row mt-3">
              <ManagerComponent lists={props.lists} isLoading={props.isLoading} />
              <Pagination {...props.pagination} />
          </div>
        </ContainerContent>
      </Container>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      lists: state.history.lists,
      isLoading: state.history.isLoading,
      error: state.history.error,
      pagination: state.history.pagination,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadManager: () => {
        return dispatch({
          type: "GetManagerList",
          payload: {
            url: "/user/",
            method: "POST",
            data: {
              role : "4",
              fields:
                "id, name, grades, office, email, status, resigndate",
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
          type: "GetManagerList",
          payload: {
            url: "/user",
            method: "POST",
            data: {
              role : "4",
              fields:
                "id, name, grades, office, email, status, resigndate",
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ManagerPage);