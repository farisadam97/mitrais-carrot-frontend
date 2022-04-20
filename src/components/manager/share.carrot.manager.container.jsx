import React from 'react';
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import Cookies from "universal-cookie";
import { connect } from 'react-redux';

const ShareCarrotManager = ( props ) => {
    const cookies = new Cookies();
    const [getToken, setToken] = useState(cookies.get('access_token'));
    const [getId, setId] = useState(cookies.get('id'));
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingSubmit, setLoadingSubmit] = useState(false);
    const [show, setShow] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
    const [getUsers, setUsers] = useState([]);
    const [getGroups, setGroups] = useState([]);
    const [getSelectedUser, setSelectedUser] = useState("");
    const [getSelectedGroup, setSelectedGroup] = useState("");
    const [getMessage, setMessage] = useState("");
    const [getMessageGroup, setMessageGroup] = useState("");
    const [getAmount, setAmount] = useState(1);
    const [getAmountGroup, setAmountGroup] = useState(1);
    const [getBasket, setBasket] = useState({});
        
    useEffect(() => {
        props.loadUsers(getToken);
        props.loadBasketHistory(getId, getToken);
        props.loadHistories(getId, getToken);
        props.loadGroups(getToken)
        setIsLoading(false);
    }, []);

    useEffect(() => {
        props.lists.map((user) =>
            setUsers((e) => [...e, { value: user.id, label: user.name }])
        );
        props.basket.map((basketHistory) => {
            setBasket(basketHistory);
        });
    }, [props.lists]);

    useEffect(() => {
        props.groups.map((group) =>
            setGroups((e) => [...e, { value: group.id, label: group.groupName }])
        );
        props.basket.map((basketHistory) => {
            setBasket(basketHistory);
        });
    }, [props.groups]);
    
    const handleModal = () => setShow(!show);
    const handleModalGroup = () => setShowGroup(!showGroup);

    const handleClickShare = (e) => {
        e.preventDefault();

        if (getSelectedUser === "") {
        alert("Please select a user");
        return;
        } else if (getMessage === "") {
        alert("Please enter a message");
        return;
        } else if (getAmount < 0) {
        alert("Amount cannot be negative");
        return;
        }

        setLoadingSubmit(true);

        const url = "http://localhost:2022/api/v1/transaction/send-carrot";
        const payload = {
        senderId: getId,
        receiverId: parseInt(getSelectedUser),
        message: getMessage,
        amount: parseInt(getAmount),
        };
        const headers = {
            Authorization: `Bearer ${getToken}`
        };

        try {
        axios.post(url, payload, headers).then((res) => {
            setLoadingSubmit(false);
            setSelectedUser("");
            setMessage("");
            setAmount("");
            handleModal();
            if (res.data.status == "INTERNAL_SERVER_ERROR") {
            alert("Something is wrong! Please Try Again.")
            } else if (res.data.status === "OK") {
            alert("Transaction Success!")
            }
        })
        } catch (e) {
        alert("error request:", e);
        }
    };

    const handleClickShareGroup = (e) => {
        e.preventDefault();

        if (getSelectedGroup === "") {
            alert("Please select a group");
            return;
        } else if (getMessageGroup === "") {
            alert("Please enter a message");
            return;
        } else if (getAmountGroup < 0) {
            alert("Amount cannot be negative");
            return;
        }

        setLoadingSubmit(true);

        const url = "http://localhost:2022/api/v1/transaction/send-carrot-group";
        const payload = {
        senderId: getId,
        groupId: parseInt(getSelectedGroup),
        message: getMessageGroup,
        amount: parseInt(getAmountGroup),
        };
        const headers = {
            Authorization: `Bearer ${getToken}`
        };

        try {
        axios.post(url, headers, payload).then((res) => {
            setLoadingSubmit(false);
            setSelectedGroup("");
            setMessageGroup("");
            setAmountGroup("");
            handleModalGroup();
            if (res.data.status == "INTERNAL_SERVER_ERROR") {
            alert("Something is wrong! Please Try Again.")
            } else if (res.data.status === "OK") {
            alert("Transaction Success!")
            }
        })
        } catch (e) {
        alert("error request:", e);
        }
    };

    const handleInputName = (e) => {
        setSelectedUser(e.value);
    };

    const handleInputGroupName = (e) => {
        setSelectedGroup(e.value);
    };

    const handleInputMessage = (e) => {
        setMessage(e.currentTarget.value);
    };

    const handleInputMessageGroup = (e) => {
        setMessageGroup(e.currentTarget.value);
    };

    const handleInputAmount = (e) => {
        setAmount(e.currentTarget.value);
    };
    
    const handleInputAmountGroup = (e) => {
        setAmountGroup(e.currentTarget.value);
    };

    return (
        <div>
            <div className='tab-content'>
                <div className='tab-pane active' role={'tabpanel'}>
                    <br />
                    <div className='text-center mb-3'>
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" onClick={handleModal}>
                            <i className="fa fa-plus-circle"></i> STAFF REWARD
                        </button>
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" style={{marginLeft:"20px"}} onClick={handleModalGroup}>
                            <i className="fa fa-plus-circle"></i> GROUP REWARD
                        </button>
                    </div>
                    <div id='myTable_wrapper' className='dataTables_wrapper dt_bootstrap4 no-footer'>
                    <table id="myTable" className="table table-striped table-bordered table-hover mt-3 dataTable no-footer" style={{width: "100%", textAlign:"center"}} role={"grid"} aria-describedby="myTable_info">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Message</th>
                            <th scope="col">Carrot</th>
                            <th scope="col">Shared At</th>
                            </tr>
                        </thead>
                        <tbody id="table-histories">
                            {props.historyLists.length > 0 ? (
                                props.historyLists.map((item, index) => {
                                    let sharedAt = item?.sharedAt?.split("T");
                                    const sharedAtDate = sharedAt[0];
                                    const sharedAtTime = sharedAt[1].split(".")[0];
                                    sharedAt = sharedAtDate + " " + sharedAtTime + " WIB";
                                    return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.senderName}</td>
                                        <td>{item.receiverName}</td>
                                        <td>{item.message}</td>
                                        <td>{item.amountShared}</td>
                                        <td>{sharedAt}</td>
                                    </tr>
                                    );
                                })
                            ) : isLoading ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                Loading...
                                </td>
                            </tr>
                            ) : (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    Data tidak ditemukan
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Share your carrot!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="send-carrot-form">
                        <div className="form-group">
                        <label htmlFor="user">Recipient</label>
                        <Select
                            id="user"
                            options={getUsers}
                            onChange={handleInputName}
                            isLoading={isLoading}
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="form-control"
                            value={getMessage}
                            onChange={handleInputMessage}
                            required
                        ></textarea>
                        </div>
                        <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            className="form-control"
                            min="1"
                            max={getBasket.currentAmount}
                            value={getAmount}
                            onChange={handleInputAmount}
                            required
                        />
                        {getAmount > parseInt(getBasket.currentAmount) ? <div>The carrot amount is insufficient</div> : null}
                        {getAmount <= 0 ? <div>The minimum amount is 1</div> : null}
                        </div>
                        <div className="form-group">
                        <label htmlFor="text1">Carrot Left</label>
                        <input
                            id="carrot-left"
                            type="number"
                            className="form-control here"
                            placeholder={getBasket.currentAmount}
                            disabled
                        />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModal}>
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        form="send-carrot-form"
                        className="btn btn-carrot radius-5"
                        onClick={handleClickShare}
                        disabled = {isLoadingSubmit}
                    >
                        {isLoadingSubmit ? 'Loading...' : 'Send Carrot'}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showGroup} onHide={handleModalGroup}>
                <Modal.Header closeButton>
                    <Modal.Title>Share your carrot!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="send-carrot-form">
                        <div className="form-group">
                        <label htmlFor="userGroup">Recipient</label>
                        <Select
                            id="user"
                            options={getGroups}
                            onChange={handleInputGroupName}
                            isLoading={props.groupIsLoading}
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="form-control"
                            value={getMessageGroup}
                            onChange={handleInputMessageGroup}
                            required
                        ></textarea>
                        </div>
                        <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            className="form-control"
                            min="1"
                            max={getBasket.currentAmount}
                            value={getAmountGroup}
                            onChange={handleInputAmountGroup}
                            required
                        />
                        {getAmount > parseInt(getBasket.currentAmount) ? <div>The carrot amount is insufficient</div> : null}
                        {getAmount <= 0 ? <div>The minimum amount is 1</div> : null}
                        </div>
                        <div className="form-group">
                        <label htmlFor="text1">Carrot Left</label>
                        <input
                            id="carrot-left"
                            type="number"
                            className="form-control here"
                            placeholder={getBasket.currentAmount}
                            disabled
                        />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalGroup}>
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        form="send-carrot-form"
                        className="btn btn-carrot radius-5"
                        onClick={handleClickShareGroup}
                        disabled = {isLoadingSubmit}
                    >
                        {isLoadingSubmit ? 'Loading...' : 'Send Carrot'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        basket: state.basketItem.lists,
        historyLists: state.history.lists,
        historyIsLoading: state.history.isLoading,
        historyError: state.history.error,
        historyPagination: state.history.pagination,
        lists: state.user.lists,
        isLoading: state.user.isLoading,
        error: state.user.error,
        basket: state.basketItem.lists,
        groupIsLoading: state.group.isLoading,
        groupError: state.group.error,
        groups: state.group.groups,
        groupPagination: state.group.groupsPagination
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadHistories: (id, token) => {
            return dispatch({
                type: "GetSharedHistory",
                payload: {
                    url: `/history/shared/${id}`,
                    method: "POST",
                    data: {
                        startDate: "2022-01-01",
                        endDate: "2022-12-31",
                        fields:
                        "id, sender_name, receiver_name, shared_at, amount_shared, message",
                        pageNumber: "0",
                        pageSize: "1",
                        sortBy: "shared_at",
                        sortDir: "desc",
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },
            });
        },
        loadUsers: (token) => {
            return dispatch({
                type: "GetUsersList",
                payload: {
                    url: "/user/get-data",
                    method: "POST",
                    data: {
                        roleId: "5",
                        pageNumber: "0",
                        pageSize: "1000",
                        sortBy: "name",
                        sortDir: "asc",
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },
            });
        },
        loadBasketHistory: (id, token) => {
            return dispatch({
                type: "GetBasketHistory",
                payload: {
                    url: `/basket/user/${id}`,
                    method: "POST",
                    data: {
                        role: "5",
                        fields: "id, shared_amount, donate_amount, spent_amount, current_amount",
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },
            });
        },
        loadGroups: (token) => {
            return dispatch({
                type: "GetGroupList",
                payload: {
                    url: `/user/group`,
                    method: 'POST',
                    data: {
                        pageNumber: 0,
                        pageSize: "100",
                        sortBy: "group_id",
                        sortDir: "asc",
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareCarrotManager);