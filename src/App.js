import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css.map";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import 'bootstrap/dist/js/bootstrap.esm'
import "./assets/css/custom.css";
import LoginPage from "./pages/auth/login/login.page";
import IndexStaff from "./pages/staff/index/index.page";
import RootAdminIndex from "./pages/rootAdmin/index/index.page";
import { BrowserRouter, Routes, Router, Route, Switch } from "react-router-dom";
import configureStore from "./store/configureStore";
import HistoryTransaction from "./pages/staff/history-transaction/shared.page";

import { Provider } from "react-redux";
import RecentBirthday from "./pages/staff/birthday/recent.birthday.page";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/staff/" element={<IndexStaff />}></Route>
          <Route path="/rootadmin/" element={<RootAdminIndex />}></Route>
          <Route path="/history-transaction" element={<HistoryTransaction />} />
          <Route path="/recent-birthday" element={<RecentBirthday />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
