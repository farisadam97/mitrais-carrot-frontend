
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/js/bootstrap.esm'
import './assets/css/custom.css';
import Layout from './pages/layout';
import LoginPage from './pages/auth/login/login.page';
import IndexStaff from './pages/staff/index/index.page';
import Unauthorized from './pages/unauthorized';
import RootAdminIndex from './pages/rootAdmin/index/index.page';
import CarrotSummary from './pages/admin/carrot-summary';
import BazaarAdminPage from './pages/admin/bazaar';
import Missing from './pages/missing';
import { Routes, Route, Switch} from 'react-router-dom';
import RequireAuth from './hooks/RequireAuth';
import RouteConfig from './config/Route';
import RolesConfig from './config/Roles';

function App() {
  return (
      <Routes>
          <Route path="/" element={<LoginPage />}></Route>

          <Route element={<RequireAuth allowedRoles={[RolesConfig.STAFF]} />}>
            <Route path={RouteConfig.STAFF} element={<IndexStaff />}></Route>
          </Route>

          {/* <Route element={<RequireAuth allowedRoles={[RolesConfig.ADMIN]} />}> */}
            <Route path={RouteConfig.ADMIN} >
              <Route index element={<CarrotSummary />} />
              <Route path='bazaar'element={<BazaarAdminPage />} />
            </Route>
          {/* </Route> */}

          {/* <Route element={<RequireAuth allowedRoles={[RolesConfig.ROOT_ADMIN]} />}> */}
            <Route path={RouteConfig.ROOT_ADMIN}>
              <Route index element={<RootAdminIndex />}></Route>

            </Route>
          {/* </Route> */}

          <Route path={RouteConfig.UNAUTHORIZED} element={<Unauthorized/>}></Route>
          {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}

      </Routes>
  );
}

export default App;
