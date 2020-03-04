import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const Register = props => {

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
    // axios
    //   .post("", credentials)
    //   .then(res => {
    //     console.log(res);
    //     localStorage.setItem("token", res.data.payload);
    //     props.setLoggedIn(true);
    //     props.history.push("/play");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    localStorage.setItem("token", "token");
    props.setLoggedIn(true);
    props.history.push("/play");
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
          name="password"
          value={credentials.password}
          placeholder="enter password"
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
