import React from 'react';
import { Route, Routes } from "react-router-dom";

 // eslint-disable-next-line
import styles from "./index.css"
import View from './pages/View';
import Index from './pages/Index';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={ <Index/> }></Route>
      <Route path='/view' element={<View/>}></Route>
      </Routes>
  );
}

export default App;