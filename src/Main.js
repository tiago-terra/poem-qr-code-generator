import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";

 // eslint-disable-next-line
import styles from "./index.css"
import View from './pages/View';
import Index from './pages/Index';

const Main = () => {
  return (
    <HashRouter  basename="/"> 
    <Routes>
      <Route exact path='/' element={ <Index/> }></Route>
      <Route exact path='/view' element={<View/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Main;