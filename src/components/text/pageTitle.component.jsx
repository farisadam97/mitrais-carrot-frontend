import React from "react";
import './pageTitle.component.css'
const PageTitle = props => {
    return(
        <p className="page-title my-4">{props.title}</p>
    )

}

export default PageTitle