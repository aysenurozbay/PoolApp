import { TextStyle } from 'react-native';

export const Fonts: FontsType = {
  comfortaaRegular8: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 8,
    fontWeight: '400',
    lineHeight: 8,
  },
  comfortaaRegular: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
  },
  comfortaaRegular14: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
  },
  comfortaaBold: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
};

type FontsType = Record<string, TextStyle>;
