import React from 'react';
import { redirect } from 'react-router-dom';

import { pageTitles } from './constants';
import { PanelsRegionPage } from '../containers/pages/PanelsRegionPage';
import { PanelsDistrictPage } from '../containers/pages/PanelsDistrictPage';
import { NotFound404Page } from '../containers/pages/NotFound404Page';
import { LayoutMain } from '../components/LayoutMain';
import { DataPage } from '../containers/pages/DataPage';


const routes = [
  {
    path: '/',
    exact: true,
    element: <LayoutMain />,
    privateRoute: false,
    title: pageTitles.defaultPageTitle,
    errorElement: <NotFound404Page />,
    children: [
      {
        path: 'panels',
        element: <PanelsRegionPage />,
        privateRoute: false,
        title: pageTitles.defaultPageTitle,
      },
      {
        path: 'panels/:panelsRegion',
        element: <PanelsRegionPage />,
        privateRoute: false,
        title: pageTitles.defaultPageTitle,
      },
      {
        path: 'panels/:panelsRegion/:panelsDistrict',
        element: <PanelsDistrictPage />,
        privateRoute: false,
        title: pageTitles.defaultPageTitle,
      },
      {
        path: 'data',
        exact: true,
        element: <DataPage />,
        privateRoute: false,
        title: pageTitles.defaultPageTitle,
        children: [
          {
            path: ':dataSection',
            exact: true,
            element: <DataPage />,
            privateRoute: false,
            title: pageTitles.defaultPageTitle,
          },
        ],
      },
      /* {
        path: '*',
        exact: true,
        element: <NotFound404Page />,
        privateRoute: false,
        title: pageTitles.defaultPageTitle,
      }, */
    ],
  },

];

export default routes;
