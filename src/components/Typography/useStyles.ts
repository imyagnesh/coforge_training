import {StyleSheet} from 'react-native';
import useTheme from '../../hooks/useTheme';
import normalize from '../../utils/normalize';

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    h1: {
      fontFamily: 'Poppins',
      fontSize: normalize(32),
      lineHeight: normalize(32) * 1.4,
      fontWeight: '700',
      letterSpacing: 1.1,
      textTransform: 'capitalize',
      color: theme.text,
    },
    h2: {
      fontFamily: 'Poppins',
      fontSize: normalize(24),
      lineHeight: normalize(24) * 1.3,
      fontWeight: '500',
      letterSpacing: 1,
      color: theme.text,
    },
    body1: {
      fontFamily: 'Poppins',
      fontSize: normalize(20),
      lineHeight: normalize(20) * 1.2,
      fontWeight: '500',
      letterSpacing: 1,
      color: theme.text,
    },
    body2: {
      fontFamily: 'Poppins',
      fontSize: normalize(18),
      lineHeight: normalize(18) * 1.2,
      fontWeight: '400',
      letterSpacing: 1,
      color: theme.text,
    },
    caption: {
      fontFamily: 'Poppins',
      fontSize: normalize(12),
      lineHeight: normalize(12) * 1.2,
      fontWeight: '400',
      letterSpacing: 0.8,
      color: theme.text,
    },
    btn: {
      fontFamily: 'Poppins',
      fontSize: normalize(18),
      lineHeight: normalize(18) * 1.2,
      fontWeight: '500',
      letterSpacing: 1.2,
      color: '#fff',
      textTransform: 'uppercase',
    },
    inlineError: {
      fontFamily: 'Poppins',
      fontSize: normalize(14),
      lineHeight: normalize(14) * 1.2,
      fontWeight: '400',
      letterSpacing: 1,
      color: theme.notification,
      textTransform: 'capitalize',
    },
    error: {
      fontFamily: 'Poppins',
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 22,
      letterSpacing: 1.2,
      color: theme.notification,
      textTransform: 'capitalize',
    },
  });
};

export default useStyles;
