import React from "react";

const StaffSummary = props => {
    return(
        <section className="mini-dashboard px-3 my-4">
            <div className="row gx-5">
                <div className="col-md-4">
                    <div className="row box-profile soft-shadow px-0 mr-0">
                        <div className="col-md-4 my-auto">
                            <img src="img/user.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-8 my-auto">
                            <h4 className="mb-0 text-white">Henokh Santoso</h4>
                            <p className="text-white">Mitrais Employee</p>
                            {/* <!-- <a href="edit-profile.html" className="badge badge-white">Edit Profile</a> --> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row box-carrot px-0 mr-0">
                        <div className="col-md-4 my-auto">
                            <img src=" img/mc-icon-carrot.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-8 my-auto">
                            <h4 className="text-white">You've earned 560 carrots!</h4>
                            <a className="badge badge-white" data-toggle="modal" data-target="#exampleModal">
                                Share carrot!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row box-additional px-0">
                        <div className="col-md-4 my-auto">
                            <img src=" img/mc-icon-transaction.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-8 my-auto">
                            <h4 className="text-white">Carrots Transaction History</h4>
                            <a href="transaction-history.html" className="badge badge-white">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaffSummary