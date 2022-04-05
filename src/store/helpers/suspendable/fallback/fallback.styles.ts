import {StyleSheet} from 'react-native';
import {StylesProviderValue} from '../../../../styles/provider/styles.types';

const styles = ({colors}: StylesProviderValue) =>
  StyleSheet.create({
    spinnerContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    spinnerColor: {
      color: colors.spinnerColor,
    },
  });

export default styles;
