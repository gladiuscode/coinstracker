import {useCallback, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {getColorsBy} from '../colors.styles';

const defaultTheme = Appearance.getColorScheme() ?? 'light';

export type DefaultColors = ReturnType<typeof useColors>['colors'];
export const useColors = () => {
  const [theme, setTheme] = useState(defaultTheme);

  // ** DATA ** //
  const colors = useMemo(() => getColorsBy(theme), [theme]);

  // ** EFFECTS ** //
  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme ?? defaultTheme);
    });
  }, []);

  // ** CALLBACKS ** //
  const onThemeChange = useCallback(
    (newTheme: 'dark' | 'light') => setTheme(newTheme),
    [],
  );

  return {theme, colors, onThemeChange};
};
