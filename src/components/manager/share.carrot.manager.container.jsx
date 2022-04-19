import React from 'react';
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ShareCarrotManager = () => {
  const [nav, setNav] = useState("share-carrot");
  
  return (
    <div>
        <div className='col-md-12'>
          <ul className='nav nav-tabs mbb-3' id='myTab' role={'tablist'}>
            <li class="nav-item">
            	<Link className={`nav-link ${nav === 'share-carrot'? 'active' : '' }`} to="" onClick={() => setNav("share-carrot")}>STAFF</Link>
                {/* <a href="https://carrotdevdb:4433/MitraisCarrotPHPClient/manager/sharecarrot" class="nav-link active">Staff</a> */}
            </li>
            <li class="nav-item">
            	<Link className={`nav-link ${nav === 'share-carrot'? 'active' : '' }`} to="" onClick={() => setNav("share-group")}>STAFF GROUP</Link>
                {/* <a href="https://carrotdevdb:4433/MitraisCarrotPHPClient/manager/sharecarrot" class="nav-link active">Staff</a> */}
            </li>
          </ul>
        </div>
        <div className='tab-content'>
          <div className='tab-pane active' role={'tabpanel'}>
            <br />
            <div className='text-center mb-3'>
              <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">
                  <i className="fa fa-plus-circle"></i> REWARD CARROT
              </button>
            </div>
            <div id='myTable_wrapper' className='dataTables_wrapper dt_bootstrap4 no-footer'>
              <table id="myTable" className="table table-striped table-bordered table-hover mt-3 dataTable no-footer" style={{width: "100%"}} role={"grid"} aria-describedby="myTable_info">
                  <thead>
                      <tr role="row">
                        <th className="sorting_desc" tabIndex={"0"} aria-controls="myTable" rowSpan="1" colSpan="1" aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: "25px"}}>#</th>
                        <th className="sorting" tabIndex={"0"} aria-controls="myTable" rowSpan="1" colSpan="1" aria-label="Rewarded to: activate to sort column ascending" style={{width: "215px"}}>Rewarded to</th>
                        <th className="sorting" tabindex={"0"} aria-controls="myTable" rowSpan="1" colSpan="1" aria-label="JF: activate to sort column ascending" style={{width: "38px"}}>JF</th>
                        <th className="sorting" tabindex={"0"} aria-controls="myTable" rowSpan="1" colSpan="1" aria-label="Grade: activate to sort column ascending" style={{width: "58px"}}>Grade</th>
                        <th className="text-right sorting" tabindex={"0"} aria-controls="myTable" rowSpan="1" colSpan="1" aria-label="Carrot: activate to sort column ascending" style={{width: "89px"}}>Carrot</th>
                        <th className="wrap_carrot sorting_disabled" rowSpan="1" colSpan="1" aria-label="Note" style={{width: "301px"}}>Note</th>
                        <th className="sorting" tabindex="0" aria-controls="myTable" rowSpan="1" colSpan="1" aria-label="Rewarded at: activate to sort column ascending" style={{width: "128px"}}>Rewarded at</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td valign="top" colSpan="7" className="dataTables_empty">No data available in table</td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShareCarrotManager