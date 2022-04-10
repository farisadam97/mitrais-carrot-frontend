import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DefaultConfig from '../../../config/config'
import { Modal,Button} from 'react-bootstrap'
import LoadingModal from '../../modal/loading'

const SocfoundTab = () => {
    const url = `${DefaultConfig.base_api}`
    const header = {
        'Authorization' : `Bearer ${localStorage.getItem('access_token')}`
    }
    const [isLoadingTable,setIsLoadingTable] = useState(false)
    const [isLoading,setIsLoading] = useState(false)


    return (
        <div className="">
            <div className="dataTables_length" id="staff-table_length">
                <label>Show
                    <select name="staff-table_length" aria-controls="staff-table" className="form-control-sm mx-3" style={{borderColor: "#ced4da"}}>
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
                {/* { listHistoryReward.length > 0 ? 
                    (
                        listHistoryReward.map((item) => (
                            <tr key={item.id}>
                                <td scope="row">{item.id}</td>
                                <td>{item.userEntity}</td>
                                <td>{item.rewardEntity}</td>
                                <td className='text-center'>{item.spentAmount}</td>
                                <td>
                                    {
                                        formatDate(item.trxDate)
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
                } */}
                </tbody>
            </table>
        </div>
    )
}

export default SocfoundTab