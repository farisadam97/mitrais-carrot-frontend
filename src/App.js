
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
import Missing from './pages/missing';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './hooks/RequireAuth';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<LoginPage />}></Route>

          <Route element={<RequireAuth allowedRoles={["ROLE_STAFF"]} />}>
            <Route path="staff" element={<IndexStaff />}></Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={["ROLE_ROOTADMIN"]} />}>
            <Route path="rootadmin" element={<RootAdminIndex />}></Route>
          </Route>

          <Route path="unauthorized" element={<Unauthorized/>}></Route>
          {/* catch all */}
        </Route>
        {/* <Route path="*" element={<Missing />} /> */}

      </Routes>
  );
}

export default App;
