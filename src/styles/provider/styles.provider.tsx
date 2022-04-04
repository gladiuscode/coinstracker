import React, {useMemo} from 'react';
import {useColors} from '../hooks/useColors.hook';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StylesProviderValue} from './styles.types';
import {getFontsBy} from '../fonts.styles';
import {StylesContext} from './styles.data';

const StylesProvider: React.FC = ({children}) => {
  const {theme, colors, onThemeChange} = useColors();
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();

  // ** DATA ** //
  const value = useMemo(
    (): StylesProviderValue => ({
      theme,
      colors,
      fonts: getFontsBy(colors),
      dimensions,
      insets,
      onThemeChange,
    }),
    [theme, colors, dimensions, insets, onThemeChange],
  );

  return (
    <StylesContext.Provider value={value}>{children}</StylesContext.Provider>
  );
};

export default StylesProvider;
