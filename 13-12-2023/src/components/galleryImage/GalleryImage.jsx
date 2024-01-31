import "./index.css";

const GalleryImage = ({ imageObj }) => {
  console.log(imageObj);
  return <img src={imageObj.img} alt={imageObj.title} />;
};

export default GalleryImage;
