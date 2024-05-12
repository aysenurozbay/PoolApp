import { StyleSheet } from 'react-native';
import { width } from '../../../../constants/metrics';

export const styles = StyleSheet.create({
  transparentBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingVertical: 44,
  },
  modalIndicator: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 4,
    width: 24,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: 12,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    width,
  },
});
