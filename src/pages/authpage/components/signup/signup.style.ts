import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../constants/fonts';
import { Colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 40,
    paddingHorizontal: 56,
    paddingVertical: 12,
    marginBottom: 8,
  },
  inputContainer: {
    paddingTop: 16,
  },
  infoTextStyle: {
    ...Fonts.comfortaaRegular8,
  },
  buttonText: {
    ...Fonts.comfortaaRegular14,
    color: Colors.white,
  },
  signUpTextContainer: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signUpText: {
    color: Colors.primary,
  },
});
