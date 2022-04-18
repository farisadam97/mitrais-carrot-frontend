import React, { useState } from "react";
import NavbarComponent from "../../components/navbar/navbar.component";
import Container from "../container";

import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

const IndexAdmin = (props) => {
    const [nav, setNav] = useState("carrot-summary");

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <div className="row admin-tabs my-4">
                    <div className="col-md-auto nav-pills">

                        <Link className={`nav-link ${nav === 'carrot-summary'? 'active' : '' }`} to="" onClick={() => setNav("carrot-summary")}>CARROT SUMMARY</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${nav === 'manager'? 'active' : '' }`} to="manager-list" onClick={() => setNav("manager")}>MANAGER</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${nav === 'staff-group'? 'active' : '' }`} to="staff-group" onClick={() => setNav("staff-group")}>STAFF GROUP</Link>
                    </div>
                    <div className="col-md-auto nav-pills">

                        <Link className={`nav-link ${nav === 'bazaar'? 'active' : '' }`} to="bazaar" onClick={() => setNav("bazaar")}>BAZAAR</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${nav === 'bazaar-claimed'? 'active' : '' }`} to="bazaar-claimed" onClick={() => setNav("bazaar-claimed")}>BAZAAR CLAIMED</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${nav === 'insert-update'? 'active' : '' }`} to="insert-update" onClick={() => setNav("insert-update")}>INSERT/UPDATE STAFF</Link>
                    </div>
                </div>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    )
}

export default IndexAdmin;
