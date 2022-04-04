import {useContext, useMemo} from 'react';
import {StylesProviderValue} from '../provider/styles.types';
import {StylesContext} from '../provider/styles.data';

export type UseStylesReturnType<T> = {
  styles: T;
  onToggleChange: StylesProviderValue['onThemeChange'];
};
export const useStyles = <T>(
  builder: (defaultStyles: StylesProviderValue) => T,
): UseStylesReturnType<T> => {
  const defaultStyles = useContext<StylesProviderValue>(StylesContext);
  const styles = builder(defaultStyles);
  return useMemo(
    () => ({styles, onToggleChange: defaultStyles.onThemeChange}),
    [defaultStyles.onThemeChange, styles],
  );
};
