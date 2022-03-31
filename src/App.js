import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css.map";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import 'bootstrap/dist/js/bootstrap.esm;'
import "./assets/css/custom.css";
import Layout from "./pages/layout";
import LoginPage from "./pages/auth/login/login.page";
import IndexStaff from "./pages/staff/index/index.page";
import Unauthorized from "./pages/unauthorized";
import RootAdminIndex from "./pages/rootAdmin/index/index.page";
import CarrotSummary from "./pages/admin/carrot-summary";
import BazaarAdminPage from "./pages/admin/bazaar";
import BazaarClaimedPage from "./pages/admin/bazaarClaimed";
import Missing from "./pages/missing";
import { Routes, Route, Switch } from "react-router-dom";
import RequireAuth from "./hooks/RequireAuth";
import RouteConfig from "./config/Route";
import RolesConfig from "./config/Roles";
import DashboardStaff from "./components/staff/dashboard.component";
import DetailsItem from "./components/bazaar/itemDetails.component";
import RecentBirthday from "./pages/staff/birthday/recent.birthday.page";
import HistoryTransaction from "./pages/staff/history-transaction/shared.page";
import Setting from "./components/rootAdmin/setting";
import AssignRole from "./components/rootAdmin/assignRole";
import IndexManager from "./pages/manager/indexManagerPage";
import IndexAdmin from "./pages/admin/indexAdminPage";
import StaffGroup from "./components/admin/staffGroup";
import StaffGroupDetail from "./components/admin/staffGroupDetail";
import "./assets/css/custom.css";
import InsertUpdateUser from "./pages/rootAdmin/insertUser/insert.user.page";
import DashboardRootAdmin from "./pages/rootAdmin/dashboard/dashboard.page";
import ManagerComponent from './components/admin/manager.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>

      <Route element={<RequireAuth allowedRoles={[RolesConfig.STAFF]} />}>
      <Route path={RouteConfig.STAFF} element={<IndexStaff />}>
        <Route index element={<DashboardStaff />} />
        <Route path="reward/:id" element={<DetailsItem />} />
        <Route path="history-transaction" element={<HistoryTransaction />} />
        <Route path="recent-birthday" element={<RecentBirthday />} />
      </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={[RolesConfig.MANAGER]} />}>
      <Route path={RouteConfig.MANAGER} element={<IndexManager />}>
        {/* <Route index element={<DashboardStaff/>}/> */}
        <Route path="bazaar" element={<DashboardStaff />} />
        <Route path="reward/:id" element={<DetailsItem />} />
      </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={[RolesConfig.ADMIN]} />}>
      <Route path={RouteConfig.ADMIN} element={<IndexAdmin />}>
        {/* <Route index element={<DashboardStaff/>}/> */}
        <Route index element={<CarrotSummary />} />
        <Route path="bazaar-claimed" element={<BazaarClaimedPage />} />
        <Route path="bazaar" element={<BazaarAdminPage />} />
        <Route path="staff-group" element={<StaffGroup />} />
        <Route path="staff-group/:id" element={<StaffGroupDetail />} />
        <Route path="manager" element={<ManagerComponent />}/>
      </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={[RolesConfig.ROOT_ADMIN]} />}>
      <Route path={RouteConfig.ROOT_ADMIN} element={<RootAdminIndex />}>
        <Route path="settings" element={<Setting />} />
        <Route path="assign-role" element={<AssignRole />} />
        <Route path="insert-update" element={<InsertUpdateUser />} />
      </Route>
      </Route>

      <Route path={RouteConfig.UNAUTHORIZED} element={<Unauthorized />}></Route>
      {/* catch all */}
      {/* <Route path="*" element={<Missing />} /> */}
    </Routes>
  );
}

export default App;
