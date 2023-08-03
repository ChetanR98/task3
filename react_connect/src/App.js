import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectInfo from "./Components/Pages/ProjectInfo";
import ProjectData from "./Components/Pages/ProjectData";

function App() {
  return (
    <>
    <BrowserRouter>
    <center><h1>Crud Project</h1></center>
    <NavBar/>
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/project" element={<ProjectInfo/>} />
      <Route path="/project_data" element={<ProjectData/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
