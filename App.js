import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

export default class Twitter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="feed" component={Feed} title="Feed" />
          <Scene key="post" component={Post} title="Post" />
        </Scene>
      </Router>
    );
  }
}



AppRegistry.registerComponent('main', () => Twitter);

