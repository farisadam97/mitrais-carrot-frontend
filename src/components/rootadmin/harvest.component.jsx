import React from 'react'
import SearchComponent from '../search.button.component';
import AddNewButton from '../addNew.button.component';

const HarvestComponent = ({lists, isLoading}) => {
  console.log(lists);
  return (
    <div>
        <AddNewButton />
        <div id='myTable_wrapper' className='dataTables_wrapper dt-bootstrap4 no-footer'>
            <SearchComponent />
            <table id='myTable' className='table table-striped table-bordered table-hover mt-3 dataTable no-footer' style={{width:"100%"}} role="grid" >
                <thead>
                    <tr role="row">
                        <th rowSpan={"2"} className="sorting_desc" tabIndex={"0"} aria-controls="myTable" colSpan={"1"} aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: "13px"}}>#</th>
                        <th rowSpan={"2"} className="sorting" tabIndex={"0"} aria-controls="myTable" colSpan={"1"} aria-label="Year: activate to sort column ascending" style={{width: "36px"}}>Year</th>
                        <th colSpan={"2"} className="text-center" rowSpan={"1"}>Barn</th>
                        <th colSpan={"2"} className="text-center" rowSpan={"1"}>Expired At</th>
                        <th rowSpan={"2"} className="text-center sorting" tabIndex={"0"} aria-controls="myTable" colSpan={"1"} aria-label="Active: activate to sort column ascending" style={{width: "49px"}}>Active</th>
                        <th rowSpan={"2"} className="text-center sorting_disabled" colSpan={"1"} aria-label="Action" style={{width: "120px"}}>Action</th>
                    </tr>
                    <tr role="row">
                        <th className="text-right sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Total: activate to sort column ascending" style={{width: "92px"}}>Total</th>
                        <th className="text-right sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Left: activate to sort column ascending" style={{width: "83px"}}>Left</th>
                        <th className="text-center sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Share: activate to sort column ascending" style={{width: "46px"}}>Share</th>
                        <th style={{borderRightWidth : "1px !important", width: "76px"}} className="text-center sorting" tabIndex={"0"} aria-controls="myTable" rowSpan={"1"} colSpan={"1"} aria-label="Exchange: activate to sort column ascending">Exchange</th>
                    </tr>
                </thead>
                <tbody id='table-harvest'>
                    {lists.length > 0 ? (
                        lists.map((item, index) => (
                            <tr key={item.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.carrotAmount}</td> {/* total barn */}
                                <td>{item.carrotLeft}</td> {/* left barn */}
                                <td>{item.createdAt}</td> {/* share barn */}
                                <td>{item.expireDate}</td> {/* exchange barn */}
                                <td>{item.active}</td> {/* active barn */}
                                <td className="text-center">
                                    <button type="button" className="btn btn-warning btn-block">
                                        <i className="fa fa-calendar"></i> Extend
                                    </button>
                                    <button type="button" className="btn btn-outline-primary btn-block">
                                        <i className="fa fa-plus"></i> Add more
                                    </button>
                                </td>
                            </tr>
                        ))
                        ) : isLoading ? (
                            <tr>
                            <td colSpan={8} className="text-center">
                                Loading...
                            </td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan={8} className="text-center">
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

export default HarvestComponent