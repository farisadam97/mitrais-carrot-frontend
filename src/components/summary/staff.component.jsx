import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profilPict from "../../assets/img/user.jpg";
import carrotPict from "../../assets/img/mc-icon-carrot.png";
import historyPict from "../../assets/img/mc-icon-transaction.png";
import { GetUser, GetBasket } from "../../store/apiActions";
import { connect } from "react-redux";
import Cookies from "universal-cookie";

const StaffSummary = props => {
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    const id = cookies.get('id');

    useEffect(() => {
        props.getUser(id, token);
        props.getBasket(id, token);
    },[]);

    return(
        <section className="mini-dashboard px-3 my-4">
            <div className="row gx-5">
                <div className="col-md-4">
                    <div className="row box-profile soft-shadow px-0 mr-0">
                        <div className="col-md-4 my-auto">
                            <img src={profilPict} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-8 my-auto">
                            {props.user && <h4 className="mb-0 text-white">{props.user.name}</h4>}
                            <p className="text-white">Mitrais Employee</p>
                            {/* <!-- <a href="edit-profile.html" className="badge badge-white">Edit Profile</a> --> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row box-carrot px-0 mr-0">
                        <div className="col-md-4 my-auto">
                            <img src={carrotPict} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-8 my-auto">
                            <h4 className="text-white">You've earned {props.basketAmount} carrots!</h4>
                            <a className="badge badge-white" data-toggle="modal" data-target="#exampleModal">
                                Share carrot!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row box-additional px-0">
                        <div className="col-md-4 my-auto">
                            <img src={historyPict} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-8 my-auto">
                            <h4 className="text-white">Carrots Transaction History</h4>
                            <Link to="history-transaction" className="badge badge-white">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        user: state.activeUser.data,
        error: state.activeUser.error,
        isLoading: state.activeUser.isLoading,
        basketAmount: state.activeUser.basketAmount,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getUser: (id, token) => {
            return dispatch(GetUser({
                url: `user/${id}`,
                method: 'POST',
                data: {
                    fields: "name, basket_id, username, email, position, office"
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }));
        },
        getBasket: (id, token) => {
            return dispatch(GetBasket({
                url: `basket/user/${id}`,
                method: 'POST',
                data: {
                    fields: "current_amount"
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffSummary)