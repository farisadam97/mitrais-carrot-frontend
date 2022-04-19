import React from 'react'
import { useEffect, useState } from 'react'
import { Modal, Button} from 'react-bootstrap'
import Cookies from "universal-cookie";
import NavbarComponent from '../../components/navbar/navbar.component'
import Container from '../container'
import ContainerContent from '../../components/container/container.component'
import Header from './header'
import { DefaultConfig } from '../../config/config'
import axios from 'axios'
import {v4} from 'uuid'
import PageTitle from '../../components/text/pageTitle.component'
import AccordionHistoryUpdate from '../../components/admin/accordionHistoryUpdate';
import LoadingModal from '../../components/modal/loading';
import noImages from '../../assets/img/no-images.png'

import {decryptData} from '../../config/config'

const BazaarAdminPage = () => {
    const cookie = new Cookies()
    const [itemsBazaar,setItemsBazaar] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const [isLoadingTable,setIsLoadingTable] = useState(true)

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
    const [itemImg,setItemImg] = useState("")
    const [renderImg,setRenderImg] = useState("")
    const [editedId,setEditedId] = useState()
    
    const [isEdit,setIsEdit] = useState(false)
    const [show, setShow] = useState(false);
    const [showDetailSocfound,setShowDetailSocfound] = useState(false)
    const [dataDetailItem,setDataDetailItem] = useState()
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
        setItemImg("")
        setRenderImg("")
    };

    const url = `${DefaultConfig.base_api}/reward`
    const header = {
        'Authorization' : `Bearer ${cookie.get("access_token")}`
    }

    const getDataReward = () => {
        const body = {
            "category":filterCategory,
            "location":filterLocation,
            "fields":"id,category,name,description,rate,stock,expire_date,is_active,location,min_carrots,collected_carrots,link_img",
            "page_number":"0",
            "page_size":"10",
            "sort_by":"id",
            "sort_dir":"asc"
        }
        console.log("data",url)

        setIsLoadingTable(true)
        
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

                setIsLoadingTable(false)
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
            setInputStock(0)
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
                "linkImg":itemImg,
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
                "idUser": cookie.get("id"),
                "name": inputName,
                "description": inputDesc,
                "linkImg":itemImg,
                "stock": inputStock,
                "rate": inputCarrot,
                "minimumCarrots":inputMinCarrot,
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
                headers:header
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
        console.log("edit",element.category)
        setSelectCategory(element.category.toLowerCase())
        setSelectLocation(element.location)
        setInputCarrot(element.minCarrots)
        setInputStock(element.stock)
        setInputDate(element.expireDate)
        setItemImg(element.linkImg)
        setRenderImg(element.linkImg)

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

    const detailItemBazaar = (e,element) => {
        e.preventDefault()
        setShowDetailSocfound(true)
        setDataDetailItem(element)
    }

    const handleCloseDetailSocfound = () => {
        setShowDetailSocfound(false)
        setDataDetailItem()
    }

    const inputCashoutHandle = e => {
        setCashoutAmount(e.currentTarget.value)
    }

    const cashOutSocfound = () => {
        if(window.confirm(`Do you want to cashout ${cashoutAmount} carrots? from ${dataDetailItem.name}`)){
            setIsLoading(true)
            axios.post(
                `${DefaultConfig.base_api}/transaction/cash-out`,
                {
                    "id":dataDetailItem.id,
                    "adminId":decryptData(cookie.get("id")),
                    "amount":cashoutAmount
                },
                {headers:header}
            ).then(response => {
                alert("Successfully Cashout Carrots!")
                setIsLoading(false)
                setShowDetailSocfound(false)
                setDataDetailItem({})
                setCashoutAmount(0)
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    const inputImg = e => {
        setItemImg(e.currentTarget.value)
    }

    const checkImage = () => {
        setRenderImg(itemImg)
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
                                <table id='bazzar-item' className='table table-striped table-bordered table-hover mt-3 dataTable no-footer' style={{width: "100%"}} role='grid'>
                                    <thead>
                                        <tr role="row " className='text-center'>
                                            <th scope="col" className="sorting_desc"  aria-controls="staff-table" colSpan={"1"} aria-sort="descending" aria-label="#: activate to sort column ascending" >Name</th>
                                            <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "10%"}}>Category</th>
                                            <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "10%"}}>Location</th>
                                            <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "4%"}}>Stock</th>
                                            <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "4%"}}>Price</th>
                                            <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "15%"}}>Expire Date</th>
                                            <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "5%"}}>Active</th>
                                            <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "10%"}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id='table-admin-carrot-summary'>
                                    { itemsBazaar?.data.length > 0 ? 
                                        (
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
                                                                    <a href="#"  onClick={(e) => {editItemHandle(e,element)}} className='mr-3 btn btn-outline-success d-block p-1 mb-2'>Edit</a>
                                                                </div>
                                                                <div className="">
                                                                    <a href="#" className='btn btn-outline-danger d-block p-1 mb-2' onClick={(e) => {deleteRewardHandle(e,element.id)}}>Delete</a>
                                                                </div>
                                                                <div className="">
                                                                    {
                                                                        <a href="#" className='btn btn-outline-info d-block p-1' onClick={(e) => {detailItemBazaar(e,element)}}>Detail</a> 
                                                                    }
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    // console.log(element)
                                                )
                                            )
                                        ) : isLoadingTable ? (
                                            <tr>
                                            <td colSpan={8} className="text-center">
                                                Loading...
                                            </td>
                                            </tr>
                                        ) : (
                                            <tr>
                                            <td colSpan={8} className="text-center">
                                                No data
                                            </td>
                                            </tr>
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
                    <div className="mb-3 text-center">
                        <img 
                            src={renderImg !== ""? renderImg : noImages}
                            alt=""
                            style={{
                                objectFit:"contain",
                                height:"200px"
                            }} />
                    </div>
                    <div className="">
                        <label htmlFor="inputName" className="form-label">Picture Link</label>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Picture link" aria-label="Picture link" value={itemImg} onChange={inputImg} aria-describedby="" />
                        <button className="btn btn-outline-secondary" type="button" id="" onClick={checkImage}>Check Image</button>
                    </div>
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
                        <input id="inputDate" name="" type="date" className="form-control here" min={new Date().toISOString().split('T')[0]} value={inputDate} onChange={expireDateHandle} required />
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
            <Modal show={showDetailSocfound} onHide={handleCloseDetailSocfound} size="xl" scrollable={true} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Detail {dataDetailItem?.category === "reward" ? "Item Reward" : "Social Foundation"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className='was-validated'>
                    <div className="mb-3 text-center">
                        <img 
                            src={dataDetailItem?.linkImg !== ""? dataDetailItem?.linkImg : noImages}
                            alt=""
                            style={{
                                objectFit:"contain",
                                height:"200px"
                            }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name-socfound" value={dataDetailItem?.name} onChange={e=>{}} aria-describedby="emailHelp" disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <textarea rows={4} className="form-control" id="desc-socfound" value={dataDetailItem?.description} onChange={e=>{}} aria-describedby="emailHelp"  disabled/>
                    </div>
                    <div className={`mb-3 ${dataDetailItem?.category === "reward" ? "d-none" : ""}`}>
                        <label htmlFor="min-carrot" className="form-label">Minimum Carrots Collected</label>
                        <input type="text" className="form-control" id="min-carrot" value={dataDetailItem?.minCarrots} onChange={e=>{}} aria-describedby="emailHelp" disabled />
                    </div>
                    <div className={`mb-3 ${dataDetailItem?.category === "reward" ? "d-none" : ""}`}>
                        <label htmlFor="total-carrot" className="form-label">Total Carrots Collected</label>
                        <input type="text" className="form-control" id="total-carrot" value={dataDetailItem?.totalCarrot} onChange={e=>{}} aria-describedby="emailHelp" disabled />
                    </div>
                    <div className={`mb-3 ${dataDetailItem?.category === "reward" ? "d-none" : ""}`}>
                        <label htmlFor="cashout-amount" className="form-label">Cashout Amount</label>
                        <input id="cashout-amount" min={0} type="number" className="form-control here" 
                            value={cashoutAmount} onChange={inputCashoutHandle} disabled={(dataDetailItem?.totalCarrot > dataDetailItem?.minCarrots) ? false : true} />
                        <div className={`invalid-feedback ${dataDetailItem?.totalCarrot < dataDetailItem?.minCarrots ? "d-block" : ""}`}>
                            Collected carrot amount less than minimum carrots
                        </div>
                    </div>
                    <div className={`d-grid mb-3 ${dataDetailItem?.category === "reward" ? "d-none" : ""}`}>
                        <Button variant="warning" size="lg" onClick={cashOutSocfound} disabled={cashOutSocfound>0? false:true}>
                            Cash Out Carrots
                        </Button>

                    </div>
                    <AccordionHistoryUpdate dataId={dataDetailItem?.id} v4={v4()} header={header} apiUrl={url}/>
                </form>
                </Modal.Body>
            </Modal>
            <LoadingModal isLoading={isLoading}></LoadingModal>
        </div>
    )
}

export default BazaarAdminPage