import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RootTabs = () => {
    const [nav, setNav] = useState("dashboard");

    return (
        <div className="row admin-tabs mb-4">
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${nav === 'dashboard'? 'active' : '' }`} to="" onClick={() => setNav("dashboard")}>DASHBOARD</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${nav === 'bazaar'? 'active' : '' }`} to="" onClick={() => setNav("bazaar")}>BAZAAR</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${nav === 'assign-role'? 'active' : '' }`} to="assign-role" onClick={() => setNav("assign-role")}>ASSIGN ROLE</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${nav === 'harvest'? 'active' : '' }`} to="harvest" onClick={() => setNav("harvest")}>HARVEST</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${nav === 'distribution'? 'active' : '' }`} to="" onClick={() => setNav("distribution")}>DISTRIBUTION</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${nav === 'settings'? 'active' : '' }`} to="settings" onClick={() => setNav("settings")}>SETTING</Link>
            </div>
            <div className="col-md-auto nav-pills">
                <Link className={`nav-link ${nav === 'insert-update'? 'active' : '' }`} to="insert-update" onClick={() => setNav("insert-update")}>INSERT/UPDATE STAFF</Link>
            </div>
        </div>
    )
};

export default RootTabs;