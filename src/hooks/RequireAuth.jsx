import { useLocation,Navigate,Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import useAuth from "./useAuth";
import RouteConfig from "../config/Route";
import {decryptData} from "../config/config"

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth()
    const location = useLocation()
    const cookie = new Cookies()
    // const role =  decryptData(cookie.get("role"))
    const role =  cookie.get("role")
    const accessToken = cookie.get("access_token")
    console.log("rqaARole",role)
    // const role = localStorage.getItem('role')
    // const accessToken = JSON.stringify(localStorage.getItem('access_token'))
    return(
        // console.log("auth",role,"alowed",accessToken)
        // auth?.roles?.find(role => allowedRoles?.includes(role))
        // (auth.roles === allowedRoles[0])
        (role === allowedRoles[0])
            ?<Outlet/>
            : (accessToken !== null)
                ? <Navigate to = {RouteConfig.UNAUTHORIZED} state={{from: location}} replace />
                : <Navigate to = "/" state={{from:location}} replace />
    )
}

export default RequireAuth