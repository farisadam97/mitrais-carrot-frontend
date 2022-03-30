import { useEffect, useState } from "react";
import PageTitle from "../text/pageTitle.component";
import ContainerContent from "../container/container.component";
import BazaarItem from "../bazaar/item.component"
import StaffSummary from "../summary/staff.component";
import { connect } from "react-redux";

const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        props.loadItem();
        setIsLoading(false);
    },[])

    return (
        <div>
            <PageTitle title="DASHBOARD"></PageTitle>
            <StaffSummary></StaffSummary>
            <ContainerContent title="BAZAAR">
                <div className="row mt-3">
                    {isLoading && <p>Loading...</p>}
                    {props.items && <BazaarItem items={props.items}/>}
                </div>
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
                        location: "2",//change to dynamic value
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