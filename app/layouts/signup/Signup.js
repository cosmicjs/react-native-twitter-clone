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

  validate(){
    const stateProps = Object.keys(this.state);
    return stateProps.some(property => {
      return !!this.state[property] !== false
    })
  }

  pickImage = async () => {
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
                <Input
                  name="firstName"
                  value={this.state.firstName}
                  onChangeText={(text) => this.setState({firstName: text})}
                />
            </Item>
            <Item stackedLabel>
                <Label>Last Name</Label>
                <Input
                  value={this.state.lastName}
                  onChangeText={(text) => this.setState({lastName: text})}
                />
            </Item>
            <Item stackedLabel>
                <Label>Username</Label>
                <Input
                  value={this.state.username}
                  onChangeText={(text) => this.setState({username: text})}
                />
            </Item>
            <Item stackedLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})}
                />
            </Item>
          </Form>
          <Text style={{alignSelf: 'center'}}>Add a profile picture</Text>
          {
            !this.state.image && <Button
            primary
            bordered
            onPress={this.pickImage}
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
          }
          {
            this.state.image && <Thumbnail
            size={80}
            source={{uri: this.state.image}}
            style={{
              alignSelf: 'center',
              margin: 10,
            }}
          />
          }
          <Button
            block
            disabled={this.validate()}
            style={{margin: 10}}
            onPress={() => this.onSubmit()}
          >
            <Text>Create account</Text>
          </Button>
          { this.validate() && <Text style={{fontSize: 10, color: 'grey', alignSelf: 'center'}}>All fields must be filled</Text> }
        </Content>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
