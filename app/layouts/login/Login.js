import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon, Grid, Row, FormInput } from 'react-native-elements';
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
          <Button
            buttonStyle={styles.button}
            onPress={this.onPress}
            textStyle={styles.label}
            title={'LOGIN'}
            >
          </Button>
        </Row>
      </Grid>
    );
  }
}


{/*<View style={styles.container}>
        <View style={styles.iconBox}>
          <Icon
            name='mood'
            size='60'
            color='#1da1f2'
          />
        </View>
        <View style={styles.loginBox}>
          <FormInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Enter Username'}
            />
          <Button
            buttonStyle={styles.button}
            onPress={this.onPress}
            textStyle={styles.label}
            title={'LOGIN'}
            >
          </Button>
        </View>
      </View>*/}
