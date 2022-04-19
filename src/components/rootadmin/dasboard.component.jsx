import React from 'react'
import ChartComponent from '../chart/chart.component'
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const DashboardRootAdmin = ({ lists, isLoading }) => {
  console.log(lists)

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='row'>
        <div className='col-md-6 text-center'>
            <h5 className='my-3 box-title'>Carrot Available On System</h5>
            {/* <div id='chartdiv' style={{overflow:"hidden", textAlign:"left"}}>
                <div className='amchart-main-div' style={{position:"relative"}}>
                    
                </div>
            </div> */}
            <PieChart width={400} height={400}>
                {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
            </PieChart>
        </div>
        <div className='col-md-6'>
            <h5 className='my-3 box-title'>Staff's Birthday</h5>
            <table className='table table-bordered height-59' style={{width:"100%"}}>
                <tbody id='rootadmin-dashboard-staff-birthday'>
                {lists.length > 0 ? (
                    lists.map(item => (
                        // <tr key={item.id}>
                        //     <td scope="row">{item.birthdayDate}</td>
                        //     <td>{item.name}</td>
                        //     <td>{item.position}</td>
                        //     <td>{item.office}</td>
                        //     <td>{item.email}</td>
                        // </tr>
                        <tr style="width:70%">Total number of staff<sup>*</sup>
                            <td style="width:30%" id="birthday-total_staff" class="text-right">{item.pageSize}</td>
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
                    )};
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DashboardRootAdmin