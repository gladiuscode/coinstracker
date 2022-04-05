import {StyleSheet} from 'react-native';
import {DefaultColors} from './hooks/useColors.hook';

export type DefaultFonts = ReturnType<typeof getFontsBy>;

export const getFontsBy = (colors: DefaultColors) =>
  StyleSheet.create({
    headingOne: {
      fontSize: 21,
      color: colors.primaryText,
    },
    boldedBody: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
