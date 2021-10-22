import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';
import { LocaleContext } from '../../context/localeContext';

interface Props {}

const Contact = ({ history, routes }: Props) => {
  console.log(history);

  console.log(routes);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          history.goBack();
        }}
      >
        GO To Home Page
      </button>
      <Switch>
        {routes.map(x => (
          <RouteWithSubRoutes key={x.path} {...x} />
        ))}
      </Switch>

      <LocaleContext.Consumer>
        {({ locale }) => <div>{locale}</div>}
      </LocaleContext.Consumer>
    </div>
  );
};

export default Contact;
