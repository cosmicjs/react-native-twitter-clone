import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Grid, Row, FormInput } from 'react-native-elements';
import LargeButton from '../../components/LargeButton'
import { styles } from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  onPress = (e) => {
    console.log(this.state.username);
  }

  render(){
    return (
      <Grid containerStyle={styles.container}>
        <Row containerStyle={styles.iconBox}>
          <Icon
            name='mood'
            size='60'
            color='#1da1f2'
          />
        </Row>
        <Row containerStyle={styles.loginBox}>
          <FormInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Enter Username'}
            />
          <LargeButton
            onPress={this.onPress}
            title={'LOGIN'}
            />
        </Row>
      </Grid>
    );
  }
}
