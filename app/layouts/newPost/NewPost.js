import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import TextField from '../../components/TextField';
import styles from './styles';

import { createPost } from '../../redux/reducers/posts';

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = { createPost };

class NewPost extends Component {
  constructor(){
    super();
    this.state = {
      content: '',
      error: '',
    }
  }
  onSubmit() {
    if (this.state.content){
      this.props.createPost({
        user: this.props.user,
        content: this.state.content,
      })
    } else {
      this.setState({error: 'You have to write something!'});
    }
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <View style={styles.input}>
            <TextField
              big
              name="What's up?"
              value={this.state.post}
              onChangeText={(text) => this.setState({content: text})}
            />
            <Button
              rounded
              style={styles.button}
              onPress={() => this.onSubmit()}
            >
              <Text>Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
