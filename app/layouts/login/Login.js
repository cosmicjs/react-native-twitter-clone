import React, { Component } from 'react';
import { Icon, Grid, Row } from 'react-native-elements';
import LargeButton from '../../components/LargeButton';
import TextField from '../../components/TextField';
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
        <Row>
          <Icon
            name='mood'
            size='60'
            color='#1da1f2'
          />
        </Row>
        <Row containerStyle={styles.loginBox}>
          <TextField
            name="Enter Username"
            type='big'
            onChange={(text) => this.setState({username: text})}
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
