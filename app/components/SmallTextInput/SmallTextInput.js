import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import { styles } from './styles';

export default (props) => (
  <View>
    {/*<FormLabel>{props.title}</FormLabel>*/}
    <FormInput
      style={props.type === 'big' ? styles.big : styles.small}
      value={props.value}
      onChangeText={props.onChange}
      placeholder={props.placeholder || ''}
      >
    </FormInput>
  </View>
)
