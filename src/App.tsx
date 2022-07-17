import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Style/Theme/theme';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <h1>Hello World</h1>
    </ThemeProvider>
    </>
  );
}

export default App;
