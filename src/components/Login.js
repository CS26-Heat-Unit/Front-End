import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const Login = props => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://heat-unit-backend.herokuapp.com/login/", credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
        props.setLoggedIn(true);
        props.history.push("/play");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <h2>Welcome back!</h2>
      <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="enter username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="enter password"
          onChange={handleChange}
        />
        <button className="button" type="submit">Log In</button>
      </form>
      <Link to="/register">
        <span>Don't have an account?</span>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { Login })(Login);
