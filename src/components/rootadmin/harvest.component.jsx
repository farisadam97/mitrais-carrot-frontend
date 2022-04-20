import React from 'react'
import SearchComponent from '../search.button.component';
import { useState, useEffect } from "react";
import AddNewButton from '../addNew.button.component';
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import * as date from "../../utils/date/date.util";
import Cookies from 'universal-cookie';

const HarvestComponent = ({lists, listsBasket, isLoading}) => {
    const handleModal = () => setShow(!show);
    const handleModalExtend = () => setShowExtend(!showExtend);
    const [show, setShow] = useState(false);
    const [showExtend, setShowExtend] = useState(false);
    const [showCarrot, setShowCarrot] = useState(false);
    const [isLoadingSubmit, setLoadingSubmit] = useState(false);
    const [getYears, setYears] = useState("");
    const [getAmount, setAmount] = useState(1);
    const [getCurrentAmount, setCurrentAmount] = useState(1);
    const [getEarnedAmount, setEarnedAmount] = useState(1);
    const [getCreatedDate, setCreatedDate] = useState(date.GetCurrentDate("-"));
    const [getExpDate, setExpDate] = useState(date.GetCurrentDate("-"));
    const [getAnnualCarrot, setAnnualCarrot] = useState({});
    const cookies = new Cookies();
    const [getToken, setToken] = useState(cookies.get('access_token'));
    const [getId, setId] = useState(cookies.get('id'));
    const [getAnnualId, setAnnualId] = useState(cookies.get('id'));
    const [editedId,setEditedId] = useState();

    const handleYears = (e) => {
        setYears(e.value);
    };

    const handleInputAmount = (e) => {
        setAmount(e.currentTarget.value);
    };

    const handleClickShare = (e) => {
        e.preventDefault();
    
        // if (getYears === "") {
        //   alert("Please input a year");
        //   return;
        // } else 
        if (getAmount < 0) {
          alert("Amount cannot be negative");
          return;
        }
    
        setLoadingSubmit(true);
    
        const url = "http://localhost:2022/api/v1/carrot/annual";
        const payload = {
          rootAdminId: getId,
          carrotAmount: parseInt(getAmount),
          expireDate : getExpDate,
          
        };
        const config = {
          headers: {
            Authorization: `Bearer ${getToken}`,
          }
        }

        try {
          axios.post(url, payload, config).then((res) => {
            if (res.data.status == "INTERNAL_SERVER_ERROR") {
              alert("Something is wrong! Please Try Again.")
            }
          })
            setLoadingSubmit(false);
            setCreatedDate("");
            setExpDate("");
            setAmount("");
            handleModal();
        } catch (e) {
          alert("error request:", e);
        }
    }

    const editItemHandle = (e,item) => {
      e.preventDefault();
      setEditedId(item.id);
      setExpDate(item.expireDate);
      handleModalExtend();
  }

    const handleClickShareExtend = (e,item) => {
      e.preventDefault();
  
      // if (getYears === "") {
      //   alert("Please input a year");
      //   return;
      // } else 
      if (getAmount < 0) {
        alert("Amount cannot be negative");
        return;
      }
  
      setLoadingSubmit(true);
  
      const url = "http://localhost:2022/api/v1/carrot/annual";
      const payload = {
        id: editedId,
        expireDate : getExpDate,
        
      };

      const config = {
        headers: {
          Authorization: `Bearer ${getToken}`,
        }
      }

      try {
        axios.put(url, payload, config).then((res) => {
          if (res.data.status == "INTERNAL_SERVER_ERROR") {
            alert("Something is wrong! Please Try Again.")
          }
        })
          setLoadingSubmit(false);
          setExpDate("");
          handleModalExtend();
      } catch (e) {
        alert("error request:", e);
      }
  }
      
  // console.log(lists, listsBasket);

  return (
    <div>
        <section>
        <div className="text-center mb-3">
            <button type="button" className="btn btn-info" onClick={handleModal} data-modal="modal1" data-toggle="modal1" data-target="#myModal1" data-action="create">
                <i className="fa fa-plus-circle"></i> ADD NEW
            </button>
        </div>
        <div id='myTable_wrapper' className='dataTables_wrapper dt-bootstrap4 no-footer'>
            <SearchComponent />
            <table id='myTable' className='table table-striped table-bordered table-hover mt-3 dataTable no-footer' style={{width:"100%"}} role="grid" >
                <thead>
                    <tr role="row">
                        <th rowSpan={"2"} className="sorting_desc" tabIndex={"0"} aria-controls="myTable" colSpan={"1"} aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: "13px"}}>#</th>
                        <th rowSpan={"2"} className="sorting" tabIndex={"0"} aria-controls="myTable" colSpan={"1"} aria-label="Year: activate to sort column ascending" style={{width: "36px"}}>Year</th>
                        <th colSpan={"2"} className="text-center" rowSpan={"1"}>Barn</th>
                        <th colSpan={"2"} className="text-center" rowSpan={"1"}>Date Detail</th>
                        {/* <th rowSpan={"2"} className="text-center sorting" tabIndex={"0"} aria-controls="myTable" colSpan={"1"} aria-label="Active: activate to sort column ascending" style={{width: "49px"}}>Active</th> */}
                        <th rowSpan={"2"} className="text-center sorting_disabled" colSpan={"1"} aria-label="Action" style={{width: "120px"}}>Action</th>
                    </tr>
                    <tr role="row">
                        <th className="text-right sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Total: activate to sort column ascending" style={{width: "92px"}}>Total</th>
                        <th className="text-right sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Left: activate to sort column ascending" style={{width: "83px"}}>Left</th>
                        <th className="text-center sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Share: activate to sort column ascending" style={{width: "46px"}}>Created Date</th>
                        <th style={{borderRightWidth : "1px !important", width: "76px"}} className="text-center sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Exchange: activate to sort column ascending">Expired Date</th>
                    </tr>
                </thead>
                <tbody id='table-harvest'>
                    {lists.length > 0 ? (
                        lists.map((item, index) => (
                            <tr key={parseInt(item.id)}>
                                <td scope="row">{index + 1}</td>
                                <td>{item.createdAt[0]}</td>
                                  {/* {listsBasket?.length > 0 ? (
                                    listsBasket.map((item)=>(
                                      <td>{item.earned_amount}</td>
                                    ))
                                  ):isLoading} */}
                                <td>{item.carrotAmount}</td>
                                <td>{listsBasket[0].currentAmount}</td> {/* left barn */}
                                <td>{item.createdAt}</td> {/* share barn */}
                                <td>{item.expireDate}</td> {/* exchange barn */}
                                {/* <td>{item.active}</td> active barn */}
                                <td className="text-center">
                                    <button type="button" className="btn btn-warning btn-block" onClick={(e) => {editItemHandle(e,item)}} data-modal="modal2" data-toggle="modal2" data-target="#myModal2" data-action="create" value="key">
                                        <i className="fa fa-calendar"></i> Extend
                                    </button>
                                    {/* <button type="button" className="btn btn-outline-primary btn-block" onClick={handleModalAdd} data-modal="modal3" data-toggle="modal3" data-target="#myModal3" data-action="create">
                                        <i className="fa fa-plus"></i> Add more
                                    </button> */}
                                </td>
                            </tr>
                        ))
                        ) : isLoading ? (
                            <tr>
                                <td colSpan={8} className="text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan={8} className="text-center">
                                Data tidak ditemukan
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
        </section>
        <Modal id="modal1" show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Annual Carrot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="send-carrot-form">
            {/* <div className="form-group">
              <label for="annualcarrot_year">Year</label>
              <input id="annualcarrot_year" name="annualcarrot_year" type="number" className="form-control" value={getYears} onChange={handleYears} isLoading={isLoading} required></input>
              <input id="annualcarrot_year_display" type="text" className="form-control-plaintext" readonly="" style={{display:"none"}} value={getYears} onChange={handleYears} isLoading={isLoading} required></input>
            </div> */}
            <div className="form-group">
              <label for="annualcarrot_amount">Carrot Amount</label>
              <input id="annualcarrot_amount" name="annualcarrot_amount" type="number" className="form-control here" min="1" max={getAnnualCarrot.currentAmount} value={getAmount} onChange={handleInputAmount} required></input>
              <small id="annualcarrot_amount_help" className="form-text text-muted" style={{display:"none"}} value={getAmount}  onChange={handleInputAmount} isLoading={isLoading} required>
                          How many carrots do you want to add ?
              </small>
              {getAmount <= 0 ? <div>The minimum amount is 1</div> : null}
            </div>
            {/* <div className="form-group">
              <label for="annualcarrot_share_expired">Share Expired Date</label>
              <input id="annualcarrot_share_expired" name="annualcarrot_share_expired" type="date" className="form-control here" value={getCreatedDate} onChange={(e) => setCreatedDate(e.target.value)} defaultValue= {getCreatedDate}></input>
              <small id="annualcarrot_share_expired_help" className="form-text text-muted">
                            All carrots received from this barn cannot be shared after this date
              </small>
            </div> */}
            <div className="form-group">
              <label for="annualcarrot_share_expired">Exchange Expired Date</label>
              <input id="annualcarrot_share_expired" name="annualcarrot_share_expired" type="date" className="form-control here valid" aria-invalid="false" value={getExpDate} onChange={(e) => setExpDate(e.target.value)}></input>
              <small id="annualcarrot_share_expired_help" className="form-text text-muted">
                            All carrots received from this barn cannot be shared after this date
              </small>
              {/* <input
                id="carrot-left"
                type="number"
                className="form-control here"
                // placeholder={getBasket.currentAmount}
                disabled
              /> */}
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

      <Modal id="modal2" show={showExtend} onHide={handleModalExtend}>
        <Modal.Header closeButton>
          <Modal.Title>Extend Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="extend-date-form">
            {/* <div className="form-group">
              <label for="annualcarrot_share_expired">Share Expired Date</label>
              <input id="annualcarrot_share_expired" name="annualcarrot_share_expired" type="date" className="form-control here" value={getCreatedDate} onChange={(e) => setCreatedDate(e.target.value)} defaultValue= {getCreatedDate}></input>
              <small id="annualcarrot_share_expired_help" className="form-text text-muted">
                            All carrots received from this barn cannot be shared after this date
              </small>
            </div> */}
            <div className="form-group">
              <label for="annualcarrot_share_expired">Exchange Expired Date</label>
              <input id="annualcarrot_share_expired" name="annualcarrot_share_expired" type="date" className="form-control here valid" aria-invalid="false" value={getExpDate} onChange={(e) => setExpDate(e.target.value)}></input>
              <small id="annualcarrot_share_expired_help" className="form-text text-muted">
                            All carrots received from this barn cannot be shared after this date
              </small>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalExtend}>
            Cancel
          </Button>
          <Button
            type="submit"
            form="send-carrot-form"
            className="btn btn-carrot radius-5"
            onClick={handleClickShareExtend}
            disabled = {isLoadingSubmit}
          >
            {isLoadingSubmit ? 'Loading...' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default HarvestComponent