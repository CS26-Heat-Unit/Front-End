import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const Register = props => {

  const [credentials, setCredentials] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials)
    axios
      .post("https://heat-unit-backend.herokuapp.com/api/registration/", credentials)
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
      <h2>Create an Account</h2>
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
          name="password1"
          value={credentials.password1}
          placeholder="enter password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          value={credentials.password2}
          placeholder="enter password again"
          onChange={handleChange}
        />
        <button className="button" type="submit">Sign Up</button>
      </form>
      <Link to='/login'>
      <span>Already have an account?</span>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { Register })(Register);
