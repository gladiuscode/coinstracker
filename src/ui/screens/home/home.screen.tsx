import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {
  MainStackScreenProps,
  Screens,
} from '../../../navigation/navigation.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from '../../../styles/hooks/useStyles.hook';
import homeStyles from './home.styles';
import {useLocalization} from '../../../localization/hooks/useLocalization';
import {Images} from '../../../assets/images';

type Props = MainStackScreenProps<Screens.home>;

export const Home: React.FC<Props> = ({navigation}) => {
  const {t} = useLocalization();
  const {styles} = useStyles(homeStyles);

  // ** CALLBACKS ** //
  const onPress = useCallback(
    () => navigation.navigate(Screens.detail),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.ic_logo} style={styles.logo} />
      <Text style={[styles.title, styles.marginBottom]}>
        {t('react_native_template')}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{t('go_to_detail')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
