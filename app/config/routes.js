import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import layouts from '../layouts';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="welcome" component={layouts.welcome} title="Welcome" />
    <Scene key="login" component={layouts.login} title="Login" />
    <Scene key="signup" component={layouts.signup} title="Create New Account" initial={true} />
    <Scene key="feed" component={layouts.feed} title="Home" />
  </Scene>
);

export default () => (
  <Router scenes={scenes} />
);
