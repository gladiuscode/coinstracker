import {en} from './strings/en';
import {it} from './strings/it';

export type LanguagesType = 'en' | 'it';
export type SupportedLanguages = ReturnType<typeof getSupportedLanguages>;
export type Strings = typeof en;
export type StringsKeys = keyof Strings;

const strings = new Map<LanguagesType, Strings>();
strings.set('en', en);
strings.set('it', it);

export const getSupportedLanguages = () => Array.from(strings.keys());
export const getStringsBy = (language: LanguagesType) => strings.get(language)!;
