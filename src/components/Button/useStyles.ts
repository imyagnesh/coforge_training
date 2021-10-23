import {StyleSheet} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {moderateScale} from 'react-native-size-matters';
import normalize from '../../utils/normalize';

const useStyles = (error?: string) => {
  const theme = useTheme();
  return StyleSheet.create({
    btn: {
      marginVertical: moderateScale(10),
      borderRadius: moderateScale(4),
      height: moderateScale(44),
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      color: '#fff',
    },
  });
};

export default useStyles;
