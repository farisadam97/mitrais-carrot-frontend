import React from 'react'
// import ChartComponent from '../chart/chart.component'
import { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import * as date from "../../utils/date/date.util";
import { useState } from 'react';

const DashboardRootAdmin = ({ listsBasket, isLoading }) => {
    const [getCreatedDate, setCreatedDate] = useState(date.GetCurrentDate("-"));
    
  return (
    <div className='row'>
        <div className='col-md-6'>
            <h5 className='my-3 box-title'>Carrot Information</h5>
            <table className='table table-bordered height-59' style={{width:"100%"}}>
                <tbody id='rootadmin-dashboard-staff-birthday'>
                    <tr style={{width:"100%"}}>Date<sup></sup>
                            <td style={{width:"30%"}} id="birthday-total_staff" class="text-right">{getCreatedDate}</td>
                    </tr>
                    <tr style={{width:"100%"}}>Total Carrot<sup></sup>
                            <td style={{width:"30%"}} id="birthday-total_staff" class="text-right">{listsBasket[0].earnedAmount}</td>
                    </tr>
                    <tr style={{width:"100%"}}>Left Carrot<sup></sup>
                            <td style={{width:"30%"}} id="birthday-total_staff" class="text-right">{listsBasket[0].currentAmount}</td>
                    </tr>
                {/* {lists.length > 0 ? (
                    lists.map(item => (
                        <tr key={item.id}>
                            <td scope="row">{item.birthdayDate}</td>
                            <td>{item.name}</td>
                            <td>{item.position}</td>
                            <td>{item.office}</td>
                            <td>{item.email}</td>
                        </tr>
                        <tr style={{width:"70%"}}>Total number of staff<sup>*</sup>
                            <td style={{width:"30%"}} id="birthday-total_staff" class="text-right">{item.createdAt[0]}</td>
                        </tr>
                        
                    ))
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
                    )}; */}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DashboardRootAdmin