import React from 'react';
import { ListItem, Thumbnail, Text, Body } from 'native-base';
import { View } from 'react-native';
import styles from './styles';

export default (props) => (
  <ListItem>
      <Thumbnail size={60} source={props.profilePicture} />
      <Body>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.username}>@{props.username}</Text>
        </View>
        <Text style={styles.content}>{props.content}</Text>
      </Body>
  </ListItem>
)
