import React from "react";
import iconCarrot from "../../assets/img/mc-icon-carrot.png";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "react-select";
import { connect } from "react-redux";
import axios from "axios";
import basketHistory from "../../store/basketHistory";

const initialBasket = [
  {
    title: "Bazaar",
    description: "Earn points for every purchase",
    icon: iconCarrot,
    link: "/rewards",
    amount: 0,
    amountStr: `Loading...`,
    class: "box-reward",
  },
  {
    title: "Donation",
    description: "Earn points for every purchase",
    icon: iconCarrot,
    link: "/rewards",
    amount: 0,
    amountStr: `0 Carrots`,
    class: "box-shared",
  },
  {
    title: "Share",
    description: "Earn points for every purchase",
    icon: iconCarrot,
    link: "/rewards",
    amount: 0,
    amountStr: `0 Carrots`,
    class: "box-bazaar",
  },
]
      
const Basket = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSubmit, setLoadingSubmit] = useState(false);
  const [show, setShow] = useState(false);
  const [getUsers, setUsers] = useState([]);
  const [getSelectedUser, setSelectedUser] = useState("");
  const [getMessage, setMessage] = useState("");
  const [getAmount, setAmount] = useState(1);
  const [getBasket, setBasket] = useState({});
  const [getCardBasket, setCardBasket] = useState(initialBasket);

  useEffect(() => {
    props.loadUsers();
    props.loadBasketHistory();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const initial = initialBasket.filter((e) => {
      if (e.title == "Bazaar") {
        e.amount = getBasket.spentAmount
        e.amountStr = e.amount > 0 ? `-${getBasket.spentAmount} Carrots` : "0 Carrot";
      } else if (e.title == "Donation") {
        e.amount = getBasket.donateAmount
        e.amountStr = e.amount > 0 ? `-${getBasket.donateAmount} Carrots` : "0 Carrot";
      } else if (e.title == "Share") {
        e.amount = getBasket.sharedAmount
        e.amountStr = e.amount > 0 ? `-${getBasket.sharedAmount} Carrots` : "0 Carrot";
      }
      return e;
    })
    setCardBasket(initial)
  }, [getBasket])

  useEffect(() => {
    props.lists.map((user) =>
      setUsers((e) => [...e, { value: user.id, label: user.name }])
    );
    props.basket.map((basketHistory) => {
      setBasket(basketHistory);
    });
  }, [props]);

  const handleModal = () => setShow(!show);

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
      senderId: 24,
      receiverId: parseInt(getSelectedUser),
      message: getMessage,
      amount: parseInt(getAmount),
    };

    try {
      axios.post(url, payload).then((res) => {
        if (res.data.status == "INTERNAL_SERVER_ERROR") {
          alert("Something is wrong! Please Try Again.")
        }
      })
        setLoadingSubmit(false);
        setSelectedUser("");
        setMessage("");
        setAmount("");
        handleModal();
    } catch (e) {
      alert("error request:", e);
    }
  };

  const handleInputName = (e) => {
    setSelectedUser(e.value);
  };

  const handleInputMessage = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleInputAmount = (e) => {
    setAmount(e.currentTarget.value);
  };

  return (
    <div>
      <section className="mini-dashboard px-3 my-4">
        <div className="row gx-5">
          {getCardBasket.map((item, index) => {
            return (
              <div className="col-md-4 pr-2 my-auto" key={index}>
                <div className={`row ${item.class} px-0 mr-0`}>
                  <div className="col-md-4 my-auto">
                    <img
                      src={item.icon}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="col-md-8 my-auto">
                    <p className="sub-title">{item.title}</p>
                    <h2 className="text-white">{item.amountStr}</h2>
                    <a
                      className="badge badge-white"
                      onClick={handleModal}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Share carrot!
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.user.lists,
    isLoading: state.user.isLoading,
    error: state.user.error,
    basket: state.basketItem.lists,
    // pagination: state.user.pagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => {
      return dispatch({
        type: "GetUsersList",
        payload: {
          url: "/user",
          method: "POST",
          data: {
            roleId: "5",
            pageNumber: "0",
            pageSize: "1000",
            sortBy: "name",
            sortDir: "asc",
          },
        },
      });
    },
    loadBasketHistory: () => {
      return dispatch({
        type: "GetBasketHistory",
        payload: {
          url: "/basket/24",
          method: "POST",
          data: {
            role: "5",
            fields: "id, shared_amount, donate_amount, spent_amount, current_amount",
          },
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
