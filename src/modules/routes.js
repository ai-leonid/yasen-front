import React from 'react';

import { StartPage } from '../containers/pages/StartPage';

import { pageTitles } from './constants';
import { PanelsPage } from '../containers/pages/PanelsPage';
import { NotFound404Page } from '../containers/pages/NotFound404Page';
import { LayoutMain } from '../components/LayoutMain';
import { DataPage } from '../containers/pages/DataPage';


const routes = [
  {
    path: '/',
    exact: true,
    element: <LayoutMain />,
    privateRoute: false,
    title: pageTitles.startPage,
    errorElement: <NotFound404Page />,
    children: [
      {
        path: 'panels',
        exact: true,
        element: <PanelsPage />,
        privateRoute: false,
        title: pageTitles.startPage,
        children: [
          {
            path: ':panelsRegion',
            exact: true,
            element: <PanelsPage />,
            privateRoute: false,
            title: pageTitles.startPage,
            children: [
              {
                path: ':panelsDistrict',
                exact: true,
                element: <PanelsPage />,
                privateRoute: false,
                title: pageTitles.startPage,
              },
            ],
          },
        ],
      },
      {
        path: 'data',
        exact: true,
        element: <DataPage />,
        privateRoute: false,
        title: pageTitles.startPage,
        children: [
          {
            path: ':dataSection',
            exact: true,
            element: <DataPage />,
            privateRoute: false,
            title: pageTitles.startPage,
          },
        ],
      },
      /* {
        path: '*',
        exact: true,
        element: <NotFound404Page />,
        privateRoute: false,
        title: pageTitles.startPage,
      }, */
    ],
  },

];

export default routes;
