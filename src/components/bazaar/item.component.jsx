import React from "react";
import { Link } from "react-router-dom";
import noImages from '../../assets/img/no-images.png'


const BazaarItem = (props) => {
    return(
        <div className="row mt-3">
            {props.items.map(item => (
                <div className="col-md-3" key={item.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            {/* add image here */}
                            <img 
                                src={item.linkImg !== ""? item.linkImg : noImages}
                                alt=""
                                style={{
                                    objectFit:"contain",
                                    maxWidth:"210px",
                                    height:"240px"
                            }} />
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