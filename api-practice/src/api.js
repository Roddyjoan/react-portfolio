import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID k78HvqCBnCtt0-cnoATGRJV_8ZP2w6-wOoYrz8eu0FU'
        },
        params: {
            query: term,
        },
    });
    console.log(response);
    return response.data.results;
};

export default searchImages;