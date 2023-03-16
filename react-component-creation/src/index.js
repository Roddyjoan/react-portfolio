import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvidor } from './context/navigation';
import './index.css';


const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvidor>
        <App />
    </NavigationProvidor>
    
)