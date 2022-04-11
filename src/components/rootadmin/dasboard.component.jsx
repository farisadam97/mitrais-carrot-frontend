import React from 'react'

const DashboardRootAdmin = ({ lists, isLoading }) => {
  console.log(lists)
  return (
    <div>
        <div className='col-md-6'>
            <h5 className='my-3 box-title'>Staff's Birthday</h5>
            <table className='table table-bordered height-59' style={{width:"100%"}}>
                <tbody id='rootadmin-dashboard-staff-birthday'>
                {lists.length > 0 ? (
                    lists.map(item => (
                        <tr key={item.id}>
                        <td scope="row">{item.birthdayDate}</td>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.email}</td>
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
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

DashboardRootAdmin.propTypes = {}

export default DashboardRootAdmin