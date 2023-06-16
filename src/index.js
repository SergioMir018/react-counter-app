import React from "react";
import  ReactDOM  from "react-dom/client";
import FirstApp from "./FirstApp";

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.createRoot( divRoot ).render( <FirstApp /> );
