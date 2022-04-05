import React, {useCallback, useMemo} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MainStackScreenProps,
  Screens,
} from '../../../navigation/navigation.types';
import {useStyles} from '../../../styles/hooks/useStyles.hook';
import {useLocalization} from '../../../localization/hooks/useLocalization';
import {Images} from '../../../assets/images';
import homeStyles from './home.styles';
import {Coin, coinsAtom} from '../../../store/coins/coins.atom';
import {useRecoilValue} from 'recoil';
import suspendable from '../../../store/helpers/suspendable/suspendable.helper';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = MainStackScreenProps<Screens.home>;

export const Home: React.FC<Props> = ({navigation}) => {
  const {t} = useLocalization();
  const {styles} = useStyles(homeStyles);
  const coinsState = useRecoilValue(coinsAtom);

  // ** CALLBACKS ** //
  const onSettingsPress = useCallback(() => {
    // TODO: NAVIGATE TO SETTINGS
    console.info('navigation: ', navigation);
  }, [navigation]);

  // ** UI ** //
  const ListHeaderComponent = useMemo(() => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={onSettingsPress}>
          <Image source={Images.ic_settings} style={styles.settingsIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('home_title')}</Text>
        </View>
      </View>
    );
  }, [
    onSettingsPress,
    styles.header,
    styles.settingsIcon,
    styles.title,
    styles.titleContainer,
    t,
  ]);

  const renderItem = useCallback<ListRenderItem<Coin>>(({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        bounces={false}
        data={coinsState}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default suspendable(Home);
