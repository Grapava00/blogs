import PropTypes from "prop-types";
import fileIcon from "../../assets/file-icon.svg";
import {
  StyledUploadImageLabel,
  StyledUploadImageInput,
} from "./uploadImage.styles";

function UploadImage({
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleImageSelect,
}) {
  return (
    <div>
      <h3 className='input__title'>ატვირთეთ ფოტო</h3>
      <StyledUploadImageLabel
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <img src={fileIcon} alt='File Icon' />
        <p>
          ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
        </p>
        <StyledUploadImageInput
          name='image'
          type='file'
          onChange={handleImageSelect}
          required
        />
      </StyledUploadImageLabel>
    </div>
  );
}

UploadImage.propTypes = {
  isDragOver: PropTypes.bool.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleImageSelect: PropTypes.func.isRequired,
};

export default UploadImage;
