import React, { useState } from "react";

const FilterComponent = (props) => {
  const [getType, setType] = useState();
  const [getStartDate, setStartDate] = useState("");
  const [getEndDate, setEndDate] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();

    if (getStartDate === "" || getEndDate === "") {
      alert("Please enter both start and end date");
    }

    if (Date.parse(getEndDate) < Date.parse(getEndDate)) {
      alert("End date must be after start date");
    }

    props.loadHistories(getStartDate, getEndDate);
  };

  return (
    <div className="row d-flex align-content-end">
      <div className="col-md-12">
        <form>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="carrot-type">Type</label>
                <div>
                  <select
                    id="carrot-type"
                    name="carrot-type"
                    className="form-select"
                  >
                    <option value="type1">Rewards</option>
                    <option value="type2">Shared</option>
                    <option value="type3">Bazaar</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="">Date From</label>
                <input
                  onChange={(e) => setStartDate(e.target.value)}
                  id=""
                  name=""
                  type="date"
                  className="form-control here"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="date-to">Date To</label>
                <input
                  onChange={(e) => setEndDate(e.target.value)}
                  id="date-to"
                  name="date-to"
                  type="date"
                  className="form-control here"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="holder" className="vis-none">
                  Date To
                </label>
                <button
                  onClick={clickHandler}
                  name="submit"
                  type="submit"
                  className="btn btn-primary d-block w-100"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterComponent;
