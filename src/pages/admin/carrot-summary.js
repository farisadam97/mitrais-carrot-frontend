import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import ContainerContent from '../../components/container/container.component'
import NavbarComponent from '../../components/navbar/navbar.component'
import Container from '../container'
import Header from './header'
// import store from '../../middleware/admin/configureStore'
// import { fetchCarrotSummaryFailed, fetchCarrotSummarySuccess } from '../../middleware/admin/carrotSummary'

const CarrotSummary = () => {
  const [getCarrotSummary, setCarrotSummary] = useState();
  const [showLoading, setLoading] = useState(true);

//   useEffect(() => {
//     const url = "http://localhost:2022/api/v1/basket/AllStaffCarrot";
//     const payload = {
//       id: "1",
//       userId: "1",
//       earnedAmount: "0",
//       sharedAmount: "0",
//       spentAmount: "0",
//       donateAmount: "0",
//       currentAmount: "0",
//     };
//     axios
//       .post(url, payload)
//       .then((r) => {
//         setCarrotSummary(r.data.body);
//         setLoading(false);
//         store.dispatch(
//           fetchCarrotSummarySuccess({ lists: r.data.body.data })
//         );
//       })
//       .catch((e) => {
//         //store.dispatch(fetchCarrotSummaryFailed());
//       });
//   }, []);

  return (
    <div>
        {/* <NavbarComponent /> */}
        {/* <Container> */}
            {/* <Header /> */}
            {/* <hr className='box-title-hr'></hr> */}
            <ContainerContent title="CARROT SUMARY">
                <div className='col-md-12'>
                    <div id='staff-table-carrot' className='dataTables_wrapper dr-bootstrap4 no-footer'>
                        <div className='dt-button'>
                            <button className='dt-button button-excel btn-html5 btn btn-info' tabIndex={0} aria-controls="staff-table" type='button'>
                                <span>
                                    <i className='fa fa-download'></i>
                                    "Excel"
                                </span>
                            </button>
                        </div>
                        <div id="staff-table_filter" className="dataTables_filter">
                            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="staff-table" /></label>
                        </div>
                    </div>
                    <div className="dataTables_length" id="staff-table_length">
                        <label>Show <select name="staff-table_length" aria-controls="staff-table" className="form-control-sm" style= {{borderColor: "#ced4da"}}>
                        <option value="10">10 rows</option>
                        <option value="25">25 rows</option>
                        <option value="50">50 rows</option>
                        <option value="100">100 rows</option>
                        <option value="250">250 rows</option>
                        <option value="500">500 rows</option>
                        <option value="1000">1000 rows</option>
                        <option value="-1">All rows</option>
                        </select> entries</label>
                    </div>
                    <table id="staff-table" className="table table-striped table-bordered table-hover mt-3 dataTable no-footer" style={{width: "100%"}} role="grid" aria-describedby="staff-table_info">
                        <thead>
                            <tr role="row">
                                <th scope="col" rowSpan="2" className="sorting_desc" tabIndex="0" aria-controls="staff-table" colSpan="1" style={{width: "13px"}} aria-sort="descending" aria-label="#: activate to sort column ascending">#</th>
                                <th scope="col" rowSpan="2" className="sorting" tabIndex="0" aria-controls="staff-table" colSpan="1" style={{width: "96px"}} aria-label="Name: activate to sort column ascending">Name</th>
                                <th scope="col" colSpan="4" className="text-center" rowSpan="1">Carrot</th>
                            </tr>
                            <tr role="row">
                                <th scope="col" className="text-right sorting" tabIndex="0" aria-controls="staff-table" rowSpan="1" colSpan="1" style={{width: "89px"}} aria-label="Earned (+): activate to sort column ascending">Earned (+)</th>
                                <th scope="col" className="text-right sorting" tabIndex="0" aria-controls="staff-table" rowSpan="1" colSpan="1" style={{width: "84px"}} aria-label="Shared (-): activate to sort column ascending">Shared (-)</th>
                                <th scope="col" className="text-right sorting" tabIndex="0" aria-controls="staff-table" rowSpan="1" colSpan="1" style={{width: "82px"}} aria-label="Bazaar (-): activate to sort column ascending">Bazaar (-)</th>
                                <th scope="col" className="text-right sorting" tabIndex="0" aria-controls="staff-table" rowSpan="1" colSpan="1" style={{width: "82px"}} aria-label="Bazaar (-): activate to sort column ascending">Donate (-)</th>
                                <th scope="col" className="text-right sorting" tabIndex="0" aria-controls="staff-table" rowSpan="1" colSpan="1" style={{width: "85px"}} aria-label="Balance: activate to sort column ascending">Balance</th>
                            </tr>
                        </thead>
                            <tbody>
                            {getCarrotSummary ? (
                            getCarrotSummary.data.map((e) => (
                                <tr key={e.id}>
                                    <td scope="row">{e.id}</td>
                                    <td>{e.earnedAmount}</td>
                                    <td>{e.sharedAmount}</td>
                                    <td>{e.spentAmount}</td>
                                    <td>{e.donateAmount}</td>
                                    <td>{e.currentAmount}</td>
                                </tr>
                                ))
                            ) : showLoading ? (
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
            </ContainerContent>
        {/* </Container> */}
    </div>
  )
}

export default CarrotSummary