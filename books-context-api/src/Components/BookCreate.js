import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate() {
    const { handleCreateBook } = useContext(BooksContext);


    const [newTitle, setNewTitle] = useState('');

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateBook(newTitle);
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