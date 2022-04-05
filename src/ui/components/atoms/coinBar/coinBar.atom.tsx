import React, {memo, useCallback} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useStyles} from '../../../../styles/hooks/useStyles.hook';
import coinBarStyles from './coinBar.styles';
import {Images} from '../../../../assets/images';
import {Coin} from '../../../../store/coins/coins.atom';
import {useRecoilValue} from 'recoil';
import suspendable from '../../../../store/helpers/suspendable/suspendable.helper';
import {coinDetail} from '../../../../store/coinDetail/coinDetail.atomFamily';

interface Props {
  readonly item: Coin;
  readonly onFavouritePress: (id: string) => void;
}
const CoinBar = memo<Props>(({item, onFavouritePress}) => {
  const detail = useRecoilValue(coinDetail(item.id));
  const {styles} = useStyles(coinBarStyles);

  const onLocalFavouritePress = useCallback(() => {
    onFavouritePress('fake-id');
  }, [onFavouritePress]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.symbol}>{item.symbol}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{detail.usd}</Text>
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

export default suspendable(CoinBar);
