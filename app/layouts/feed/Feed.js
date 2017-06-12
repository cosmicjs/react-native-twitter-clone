import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  List,
  Button,
  Icon,
} from 'native-base';

import SinglePost from '../../components/SinglePost';
import styles from './styles';


const mapStateToProps = ({ posts }) => ({ posts });

class Feed extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderPost(post, index){
    return (
      <SinglePost
        key={index}
        name={post.name}
        username={post.username}
        profilePicture={post.profilePicture}
        content={post.content}
      />
    )
  }

  render(){

    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {
              this.props.posts.map(this.renderPost)
            }
          </List>
        </Content>
        <Button
          rounded
          style={styles.button}
          onPress={() => Actions.newPost()}
        >
          <Icon
            name="create"
            style={{padding: 5}}
          />
        </Button>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Feed);
