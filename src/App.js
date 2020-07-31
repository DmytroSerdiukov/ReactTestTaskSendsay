import React from 'react';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <MainPage />
      </>
    </BrowserRouter>
    
  );
}

export default App;
