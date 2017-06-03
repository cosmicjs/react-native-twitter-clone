import { StyleSheet } from 'react-native';
// import colors from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  picture: {
    flex: 1,
  },
  pictureText: {
    color: 'rgb(198, 198, 203)',
    fontSize: 16,
  },
  avatar: {
    position: 'absolute',
    top: 40,
    left: 48,
  }
});
