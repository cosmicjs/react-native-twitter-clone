import React, { Component } from 'react';
import { Font } from 'expo';
import { Text } from 'react-native';
import { Grid, Row, Col, Button } from 'react-native-elements';
import LargeButton from '../../components/LargeButton';
import SmallTextInput from '../../components/SmallTextInput';
import { styles } from './styles';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render(){
    return (
      <Grid containerStyle={styles.container}>
        <Row>
          <Col>
            <SmallTextInput
              required
              title='First Name'
              type='small'
              value={this.props.firstName}
              onChange={(text) => this.setState({firstName: text})}
            />
          </Col>
          <Col>
            <SmallTextInput
              title='Last Name'
              type='small'
              value={this.props.lastName}
              onChange={(text) => this.setState({lastName: text})}
            />
          </Col>
        </Row>
        <Row>
          <SmallTextInput
            title='Username'
            type='big'
            value={this.props.username}
            onChange={(text) => this.setState({userName: text})}
            placeholder='Enter a username'
          />
        </Row>
        <Row>
          <SmallTextInput
            title='Password'
            type='big'
            value={this.props.password}
            onChange={(text) => this.setState({password: text})}
            placeholder='Enter a password'
          />
        </Row>
        <Row size={2} containerStyle={styles.picture}>
        {
          this.state.fontLoaded ? (
            <Text style={{fontFamily: 'roboto'}}>Add a profile picture</Text>
            ) : null
        }
          <Button
            title='+'
            buttonStyle={styles.button}
          />
        </Row>
        <Row>
          <LargeButton
            onPress={this.onPress}
            title={'Create account'}
            />
        </Row>
      </Grid>
    );
  }
}
