import React from "react";
import Container from "../../container";
import mitraisLogo from '../../../assets/img/mitrais-logo.png'
import './login.page.css'

const LoginPage = () => {
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
                                <input type="text" name="" id="username-input" className="form-control mb-3 rounded-pill" placeholder="Username"/>
                                <input type="password" name="" id="password-input" className="form-control mb-3 rounded-pill" placeholder="Password"/>
                                <a href="#" className="my-4 d-block btn btn-mitrais rounded-pill py-3">
                                    SIGN IN
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
