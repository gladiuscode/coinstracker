import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Screens {
  home = 'Home',
}

export type MainStackParams = {
  [Screens.home]: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParams> =
  NativeStackScreenProps<MainStackParams, T>;
