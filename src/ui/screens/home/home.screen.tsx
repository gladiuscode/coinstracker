import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  MainStackScreenProps,
  Screens,
} from '../../../navigation/navigation.types';
import {useStyles} from '../../../styles/hooks/useStyles.hook';
import {useLocalization} from '../../../localization/hooks/useLocalization';
import {Images} from '../../../assets/images';
import homeStyles from './home.styles';

type Props = MainStackScreenProps<Screens.home>;

export const Home: React.FC<Props> = ({navigation}) => {
  const {t} = useLocalization();
  const {styles} = useStyles(homeStyles);

  // ** CALLBACKS ** //
  const onSettingsPress = useCallback(() => {
    // TODO: NAVIGATE TO SETTINGS
    console.info('navigation: ', navigation);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onSettingsPress}>
        <Image source={Images.ic_settings} style={styles.settingsIcon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('home_title')}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
