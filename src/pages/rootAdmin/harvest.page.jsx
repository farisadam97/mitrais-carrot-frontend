import React from 'react'
import HarvestComponent from '../../components/rootAdmin/harvest.component'
import RootAdminTitle from '../../components/text/rootAdminTitle.page'
import NavbarComponent from '../../components/navbar/navbar.component'
import ContainerContent from '../../components/container/container.component'
import Container from '../container'
import Footer from '../../components/footer/footer.component'
import Pagination from '../../components/pagination/pagination.component'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const HarvestPage = props => {
    useEffect(() => {
        props.loadHarvest()
        console.log(props)
      }, [])
  return (
    <div>
        {/* <div className="">
        <NavbarComponent /> */}
        {/* <Container> */}
            {/* <RootAdminTitle active4="active" /> */}
            <ContainerContent title="HARVEST PLAN">
            <div className="col-md-12">
                <HarvestComponent lists={props.lists} isLoading={props.isLoading} />
                {/* <ManagerComponent lists={props.lists} isLoading={props.isLoading} /> */}
                {/* <Pagination {...props.pagination} /> */}
            </div>
            </ContainerContent>
        {/* </Container> */}
        <Footer />
        {/* </div> */}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      lists: state.harvestList.lists,
      isLoading: state.harvestList.isLoading,
      error: state.harvestList.error,
      pagination: state.harvestList.pagination,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadHarvest: () => {
        return dispatch({
          type: "GetHarvest",
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
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(HarvestPage);