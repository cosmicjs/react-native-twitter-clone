import { StyleSheet } from 'react-native';
import colors from '../../config/styles';

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: colors.deepBlue,
    borderRadius: 5,
    width: 100,
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});
