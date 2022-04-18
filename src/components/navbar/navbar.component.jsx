import React, { useEffect, useState } from "react";
import axios from "axios";
import {DefaultConfig} from "../../config/config";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthContext from "../../hooks/AuthProvider";
import Cookies from "universal-cookie";
import mitraisLogo from '../../assets/img/mitrais-logo.png'
import  './navbar.component.css'

import { NavDropdown } from "react-bootstrap";
import { faBars, faSignOut } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = props =>{
    const fontAwesomeHam = <FontAwesomeIcon icon={faBars} size='lg' color="#5709B9"/>
    const {setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const cookies = new Cookies()
    const url = useLocation()
    const [getUrl, setUrl] = useState();
    const [getUrlHome, setUrlHome] = useState();

    useEffect(() => {
        if (url.pathname.includes("/rootadmin")) {
            setUrlHome("/rootadmin")
            setUrl("/rootadmin/recent-birthday")
        } else if (url.pathname.includes("/staff")) {
            setUrlHome("/staff")
            setUrl("/staff/recent-birthday")
        }
    }, [])

    const recBirthday = () => {
        if (cookies.get('role') == "ROLE_STAFF") {
            return (
                <NavDropdown.Item href={getUrl}>Colleague Birthday</NavDropdown.Item>
            )
        } else if (cookies.get('role') == "ROLE_MANAGER") {
            return (
                <NavDropdown.Item href={getUrl}>Colleague Birthday</NavDropdown.Item>
            )
        } else if (cookies.get('role') == "ROLE_SENIORMANAGER") {
            return (
                <NavDropdown.Item href={getUrl}>Colleague Birthday</NavDropdown.Item>
            )   
        } else {
            return null
        }
    }


    const logout = async () => {
        axios.post(`http://localhost:2022/api/auth/signout`)
        .then((response) => {
            cookies.remove('access_token')
            cookies.remove('role')
            // localStorage.removeItem('role')
            // localStorage.removeItem('access_token')
            setAuth({})
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-2">
            <div className="container-fluid">
                <a href={getUrlHome}>
                    <img src={mitraisLogo} alt="" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="w-100 d-flex justify-content-end">
                        {/* <ul className="navbar-nav ">
                            <li className="nav-item dropdown me-5">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={['fas','bell']} size='lg' />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul> */}
                        <NavDropdown title={fontAwesomeHam} id="basic-nav-dropdown">
                            {recBirthday()}
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#" onClick={logout} style={{ color: '#F26F44' }} >Sign Out <FontAwesomeIcon icon={faSignOut} color="#F26F44"/></NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </div>
            </nav>


    )
}

export default NavbarComponent