import React from "react";
import NavbarComponent from "../../components/navbar/navbar.component";
import Container from "../container";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const IndexManager = (props) => {
    const [nav, setNav] = useState("share-carrot");

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <div className="row admin-tabs my-4">
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${nav === 'share-carrot'? 'active' : '' }`} to="" onClick={() => setNav("share-carrot")}>SHARE CARROT</Link>
                    </div>
                    <div className="col-md-auto nav-pills">
                        <Link className={`nav-link ${nav === 'bazaar'? 'active' : '' }`} to="bazaar" onClick={() => setNav("bazaar")}>BAZAAR</Link>
                    </div>
                </div>
                <Outlet/>
            </Container>
        </div>
    )
}

export default IndexManager;
