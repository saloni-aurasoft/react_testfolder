import React from "react";
import PropTypes from "prop-types"; //when we want to use proptypes we first import them
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-light`}
      id="testBox">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.dropdown}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    {props.kids}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/">
                    {props.men}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/">
                    {props.women}
                  </a>
                  <a className="dropdown-item " href="/">
                    {props.footwear}
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}> { /* we converted this to js by using template literals, we using ternary operator to check condition if navbaris darkmodeset color text to light and viceversa */}
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable dark mode
              {/* {props.toggleText} */}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//we are using proptypes- proptype ka use to remember ke liye that if we are using props string toh wo string hi ho not another dt
//type of data or values ko batate

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //isrequired - means "very important "
  about: PropTypes.string,
  categories: PropTypes.string,
  kids: PropTypes.string,
  men: PropTypes.string,
  women: PropTypes.string,
  footwear: PropTypes.string,
};

//howto use default props- when we didnt pass any values tab we can use these values
// Navbar.defaultProps = {
//   title:'set value here',
//   about: 'set value here',
//   categories: 'set value here',
//   kids: 'set value here',
//   men: 'set value here',
//   women: 'set value here',
//   footwear: 'set value here',
// }
