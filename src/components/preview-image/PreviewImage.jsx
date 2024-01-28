import PropTypes from "prop-types";
import galleryIcon from "../../assets/gallery.png";
import closeIcon from "../../assets/close.svg";
import {
  StyledPreviewImageContainer,
  StyledPreviewImageItems,
} from "./previewImage.styles";

function PreviewPhoto({ selectedImage, handleRemoveImage }) {
  return (
    <StyledPreviewImageContainer>
      <StyledPreviewImageItems>
        <img src={galleryIcon} alt={selectedImage?.name} />
        <p>{selectedImage?.name}</p>
      </StyledPreviewImageItems>
      <img
        className='cursor-pointer'
        src={closeIcon}
        onClick={handleRemoveImage}
      />
    </StyledPreviewImageContainer>
  );
}

PreviewPhoto.propTypes = {
  selectedImage: PropTypes.bool.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
};

export default PreviewPhoto;
