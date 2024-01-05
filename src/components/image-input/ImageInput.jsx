import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ImageInputStyles.css";
import fileIcon from "../../assets/file-icon.svg";
import galleryIcon from "../../assets/gallery.png";
import closeIcon from "../../assets/close.svg";

function ImageInput({ handleImageData, handleImageExistence }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    handleImageData(file);
    setShowPreview(true);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setShowPreview(false);
    handleImageExistence();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
    handleImageData(file);
    setShowPreview(true);
  };

  const renderImageInput = () => {
    if (!showPreview) {
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
    } else {
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
            alt='Close Icon'
            type='button'
            onClick={handleRemoveImage}
          />
        </div>
      );
    }
  };

  return <>{renderImageInput()}</>;
}

ImageInput.propTypes = {
  handleImageData: PropTypes.func.isRequired,
  handleImageExistence: PropTypes.func.isRequired,
};

export default ImageInput;
