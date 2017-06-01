import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon, Grid, Row } from 'react-native-elements';
import LargeButton from '../../components/LargeButton'
import { styles } from './styles';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onPress = (e) => {
    console.log('button working');
  }

  render(){
    return (
      <Grid containerStyle={styles.container}>
        <Row>
          <Icon
            name='mood'
            size='100'
            color='#1da1f2'
          />
        </Row>
        <Row containerStyle={styles.buttonContainer}>
          <LargeButton
            onPress={this.onPress}
            title={'LOGIN'}
          />
          <Text style={styles.textBox}>OR</Text>
          <LargeButton
            onPress={this.onPress}
            title={'SIGN UP'}
          />
        </Row>
      </Grid>
    );
  }
}
