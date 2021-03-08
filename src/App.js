import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Maintenance from './_pages/Maintenance';

function App() {
  return (
    <div>
      <Route path="/" component={Maintenance}/>
    </div>
  );
}

export default App;
