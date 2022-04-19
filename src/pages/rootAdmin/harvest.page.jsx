import React from 'react'
import HarvestComponent from '../../components/rootAdmin/harvest.component'
import ContainerContent from '../../components/container/container.component'
import Footer from '../../components/footer/footer.component'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const HarvestPage = (props) => {
  const cookies = new Cookies();
  const [getToken, setToken] = useState(cookies.get('access_token'));
  const [getBasketId, setBasketId] = useState(cookies.get('basket_id'));
  const [getId, setId] = useState(cookies.get('id'));
    useEffect(() => {
        props.loadHarvest()
        props.loadBasket(getId, getToken)
        console.log(props)
      }, [props.listsBasket])

  return (
    <div>
            <ContainerContent title="HARVEST PLAN">
            <div className="col-md-12">
                {<HarvestComponent lists={props.lists} listsBasket={props.listBasket} isLoading={props.isLoading} isLoadingBasket={props.isLoadingBasket}/>}
                {/* <HarvestComponent lists={props.lists} listsBasket={props.listsBasket}  isLoading={props.isLoading} /> */}
                {/* <ManagerComponent lists={props.lists} isLoading={props.isLoading} /> */}
                {/* <Pagination {...props.pagination} /> */}
            </div>
            </ContainerContent>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      lists: state.harvestList.lists,
      isLoading: state.harvestList.isLoading,
      error: state.harvestList.error,
      pagination: state.harvestList.pagination,
      listsBasket: state.annualBasket.listsBasket,
      isLoadingBasket : state.annualBasket.isLoadingBasket,
      errorBasket: state.annualBasket.errorBasket,
      paginationBasket : state.annualBasket.paginationBasket,
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
      loadBasket: (id, token) => {
        return dispatch({
          type: "GetAnnualBasket",
          payload: {
            url: `/basket/user/${id}`,
            method: "POST",
            data: {
              fields: "id, shared_amount, donate_amount, spent_amount, current_amount",
            },
            headers: {
              Authorization: `Bearer ${token}`
            }
          },
        });
      },
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(HarvestPage);