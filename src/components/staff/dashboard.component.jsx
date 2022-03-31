import { useEffect, useState } from "react";
import PageTitle from "../text/pageTitle.component";
import ContainerContent from "../container/container.component";
import BazaarItem from "../bazaar/item.component"
import StaffSummary from "../summary/staff.component";
import { connect } from "react-redux";

const Dashboard = (props) => {
    const [category, setCategory] = useState("reward");

    //todo: change location 

    const reward = () => {
        setCategory("reward");
    }

    const socFound = () => {
        setCategory("socFound");
    }

    useEffect(() => {
        props.loadItem(category);
    },[category])

    return (
        <div>
            <PageTitle title="DASHBOARD"></PageTitle>
            <StaffSummary></StaffSummary>
            <div className="row admin-tabs mb-4">
                <div className="col-md-auto nav-pills">
                    <a onClick={reward} className={"nav-link " + (category === "reward"? "active" : "")}>BAZAAR</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a onClick={socFound} className={"nav-link " + (category === "socFound"? "active" : "")}>SOCIAL FOUNDATION</a>
                </div>
            </div>
            <ContainerContent title={category === "reward"? "BAZAAR": "SOCIAL FOUNDATION"}>
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
        loadItem: (category) => {
            return dispatch({
                type: 'GetBazaarItem',
                payload: {
                    url: '/reward',
                    method: 'POST',
                    data:{
                        category: category,
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