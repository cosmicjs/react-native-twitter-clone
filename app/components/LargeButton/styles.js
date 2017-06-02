import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.lightBlue,
    width: 250,
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
