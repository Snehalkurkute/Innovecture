import React from 'react';
import MainController from './main-controller';
import {
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MainController/>
    </div>
    </BrowserRouter>
  );
}

export default App;
