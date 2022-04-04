import {useContext} from 'react';
import {LocalizationContext} from '../provider/localization.provider';
import {LocalizationContextValue} from '../provider/localization.types';

export const useLocalization = () => {
  return useContext<LocalizationContextValue>(LocalizationContext);
};
