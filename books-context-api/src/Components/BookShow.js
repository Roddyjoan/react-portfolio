import { useContext, useState } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {

    

    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit =() => {
        setShowEdit(false);
    };

    let content = <><img src={`http://picsum.photos/seed/${book.id}/300/200`}></img><h3> {book.title} </h3></>;
    if (showEdit) {
        content = 
        <><BookEdit editBook={handleSubmit} book={book} /></>;
    }

    return (
        <div className="book-show">
            
            {content}

            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>

            </div></div>
    )
}

export default BookShow;