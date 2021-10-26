import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import normalize from '../../utils/normalize';

const useStyles = (error?: string) => {
  const {colors} = useTheme();
  return StyleSheet.create({
    input: {
      height: moderateScale(44, 0.3),
      borderWidth: 1,
      fontSize: normalize(20),
      paddingVertical: 0,
      paddingHorizontal: 10,
      fontFamily: 'Poppins',
      fontWeight: '500',
      borderRadius: moderateScale(4),
      color: colors.text,
      borderColor: !!error ? colors.notification : colors.border,
      zIndex: 0,
    },
    rightIconStyle: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: moderateScale(44, 0.3),
      paddingHorizontal: moderateScale(10),
      justifyContent: 'center',
      zIndex: 10,
    },
  });
};

export default useStyles;
