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
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Routes>
          <Route path="/planner" element={<Dashboard />}></Route>
          <Route path="/planner/tasks" element={<Day />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
