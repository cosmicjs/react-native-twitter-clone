import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from './app/components/login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          {/*<Scene key="feed" component={Feed} title="Feed" />
          // <Scene key="post" component={Post} title="Post" />*/}
        </Scene>
      </Router>
    );
  }
}


AppRegistry.registerComponent('main', () => App);

