import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import type { CTextPropsType } from './ctext.type';
import { styles } from './ctext.style';

const CText = ({ children, style }: CTextPropsType) => {
  let textStyle: StyleProp<TextStyle> = styles.defaultTextStyle;
  if (style) {
    textStyle = { ...textStyle, ...style };
  }
  return <Text style={textStyle}>{children}</Text>;
};

export default CText;
