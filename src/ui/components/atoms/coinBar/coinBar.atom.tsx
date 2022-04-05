import React, {memo, useCallback} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useStyles} from '../../../../styles/hooks/useStyles.hook';
import coinBarStyles from './coinBar.styles';
import {Images} from '../../../../assets/images';

interface Props {
  readonly onFavouritePress: (id: string) => void;
}
const CoinBar = memo<Props>(({onFavouritePress}) => {
  const {styles} = useStyles(coinBarStyles);

  const onLocalFavouritePress = useCallback(() => {
    onFavouritePress('fake-id');
  }, [onFavouritePress]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Symbol</Text>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Price</Text>
      </View>
      <View style={styles.favouriteIconContainer}>
        <TouchableOpacity onPress={onLocalFavouritePress}>
          <Image
            source={Images.ic_favourite}
            style={[styles.favouriteIcon, styles.favouriteOff]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default CoinBar;
