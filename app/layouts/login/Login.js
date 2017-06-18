import React, { Component } from 'react';
import {
  Container,
  Content,
  Icon,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TextField from '../../components/TextField';
import styles from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onPress = (e) => {
    console.log(this.state.username);
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
            <Icon
              style={styles.icon}
              ios="ios-happy-outline"
              android="md-happy"
            />
          <View style={styles.loginBox}>
            <TextField
            name="Enter Username"
            type='big'
            onChange={(text) => this.setState({username: text})}
            />
            <TextField
            name="Enter Password"
            type='big'
            onChange={(text) => this.setState({password: text})}
            />
          <Button
            block
            style={styles.button}
            onPress={this.onPress}
          >
            <Text>Log in</Text>
          </Button>
          </View>
          <Button
            transparent
            style={styles.signupBtn}
            onPress={() => Actions.signup()}>
            <Text style={styles.signupTxt}>Sign up for an account</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
