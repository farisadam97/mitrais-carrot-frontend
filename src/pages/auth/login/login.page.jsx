import { React,useContext,useState } from "react";
import Container from "../../container";
import mitraisLogo from '../../../assets/img/mitrais-logo.png'
import axios from "axios";
import DefaultConfig from "../../../config/config";
import Cookies from "universal-cookie";
import './login.page.css'

const LoginPage = () => {
    const [userNameInput, setUserNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const cookies = new Cookies()

    const userNameHandle = (e) => {
        setUserNameInput(e.currentTarget.value)
    }
    const passwordNameHandle = (e) => {
        setPasswordInput(e.currentTarget.value)
    }

    const submitHandle = (e) => {
        e.preventDefault()
        if(userNameInput !== "" && passwordInput !== ""){
            axios.post(`${DefaultConfig.base_api}/auth/signin`,{
                "username" : userNameInput,
                "password" : passwordInput
            })
            .then((response) => {
                console.log(response)
                cookies.set('role',response.data.roles[0],{path:'/'})
                cookies.set('access_token',response.data.accessToken,{path:'/'})
            }).catch((error) => {
                if(error.response.status == 401){
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
