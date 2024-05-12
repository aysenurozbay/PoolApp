import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export const styles = StyleSheet.create({
  defaultTextStyle: {
    ...Fonts.comfortaaRegular,
    color: Colors.primaryTextColor,
  },
});
