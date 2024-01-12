import PropTypes from "prop-types";
import galleryIcon from "../../assets/gallery.png";
import closeIcon from "../../assets/close.svg";

function PreviewPhoto({ selectedImage, handleRemoveImage }) {
  return (
    <div className='image-input__preview-container'>
      <div className='image-input__preview-container--flex'>
        <img
          className='image-input__gallery-icon'
          src={galleryIcon}
          alt={selectedImage?.name}
          style={{ width: "24px", height: "24px" }}
        />
        <p className='image-input__selected-file'>{selectedImage?.name}</p>
      </div>
      <img
        style={{ cursor: "pointer" }}
        src={closeIcon}
        onClick={handleRemoveImage}
      />
    </div>
  );
}

PreviewPhoto.propTypes = {
  selectedImage: PropTypes.bool.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
};

export default PreviewPhoto;
