import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';

import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
       
        <BrowserRouter>
            <Analytics/>
            <Navbar />
            <Footer/>
        </BrowserRouter>
    </div>
    
    

);


