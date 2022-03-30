import React from "react";
import backButton from "../../assets/img/back.png"

const HistoryTitle = props => {
    return (
        <main role="main" className="container">
            <h2 className="mt-4 pl-0 text-grey ml-0">
            <span className="back-button">
                <a href="index-employee.html"><img src={backButton} alt="" className="back" /></a>
            </span> 
            {props.title}
            </h2>
        </main>
    )
}

export default HistoryTitle;