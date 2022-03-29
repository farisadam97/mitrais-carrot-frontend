import React from "react";
import axios from "axios";
import DefaultConfig from "../../config/config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthContext from "../../hooks/AuthProvider";
import Cookies from "universal-cookie";
import mitraisLogo from '../../assets/img/mitrais-logo.png'
import  './navbar.component.css'

import { NavDropdown } from "react-bootstrap";

const NavbarComponent = props =>{
    const fontAwesomeBell = <FontAwesomeIcon icon={['fas','bell']} size='lg' />
    const {setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const cookies = new Cookies()

    const logout = async () => {
        // cookies.remove('access_token')
        // cookies.remove('role')
        axios.post(`${DefaultConfig.base_api}/auth/signout`)
        .then((response) => {
            localStorage.removeItem('role')
            localStorage.removeItem('access_token')
            setAuth({})
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-2">
            <div className="container-fluid">
                <img src={mitraisLogo} alt="" className="logo"/>
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
                        <NavDropdown title={fontAwesomeBell} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <button type="button" className="btn btn-outline-primary py-1 font-size-8" onClick={logout}>Log Out</button>
                    </div>
                </div>
            </div>
            </nav>


    )
}

export default NavbarComponent