import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" to="/project">Project</NavLink>
        <NavLink className="nav-link active" to="/project_data">Project Data</NavLink>
        <NavLink className="nav-link active" to="/register">SignUp</NavLink>
        <NavLink className="nav-link active" to="/login">Login</NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar