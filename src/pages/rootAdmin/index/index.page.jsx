import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import Footer from "../../../components/footer/footer.component"
import { Outlet, useLocation } from "react-router-dom";
import PageTitle from "../../../components/text/pageTitle.component";
import RootTabs from "../../../components/tab/rootAdmin.tab.component";

const IndexRootAdmin = (props) => {
    const url = useLocation();
    // todo: add navbar for bazaar and social foundation

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
                <RootTabs url />
                <Outlet/>
            </Container>
            <Footer />
        </div>
    )
}

export default IndexRootAdmin;
