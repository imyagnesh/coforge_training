import About from './Pages/About';
import Contact from './Pages/Contact';
import ContactDetails from './Pages/ContactDetails';
import Home from './Pages/Home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
    routes: [
      {
        path: '/contact/:id',
        component: ContactDetails,
      },
    ],
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
];

export default routes;
