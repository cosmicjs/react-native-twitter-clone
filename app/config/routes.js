import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from '../layouts/welcome';
import Login from '../layouts/login';

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="welcome" component={Welcome} title="Welcome" initial={true} />
      <Scene key="login" component={Login} title="Login" />
      {/*<Scene key="feed" component={Feed} title="Feed" />
      // <Scene key="post" component={Post} title="Post" />*/}
    </Scene>
  </Router>
)
