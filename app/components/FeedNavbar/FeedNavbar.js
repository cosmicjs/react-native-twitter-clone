import React from 'react';
import {
  Text,
  Button,
  Icon,
  Header,
  Title,
  Left,
  Right,
  Body } from 'native-base';


export default (props) => (
  <Header>
    <Left>
      <Button
        transparent
        onPress={() => props.logout()}
      >
          <Text>Log out</Text>
      </Button>
  </Left>
  <Body>
    <Title>Your feed</Title>
  </Body>
  <Right>
      <Button
        transparent
        onPress={() => props.refresh()}
      >
        <Icon name="refresh" />
      </Button>
    </Right>
  </Header>
)
