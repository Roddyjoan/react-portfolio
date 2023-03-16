import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';
import BooksContext from './context/books';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <BooksContext value={5}>
        <App />
    </BooksContext>
);