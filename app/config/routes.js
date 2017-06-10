import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from '../layouts/welcome';
import Login from '../layouts/login';
import Signup from '../layouts/signup';
import SinglePost from '../components/SinglePost/SinglePost'

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="welcome" component={Welcome} title="Welcome" />
      <Scene key="login" component={Login} title="Login" />
      <Scene key="signup" component={Signup} title="Create New Account" />
      <Scene key="feed" component={SinglePost} title="Home" initial={true} />
      {/*<Scene key="feed" component={Feed} title="Feed" />
      // <Scene key="post" component={Post} title="Post" />*/}
    </Scene>
  </Router>
)
