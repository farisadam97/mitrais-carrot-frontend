import React from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import { Outlet } from "react-router-dom";
import PageTitle from "../../../components/text/pageTitle.component";

const IndexStaff = (props) => {

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <PageTitle title="DASHBOARD"></PageTitle>
                <Outlet/>
            </Container>
        </div>
    )
}

export default IndexStaff;
