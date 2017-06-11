import React, { Component } from 'react';
import {
  Container,
  Content,
  Icon,
  Text,
  Button,
} from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.iconBox}>
            <Icon
              style={styles.icon}
              ios="ios-happy-outline"
              android="md-happy"
            />
            <Text style={styles.welcome}>Welcome</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              block
              style={styles.button}
            >
              <Text>Log in</Text>
            </Button>
            <Text style={styles.or}>OR</Text>
            <Button
              block
              style={styles.button}
            >
              <Text>Sign up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

// const styles = {
//   container: {
//     marginTop: 128,
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   picture: {
//     flex: 1,
//   },
//   pictureText: {
//     color: 'rgb(198, 198, 203)',
//     fontSize: 16,
//   },
//   avatar: {
//     position: 'absolute',
//     top: 40,
//     left: 48,
//   }
// };
