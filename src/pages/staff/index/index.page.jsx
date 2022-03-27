import React from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import PageTitle from "../../../components/text/pageTitle.component";
import ContainerContent from "../../../components/container/container.component";
import BazaarItem from "../../../components/bazaar/item.component"
import StaffSummary from "../../../components/summary/staff.component";

const IndexStaff = () => {
    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <PageTitle title="DASHBOARD"></PageTitle>
                <StaffSummary></StaffSummary>
                <ContainerContent title="BAZAAR">
                    <div className="row mt-3">
                        <BazaarItem />
                        <BazaarItem />
                        <BazaarItem />
                    </div>
                </ContainerContent>
            </Container>
        </div>
    )
}

export default IndexStaff