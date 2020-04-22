import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import WelcomePage from './content/WelcomePage';
import Passcode from './content/Passcode';
import ZipDay from './content/ZipDay';

class App extends Component {
  render() {
    return (
      <>
        <Content>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/passcode" component={Passcode} />
            <Route exact path="/zipday" component={ZipDay} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
