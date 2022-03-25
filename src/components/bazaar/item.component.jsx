import React from "react";

const BazaarItem = (props) => {
    return(
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">15" MacBook Pro</h5>
                    <p className="card-text">150.000 Carrots</p>
                </div>
                <a href="#" className="btn btn-carrot">BUY</a>
            </div>
        </div>
    )
}

export default BazaarItem