import React from 'react';
import { Item, Label, Input } from 'native-base';
import styles from './styles';

export default (props) => (
  <Item stackedLabel>
    <Label>{props.name}</Label>
    <Input
      {...props}
      autoCapitalize="none"
      style={props.big ? styles.big : styles.small}
      maxLength={props.big ? 140 : 30}
      multiline={props.big}
      numberOfLines={props.big ? 5 : 1}
    />
  </Item>
)
