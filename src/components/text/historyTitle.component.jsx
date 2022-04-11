import React from "react";
import backButton from "../../assets/img/back.png";
import { Link } from "react-router-dom";

const HistoryTitle = props => {
    return (
        <main role="main" className="container">
            <h2 className="mt-4 pl-0 text-grey ml-0">
            <span className="back-button">
                <Link to={-1}><img src={backButton} alt="" className="back" /></Link>
            </span> 
            {props.title}
            </h2>
        </main>
    )
}

export default HistoryTitle;