import './App.css';
import React from 'react'
import Homepage from './Componenets/homepage';
import Bookingpage from './Componenets/bookingpage'
import Personal from './Componenets/personal info/personal'
import Table from './Componenets/table/table';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Route path="/" exact component={Homepage}></Route>
    <Route path="/form" exact component={Personal}></Route>
    <Route path="/booking" exact component={Bookingpage}></Route>
    <Route path="/table" exact component={Table}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;