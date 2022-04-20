import React, { useState } from "react";
import NavbarComponent from "../../components/navbar/navbar.component";
import Container from "../container";

import Footer from "../../components/footer/footer.component";
import { Link, Outlet, useLocation } from "react-router-dom";

const IndexAdmin = (props) => {
    const [nav, setNav] = useState("carrot-summary");
    const url = useLocation()

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <div className="row admin-tabs my-4">
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${url.pathname == "/admin" ? 'active' : '' }`} to="">CARROT SUMMARY</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${url.pathname.includes("/manager") ? 'active' : '' }`} to="manager-list">MANAGER</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${url.pathname.includes("/staff-group") ? 'active' : '' }`} to="staff-group">STAFF GROUP</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${url.pathname == "/admin/bazaar" ? 'active' : '' }`} to="bazaar">BAZAAR</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${url.pathname.includes("/bazaar-claimed") ? 'active' : '' }`} to="bazaar-claimed">BAZAAR CLAIMED</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${url.pathname.includes("/insert-update") ? 'active' : '' }`} to="insert-update">INSERT/UPDATE STAFF</Link>
                    </div>
                </div>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    )
}

export default IndexAdmin;
