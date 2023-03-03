import { useState } from 'react';

import './SearchBar.css';

function SearchBar({ onSubmit }) {
    
    const [term, setTerm] = useState('');


   
    function handleChange(e){
        setTerm(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };


    return (
        <>
        <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label> Enter search term </label>
        <input value = {term} type='text' onChange={handleChange}/>
        </form>
        </div>
        </>
        
    )
}

export default SearchBar;