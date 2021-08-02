import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Playfair Display',
      'serif'
    ].join(','),
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
