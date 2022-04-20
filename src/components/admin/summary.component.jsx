import React from 'react'
import ExcelButton from '../excel.button.component'
import SearchComponent from '../search.button.component'

const SummaryCarrot = ({lists, isLoading}) => {
    console.log(lists)
  return (
    <div>
        <div className="dataTables_wrapper dt-bootstrap5 no-footer">
            <ExcelButton />
            <br></br>
            <SearchComponent />
            <div className="dataTables_length" id="staff-table_length">
                <label>Show
                    <select name="staff-table_length" aria-controls="staff-table" className="form-control-sm" style={{borderColor: "#ced4da"}}>
                        <option value="10">10 rows</option>
                        <option value="25">25 rows</option>
                        <option value="50">50 rows</option>
                        <option value="-1">All rows</option>
                    </select>
                    entries
                </label>
            </div>
            <table id='staff-carrot' className='table table-striped table-bordered table-hover mt-3 dataTable no-footer' style={{width: "100%"}} role='grid'>
                <thead>
                    <tr role="row">
                        <th scope="col" rowSpan={"2"} className="sorting_desc" tabIndex="0" aria-controls="staff-table" colSpan={"1"} aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: "32px"}}>#</th>
                        <th scope="col" rowSpan={"2"} className="sorting" tabIndex="0" aria-controls="staff-table" colSpan={"1"} aria-label="Name: activate to sort column ascending" style={{width: "143px"}}>Name</th>
                        <th scope="col" colSpan={"4"} className="text-center" rowSpan={"1"}>Carrot</th>
                    </tr>
                    <tr role="row">
                        <th scope="col" className="text-center" tabIndex="0" aria-controls="staff-table" rowSpan={"1"} colSpan={"1"} style={{width: "134px"}}>Earned (+)</th>
                        <th scope="col" className="text-center" tabIndex="0" aria-controls="staff-table" rowSpan={"1"} colSpan={"1"} style={{width: "128px"}}>Shared (-)</th>
                        <th scope="col" className="text-center" tabIndex="0" aria-controls="staff-table" rowSpan={"1"} colSpan={"1"} style={{width: "126px"}}>Bazaar (-)</th>
                        <th scope="col" className="text-center" tabIndex="0" aria-controls="staff-table" rowSpan={"1"} colSpan={"1"} style={{width: "126px"}}>Donation (-)</th>
                        <th scope="col" className="text-center" tabIndex="0" aria-controls="staff-table" rowSpan={"1"} colSpan={"1"} style={{width: "128px"}}>Balance</th>
                    </tr>
                </thead>
                <tbody id='table-admin-carrot-summary'>
                {lists.length > 0 ? (
                    lists.map((item) => (
                    <tr key={item.id}>
                        <td scope="row">{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.earnedAmount}</td>
                        <td>{item.sharedAmount}</td>
                        <td>{item.spentAmount}</td>
                        <td>{item.donateAmount}</td>
                        <td>{item.donateAmount}</td>
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

export default SummaryCarrot