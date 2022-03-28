import React from "react";
import PageTitle from "../../../components/text/pageTitle.component";
import NavbarComponent from "../../../components/navbar/navbar.component";
import ContainerContent from "../../../components/container/container.component";
import Container from "../../container";

const RootAdminIndex = props => {
    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <div className="row align-items-center" >
                    <div className="col-md-6">
                        <PageTitle title="FARMER DASHBOARD" />
                    </div>
                    {/* <div className="col-md-6 text-end">
                        <a href="#" className="btn btn-success py-2 float-right"> Create Barn </a>
                    </div> */}
                </div>
                <div className="row admin-tabs mb-4">
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link active">DASHBOARD</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">BAZAAR</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">ASIGN ROLE</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">HARVEST</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="#" className="nav-link">DISTRIBUTION</a>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <a href="/rootadmin/setting" className="nav-link">SETTINGS</a>
                    </div>

                </div>
                <ContainerContent title="SUMMARY">

                </ContainerContent>
            </Container>
        </div>
    )
}

export default RootAdminIndex