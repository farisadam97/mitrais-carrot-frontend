import ContainerContent from "../container/container.component";
import { useEffect, useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import Select from 'react-select'
import { connect } from "react-redux";
import { GetUser, GetBasket, GetUsersList, GetDistribution } from "../../store/apiActions";
import Cookies from "universal-cookie";
import axios from "axios";
import LoadingModal from "../modal/loading";
import Pagination from "../pagination/pagination.component";

const Distribution = (props) => {
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    const id = cookies.get('id');
    const today = new Date();

    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [carrotShare, setCarrotShare] = useState(1);
    const [carrotShareVal, setCarrotShareVal] = useState(null);
    const [loadingShare, setLoadingShare] = useState(false);

    useEffect(() => {
        props.getUser(id, token);
        props.getBasket(id, token);
        props.getHistoryDist(id, token, 1);
        props.loadUsersList(token);
    },[selectedUser]);

    const handleShow = () => {
        setShow(true);
        props.usersList.map(user => {
            setUsers(e => [...e, {value: user.id, label: user.name }])
        });
    };

    const handleClose = () => {
        setShow(false);
        setSelectedUser(null);
        setUsers([]);
        setCarrotShare(1);
    }

    const carrotShareInputHandle = e => {
        setCarrotShare(e.currentTarget.value)
    }

    const handleSelectUser = e => {
        setSelectedUser(e.value);
    }

    const handleValidation = () => {
        let formIsValid = true;

        if(carrotShare === "" || carrotShare === "0") {
            formIsValid = false;
            setCarrotShareVal("Please enter amount carrot to share");
        }else if(carrotShare < 0) {
            formIsValid = false;
            setCarrotShareVal("Amount carrot share can't be negative value");
        }
        return formIsValid;
    }

    const handleShareCarrot = () => {
        if(handleValidation()){
            setLoadingShare(true);

            const url = "http://localhost:2022/api/v1/transaction/send-carrot";
            const payload = {
                senderId: id,
                receiverId: selectedUser,
                message: "Annual Carrot",
                amount: parseInt(carrotShare),
            };

            try {
                axios.post(url, payload).then(res => {
                    props.getHistoryDist(id, token, 1);
                    setLoadingShare(false);
                    if (res.data.status == "INTERNAL_SERVER_ERROR") {
                        alert("Something is wrong! Please Try Again.")
                    } else if (res.data.status === "OK") {
                        alert("Transaction Success!")
                    }
                })
            } catch (e) {
                alert("error request:", e.message);
            }
            handleClose();
        }
    }

    return ( 
        <ContainerContent title="DISTRIBUTION DETAIL">
            <div className="col-md-6">
                <Table bordered>
                    <tbody>
                        <tr>
                            <td><b className="text-black">Year</b></td>
                            <td>{today.getFullYear()}</td>
                        </tr>
                        <tr>
                            <td><b className="text-black">Harvest</b></td>
                            {props.basket.earnedAmount && <td>{props.basket.earnedAmount}</td>}
                        </tr>
                        <tr>
                            <td><b className="text-black">Distributed Carrot</b></td>
                            {props.basket.sharedAmount && <td>{props.basket.sharedAmount}</td>}
                        </tr>
                        <tr>
                            <td><b className="text-black">Carrot in Barn</b></td>
                            {props.basket.currentAmount && <td>{props.basket.currentAmount}</td>}
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="col-md-12"><hr /></div>
            <div className="col-md-12">
                <h5>Shared Carrot</h5>
                <div className="col-md-12">
                    <div className="text-center mb-3">
                        <button className="btn btn-info text-white" onClick={handleShow}>
                            SHARE CARROT
                        </button>
                    </div>
                </div>
                <Table bordered hover striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Shared to</th>
                            <th>Carrot</th>
                            <th>Note</th>
                            <th>Shared At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.distribution.length > 0 ? (
                            props.distribution.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.receiverName}</td>
                                        <td>{item.amountShared}</td>
                                        <td>{item.message}</td>
                                        <td>{item.sharedAt}</td>
                                    </tr>
                                );
                            })
                        ): (<tr>
                            <td colSpan={5} className="text-center">{props.error ? props.error : 'Data not found'}</td>
                        </tr>)}
                    </tbody>
                </Table>
                {props.pagination && <Pagination token={token} pagination={props.getHistoryDist} type={"dist"} {...props} id={id}/>}
            </div>
            <LoadingModal isLoading={props.isLoadingDist}/>
            <LoadingModal isLoading={loadingShare}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Share Carrot</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Member Name</label>
                            <Select id="user" options={users} onChange={handleSelectUser} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Amount Carrot</label>
                            <input type="number" className={`form-control ${carrotShareVal ? 'is-invalid' : ''}`} value={carrotShare} onChange={carrotShareInputHandle} required></input>
                            <div className="invalid-feedback">{carrotShareVal}</div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn btn-carrot radius-5" onClick={handleShareCarrot}>
                        Share Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </ContainerContent>
     );
}

const mapStateToProps = state => {
    return {
        user: state.activeUser.data,
        error: state.activeUser.error,
        isLoading: state.activeUser.isLoading,
        basket: state.activeUser.basket,
        usersList: state.user.lists,
        distribution: state.distribution.list,
        isLoadingDist: state.distribution.isLoading,
        errorDist: state.distribution.error,
        pagination: state.distribution.pagination,
    }
}

const mapDispatchToProps = dispatch => {
    return {
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
                    fields: "current_amount, earned_amount, shared_amount"
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }));
        },
        loadUsersList: (token) => {
            return dispatch(GetUsersList({
                url: `/user/get-data`,
                method: 'POST',
                data: {
                    roleId: "10",
                    pageNumber: "0",
                    pageSize: "100",
                    sortBy: "name",
                    sortDir: "asc",
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
        },
        getHistoryDist: (id, token, pageNumber) => {
            return dispatch(GetDistribution({
                url: `/transaction/history/send?id=${id}&pageNumber=${(pageNumber - 1)}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Distribution);