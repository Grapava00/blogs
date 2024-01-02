import react, { useState } from "react";
import fileIcon from "../assets/file-icon.svg";
import gallery from "../assets/gallery.png";
import closeIcon from "../assets/close.svg";
import "../App.css";

function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setShowPreview(true);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setShowPreview(false);
  };

  const renderFileInput = () => {
    if (!showPreview) {
      return (
        <>
          <h3 className='file-upload-heading'>ატვირთეთ ფოტო</h3>
          <label className='file-upload'>
            <img src={fileIcon} alt='File Icon' />
            <p className='file-upload-text'>
              ჩააგდეთ ფაილი აქ ან{" "}
              <span className='underline'>აირჩიეთ ფაილი</span>
            </p>
            <input
              name='image'
              type='file'
              onChange={handleFileSelect}
              required
            />
          </label>
        </>
      );
    } else {
      return (
        <div className='preview-container'>
          <div style={{ display: "flex", gap: "12px" }}>
            <img
              className='gallery-icon'
              src={gallery}
              alt={selectedFile?.name}
              style={{ width: "24px", height: "24px" }}
            />
            <p className='selected-file'>{selectedFile?.name}</p>
          </div>
          <img
            style={{ cursor: "pointer" }}
            src={closeIcon}
            alt='Close Icon'
            type='button'
            onClick={handleRemoveFile}
          />
        </div>
      );
    }
  };

  return <div>{renderFileInput()}</div>;
}

export default FileInput;
