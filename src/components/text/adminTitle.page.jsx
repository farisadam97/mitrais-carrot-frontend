import React from 'react'

const AdminTitle = props => {
  return (
    <div>
        <div className="row align-items-center" >
            <div className="col-md-6">
            <p className="page-title my-4">ADMIN DASHBOARD</p>
            </div>
                {/* <div className="col-md-6 text-end">
                    <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                </div> */}
            </div>
            <div className="row admin-tabs mb-4">
            <div className="col-md-auto nav-pills">
                <a href="#" className={`nav-link ${props.active1}`}>CARROT SUMMARY</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="#" className={`nav-link ${props.active2}`}>MANAGER</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active3}`}>STAFF GROUP</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active4}`}>STAFF IN GORUP</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active5}`}>BAZAAR</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active6}`}>BAZAAR CLAIMED</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active7}`}>INSERT/UPDATE STAFF</a>
                </div>
            </div>
    </div>
  )
}

export default AdminTitle