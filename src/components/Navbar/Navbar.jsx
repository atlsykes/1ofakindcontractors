import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar sticky-top navbar-expand-lg navbar-light"
        style={{ backgroundColor: "lightgray" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            ONE OF A KIND CONTRACTORS LLC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/">
                  SERVICES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/">
                  GALLERY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <a class="btn btn-primary" href="tel:7578906203" role="button">
            Call Now
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
