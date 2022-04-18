import React from "react";

const ContainerContent = props => {
    return(
        <section className="mb-4">
            <div className="container search-box pb-4">
                <div className="row d-flex align-content-end">
                    <div className="col-md-12">
                        <h4 className="my-2 box-title">{props.title}</h4>
                    </div>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default ContainerContent