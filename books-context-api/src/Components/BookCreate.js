import { useState } from "react";

function BookCreate({onCreate}) {
    const [newTitle, setNewTitle] = useState('');

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(newTitle);
        setNewTitle('');
    }
    return (
        <>
        <div className="book-create">
        <h3> Add a New book!</h3>
        <form onSubmit={handleSubmit}>
            <label> Title of book </label>
            <input className="input" value = {newTitle} onChange={handleChange} />
            <button className="button"> Create </button>
        </form>
        </div>
        </>
    )
}

export default BookCreate;