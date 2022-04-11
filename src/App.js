import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css.map";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import 'bootstrap/dist/js/bootstrap.esm'
import "./assets/css/custom.css";
import LoginPage from "./pages/auth/login/login.page";
import IndexStaff from "./pages/staff/index/index.page";
import Unauthorized from "./pages/unauthorized";
import RootAdminIndex from "./pages/rootAdmin/dashboard/dashboard.page";
import { Routes, Route } from "react-router-dom";
import RouteConfig from "./config/Route";
import DashboardStaff from "./components/staff/dashboard.component";
import DetailsItem from "./components/bazaar/itemDetails.component";
import RecentBirthday from "./pages/staff/birthday/recent.birthday.page";
import HistoryTransaction from "./pages/staff/history-transaction/shared.page";
import InsertUpdateUser from "./pages/rootAdmin/insertUser/insert.user.page";
import DashboardRootAdmin from "./pages/rootAdmin/dashboard/dashboard.page";
import IndexRootAdmin from "./pages/rootAdmin/index/index.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>

      {/* <Route element={<RequireAuth allowedRoles={[RolesConfig.STAFF]} />}> */}
      <Route path={RouteConfig.STAFF} element={<IndexStaff />}>
        <Route index element={<DashboardStaff />} />
        <Route path="reward/:id" element={<DetailsItem />} />
        <Route path="history-transaction" element={<HistoryTransaction />} />
        <Route path="recent-birthday" element={<RecentBirthday />} />
      </Route>
      {/* </Route> */}

      {/* <Route element={<RequireAuth allowedRoles={[RolesConfig.ROOT_ADMIN]} />}> */}
      <Route path={RouteConfig.ROOT_ADMIN} element={<IndexRootAdmin />}>
        <Route index element={<DashboardRootAdmin />} />
        <Route path="insert-update" element={<InsertUpdateUser />} />
      </Route>
      {/* </Route> */}

      <Route path={RouteConfig.UNAUTHORIZED} element={<Unauthorized />}></Route>
      {/* catch all */}
      {/* <Route path="*" element={<Missing />} /> */}
    </Routes>
  );
}

export default App;
