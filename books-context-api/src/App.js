import { useState } from "react";
import BookCreate from "./Components/BookCreate";

function App() {
    const [books, setBooks] = useState([]);

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

    return (
        <div>
            <BookCreate onCreate={handleCreateBook} />
        </div>
    )
}

export default App;