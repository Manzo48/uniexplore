import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { store } from "../../redux/store";
import Register from "../Register";
import Frame from "../Frame";
import Header from "../Header";
import Login from "../Login";
import UniversitiesRender from "../UniversitiesRender";
import University from "../University/university";
import "./App.css";
import Footer from "../Footer";

function App() {

  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<UniversitiesRender />} path={'/'} />
          <Route element={<University />} path={'/university/:id'} />
          <Route element={<Frame />} path={'/university/frame/:id'} />
          <Route element={<Login />} path={'/login'} />
          <Route element={<Register />} path={'/register'} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
