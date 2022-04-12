import React from 'react'
import { useEffect, useState } from 'react'
import { Modal, Button} from 'react-bootstrap'
import Cookies from "universal-cookie";
import NavbarComponent from '../../components/navbar/navbar.component'
import Container from '../container'
import ContainerContent from '../../components/container/container.component'
import Header from './header'
import DefaultConfig from '../../config/config'
import axios from 'axios'
import {v4} from 'uuid'
import PageTitle from '../../components/text/pageTitle.component'
import LoadingModal from '../../components/modal/loading'

import decryptData from '../../config/config'

const BazaarAdminPage = () => {
    const cookie = new Cookies()
    const [itemsBazaar,setItemsBazaar] = useState()
    const [isLoading,setIsLoading] = useState(false)

    const [filterCategory, setFilterCategory] =  useState('')
    const [filterLocation,setFilterLocation] = useState('')

    const [inputName,setInputName] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [selectCategory,setSelectCategory] = useState('reward')
    const [selectLocation,setSelectLocation] = useState('1')
    const [inputCarrot, setInputCarrot] = useState(1)
    const [inputStock,setInputStock] = useState(1)
    const [inputMinCarrot,setInputMinCarrot] = useState(0)
    const [inputDate,setInputDate] = useState()
    const [editedId,setEditedId] = useState()
    
    const [isEdit,setIsEdit] = useState(false)
    const [show, setShow] = useState(false);
    const [showDetailSocfound,setShowDetailSocfound] = useState(false)
    const [dataSocfound,setDataSocfound] = useState({})
    const [cashoutAmount,setCashoutAmount] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setIsEdit(false)
        setShow(true)
        setEditedId('')
        setInputName('')
        setInputDesc('')
        setSelectCategory('reward')
        setSelectLocation('1')
        setInputCarrot(1)
        setInputStock(1)
        setInputDate()
    };

    const url = `${DefaultConfig.base_api}/reward`
    const header = {
        'Authorization' : `Bearer ${localStorage.getItem('access_token')}`
    }

    const getDataReward = () => {
        const body = {
            "category":filterCategory,
            "location":filterLocation,
            "fields":"id,category,name,description,rate,stock,expire_date,is_active,location,min_carrots,collected_carrots",
            "page_number":"0",
            "page_size":"10",
            "sort_by":"id",
            "sort_dir":"asc"
        }
        
        axios.post(url,body,{headers: header})
            .then(response => {
                setIsLoading(false)
                setItemsBazaar(response.data?.body)
                setInputName("")
                setInputDesc("")
                setSelectCategory("reward")
                setSelectLocation("1")
                setInputCarrot(1)
                setInputStock(1)
                setInputMinCarrot(0)
                setInputDate("")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(()=>{
        getDataReward()
    },[filterCategory,filterLocation])

    const filterCategoryHandle = (e) => {
        setFilterCategory(e.currentTarget.value)
    }

    const filterLocationHandle = (e) => {
        setFilterLocation(e.currentTarget.value)
    }

    const nameInputHandle = (e) => {
        setInputName(e.currentTarget.value)
    }

    const descInputHandle = (e) => {
        setInputDesc(e.currentTarget.value)
        
    }

    const selectCategoryHandle = (e) => {
        setSelectCategory(e.currentTarget.value)
        if(e.currentTarget.value === "socfound") {
            setInputStock(1)
        }
    }

    const selectLocationHandle = (e) => {
        setSelectLocation(e.currentTarget.value)
    }

    const carrotInputHandle = (e) => {
        setInputCarrot(e.currentTarget.value)
        
    }

    const stockInputHandle = (e) => {
        setInputStock(e.currentTarget.value)
        
    }

    const minCarrotInputHandle = (e) => {
        setInputMinCarrot(e.currentTarget.value)
        
    }


    const expireDateHandle = (e) => {
        setInputDate(e.currentTarget.value)
    }

    const sumbitAddItem = ()=>{
        axios.post(`${url}/add`,
            {
                "category":selectCategory,
                "description":inputDesc,
                "name":inputName,
                "stock":inputStock,
                "rate":inputCarrot,
                "expireDate":inputDate,
                "label":null,
                "location":selectLocation,
                "collectedCarrots":0,
                "minCarrots":inputMinCarrot,
                "isActive":0
            }, 
            {
                headers:header
            }
        ).then(response => {
            handleClose()
            getDataReward()
        })
    }

    const submitEditItem = () => {
        axios.put(
            `${url}`,
            {
                "id": editedId,
                "idUser": 6,
                "name": inputName,
                "description": inputDesc,
                "stock": inputStock,
                "rate": inputCarrot,
                "expireDate": inputDate,
                "category": selectCategory,
                "label": "",
                "location": selectLocation
            },
            {
                headers:header
            }
        ).then(response => {
            setIsLoading(false)
            setIsEdit(false)
            alert(`Item successfully edited`)
            handleClose()
            getDataReward()
        }).catch(error => {
            console.log(error)
        })
    }

    const submitBtnHandle = (e) => {
        e.preventDefault()
        setIsLoading(true)
        if(isEdit){
            submitEditItem()
        } else {
            sumbitAddItem()
        }
    }

    const deleteRewardHandle = (e,productId) => {
        e.preventDefault()
        if(window.confirm("Are you user delete this item?")){
            axios.delete(`${url}/${productId}`,{
                heders:header
            })
            .then((response) => {
                alert("Item deleted")
                getDataReward()
            })
            .catch((error) => {
                alert("Something wrong!")
            })
        }
        
    }

    const editItemHandle = (e,element) => {
        e.preventDefault()
        setShow(true)
        setIsEdit(true)
        setEditedId(element.id)
        setInputName(element.name)
        setInputDesc(element.description)
        setSelectCategory(element.category)
        setSelectLocation(element.location)
        setInputCarrot(element.rate)
        setInputStock(element.stock)
        setInputDate(element.expireDate)

    }

    const toggleActive = (element) => {
        let msg = (element.isActive === 0) ? "Item "+element.name + " has been activated" : "Item "+element.name + " has been deactivated"

        setIsLoading(true)
        axios.put(
            `${url}/toggle-active`,
            {
                "id":`${element.id}`,
                "message":msg
            },
            {
                headers:header
            }
        ).then(response => {
            setIsLoading(false)
            alert(msg)
            getDataReward()
        }).catch(error => {
            console.log(error)
        })
    }

    const detailSocfound = (e,element) => {
        e.preventDefault()
        setShowDetailSocfound(true)
        setDataSocfound({
            "id":element.id,
            "name": element.name,
            "desc": element.description,
            "minCarrots":element.minCarrots,
            "totalCarrot":element.collectedCarrots
        })
    }

    const handleCloseDetailSocfound = () => {
        setShowDetailSocfound(false)
        setDataSocfound({})
    }

    const inputCashoutHandle = e => {
        setCashoutAmount(e.currentTarget.value)
    }

    const cashOutSocfound = () => {
        if(window.confirm(`Do you want to cashout ${cashoutAmount} carrots? from ${dataSocfound.name}`)){
            setIsLoading(true)
            axios.post(
                `${DefaultConfig.base_api}/transaction/cash-out`,
                {
                    "id":dataSocfound.id,
                    "adminId":decryptData(cookie.get("id")),
                    "amount":cashoutAmount
                },
                {headers:header}
            ).then(response => {
                alert("Successfully Cashout Carrots!")
                setIsLoading(false)
                setShowDetailSocfound(false)
                setDataSocfound({})
                setCashoutAmount(0)
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    return (
        
        <div className="">
            {/* <NavbarComponent /> */}
            {/* <Container> */}
                {/* <Header /> */}
                {/* <hr className='box-title-hr'></hr> */}
                    <ContainerContent title="BAZAAR">
                        <div className="row justify-content-center my-4">
                            <div className="col-md-3">
                                <button className='btn btn-carrot' onClick={handleShow}>
                                    Add New
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mb-3">
                                    <label htmlFor="filterCategory" className="form-label">Filter Category</label>
                                    <select id='filterCategory' className="form-select" aria-label="Default select example" value={filterCategory} onChange={filterCategoryHandle} required >
                                        <option value="">All Items</option>
                                        <option value="reward">Reward</option>
                                        <option value="socfound">Social Foundation</option>
                                    </select>
                                </div>  
                            </div>
                            <div className="col-3">
                                <div className="mb-3">
                                    <label htmlFor="filterCategory" className="form-label">Filter Location</label>
                                    <select id='filterCategory' className="form-select" aria-label="Default select example" value={filterLocation} onChange={filterLocationHandle} required >
                                        <option value="">All Locations</option>
                                        <option value="1">Bali</option>
                                        <option value="2">Yogyakarta</option>
                                        <option value="3">Bandung</option>
                                        <option value="4">Jakarta</option>
                                        <option value="5">Singapore</option>
                                    </select>
                                </div>  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Stock</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Expiry Date</th>
                                            <th scope="col">Active</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {   
                                            itemsBazaar?.data.map((element) => 
                                                (
                                                    <tr key={v4()}>
                                                        <td key={v4()}>{element.name}</td>
                                                        <td key={v4()}>{element.category.toUpperCase()}</td>
                                                        <td key={v4()}>{
                                                            element.location === "1" ? "Bali" : element.location === "2" ? "Yogyakarta" : element.location === "3" ? "Bandung" : element.location === "4" ? "Jakarta" : "Singapore"
                                                        }</td>
                                                        <td key={v4()}>{element.stock}</td>
                                                        <td key={v4()}>{element.rate}</td>
                                                        <td key={v4()}>{element.expireDate}</td>
                                                        <td key={v4()}>
                                                            <div className="form-check form-switch">
                                                                <input 
                                                                    className="form-check-input" 
                                                                    type="checkbox" id="flexSwitchCheckChecked" 
                                                                    defaultChecked={
                                                                        (element.isActive) == 0 ? false : true
                                                                    } 
                                                                    onClick={(event) => toggleActive(element)} />
                                                            </div>
                                                        </td>
                                                        <td key={v4()}>
                                                            <div className="w-100">
                                                                <div className="">
                                                                    <a href="#" onClick={(e) => {editItemHandle(e,element)}} className='mr-3'>Edit</a>
                                                                </div>
                                                                <div className="">
                                                                    <a href="#" onClick={(e) => {deleteRewardHandle(e,element.id)}}>Delete</a>
                                                                </div>
                                                                <div className="">
                                                                    {
                                                                        (element.category.toUpperCase() === "SOCFOUND") ? <a href="#" onClick={(e) => {detailSocfound(e,element)}}>Detail</a> : ""
                                                                    }
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    // console.log(element)
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ContainerContent>

            {/* </Container> */}

            {/* Modal add/edit item */}
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            isEdit ? "Edit Item" : "Add Reward"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" value={inputName} onChange={nameInputHandle} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <textarea rows={2} className="form-control" id="inputDescription" aria-describedby="emailHelp" value={inputDesc} onChange={descInputHandle} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="selectCategory" className="form-label">Category</label>
                        <select id='selectCategory' className="form-select" aria-label="Default select example" value={selectCategory} onChange={selectCategoryHandle} required >
                            <option value="reward">Reward</option>
                            <option value="socfound">Social Foundation</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="selectLocation" className="form-label">Location</label>
                        <select id='selectLocation' className="form-select" aria-label="Default select example" value={selectLocation} onChange={selectLocationHandle} required >
                            <option value="1">Bali</option>
                            <option value="2">Yogyakarta</option>
                            <option value="3">Bandung</option>
                            <option value="4">Jakarta</option>
                            <option value="5">Singapore</option>
                        </select>
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="inputCarrot" className="form-label">Carrot</label>
                        <input type="number" min={1} className="form-control" id="inputCarrot" aria-describedby="emailHelp" value={inputCarrot} onChange={carrotInputHandle} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputStock" className="form-label">Stock</label>
                        <input type="number" min={0} className="form-control" id="inputStock" aria-describedby="emailHelp" value={inputStock} onChange={stockInputHandle} disabled={selectCategory === "socfound" ? true : false} required />
                    </div>
                    <div className={`mb-3 ${selectCategory === "socfound" ? "d-block" : "d-none"}`}>
                        <label htmlFor="inputMinimumCarrot" className="form-label">Minimum Carrots Collected</label>
                        <input type="number" min={0} className="form-control" id="inputMinimumCarrot" aria-describedby="emailHelp" value={selectCategory === "socfound" ? inputMinCarrot : 0} onChange={minCarrotInputHandle} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDate" className="form-label">Expire Date</label>
                        <input id="inputDate" name="" type="date" className="form-control here" value={inputDate} onChange={expireDateHandle} required />
                    </div>
                    
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={submitBtnHandle}>
                    {
                        isEdit ? "Update Item" : "Save New Reward"
                    }
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal detail Socfound */}
            <Modal show={showDetailSocfound} onHide={handleCloseDetailSocfound} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Detail Socfound
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className='was-validated'>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name-socfound" value={dataSocfound.name} onChange={e=>{}} aria-describedby="emailHelp" disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <textarea rows={2} className="form-control" id="desc-socfound" value={dataSocfound.desc} onChange={e=>{}} aria-describedby="emailHelp"  disabled/>
                    </div>
                    <div className={`mb-3 `}>
                        <label htmlFor="min-carrot" className="form-label">Minimum Carrots Collected</label>
                        <input type="text" className="form-control" id="min-carrot" value={dataSocfound.minCarrots} onChange={e=>{}} aria-describedby="emailHelp" disabled />
                    </div>
                    <div className={`mb-3 `}>
                        <label htmlFor="total-carrot" className="form-label">Total Carrots Collected</label>
                        <input type="text" className="form-control" id="total-carrot" value={dataSocfound.totalCarrot} onChange={e=>{}} aria-describedby="emailHelp" disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cashout-amount" className="form-label">Cashout Amount</label>
                        <input id="cashout-amount" min={0} type="number" className="form-control here" 
                            value={cashoutAmount} onChange={inputCashoutHandle} disabled={(dataSocfound.totalCarrot > dataSocfound.minCarrots) ? false : true} />
                        <div className={`invalid-feedback ${dataSocfound.totalCarrot < dataSocfound.minCarrots ? "d-block" : ""}`}>
                            Collected carrot amount less than minimum carrots
                        </div>
                    </div>
                    <div className="d-grid">
                        <Button variant="warning" size="lg" onClick={cashOutSocfound} disabled={cashOutSocfound>0? false:true}>
                            Cash Out Carrots
                        </Button>

                    </div>
                    
                </form>
                </Modal.Body>
            </Modal>
            <LoadingModal isLoading={isLoading}></LoadingModal>
        </div>
    )
}

export default BazaarAdminPage