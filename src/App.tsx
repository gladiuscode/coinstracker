import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigation/stacks/main.stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StylesProvider from './styles/provider/styles.provider';
import LocalizationProvider from './localization/provider/localization.provider';
import {RecoilRoot} from 'recoil';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StylesProvider>
        <LocalizationProvider>
          <RecoilRoot>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </RecoilRoot>
        </LocalizationProvider>
      </StylesProvider>
    </SafeAreaProvider>
  );
};

export default App;
