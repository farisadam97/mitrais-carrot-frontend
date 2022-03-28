import React from "react";
import PageTitle from "../../../components/text/pageTitle.component";
import NavbarComponent from "../../../components/navbar/navbar.component";
import ContainerContent from "../../../components/container/container.component";
import Container from "../../container";
import "./setting.page.css"
import "./dataTables.bootstrap4.min.css"

const RootAdminSetting = props => {
    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <div className="row align-items-center" >
                    <div className="col-md-6">
                        <PageTitle title="FARMER DASHBOARD" />
                    </div>
                    {/* <div className="col-md-6 text-end">
                        <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                    </div> */}
                </div>
                <div className="row admin-tabs mb-4">
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">DASHBOARD</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">BAZAAR</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">ASIGN ROLE</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">HARVEST</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">DISTRIBUTION</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link active">SETTINGS</a>
                    </div>

                </div>
                <ContainerContent title="APPLICATION SETTING">
                <br></br>
                <div class="col-md-12">
                    <br></br>
                    <button id="sync" type="button" class="btn btn-info">Sonic Sync&nbsp;
                        <span class="syncloader" style={{display:"none"}}>
                            <i class="fa fa-spinner fa-spin"></i>
                        </span>
                    </button>
                    <br></br>
                    <br></br>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12">
                        <div id="setting-table_wrapper">
                            <table id="setting-table" class="table table-striped table-bordered table-hover mt-3 dataTable no-footer" style={{width: "100%"}} role="grid" aria-describedby="setting-table_info">
                                <thead>
                                    <tr role="row">
                                        <th scope="col" width="5%" class="sorting_disabled" rowspan="1" colspan="1" aria-label="#" style={{width: "13px"}}>#</th>
                                        <th scope="col" width="15%" class="sorting_disabled" rowspan="1" colspan="1" aria-label="KEY" style={{width: "235px"}}>KEY</th>
                                        <th scope="col" width="30%" class="sorting_disabled" rowspan="1" colspan="1" aria-label="DESCRIPTION" style={{width: "111px"}}>DESCRIPTION</th>
                                        <th scope="col" width="45%" class="sorting_disabled" rowspan="1" colspan="1" aria-label="VALUE" style={{width: "54px"}}>VALUE</th></tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd"><td>1</td>
                                        <td>max_birthday_share</td>
                                        <td>Maximum number of carrots shared for others staff`s birthday</td>
                                        <td>50</td>
                                    </tr>
                                    <tr role="row" class="even">
                                        <td>2</td>
                                        <td>carrot_birthday_share</td>
                                        <td>The amount of carrots shared to staff from system on staff`s birthday</td>
                                        <td>25</td>
                                    </tr>
                                    <tr role="row" class="odd">
                                        <td>3</td>
                                        <td>max_share_to_staff</td>
                                        <td>Maximum number of carrots shared by managers to staff</td>
                                        <td>50</td>
                                    </tr>
                                    <tr role="row" class="even">
                                        <td>4</td>
                                        <td>initial_carrot_to_staff</td>
                                        <td>Maximum number of carrots given to new staff</td>
                                        <td>50</td>
                                    </tr>
                                    <tr role="row" class="odd">
                                        <td>5</td>
                                        <td>annual_carrot_left_minimum</td>
                                        <td>Set annual carrot left minimum value and notified root admin</td>
                                        <td>80</td>
                                    </tr>
                                    <tr role="row" class="even">
                                        <td>6</td>
                                        <td>days_to_exchange_same_bazaar</td>
                                        <td>days after last exchange same bazaar item</td>
                                        <td>50</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </ContainerContent>
                <footer class="footer text-center">
                    <div class="container">
                        <span class="text-muted"><small>Copyright © 2018 - 2022 Mitrais. All rights reserved.</small></span>
                    </div>
                </footer>
            </Container>
            
        </div>

    )
}

export default RootAdminSetting