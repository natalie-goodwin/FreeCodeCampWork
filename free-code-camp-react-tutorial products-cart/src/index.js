import React from "react";
import  ReactDOM  from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.css"; /*installed through npm install font-awesome */




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />
);

