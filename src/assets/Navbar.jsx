import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router

import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Solutions
          </Link>
          <div className="dropdown">
            SeaFare aims to provide a unified, streamlined solution to the
            complexities of maritime payroll.
          </div>
        </li>
        <li>
          <Link className="link" to="/pricing">
            Pricing
          </Link>
        </li>
        <li>
          Products
          <div className="dropdown">
            <ul>
              <li>
                <Link className="link" to="#">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link className="link" to="#">
                  For Seafarers
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
