import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { styles } from './styles';

export default (props) => (
  <Button
    block
    onPress={props.onPress}
  >
    <Text>{props.title}</Text>
  </Button>
)
