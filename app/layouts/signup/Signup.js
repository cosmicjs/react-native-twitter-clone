import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Font } from 'expo';
import { Text } from 'react-native';
import { Grid, Row, Col, Button } from 'react-native-elements';
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

  render(){
    return (
      <Grid containerStyle={styles.container}>
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
            type='big'
            value={this.props.password}
            onChange={(text) => this.setState({password: text})}
            placeholder='Add a profile picture'
          />
        </Row>
        <Row size={2} containerStyle={styles.picture}>
        {
          this.state.fontLoaded ? (
            <Text style={{fontFamily: 'roboto', color: '#C6C6CB', fontSize: 17}}>Add a profile picture</Text>
            ) : null
        }
          <Button
            title='+'
            buttonStyle={styles.button}
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
