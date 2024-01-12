import PropTypes from "prop-types";
import fileIcon from "../../assets/file-icon.svg";

function UploadImage({
  isDragOver,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleImageSelect,
}) {
  return (
    <>
      <h3 className='image-input__heading'>ატვირთეთ ფოტო</h3>
      <label
        className={`image-input__file-upload ${
          isDragOver ? "image-input__file-upload--drag-over" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <img src={fileIcon} alt='File Icon' />
        <p className='image-input__file-upload-text'>
          ჩააგდეთ ფაილი აქ ან{" "}
          <span className='image-input__file-upload-text--underline'>
            აირჩიეთ ფაილი
          </span>
        </p>
        <input
          style={{ display: "none" }}
          name='image'
          type='file'
          onChange={handleImageSelect}
          required
        />
      </label>
    </>
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
