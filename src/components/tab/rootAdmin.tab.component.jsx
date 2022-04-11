import React, { useEffect, useState } from "react";

const RootTabs = ({ url }) => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (url === "/rootadmin/insert-update") {
            setIsActive(true);
        }
    }, []);

    return (
        <div className="row admin-tabs mb-4">
            <div className="col-md-auto nav-pills">
                <a href="/rootadmin/" className={`nav-link ${isActive ? 'active' : ''}`}>DASHBOARD</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="/rootadmin/" className={`nav-link ${isActive ? 'active' : ''}`}>BAZAAR</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="/rootadmin/" className={`nav-link ${isActive ? 'active' : ''}`}>ASIGN ROLE</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="/rootadmin/" className={`nav-link ${isActive ? 'active' : ''}`}>HARVEST</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="/rootadmin/" className={`nav-link ${isActive ? 'active' : ''}`}>DISTRIBUTION</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="/rootadmin/" className={`nav-link ${isActive ? 'active' : ''}`}>SETTING</a>
            </div>
            <div className="col-md-auto nav-pills">
                <a href="/rootadmin/insert-update" className={`nav-link ${isActive ? 'active' : ''}`}>INSERT/UPDATE STAFF</a>
            </div>
        </div>
    )
};

export default RootTabs;