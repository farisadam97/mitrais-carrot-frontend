import { React,useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Container from "../../container";
import mitraisLogo from '../../../assets/img/mitrais-logo.png'
import axios from "axios";
import {DefaultConfig} from "../../../config/config";
import Cookies from "universal-cookie";
import useAuth from "../../../hooks/useAuth";
import RouteConfig from "../../../config/Route";
import RolesConfig from "../../../config/Roles";
import {encryptData}  from "../../../config/config"
import './login.page.css'

const LoginPage = () => {
    const [userNameInput, setUserNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const cookies = new Cookies()

    // const {setAuth} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    // const from = location.state?.pathname || "/"

    const userNameHandle = (e) => {
        setUserNameInput(e.currentTarget.value)
    }
    const passwordNameHandle = (e) => {
        setPasswordInput(e.currentTarget.value)
    }

    const submitHandle = (e) => {
        e.preventDefault()
        if(userNameInput !== "" && passwordInput !== ""){
            axios.post(`http://localhost:2022/api/auth/signin`,{
                "username" : userNameInput,
                "password" : passwordInput
            })
            .then((response) => {
                console.log(response)
                const roles = response?.data?.roles[0]
                // const name = response?.data?.name
                const id = response?.data?.id
                const accessToken = response.data.accessToken
                const user = userNameInput
                const pwd = passwordInput
                cookies.set('access_token',accessToken,{path:'/'})
                cookies.set('role',roles,{path:'/'})
                // cookies.set('name',name,{path:'/'})
                cookies.set('id',id,{path:'/'})
                // localStorage.setItem("role",roles)
                // localStorage.setItem("access_token",accessToken)
                // setAuth({user,pwd,roles,accessToken})
                switch (roles) {
                    case RolesConfig.ROOT_ADMIN:
                        navigate(`${RouteConfig.ROOT_ADMIN}`,{replace:true})
                        break;
                    case RolesConfig.STAFF:
                        navigate(`${RouteConfig.STAFF}`,{replace:true})
                        break;
                    case RolesConfig.ADMIN:
                        navigate(`${RouteConfig.ADMIN}`,{replace:true})
                        break
                    default:
                        break;
                }
            }).catch((error) => {
                if(error?.response?.status === 401){
                    alert("Username or Password is wrong")
                    // console.log(error)   
                }
            })
        }
    }


    return(
        <Container>
            <div className="row justify-content-md-center mt-5">
                <div className="col-md-5">
                    <div className="card shadow rounded-5" >
                        <div className="card-body">
                            <div className="text-center">
                                <img src={mitraisLogo} alt=""className="logo text-center"/>
                            </div>
                            <form action="" className="mt-5 px-4">
                                <input type="text" 
                                    name="" 
                                    id="username-input"  
                                    className="form-control mb-3 rounded-pill"  
                                    placeholder="Username"
                                    value={userNameInput}
                                    onChange={userNameHandle}
                                />
                                <input type="password" 
                                    name="" 
                                    id="password-input" 
                                    className="form-control mb-3 rounded-pill" 
                                    placeholder="Password"
                                    value={passwordInput}
                                    onChange={passwordNameHandle}
                                />
                                <a href="#" className="my-4 d-block btn btn-mitrais rounded-pill py-3" onClick={submitHandle}>
                                    Login
                                </a>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LoginPage;
