import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, changeOrder }) {
    const [showEdit, setShowEdit] = useState(false);


    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit =(newTitle) => {
        setShowEdit(false);
        changeOrder(book.id,newTitle);
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