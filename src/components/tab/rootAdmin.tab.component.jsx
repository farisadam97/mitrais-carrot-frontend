import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RootTabs = () => {
    const [nav, setNav] = useState("dashboard");
    const url = useLocation()

    return (
        <div className="row admin-tabs mb-4">
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${url.pathname === "/rootadmin" ? 'active' : '' }`} to="">DASHBOARD</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${url.pathname.includes("/bazaar") ? 'active' : '' }`} to="bazaar">BAZAAR</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${url.pathname.includes("/assign-role")? 'active' : '' }`} to="assign-role">ASSIGN ROLE</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${url.pathname.includes("/harvest") ? 'active' : '' }`} to="harvest">HARVEST</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${url.pathname.includes("/distribution")? 'active' : '' }`} to="distribution">DISTRIBUTION</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${url.pathname.includes("/settings") ? 'active' : '' }`} to="settings">SETTING</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${url.pathname.includes("/insert-update") ? 'active' : '' }`} to="insert-update">INSERT/UPDATE STAFF</Link>
            </div>
        </div>
    )
};

export default RootTabs;