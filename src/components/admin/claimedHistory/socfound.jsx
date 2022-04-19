import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {DefaultConfig} from '../../../config/config'
import { Modal,Button} from 'react-bootstrap'
import LoadingModal from '../../modal/loading'
import Cookies from "universal-cookie";


const SocfoundTab = (props) => {
    const cookie = new Cookies()

    const url = `${DefaultConfig.base_api}/rewardSort`
    const header = {
        'Authorization' : `Bearer ${cookie.get("access_token")}`
    }
    const [isLoadingTable,setIsLoadingTable] = useState(true)
    const [isLoading,setIsLoading] = useState(false)
    

    const [listHistorySocFound,setListHistorySocfound] = useState([])
    const [amountRow,setAmountRow] = useState(10)

    const getDataSocfoundHistory = () => {
        axios.get(
            `${url}?category=socfound&pageNo=0&pageSize=${amountRow}&sortBy=id&sortDir=asc`,{headers: header}
        ).then(response => {
            console.log(response)
            setIsLoadingTable(false)
            setListHistorySocfound(response?.data?.carrotTrx)
        }).catch(error => {
            console.log(error)
        })
    }

    const changeAmountRow = (e) => {
        setAmountRow(e.currentTarget.value)
    }

    useEffect(() => {
        getDataSocfoundHistory()
    },[amountRow])


    return (
        <div className="">
            {/* <div className="dataTables_length" id="staff-table_length">
                <label>Show
                    <select name="staff-table_length" aria-controls="staff-table" className="form-control-sm mx-3" value={amountRow} onChange={changeAmountRow} style={{borderColor: "#ced4da"}}>
                        <option value="10">10 rows</option>
                        <option value="25">25 rows</option>
                        <option value="50">50 rows</option>
                        <option value="100">100 rows</option>
                    </select>
                    entries
                </label>
            </div> */}
            <table id='staff-carrot' className='table table-striped table-bordered table-hover mt-3 dataTable no-footer' style={{width: "100%"}} role='grid'>
                <thead>
                    <tr role="row " className='text-center'>
                        <th scope="col" className="sorting_desc"  aria-controls="staff-table" colSpan={"1"} aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: "3%"}}>#</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: ""}}>Staff Name</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: ""}}>Social Foundation</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "4%"}}>Total Carrot</th>
                        <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} style={{width: "25%"}}>Transaction Date</th>
                    </tr>
                </thead>
                <tbody id='table-admin-carrot-summary'>
                { listHistorySocFound.length > 0 ? 
                    (
                        listHistorySocFound.map((item) => (
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
        </div>
    )
}

export default SocfoundTab