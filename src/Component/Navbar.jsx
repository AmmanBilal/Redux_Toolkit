import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <section className="container">
      

      <section className="my-4">
        
        <nav className="bg-light py-3">
          <ul className="nav justify-content-center">
            <li className="nav-item mx-4">
              <a className="nav-link" href="/" data-item="Home">
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/" data-item="About">
                About
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/" data-item="Code">
                Code
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
};

export default Navbar;
