import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Thumbnail,
  Icon
} from 'native-base';

import TextField from '../../components/TextField';
import styles from './styles';
import { addUser } from '../../redux/reducers/users';

const mapDispatchToProps = {addUser};

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      image: null,
    };
  }

  onSubmit(){
    const name = this.state.firstName + ' ' + this.state.lastName
    this.props.addUser({
      name,
      username: this.state.username,
      password: this.state.password,
      profilePicture: this.state.image,
    })
  }

  //note, Friday 6/9 - form validation is the next thing to figure out

  // validate(){
  //   const stateProps = Object.keys(this.state);
  //   return stateProps.some(property => {
  //     return !!this.state[property] !== false
  //   })
  // }

  uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render(){

    return (
      <Container style={styles.container}>
        <Content>
          <Form style={styles.mar10}>
            <TextField
              name="First Name"
              value={this.state.firstName}
              onChangeText={(text) => this.setState({firstName: text})}
            />
            <TextField
              name="Last Name"
              value={this.state.lastName}
              onChangeText={(text) => this.setState({lastName: text})}
            />
            <TextField
              name="Username"
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
            <TextField
              secure
              name="Password"
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />
          </Form>
          <Text style={styles.addPic}>Add a profile picture</Text>
          {
            !this.state.image &&
            <Button
              primary
              bordered
              onPress={this.uploadImage}
              style={styles.uploadButton}>
              <Icon
                ios='ios-camera'
                android='md-camera'
              />
            </Button>
          }
          {
            this.state.image &&
            <Thumbnail
              size={80}
              source={{uri: this.state.image}}
              style={styles.thumbnail}
            />
          }
          <Button
            block
            // disabled={this.validate()}
            style={styles.mar10}
            onPress={() => this.onSubmit()}
          >
            <Text>Create account</Text>
          </Button>
          <Text style={styles.formMsg}>All fields must be filled</Text>
        </Content>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
