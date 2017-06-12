import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TextField from '../../components/TextField';
import styles from './styles';

export default class NewPost extends Component {
  constructor(){
    super();
    this.state = {
      post: '',
    }
  }
  onPress() {
    console.log(this.state.username);
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.input}>
            <TextField
              big
              name="What's up?"
              value={this.state.post}
              onChangeText={(text) => this.setState({post: text})}
            />
            <Button style={styles.button}>
              <Text>Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
