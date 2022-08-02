import React from 'react';
import data from './Data/Data.json';
import './App.css';
import Questionare from './Components/index';

function App() {
  const dataSet= data;
  return (
    <div className="App">
        <Questionare dataSet={dataSet}/>
    </div>
  );
}

export default App;
