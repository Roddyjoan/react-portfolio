import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const deleteBookById =(id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    }
    const handleCreateBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title
            }
        ];
        setBooks(updatedBooks);
    };

    const changeOrder = (id, title) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title};
            }

            return book;
        });
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1> Reading List </h1>
            <BookList books={books} onDelete ={deleteBookById} changeOrder = {changeOrder} />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    )
}

export default App;