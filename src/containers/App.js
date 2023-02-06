import React from 'react';
import {
  ConfigProvider
} from 'antd';
import 'antd/dist/reset.css';

import themeSettings from '../theme/theme.json';

import { StartPage } from './pages/StartPage';

import './App.css';


function App() {
  return (
    <ConfigProvider
      theme={themeSettings}
    >
      <div className="application-root">
        <StartPage />
      </div>
    </ConfigProvider>
  );
}

export default App;
