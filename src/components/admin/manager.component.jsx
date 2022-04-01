import React from 'react'

const ManagerComponent = () => {
  return (
    <div>
        <div className="dataTables_wrapper dt-bootstrap5 no-footer">
            <div className="dataTables_filter">
                <label>Search:<input type={"search"} className="form-control form-control-sm" /></label>
            </div>
            <table id="admin-manager-table" className="table table-striped table-bordered table-hover mt-3 dataTable no-footer" style={{width: "100%"}}>
                <thead>
                    <tr role={"row"}>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "18px"}}>#</th>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "160px"}}>Name</th>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "22px"}}>JF</th>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "56px"}}>Grade</th>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "54px"}}>Office</th>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "92px"}}>Email</th>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "59px"}}>Status</th>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "150px"}}>Resign Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr role={"row"}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManagerComponent
