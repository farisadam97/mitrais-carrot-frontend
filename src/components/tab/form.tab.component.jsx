import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";
const colStyle = {
    border: "1px dotted red",
    fontSize:"12px",
    paddingTop: "10px",
};

const FormTab = (props) => {
    const [getFile, setFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (e) => {
		setFile(e.target.files[0]);
        setIsFilePicked(true);
        console.log(e.target.files[0]);
    }

    const handleClickUpload = (e) => {
        e.preventDefault();
        if (getFile === "") {
            alert("Please insert the xlsx File!");
            return;
        }

		const formData = new FormData();

		formData.append('excelFile', getFile);

		axios.request(
            {
                baseURL: "http://localhost:2022/api/v1",
                url: "/user/add-excel",
                method: "POST",
                data: formData,
            }
        ).then(function (res) {
            console.log("res", res)
            if (res.status == 200) {
                alert("The ! ");
            } else if (res.status == 401) {
                alert("Oops! ");
            }
        }).catch( function (e) {
           alert("Error submitting form!");
        });
	};

    return (
        <div className="row">
            <div className="col-md-12">
                <form id="import-form" action="">
                    <div className="row" style={{padding:"20px 12px 20px 12px"}}>
                        <div className="col-md-12" style={colStyle}>
                            <p className="text-muted">
                                notes:<br/>
                                    This menu is only for staff data that is not exist in sonic database, if staff data is exist, staff data will be updated after sync time.
                                    Download spreadsheet format from <a target="_blank" href="https://docs.google.com/spreadsheets/d/1H_yZBWOz71tJqcIymEdfP-75W0zpkaKj/edit?usp=sharing&ouid=102976124939428578015&rtpof=true&sd=true">here</a>.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <input id="import_file" name="import_file" type="file" className="form-control here" onChange={(e) => changeHandler(e)}/>
                                <small className="form-text text-muted text-center">
                                    allowed extension: .xlsx
                                </small>
                        </div>
                        <div className="col-lg-6">
                            <button type="submit" className="btn btn-info" onClick={(e) => handleClickUpload(e)} >
                                <i className="fa fa-upload"></i> Upload
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default FormTab;