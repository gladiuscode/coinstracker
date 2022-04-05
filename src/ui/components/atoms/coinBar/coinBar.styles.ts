import {StylesProviderValue} from '../../../../styles/provider/styles.types';
import {StyleSheet} from 'react-native';

const styles = ({theme, fonts}: StylesProviderValue) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? 'black' : 'white',
    },
    textContainer: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    symbol: {
      flex: 0.4,
    },
    name: {
      flex: 0.6,
    },
    price: {
      flex: 0.4,
      textAlign: 'right',
      ...fonts.boldedBody,
    },
    favouriteIconContainer: {
      flex: 0.8,
      alignItems: 'flex-end',
    },
    favouriteIcon: {
      width: 25,
      height: 25,
    },
    favouriteOn: {
      tintColor: 'orange',
    },
    favouriteOff: {
      tintColor: theme === 'dark' ? 'white' : 'black',
    },
  });

export default styles;
