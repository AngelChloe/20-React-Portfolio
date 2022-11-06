// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);