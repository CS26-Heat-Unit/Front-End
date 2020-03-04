import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const toggleLogout = e => {
    e.preventDefault();
    console.log("Logging out.");
    localStorage.removeItem("token");
    props.setLoggedIn(false);
    console.log("setLoggedIn:", props.loggedIn);
    props.history.push("/login");
  };

  return (
    <div className="header">
      <div className="hamburger" />
      <div className="main-title">
        <h1 className="title-font">Heat Unit</h1>
      </div>
      <div className="buttons">
        {!props.loggedIn ? (
          <div className="buttons">
            <Link to="/login">
              <div className="button">Log In</div>
            </Link>
            <Link to="/register">
              <div className="button">Register</div>
            </Link>
          </div>
        ) : (
          <div className="buttons">
            <div className="button" onClick={toggleLogout}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
