
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/js/bootstrap.esm'
import './assets/css/custom.css';
import LoginPage from './pages/auth/login/login.page';
import IndexStaff from './pages/staff/index/index.page';
import { BrowserRouter ,Routes,Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/staff/" element={<IndexStaff />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
