import React from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import PageFile from "../../../components/text/pageTitle.component";
import ContainerBazaar from "../../../components/bazaar/container.component";
import StaffSummary from "../../../components/summary/staff.component";

const IndexStaff = () => {
    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <PageFile title="DASHBOARD"></PageFile>
                <StaffSummary></StaffSummary>
                <ContainerBazaar />
            </Container>
        </div>
    )
}

export default IndexStaff