import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './app/config/routes';


export default class App extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Routes />
      </View>
    );
  }
}


AppRegistry.registerComponent('main', () => App);

