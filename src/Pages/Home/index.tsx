import React from 'react';
import { Link } from 'react-router-dom';
import Test from '../../components/Test';
import { LocaleContext } from '../../context/localeContext';

interface Props {}

const Home = ({ history }: Props) => {
  console.log('Home Page render');
  return (
    <div>
      <Test />
      <LocaleContext.Consumer>
        {({ locale, setLocale }) => (
          <div>
            {locale}
            <button
              type="button"
              onClick={() => {
                setLocale('Fr');
              }}
            >
              Change Locale
            </button>
          </div>
        )}
      </LocaleContext.Consumer>
    </div>
  );
};

export default Home;
