import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import { Outlet } from "react-router-dom";

const IndexStaff = (props) => {

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
