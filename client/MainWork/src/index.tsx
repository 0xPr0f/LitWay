import ReactDOM from 'react-dom'
//import './index.css'
import './styles/global.css'
import React from 'react'
import Navhan from './Nav'

//import App from './index'
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Navhan/>
   
  </React.StrictMode>,
  document.getElementById('root'),
)