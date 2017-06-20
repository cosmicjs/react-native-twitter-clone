import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  List,
  Button,
  Icon,
  Text,
} from 'native-base';

import SinglePost from '../../components/SinglePost';
import FeedNavbar from '../../components/FeedNavbar';
import { loadPosts } from '../../redux/reducers/posts';
import { logoutUser } from '../../redux/reducers/users';
import styles from './styles';

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = { loadPosts, logoutUser };

const renderPost = (post, index) => (
  <SinglePost
    key={index}
    name={post.name}
    username={post.username}
    profilePicture={post.profilePicture}
    content={post.content}
  />
)

class Feed extends Component {
  componentDidMount(){
    this.props.loadPosts();
  }

  render(){
    const endMsg = this.props.posts.length === 0 ? "There aren't any posts yet!" : "That's all the posts for now!"

    return (
      <Container>
        <FeedNavbar logout={this.props.logoutUser} refresh={this.props.loadPosts} />
        <Content>
          <List>
            {
              !!this.props.posts.length && this.props.posts.map(renderPost)
            }
          </List>
          <Text style={styles.end}>{endMsg}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
