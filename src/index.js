import React from "react";
import  ReactDOM  from "react-dom/client";

const salute = <h1> Hello World </h1>;

const divRoot = document.querySelector('#root');

ReactDOM.createRoot( divRoot ).render( salute );
