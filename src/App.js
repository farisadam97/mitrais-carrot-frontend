
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/js/bootstrap.esm'
import './assets/css/custom.css';
import LoginPage from './pages/auth/login/login.page';
import IndexStaff from './pages/staff/index/index.page';
import RootAdminIndex from './pages/rootAdmin/index/index.page';
import { BrowserRouter ,Routes,Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/staff/" element={<IndexStaff />}></Route>
            <Route path="/rootadmin/" element={<RootAdminIndex />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
