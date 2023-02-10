import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import {
  ConfigProvider
} from 'antd';
import 'antd/dist/reset.css';

import routes from '../modules/routes';
import themeSettings from '../theme/theme.json';


const router = createBrowserRouter(routes);

function App() {
  return (
    <ConfigProvider
      theme={themeSettings}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
