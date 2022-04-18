import React from "react";
import Container from "./container";

const Unauthorized = () => {
    return(
        <Container>
            <div className="" style={{color:"red", textAlign:"center", marginTop:"200px"}}>
                <h1>401</h1>
                <h2>Unauthorized</h2>
            </div>
        </Container>
    )
}

export default Unauthorized