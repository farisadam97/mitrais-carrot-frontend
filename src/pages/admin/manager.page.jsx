import React from 'react'
import { useEffect } from 'react'
import AdminTitle from '../../components/text/adminTitle.page'
import NavbarComponent from '../../components/navbar/navbar.component'
import ContainerContent from '../../components/container/container.component'
import Container from '../container'
import Footer from '../../components/footer/footer.component'
import ManagerComponent from '../../components/admin/manager.component'
import Pagination from '../../components/pagination/pagination.component'
import { connect } from 'react-redux'


const ManagerPage = (props) => {
  useEffect(() => {
    props.loadManager()
    console.log(props)
  }, [])
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
      lists: state.managerList.lists,
      isLoading: state.managerList.isLoading,
      error: state.managerList.error,
      pagination: state.managerList.pagination,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadManager: () => {
        return dispatch({
          type: "GetManagerList",
          payload: {
            url: "/user/data",
            method: "POST",
            data: {
              role : "2",
              fields:
                "id, name, position, office, email, status",
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
            url: "/user/data",
            method: "POST",
            data: {
              role : "2",
              fields:
                "id, name, position, office, email, status",
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