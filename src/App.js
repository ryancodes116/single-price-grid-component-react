import React from 'react';
import './App.css';
import Info from './components/Info';
import Details from './components/Details';

const App = () => {
  return (
    <div className="mainContainer">
      <Info />
      <Details />
    </div>
  );
};

export default App;
