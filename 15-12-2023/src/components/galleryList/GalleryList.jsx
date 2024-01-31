import "./index.css";
import GalleryImage from "../galleryImage";

const GalleryList = ({ galleryImageObj }) => {
  return (
    <div className="GalleryList">
      <h2>Gallery</h2>
      <div className="immage__container">
        {galleryImageObj.list.map((image) => (
          <GalleryImage imageObj={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
