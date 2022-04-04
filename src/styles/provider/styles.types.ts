import {ScaledSize} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {DefaultColors} from '../hooks/useColors.hook';
import {DefaultFonts} from '../fonts.styles';

export interface StylesProviderValue {
  readonly theme: 'light' | 'dark';
  readonly colors: DefaultColors;
  readonly fonts: DefaultFonts;
  readonly insets: EdgeInsets;
  readonly dimensions: ScaledSize;
  readonly onThemeChange: (newTheme: 'dark' | 'light') => void;
}
