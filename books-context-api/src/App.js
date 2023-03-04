import { useEffect, useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);


    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    useEffect(() =>{
        fetchBooks();
    }, [])

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    }
    const handleCreateBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [
            ...books, response.data
        ];

        setBooks(updatedBooks);

        // const updatedBooks = [
        //     ...books,
        //     {
        //         id: Math.round(Math.random() * 9999),
        //         title
        //     }
        // ];
        // setBooks(updatedBooks);

    };

    const changeOrder = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data};
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