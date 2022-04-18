import React from 'react'

const ExcelButton = () => {
  return (
    <div>
        <div className="dt-buttons">
            <button className="dt-button buttons-excel buttons-html5 btn btn-info" tabindex="0" aria-controls="staff-table" type="button">
                <span><i className="fa fa-download"></i>
                    Excel
                </span>
            </button>
        </div>
    </div>
  )
}

export default ExcelButton