import { useState } from "react";
import BookShow from "./BookShow";

function BookList({books, onDelete, changeOrder, bookState}) {
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} changeOrder={changeOrder} />
    });

    
    return (
        
        <div className="book-list"> {renderedBooks} </div>
    )
}

export default BookList;