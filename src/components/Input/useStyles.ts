import {StyleSheet} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {moderateScale} from 'react-native-size-matters';
import normalize from '../../utils/normalize';

const useStyles = (error?: string) => {
  const theme = useTheme();
  return StyleSheet.create({
    input: {
      height: moderateScale(44, 0.3),
      borderWidth: 1,
      fontSize: normalize(20),
      paddingVertical: 0,
      fontFamily: 'Poppins',
      fontWeight: '500',
      borderRadius: moderateScale(4),
      color: theme.text,
      borderColor: !!error ? theme.notification : theme.border,
    },
  });
};

export default useStyles;
