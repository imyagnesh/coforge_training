import React, {createContext, useEffect, useState} from 'react';
import * as RNLocalize from 'react-native-localize';

export const LocaleContext = createContext();

const LocaleProvider = ({children}) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {}, []);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
