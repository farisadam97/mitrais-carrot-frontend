import React from 'react'
import { useEffect } from 'react'
import ContainerContent from '../../components/container/container.component'
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
        <ContainerContent title="MANAGER LIST">
          <div className="row mt-3">
              <ManagerComponent lists={props.lists} isLoading={props.isLoading} />
              {/* <Pagination {...props.pagination} /> component pagination ada perubahaan cara makenya, jadi tak comment*/}
          </div>
        </ContainerContent>
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
            url: "/user/get-data",
            method: "POST",
            data: {
              roleId : "4",
              fields:
                "id, name, position, grades, office, email, status, resignDate",
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
            url: "/user/get-data",
            method: "POST",
            data: {
              role : "4",
              fields:
                "id, name, position, grades, office, email, status, resignDate",
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