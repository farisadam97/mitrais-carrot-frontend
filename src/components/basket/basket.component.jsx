import React from "react";
import iconCarrot from "../../assets/img/mc-icon-carrot.png";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "react-select";
import { connect } from "react-redux";
import axios from "axios";

const dummyData = [
  {
    title: "Rewards",
    description: "Earn points for every purchase",
    icon: iconCarrot,
    link: "/rewards",
    amount: 600,
    amountStr: "+600 Carrots",
  },
  {
    title: "Shared",
    description: "Earn points for every purchase",
    icon: iconCarrot,
    link: "/rewards",
    amount: 70,
    amountStr: "-70 Carrots",
  },
  {
    title: "Bazaar",
    description: "Earn points for every purchase",
    icon: iconCarrot,
    link: "/rewards",
    amount: 30,
    amountStr: "+30 Carrots",
  },
];

const Basket = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSubmit, setLoadingSubmit] = useState(false);
  const [show, setShow] = useState(false);
  const [getUsers, setUsers] = useState([]);
  const [getSelectedUser, setSelectedUser] = useState("");
  const [getMessage, setMessage] = useState("");
  const [getAmount, setAmount] = useState("");

  useEffect(() => {
    props.loadUsers();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    props.lists.map((user) =>
      setUsers((e) => [...e, { value: user.id, label: user.name }])
    );
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
      senderId: 5,
      receiverId: parseInt(getSelectedUser),
      message: getMessage,
      amount: parseInt(getAmount),
    };

    try {
      axios.post(url, payload).then(() => {
        setLoadingSubmit(false);
        handleModal();
      });
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
          {dummyData.map((item, index) => {
            return (
              <div className="col-md-4 my-auto" key={index}>
                <div className="row box-reward px-0 mr-0">
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
                    <p
                      className="badge badge-white"
                      onClick={handleModal}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Share carrot!
                    </p>
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
                value={getAmount}
                onChange={handleInputAmount}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="text1">Carrot Left</label>
              <input
                id="carrot-left"
                type="number"
                className="form-control here"
                placeholder="555"
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
            isLoading={isLoadingSubmit}
          >
            Send Carrot
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
    pagination: state.user.pagination,
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
            role: "5",
            fields: "id, name",
            pageNumber: "0",
            pageSize: "100",
            sortBy: "name",
            sortDir: "asc",
          },
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
