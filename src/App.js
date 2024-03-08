import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Dashboard from './Body/Dashboard';
import Day from './Components/Day/Day';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  if (document.location.pathname == '/'){
    document.location.pathname = '/dashboard';
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/tasks" element={<Day />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
