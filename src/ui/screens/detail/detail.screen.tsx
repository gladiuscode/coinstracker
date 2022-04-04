import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  MainStackScreenProps,
  Screens,
} from '../../../navigation/navigation.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from '../../../styles/hooks/useStyles.hook';
import detailStyles from './detail.styles';
import {useLocalization} from '../../../localization/hooks/useLocalization';

type Props = MainStackScreenProps<Screens.detail>;

export const Detail: React.FC<Props> = ({navigation}) => {
  const {t} = useLocalization();
  const {styles} = useStyles(detailStyles);

  // ** CALLBACKS ** //
  const onPress = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{t('go_to_home')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Detail;
