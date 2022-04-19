import React, { useState } from "react";
import * as date from "../../utils/date/date.util";
import configureStore from "../../store/configureStore";
import Cookies from "universal-cookie"

const store = configureStore();

const FilterComponent = (props) => {
  const cookies = new Cookies();
  const [getToken, setToken] = useState(cookies.get('access_token'));
  const [getId, setId] = useState(cookies.get('id'));
  const [getType, setType] = useState("share");
  const [getStartDate, setStartDate] = useState(date.GetLastMonthDate("-"));
  const [getEndDate, setEndDate] = useState(date.GetCurrentDate("-"));

  const clickHandler = (e) => {
    e.preventDefault();

    if (getStartDate === "" || getEndDate === "") {
      alert("Please enter both start and end date");
    }

    if (Date.parse(getEndDate) < Date.parse(getEndDate)) {
      alert("End date must be after start date");
    }
    
    if (getType == "share") {
      props.resetRewardHistories();
      props.resetDonationHistories();
      props.resetHistories();
      props.loadHistories(getId, getToken, getStartDate, getEndDate);
    } else if (getType == "donation") {
      props.resetHistories();
      props.resetRewardHistories();
      props.resetDonationHistories();
      props.loadDonationHistory(getId, getToken, getStartDate, getEndDate);
    } else if (getType == "bazaar") {
      props.resetDonationHistories();
      props.resetHistories();
      props.resetRewardHistories();
      props.loadRewardHistory(getId, getToken, getStartDate, getEndDate);
    }
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
                    onChange={(e) => setType(e.target.value)}
                    defaultValue={getType}
                  >
                    <option value="bazaar">Bazaar</option>
                    <option value="share">Share</option>
                    <option value="donation">Donation</option>
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
                  defaultValue= {getStartDate}
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
                  defaultValue={getEndDate}
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
