import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { authenticate } from '../../redux/reducers/users';

const mapDispatchToProps = {authenticate};

const validate = form => {
  let errorMessage = '';
  if (form.username.includes(' ') || form.password.includes(' ')){
    errorMessage = 'Username and password cannot contain spaces';
  }
  if (form.username === '' || form.password === ''){
    errorMessage = 'All fields must be filled';
  }
  return errorMessage;
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  onSubmit(){
    const error = validate(this.state);
    if (error) {
      this.setState({ error })
    } else {
    this.login();
    }
  }

  login(){
    this.props.authenticate(this.state)
      .then(res => {
        if (res === 'Username invalid' || res === 'Password invalid'){
          this.setState({
            error: res,
            username: '',
            password: '',
          })
        } else {
          Actions.feed();
        }
      });
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <Icon
            style={styles.icon}
            ios="ios-happy-outline"
            android="md-happy"
          />
          <View style={styles.loginBox}>
            <TextField
            name="Enter Username"
            type="big"
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            />
            <TextField
            secureTextEntry
            name="Enter Password"
            type="big"
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            />
          <Button
            block
            style={styles.button}
            onPress={() => this.onSubmit()}
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

export default connect(null, mapDispatchToProps)(Login);
