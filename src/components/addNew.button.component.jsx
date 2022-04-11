import React from 'react'
import PropTypes from 'prop-types'

const AddNewButton = () => {
  return (
    <div>
        <div className="text-center mb-3">
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" data-action="create">
                <i className="fa fa-plus-circle"></i> ADD NEW
            </button>
        </div>
    </div>
  )
}

AddNewButton.propTypes = {}

export default AddNewButton