import React from "react";
import { Link } from "react-router-dom";
import "./Calculation/style.css"
const Head = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">INVESTONOMY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active colour me-1 ms-4 chiku"  to="/">Business News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link colour me-1 ms-4"  to="/Mutualmain">Mutual Funds</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link colour me-1 ms-4"  to="/CalcMonth">Return Calculator</Link>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Head