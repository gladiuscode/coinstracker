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
    },
    text: fonts.headingOne,
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
