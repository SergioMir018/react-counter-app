import React from "react";
import  ReactDOM  from "react-dom/client";

import CounterApp from "./CounterApp";

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.createRoot( divRoot ).render( <CounterApp /> );
