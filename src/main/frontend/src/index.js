import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Page2 from "./Components/Page2";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/page2" element={<Page2 />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
