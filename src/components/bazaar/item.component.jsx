import React from "react";
import { Link } from "react-router-dom";

const BazaarItem = (props) => {
    return(
        <div className="row mt-3">
            {props.items.map(item => (
                <div className="col-md-4" key={item.id}>
                    <div className="card">
                        <div className="card-body">
                            {/* add image here */}
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.rate} Carrots</p>
                        </div>
                        <Link to={`reward/${item.id}`} className="btn btn-carrot">View Details</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BazaarItem