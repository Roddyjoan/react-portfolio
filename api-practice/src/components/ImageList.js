import ImageShow from "./ImageShow";
import './ImageList.css';
function ImageList({ images }) {
    

    const imageFactory = images.map( (image) => {

        return <ImageShow key={image.id} image={image} /> ;
        
    });


    return <div className="image-list">{imageFactory}</div>;
    
}

export default ImageList;