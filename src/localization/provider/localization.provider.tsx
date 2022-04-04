import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {LocalizationContextValue} from './localization.types';
import RNLocalize from 'react-native-localize';
import {
  getStringsBy,
  getSupportedLanguages,
  LanguagesType,
  StringsKeys,
} from '../strings.localization';

const defaultValue: LocalizationContextValue = {
  language: 'en',
  languages: getSupportedLanguages(),
  t: () => '',
  onLanguageChange: () => {},
};

export const LocalizationContext =
  createContext<LocalizationContextValue>(defaultValue);

const LocalizationProvider: React.FC = ({children}) => {
  const [init, setInit] = useState(false);
  const [language, setLanguage] = useState<LanguagesType>('en');
  const languages = useRef(getSupportedLanguages()).current;

  // ** DATA ** //
  const strings = useMemo(() => getStringsBy(language), [language]);

  // ** HELPERS ** //
  const t = useCallback((key: StringsKeys) => strings[key], [strings]);

  const onLanguageChange = useCallback(
    (selectedLanguage: LanguagesType) => setLanguage(selectedLanguage),
    [],
  );

  const onSystemLanguageChange = useCallback(() => {
    const userLanguage = RNLocalize.findBestAvailableLanguage(languages);
    if (!userLanguage || userLanguage.languageTag === language) {
      return;
    }
    setLanguage(userLanguage.languageTag);
  }, [language, languages]);

  // ** EFFECTS ** //
  useEffect(() => {
    if (init) {
      return;
    }

    onSystemLanguageChange();
    setInit(true);
  }, [init, onSystemLanguageChange]);

  useEffect(() => {
    RNLocalize.addEventListener('change', onSystemLanguageChange);
  }, [languages, onSystemLanguageChange]);

  // ** DATA ** //
  const value = useMemo(
    (): LocalizationContextValue => ({
      language,
      languages: getSupportedLanguages(),
      t,
      onLanguageChange,
    }),
    [language, onLanguageChange, t],
  );

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
