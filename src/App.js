import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import 'bootstrap/dist/js/bootstrap.esm'
import "./assets/css/custom.css";
import LoginPage from "./pages/auth/login/login.page";
import IndexStaff from "./pages/staff/index/index.page";
import RootAdminIndex from "./pages/rootAdmin/index/index.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryTransaction from "./pages/history-transaction";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/staff/" element={<IndexStaff />}></Route>
        <Route path="/rootadmin/" element={<RootAdminIndex />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="history-transaction" element={<HistoryTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
