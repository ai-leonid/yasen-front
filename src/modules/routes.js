import StartPage from '../containers/pages/StartPage';

import { pageTitles } from './constants';


const routes = [
  {
    path: '/',
    exact: true,
    component: StartPage,
    privateRoute: false,
    title: pageTitles.startPage,
  },
];

export default routes;
