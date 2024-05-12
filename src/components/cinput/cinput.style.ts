import { StyleSheet } from 'react-native';
import { width } from '../../constants/metrics';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    width: width - 100,
  },
  inputStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 4,
    marginVertical: 4,
  },
});
