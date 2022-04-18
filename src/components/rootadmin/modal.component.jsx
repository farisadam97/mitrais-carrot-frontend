import React from 'react'

const ModalComponent = () => {
  return (
    <div>
        <div className='modal-content'>
            <div className="modal-header">
                <h5 className="modal-title">Add New Barn</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <form id="modal-form" className="modal-form" action="" novalidate="novalidate">
            <div className="modal-body">
                <div id="modal-form-input" style={{display: "block"}}>
                    <div className="form-group">
                        <label for="annualcarrot_year">Year</label>
                        <input id="annualcarrot_year" name="annualcarrot_year" type="number" value="2022" className="form-control" />
                        <input id="annualcarrot_year_display" type="text" className="form-control-plaintext" readonly="" style={{display:"none"}} />
                    </div>
                    <div className="form-group" id="group-carrot-amount">
                        <label for="annualcarrot_amount">Carrot Amount</label>
                        <input id="annualcarrot_amount" name="annualcarrot_amount" type="number" className="form-control here" />
                        <small id="annualcarrot_amount_help" className="form-text text-muted" style={{display:"none"}}>
                          How many carrots do you want to add ?
                        </small>
                    </div>
                    <div className="form-group" id="group-share-expired">
                        <label for="annualcarrot_share_expired">Share Expired Date</label>
                        <input id="annualcarrot_share_expired" name="annualcarrot_share_expired" type="text" className="form-control here" />
                        <small id="annualcarrot_share_expired_help" className="form-text text-muted">
                            All carrots received from this barn cannot be shared after this date
                        </small>
                    </div>
                    <div className="form-group" id="group-exchange-expired">
                        <label for="annualcarrot_exchange_expired">Exchange Expired Date</label>
                        <input id="annualcarrot_exchange_expired" name="annualcarrot_exchange_expired" type="text" className="form-control here" />
                        <small id="annualcarrot_exchange_expired_help" className="form-text text-muted">
                            All carrots from this barn cannot be used for exchanging reward after this date
                        </small>
                    </div>
                        <input id="input_mode" type="hidden" name="input_mode" value="create" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button id="formBtnDelete" type="button" className="btn btn-danger radius-5" style={{display: "none"}}><i className="fa fa-trash"></i> Delete</button>
                    <button id="formBtnCancel" type="button" className="btn btn-link" data-dismiss="modal">Cancel</button>
                    <button id="formBtnSubmit" type="submit" className="btn btn-carrot radius-5" style={{display: "block"}}>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ModalComponent