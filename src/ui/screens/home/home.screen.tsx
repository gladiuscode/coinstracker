import React from 'react';
import {Text} from 'react-native';
import {
  MainStackScreenProps,
  Screens,
} from '../../../navigation/navigation.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from '../../../styles/hooks/useStyles.hook';
import homeStyles from './home.styles';
import {useLocalization} from '../../../localization/hooks/useLocalization';

type Props = MainStackScreenProps<Screens.home>;

export const Home: React.FC<Props> = ({}) => {
  const {t} = useLocalization();
  const {styles} = useStyles(homeStyles);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, styles.marginBottom]}>
        {t('react_native_template')}
      </Text>
    </SafeAreaView>
  );
};

export default Home;
