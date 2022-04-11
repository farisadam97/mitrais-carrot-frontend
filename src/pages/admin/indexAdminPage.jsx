import React from "react";
import NavbarComponent from "../../components/navbar/navbar.component";
import Container from "../container";
import { Outlet } from "react-router-dom";

const IndexAdmin = (props) => {

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <div className="row admin-tabs my-4">
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link active"}>CARROT SUMMARY</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>MANAGER</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>STAFF GROUP</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>BAZAAR</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a className={"nav-link "}>BAZAAR CLAIMED</a>
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
