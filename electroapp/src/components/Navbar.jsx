import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Electro</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">Book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my_appoinment">Myappointment</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
