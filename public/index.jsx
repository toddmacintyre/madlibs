import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

require('./style/style.scss');

import App from './components/app';

const Entry = () => {
  return (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
};

render(
  <Entry />,
  document.getElementById('root')
);
