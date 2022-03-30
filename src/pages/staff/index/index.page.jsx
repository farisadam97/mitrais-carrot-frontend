import React from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import { Outlet } from "react-router-dom";

const IndexStaff = (props) => {

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                {/* insert outlet nested router here */}
                <Outlet/>
                {/* from up there to here move this into dashboard staff component */}
                {/* we have got item details */}
            </Container>
        </div>
    )
}

export default IndexStaff;