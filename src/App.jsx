import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { getAuthToken } from "./utils/auth.js";
import { setToken } from "./utils/axios.js";
import { Provider, useDispatch } from 'react-redux';
import { login } from './userSlice.js';

import PageLayout from "./layouts/PageLayout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";

import './utils/devserver.js';
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken();
    console.log(token);
    if (token) {
      dispatch(login(token));
    }
  }, []);

  return (
    <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" exact>
            {/* /?variant=most_liked */}
            <Home />
          </Route>
          <Route path="/profile/:nick">
            <PageLayout>Profile page</PageLayout>
          </Route>
          <Route path="/detail/:twitId">
            <PageLayout>Twit detail</PageLayout>
          </Route>
        </Switch>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
