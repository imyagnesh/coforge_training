import Config from 'react-native-config';
import SInfo from 'react-native-sensitive-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticateUser = async data => {
  try {
    await SInfo.setItem('@coforgeAuthToken', data.accessToken, {
      sharedPreferencesName: Config.SHARED_PREFERENCES_NAME,
      keychainService: Config.KEYCHAIN_SERVICE,
    });
    await AsyncStorage.setItem('@userInfo', JSON.stringify(data.user));
  } catch (error) {
    throw new Error('Unable to store information in local storage');
  }
};

export const removeUser = async () => {
  try {
    await SInfo.deleteItem('@coforgeAuthToken', {
      sharedPreferencesName: Config.SHARED_PREFERENCES_NAME,
      keychainService: Config.KEYCHAIN_SERVICE,
    });
    await AsyncStorage.clear();
  } catch (error) {
    throw new Error('Unable to logout');
  }
};
