import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PageTitle from '../../components/text/pageTitle.component';
import RouteConfig from '../../config/Route';

const Header = () => {
  return (
    <div>
        <div className="row align-items-center" >
            <div className="col-md-6">
                <PageTitle title="ADMIN DASHBOARD" />
            </div>
            {/* <div className="col-md-6 text-end">
                <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
            </div> */}
            </div>
            <div className="row admin-tabs mb-4">
                <div className="col-md-auto nav-pills">
                    <Link  to="/admin/" className="nav-link">
                        DASBOARD
                    </Link>
                </div>
                <div className="col-md-auto nav-pills">
                    <Link  to="/admin/bazaar" className="nav-link">
                        Bazaar
                    </Link>
                </div>
                <div className="col-md-auto nav-pills">
                    <Link  to="/admin/bazaar/claimed" className="nav-link">
                        Bazaar Claimed
                    </Link>
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
                    <a href="#" className="nav-link">SETTINGS</a>
                </div>
        </div>
    </div>
  )
}

export default Header