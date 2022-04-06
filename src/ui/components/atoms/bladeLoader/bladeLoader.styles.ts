import {StylesProviderValue} from '../../../../styles/provider/styles.types';
import {StyleSheet} from 'react-native';

const styles = ({colors}: StylesProviderValue) =>
  StyleSheet.create({
    blade: {
      width: 20,
      height: 80,
      opacity: 0.4,
      backgroundColor: colors.bladeColor,
      borderLeftWidth: 1,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      borderColor: colors.bladeColor,
    },
  });

export default styles;
