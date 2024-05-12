import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../constants/fonts';
import { Colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 40,
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginBottom: 8,
  },
  welcomeText: {
    ...Fonts.comfortaaBold,
    paddingVertical: 76,
  },
  inputContainer: {
    marginVertical: 16,
    width: '100%',
  },
  infoTextStyle: {
    ...Fonts.comfortaaRegular8,
  },
  forgotPasswordTextStyle: {
    ...Fonts.comfortaaRegular8,
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
  buttonText: {
    ...Fonts.comfortaaRegular14,
    color: Colors.white,
  },
  signUpTextContainer: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    color: Colors.primary,
  },
});
