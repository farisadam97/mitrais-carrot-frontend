import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import Footer from "../../../components/footer/footer.component"
import { Outlet } from "react-router-dom";

const IndexRootAdmin = (props) => {

    // todo: add navbar for bazaar and social foundation
    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <Outlet/>
            </Container>
            <Footer />
        </div>
    )
}

export default IndexRootAdmin;
