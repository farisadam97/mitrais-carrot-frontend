import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import Cookies from "universal-cookie";
import { DefaultConfig } from '../../config/config'
import axios from 'axios'

const TableUser = ({ lists, isLoading }) => {
    const cookies = new Cookies();
    const [getToken, setToken] = useState(cookies.get('access_token'));
    
    const deleteUser = (e,userId) => {
        e.preventDefault()
        if(window.confirm("Are you user delete this item?")){
            axios.delete(`${DefaultConfig.base_api}/user`,{
                data: {
                    id: userId
                },
                headers: {
                    Authorization: `Bearer ${getToken}`
                }
            })
            .then((response) => {
                alert("Item deleted")
            })
            .catch((error) => {
                alert("Something wrong!")
            })
        }
    }
    
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <table id="temp-table" className="table table-striped table-bordered table-hover mt-3" style={{width:"100%"}}>
                        <thead>
                            <tr className="text-center">
                                <th scope="col" style={{width:"5%"}}>No.</th>
                                <th scope="col" style={{width:"80%"}}>Data</th>
                                <th scope="col" style={{width:"15%"}}>Action</th>
                            </tr>
                        </thead>
                        <tbody id="table-users">
                            {lists.length > 0 ? (
                                lists.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td>
                                                <table style={{ width: "100%" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>ID</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Name</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Username</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.username}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Email</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Birthday Date</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.birthdayDate}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Address</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.address}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Grades</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.grades}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Role</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.role}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Office</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.office}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Status</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.status}</td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td style={{ width: "20%" }}>ResignDate</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.resignDate}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Position</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.position}</td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td style={{ width: "20%" }}>Group</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.group}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "20%" }}>Supervisor</td>
                                                            <td style={{ width: "1%" }}>:</td>
                                                            <td style={{ width: "79%" }}>{item.supervisor}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" name="btn_delete" className="btn btn-outline-danger btn-sm" data-id="'+row.username+'" onClick={(e) => {deleteUser(e,item.id)}}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>
                                            </td>
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
                        <tfoot />
                    </table>
                </div>
            </div>
        </div>
    )
};

export default TableUser;
