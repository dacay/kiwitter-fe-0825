import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

import './utils/devserver.js';

function App() {
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
          <PageLayout>Home</PageLayout>
        </Route>
        <Route path="/profile/:nick">
          <PageLayout>Profile page</PageLayout>
        </Route>
        <Route path="/detail/:twitId">
          <PageLayout>Twit detail</PageLayout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
