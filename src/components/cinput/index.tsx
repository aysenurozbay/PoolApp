import React from 'react';
import { StyleProp, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import CText from '../ctext';
import { styles } from './cinput.style';

const CInput = ({
  label,
  containerStyle,
  infoText,
  labelStyle,
  infoTextStyle,
}: {
  label: string;
  infoText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle;
  infoTextStyle?: TextStyle;
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CText style={labelStyle}>{label}</CText>
      <TextInput style={styles.inputStyle} placeholder="" />
      <CText style={infoTextStyle}>{infoText}</CText>
    </View>
  );
};

export default CInput;
