import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  transparentBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    height: 400,
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
    width,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1: {
    width,
    backgroundColor: 'blue',
  },
});
