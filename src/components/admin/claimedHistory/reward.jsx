import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {DefaultConfig} from '../../../config/config'
import { Modal,Button} from 'react-bootstrap'
import Cookies from "universal-cookie";
import LoadingModal from '../../modal/loading'

const RewardTab = (props) => {
    const cookie = new Cookies()

    const url = `${DefaultConfig.base_api}/rewardSort`
    const header = {
        'Authorization' : `Bearer ${cookie.get("access_token")}`
    }

    const [show, setShow] = useState(false);
    
    const [listHistoryReward,setListHistoryReward] = useState([])
    const [isLoadingTable,setIsLoadingTable] = useState(true)
    const [isLoading,setIsLoading] = useState(false)
    const [amountRow,setAmountRow] = useState(10)
    const [approveValue, setApproveValue] = useState("false")
    const [idHistoryApprove,setIdHistoryApprove] =useState()
    const [itemName,setItemName] = useState('')
    const [userName,setUserName] = useState('')
    const [message,setMessage] = useState('')
    const [location,setLocation] =useState()

    useEffect(() => {
        getDataRewardHistory()
    },[isLoadingTable,amountRow])

    const handleClose = () => {
        setShow(false)
        setIdHistoryApprove('item.id')
        setItemName('item.rewardEntity')
        setUserName('item.userEntity')
        setApproveValue('default')
        setLocation(null)
        setMessage("")
    };
    const handleShow = () => setShow(true);

    const changeAmountRow = (e) => {
        setAmountRow(e.currentTarget.value)
    }

    const getDataRewardHistory = () => {
        axios.get(
            `${url}?category=reward&pageNo=0&pageSize=${amountRow}&sortBy=id&sortDir=asc`,{headers: header}
        ).then(response => {
            setIsLoadingTable(false)
            setListHistoryReward(response?.data?.carrotTrx)
        }).catch(error => {
            console.log(error)
        })
    }

    const selectAction = (e) => {
        let value = e.currentTarget.value
        setApproveValue(value)
        let msg = ""

        if(value === "true"){
            msg = props.returnOffice(location) + " Office"
        } else {
            msg = ""
        }
        setMessage(msg)
    }

    const inputReasonHandler = (e) => {
        setMessage(e.currentTarget.value)
    }

    const actionProcess = (e,item) => {
        e.preventDefault()
        setShow(true)
        setIdHistoryApprove(item.id)
        setItemName(item.rewardEntity)
        setUserName(item.userEntity)
        setLocation(item.rewardLocation)
    }

    const updateStatusItem = () =>{
        setIsLoading(true)
        axios.put(
            `${url}`,
            {
                "id":idHistoryApprove,
                "approved": approveValue,
                "message":message
            },
            {headers: header}
        ).then(response => {
            setIsLoading(false)
            setShow(false)
            getDataRewardHistory()
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="">
            <div className="dataTables_length" id="staff-table_length">
                <label>Show
                    <select name="staff-table_length" aria-controls="staff-table" className="form-control-sm mx-3" value={amountRow} onChange={changeAmountRow} style={{borderColor: "#ced4da"}}>
                        <option value="10">10 rows</option>
                        <option value="25">25 rows</option>
                        <option value="50">50 rows</option>
                        <option value="100">100 rows</option>
                        <option value="">All rows</option>
                    </select>
                    entries
                </label>
            </div>
            <table id='staff-carrot' className='table table-striped table-bordered table-hover mt-3 dataTable no-footer' style={{width: "100%"}} role='grid'>
                <thead>
                    <tr role="row " className='text-center'>
                        <th scope="col" className="sorting_desc"  aria-controls="staff-table" colSpan={"1"} aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: "3%"}}>#</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: ""}}>Staff Name</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: ""}}>Reward Name</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "4%"}}>Carrot</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "25%"}}>Exchange Date</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "15%"}}>Status</th>

                    </tr>
                </thead>
                <tbody id='table-admin-carrot-summary'>
                { listHistoryReward.length > 0 ? 
                    (
                        listHistoryReward.map((item) => (
                            <tr key={item.id}>
                                <td scope="row">{item.id}</td>
                                <td>{item.userEntity}</td>
                                <td>{item.rewardEntity}</td>
                                <td className='text-center'>{item.spentAmount}</td>
                                <td>
                                    {
                                        props.formatDate(item.trxDate)
                                    }
                                </td>
                                <td className='text-center'>
                                    {
                                        (item.status === "waiting") ?
                                            <a href="" onClick={(e) => actionProcess(e,item) } className='btn btn-warning' style={{fontSize:8,padding:8}}>Process ?</a> :
                                            (item.status === "approved") ? <span className='badge bg-success p-2'>Approved</span> :
                                                <span className='badge bg-danger p-3'>Ref</span>
                                    }
                                </td>
                            </tr>
                        ))
                    ) : isLoadingTable ? (
                        <tr>
                        <td colSpan={5} className="text-center">
                            Loading...
                        </td>
                        </tr>
                    ) : (
                        <tr>
                        <td colSpan={5} className="text-center">
                            Data tidak ditemukan
                        </td>
                        </tr>
                    )
                }
                </tbody>
            </table>

            {/* Modal Action Process*/}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Approval action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="itemName" className="form-label">Item name</label>
                            <input type="text" className="form-control" id="itemName" value={itemName} disabled required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="buyerName" className="form-label">Buyer name</label>
                            <input type="text" className="form-control" id="buyerName" value={userName} disabled required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="selectAction" className="form-label">Action</label>
                            <select id='selectAction' className="form-select" aria-label="Default select example"  value={approveValue} onChange={selectAction} required >
                                <option value="default" disabled>
                                    Choose an option
                                </option>
                                <option value="false">Refuse</option>
                                <option value="true">Approve</option>
                            </select>
                        </div>
                        <div className={`mb-3 ${approveValue === "true" ? "d-block" : "d-none" }`}>
                            <label htmlFor="itemLocation" className="form-label">Pick Up location</label>
                            <input type="text" className="form-control" id="itemLocation" value={message} disabled required />
                        </div>
                        <div className={`mb-3 ${approveValue === "false" ? "d-block" : "d-none" }`}>
                            <label htmlFor="inputReasonRefuse" className="form-label">Refusal reason</label>
                            <textarea rows={2} className="form-control" id="inputReasonRefuse" aria-describedby="emailHelp" value={message} onChange={inputReasonHandler}  required />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={updateStatusItem} disabled={message === "" ? true:false}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal loading */}
            <LoadingModal isLoading={isLoading}></LoadingModal>

        </div>
    )
}

export default RewardTab
