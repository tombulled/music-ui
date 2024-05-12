import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import App from './app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssVarsProvider } from '@mui/material-next';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <CssVarsProvider theme={...}> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </CssVarsProvider> */}
  </React.StrictMode>
);
