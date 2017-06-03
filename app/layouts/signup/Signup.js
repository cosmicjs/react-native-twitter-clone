import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Font, ImagePicker } from 'expo';
import { Text } from 'react-native';
import { Grid, Row, Col, Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import LargeButton from '../../components/LargeButton';
import SmallTextInput from '../../components/SmallTextInput';
import { styles } from './styles';
import { addUser } from '../../redux/reducers/users';

const mapStateToProps = state => ({
  activeUser: state.activeUser,
});

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
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  onPress = () => {
    const name = this.state.firstName + ' ' + this.state.lastName
    this.props.addUser({
      name,
      username: this.state.userName,
    })
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render(){
    return (
      <Grid style={styles.container}>
        <Row>
          <Col>
            <SmallTextInput
              type='small'
              value={this.props.firstName}
              onChange={(text) => this.setState({firstName: text})}
              placeholder='First Name'
            />
          </Col>
          <Col>
            <SmallTextInput
              type='small'
              value={this.props.lastName}
              onChange={(text) => this.setState({lastName: text})}
              placeholder='Last Name'
            />
          </Col>
        </Row>
        <Row>
          <SmallTextInput
            type='big'
            value={this.props.username}
            onChange={(text) => this.setState({userName: text})}
            placeholder='Enter a username'
          />
        </Row>
        <Row>
          <SmallTextInput
            secure
            type='big'
            value={this.props.password}
            onChange={(text) => this.setState({password: text})}
            placeholder='Enter password'
          />
        </Row>
        <Row style={styles.picture}>
        {
          this.state.fontLoaded ? (
            <Text
              style={{
                fontFamily: 'roboto',
                color: 'rgb(198, 198, 203)',
                fontSize: 16,
              }}
            >Add a profile picture</Text>
            ) : null
        }
          <Avatar
            medium
            rounded
            source={ this.state.image && {uri: this.state.image}}
            icon={ !this.state.image && {name: 'local-see'}}
            onPress={this._pickImage}
            containerStyle={styles.avatar}
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
