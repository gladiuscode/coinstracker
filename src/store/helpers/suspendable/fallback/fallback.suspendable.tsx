import React, {memo} from 'react';
import {useStyles} from '../../../../styles/hooks/useStyles.hook';
import loaderStyles from './fallback.styles';
import {ActivityIndicator, View} from 'react-native';

interface Props {}

const Fallback = memo<Props>(() => {
  const {styles} = useStyles(loaderStyles);

  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator color={styles.spinnerColor.color} size="large" />
    </View>
  );
});

export default Fallback;
