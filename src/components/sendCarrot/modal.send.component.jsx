import React from "react";

const ModalSend = props => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Share your carrot!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-group">
                        <label htmlFor="text">Recipient</label> 
                        <input id="text" name="text" type="text" className="form-control here" placeholder="Autocomplete + dropdown"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="select">Sharing Type</label> 
                        <div>
                        <select id="select" name="select" className="custom-select">
                            <option value="bday">Reward</option>
                            <option value="gift">Shared</option>
                            <option value="achievement">Bazaar</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Comments</label> 
                            <textarea id="textarea" name="textarea" cols="40" rows="5" className="form-control"></textarea>
                        </div> 
                    <div className="form-group">
                        <label htmlFor="text1">Carrot Left</label> 
                        <input id="text1" name="text1" type="text" className="form-control here" placeholder="555" disabled/>
                    </div> 
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-link float-left" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-carrot radius-5">Send Carrot</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSend