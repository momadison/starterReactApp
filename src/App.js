import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './content/WelcomePage';
import LandingPage from './content/LandingPage';
import Passcode from './content/Passcode';
import ZipDay from './content/ZipDay';
import RegistrationForm from './content/RegistrationForm';

class App extends Component {
  render() {
    return (
      <>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/welcome" component={WelcomePage} />
            <Route exact path="/passcode" component={Passcode} />
            <Route exact path="/zipday" component={ZipDay} />
            <Route exact path="/registration" component={RegistrationForm} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
