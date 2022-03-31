import React from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import { Outlet } from "react-router-dom";

const IndexStaff = (props) => {

    // todo: add navbar for bazaar and social foundation
    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <Outlet/>
            </Container>
        </div>
    )
}

export default IndexStaff;