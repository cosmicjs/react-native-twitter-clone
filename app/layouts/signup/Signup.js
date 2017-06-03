import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  Thumbnail,
  Icon
} from 'native-base';

import { styles } from './styles';
import { addUser } from '../../redux/reducers/users';

const mapDispatchToProps = {addUser};

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      image: null,
    };
  }

  onSubmit(){
    const name = this.state.firstName + ' ' + this.state.lastName
    this.props.addUser({
      name,
      username: this.state.userName,
      password: this.state.password,
      profilePicture: this.state.image,
    })
  }

  _pickImage = async () => {
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
      <Container style={{marginTop: 64}}>
        <Content>
          <Form style={{margin: 10}}>
            <Item stackedLabel>
                <Label>First Name</Label>
                <Input />
            </Item>
            <Item stackedLabel>
                <Label>Last Name</Label>
                <Input />
            </Item>
            <Item stackedLabel>
                <Label>Username</Label>
                <Input />
            </Item>
            <Item stackedLabel>
                <Label>Password</Label>
                <Input />
            </Item>
          </Form>
          <Text style={{alignSelf: 'center'}}>Add a profile picture</Text>
          <Button
            dark
            bordered
            style={{
              alignSelf: 'center',
              margin: 15,
              borderRadius: 100,
          }}>
            <Icon
              ios='ios-camera'
              android='md-camera'
            />
          </Button>
          <Button
            block
            style={{margin: 10}}
            onPress={this.onSubmit}
          >
            <Text>Create account</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
