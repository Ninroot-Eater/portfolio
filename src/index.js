import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import {Projects} from './projects/Projects';
import App from "./App"
import FourOFour from "./errorpage/FourOFour"

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path=":projectName" element={<Projects/>}/>
        <Route path="*" element={<FourOFour/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
