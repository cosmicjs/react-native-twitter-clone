import React from 'react';
import { Button } from 'react-native-elements';
import { styles } from './styles';

export default (props) => (
  <Button
    buttonStyle={styles.button}
    onPress={props.onPress}
    textStyle={styles.label}
    title={props.title}
  />
)
