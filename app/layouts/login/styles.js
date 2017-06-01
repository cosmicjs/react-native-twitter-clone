import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  iconBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    width: 250,
    padding: 10,
    height: 50,
  },
});
