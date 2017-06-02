import { StyleSheet } from 'react-native';
import colors from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  picture: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 20,
  },
  button: {
    marginTop: 15,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
});
