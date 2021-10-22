import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import history from './customHistory';
import routes from './routes';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';

const App = () => (
  <Router history={history}>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        {routes.map(x => (
          <RouteWithSubRoutes key={x.path} {...x} />
        ))}
      </Switch>
    </main>
  </Router>
);

export default App;
