import {StyleSheet} from 'react-native';
import {StylesProviderValue} from '../../../styles/provider/styles.types';

const styles = ({colors, fonts}: StylesProviderValue) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: 20,
    },
    header: {
      marginBottom: 12,
    },
    separator: {
      height: 5,
    },
    titleContainer: {
      marginTop: 12,
    },
    settingsIcon: {
      width: 30,
      resizeMode: 'contain',
    },
    title: fonts.headingOne,
    marginBottom: {
      marginBottom: 8,
    },
    logo: {
      height: 80,
      resizeMode: 'contain',
      marginBottom: 12,
    },
  });

export default styles;
