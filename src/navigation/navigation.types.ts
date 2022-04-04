import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Screens {
  home = 'Home',
  detail = 'Detail',
}

export type MainStackParams = {
  [Screens.home]: undefined;
  [Screens.detail]: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParams> =
  NativeStackScreenProps<MainStackParams, T>;
