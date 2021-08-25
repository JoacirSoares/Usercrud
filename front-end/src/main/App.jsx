/* eslint-disable import/no-anonymous-default-export */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import NavI from '../components/template/Nav-item'
import Footer from '../components/template/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <NavI />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    // Para evitar dar problema na produção use o HashRouter no lugar do BrowserRouter