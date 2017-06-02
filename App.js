import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import Routes from './app/config/routes';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('main', () => App);

