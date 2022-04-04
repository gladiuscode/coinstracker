import {StylesProviderValue} from './styles.types';
import {Dimensions} from 'react-native';
import {getColorsBy} from '../colors.styles';
import {createContext} from 'react';
import {getFontsBy} from '../fonts.styles';

const defaultColors = getColorsBy('light');
const defaultFonts = getFontsBy(defaultColors);
const defaultInsets = {
  bottom: 10,
  left: 10,
  top: 10,
  right: 10,
};
const defaultValue: StylesProviderValue = {
  theme: 'light',
  colors: defaultColors,
  fonts: defaultFonts,
  insets: defaultInsets,
  dimensions: Dimensions.get('window'),
  onThemeChange: () => {},
};
export const StylesContext = createContext<StylesProviderValue>(defaultValue);
