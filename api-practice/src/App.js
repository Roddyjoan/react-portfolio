import searchImages from "./api";

import SearchBar from "./components/SearchBar";
import {useState} from 'react';
import ImageList from "./components/ImageList";

function App() {

const [images, setImages] = useState([]);

const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
}
    return (
        <>
        <h1> Welcome to the API Practice APP test </h1>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images}/></>
    )
}

export default App;