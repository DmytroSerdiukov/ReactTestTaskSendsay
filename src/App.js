import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Sended from './components/Sended/Sended';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Route exact path="/" component={ () => <MainPage />}/>
        <Route exact path="/sent" component={ () => <Sended/>}/>
      </>
    </BrowserRouter>
    
  );
}

export default App;
