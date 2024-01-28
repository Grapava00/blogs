import { useState } from "react";
import PropTypes from "prop-types";
import UploadImage from "../upload-image/UploadImage";
import PreviewImage from "../../components/preview-image/PreviewImage";

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
          <UploadImage
            isDragOver={isDragOver}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            handleImageSelect={handleImageSelect}
          />
        </>
      );
    } else {
      return (
        <PreviewImage
          selectedImage={selectedImage}
          handleRemoveImage={handleRemoveImage}
        />
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
