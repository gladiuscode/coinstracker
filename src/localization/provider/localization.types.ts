import {
  LanguagesType,
  StringsKeys,
  SupportedLanguages,
} from '../strings.localization';

export interface LocalizationContextValue {
  readonly language: LanguagesType;
  readonly languages: SupportedLanguages;
  readonly t: (key: StringsKeys) => string;
  readonly onLanguageChange: (selectedLanguage: LanguagesType) => void;
}
