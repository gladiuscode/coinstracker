import React, {memo, useMemo, useRef} from 'react';
import {Animated, useWindowDimensions} from 'react-native';
import loop = Animated.loop;
import coinBarLoadingStyles from './bladeLoader.styles';
import {useStyles} from '../../../../styles/hooks/useStyles.hook';

interface Props {
  readonly toValue?: number;
  readonly duration?: number;
}
const BladeLoading = memo<Props>(({toValue, duration = 1000}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const {styles} = useStyles(coinBarLoadingStyles);

  const bladeTiming = useMemo(
    () =>
      Animated.timing(animation, {
        toValue: toValue ?? width,
        duration,
        useNativeDriver: true,
      }),
    [animation, duration, toValue, width],
  );

  const animatedTransform = useMemo(
    () => ({
      transform: [
        {
          translateX: animation,
        },
      ],
    }),
    [animation],
  );

  loop(bladeTiming).start();

  return <Animated.View style={[styles.blade, animatedTransform]} />;
});

export default BladeLoading;
