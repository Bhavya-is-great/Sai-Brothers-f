import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from './images/logo.ico'

function SideBar() {
  return (
    <>
    <nav style={{width:"100"+"vw"}} className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <img src={logo} alt="logo" className='logo' /> Sai Brothers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/allitems">All items</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/developer">Developer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart"><i className='fas fa-shopping-cart'></i> Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default SideBar;
