import { useEffect, useState } from "react";
import PageTitle from "../text/pageTitle.component";
import ContainerContent from "../container/container.component";
import BazaarItem from "../bazaar/item.component"
import StaffSummary from "../summary/staff.component";
import { connect } from "react-redux";

const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    //todo: change location 

    useEffect(() => {
        props.loadItem();
        setIsLoading(false);
    },[])

    return (
        <div>
            <PageTitle title="DASHBOARD"></PageTitle>
            <StaffSummary></StaffSummary>
            <ContainerContent title="BAZAAR">
                {(!props.items && !props.error) && <p>Loading...</p>}
                {props.error && <p>{props.error}</p>}
                {props.items && <BazaarItem items={props.items}/>}
            </ContainerContent>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.bazaarItem.items,
        error: state.bazaarItem.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadItem: () => {
            return dispatch({
                type: 'GetBazaarItem',
                payload: {
                    url: '/reward',
                    method: 'POST',
                    data:{
                        category: "reward",
                        location: "2",//<--- here change to dynamic value
                        fields: "name, description, id, rate, stock",
                        page_number: "0",
                        page_size: "10",
                        sort_by: "name",
                        sort_dir: "asc"
                    }
                }
            })
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);