import React from "react";
import BazaarItem from "./item.component";

const ContainerBazaar = props => {
    return(
        <section className="mb-4">
            <div className="container search-box pb-4">
                <div className="row d-flex align-content-end">
                    <div className="col-md-12">
                        <h4 className="my-2 box-title">Easter Bazaar</h4>
                    </div>
                </div>
                <div className="row mt-3">
                    <BazaarItem />
                    <BazaarItem />
                    <BazaarItem />
                </div>
            </div>
        </section>
    )
}

export default ContainerBazaar