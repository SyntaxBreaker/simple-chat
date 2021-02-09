import React, { useContext } from 'react';
import Chat from '../../pages/Chat';
import SignIn from '../../pages/SignIn';
import { UserContext } from '../../providers/UserProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function Application() {
  const user = useContext(UserContext);

  return (
    <>
      <Router>
      {!user ? <Redirect to="/signIn" /> : <Redirect to="/" /> }
        <Switch>
          <Route exact path="/">
            <Chat />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Application;