import React from "react";
import PageTitle from "../../../components/text/pageTitle.component";
import NavbarComponent from "../../../components/navbar/navbar.component";
import ContainerContent from "../../../components/container/container.component";
import Container from "../../container";
import RootTabs from "../../../components/tab/rootAdmin.tab.component";

const RootAdminIndex = props => {
    return(
        <div className="">
            <Container>
                <div className="row align-items-center" >
                    <div className="col-md-6">
                        <PageTitle title="FARMER DASHBOARD" />
                    </div>
                    {/* <div className="col-md-6 text-end">
                        <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                    </div> */}
                </div>
                <RootTabs />
                <ContainerContent title={"SUMMARY"} />
            </Container>
        </div>
    )
}

export default RootAdminIndex