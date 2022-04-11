import React from 'react'

const RootAdminTitle = props => {
  return (
    <div>
        <div className="row align-items-center" >
            <div className="col-md-6">
            <p className="page-title my-4">BARN MANAGEMENT</p>
            </div>
                {/* <div className="col-md-6 text-end">
                    <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                </div> */}
            </div>
            <div className="row admin-tabs mb-4">
            <div className="col-md-auto nav-pills">
                <a href="#" className={`nav-link ${props.active1}`}>DASHBOARD</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="#" className={`nav-link ${props.active2}`}>BAZAAR</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active3}`}>ASSIGN ROLE</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active4}`}>HARVEST</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active5}`}>DISTRIBUTION</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active6}`}>SETTING</a>
                </div>
                <div className="col-md-auto nav-pills">
                    <a href="#" className={`nav-link ${props.active7}`}>INSERT/UPDATE STAFF</a>
                </div>
            </div>
    </div>
  )
}

export default RootAdminTitle