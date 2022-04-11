import React from "react";
import NavbarComponent from "../../components/navbar/navbar.component";
import Container from "../container";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const IndexAdmin = (props) => {

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <div className="row admin-tabs my-4">
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>CARROT SUMMARY</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>MANAGER</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>STAFF GROUP</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link  to="/admin/bazaar" className="nav-link">
                            Bazaar
                        </Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link  to="/admin/bazaar-claimed" className="nav-link">
                            Bazaar Claimed
                        </Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>INSERT/UPDATE STAFF</a>
                    </div>
                </div>
                <Outlet/>
            </Container>
        </div>
    )
}

export default IndexAdmin;
