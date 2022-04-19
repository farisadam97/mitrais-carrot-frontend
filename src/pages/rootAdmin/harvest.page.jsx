import React from 'react'
import HarvestComponent from '../../components/rootAdmin/harvest.component'
import ContainerContent from '../../components/container/container.component'
import Footer from '../../components/footer/footer.component'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const HarvestPage = props => {
  const [getUsers, setUsers] = useState([]);
  const [getBasket, setBasket] = useState([]);
    useEffect(() => {
        props.loadHarvest()
        props.loadBasket()
        console.log(props)
      }, [])
    
      useEffect(() => {
        props.lists.map((user) =>
          setUsers((e) => [...e, { value: user.id, label: user.name }])
        );
        props.basket.map((basketHistory) => {
          setBasket(basketHistory);
        });
      }, [props]);

  return (
    <div>
            <ContainerContent title="HARVEST PLAN">
            <div className="col-md-12">
                <HarvestComponent lists={props.lists}  isLoading={props.isLoading} />
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
      loadBasket: () => {
        return dispatch({
          type: "GetBasketHistory",
          payload: {
            url: "/basket/user/81",
            method: "POST",
            data: {
              fields: "id, shared_amount, donate_amount, spent_amount, current_amount",
            },
          },
        });
      },
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(HarvestPage);