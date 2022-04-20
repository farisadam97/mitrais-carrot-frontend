import { useEffect, useState } from "react";
import ContainerContent from "../container/container.component";
import BazaarItem from "../bazaar/item.component"
import StaffSummary from "../summary/staff.component";
import { connect } from "react-redux";
import Cookies from "universal-cookie";

const Dashboard = (props) => {
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    const [category, setCategory] = useState("reward");

    const reward = () => {
        setCategory("reward");
    }

    const socFound = () => {
        setCategory("socfound");
    }

    useEffect(() => {
        props.loadItem(category, token, 2);
    },[category])

    // const loadItem = () => {
    //     props.loadItem(category, token, props.user.office);
    // }

    return (
        <div>
            <StaffSummary></StaffSummary>
            <ContainerContent title={category === "reward"? "BAZAAR": "SOCIAL FOUNDATION"}>
                <div className="row admin-tabs mb-4">
                    <div className="col-md-auto nav-pills">
                        <a onClick={reward} className={"nav-link " + (category === "reward"? "active" : "")}>BAZAAR</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a onClick={socFound} className={"nav-link " + (category === "socFound"? "active" : "")}>SOCIAL FOUNDATION</a>
                    </div>
                </div>
                {/* {!props.items && (<div className="text-center mb-3">
                    <button className="btn btn-info text-white" onClick={loadItem}>Refresh</button>
                </div>)} */}
                {props.error && <p>{props.error}</p>}
                {props.items && <BazaarItem items={props.items}/>}
            </ContainerContent>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.bazaarItem.items,
        error: state.bazaarItem.error,
        user: state.activeUser.data,
        isLoading: state.bazaarItem.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadItem: (category, token, location) => {
            return dispatch({
                type: 'GetBazaarItem',
                payload: {
                    url: '/reward',
                    method: 'POST',
                    data:{
                        category: category,
                        location: location,
                        fields: "name, description, id, rate, stock,link_img,is_active",
                        page_number: "0",
                        page_size: "10",
                        sort_by: "name",
                        sort_dir: "asc"
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            })
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);