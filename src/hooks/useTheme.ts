import {useColorScheme} from 'react-native';

import darkTheme from '../theme/darkTheme';
import lightTheme from '../theme/lightTheme';
import IThme from '../types/ITheme';

const useTheme = (): IThme => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
};

export default useTheme;
