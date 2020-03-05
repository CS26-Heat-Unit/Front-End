import React, { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Console from "./components/Console";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <div className="App">
      {/* There is no '/' -> it will always try to Redirect '/' to '/play' but will Redirect again to '/login' if unauthorized */}
      <Route exact path="/" render={props => <Redirect to="/play" />} />

      <Route
        path="/"
        render={props => (
          <Header
            history={props.history}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
          />
        )}
      />
      <Route
        path="/login"
        render={props => (
          <Login
            history={props.history}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
          />
        )}
      />
      <Route
        path="/register"
        render={props => (
          <Register
            history={props.history}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
          />
        )}
      />
      <PrivateRoute path="/play" render={props => <Console />} />
    </div>
  );
}

export default App;
