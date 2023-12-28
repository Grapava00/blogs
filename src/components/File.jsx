import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fileIcon from "../assets/file-icon.svg";
import close from "../assets/close.svg";
import gallery from "../assets/gallery.png";
import "./file.css";

const File = () => {
  const { register } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setShowPreview(true);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setShowPreview(false);
  };

  return (
    <div className='file-upload-container'>
      <h3 className='file-upload-heading'>ატვირთეთ ფოტო</h3>
      {!showPreview && !selectedFile ? (
        <label htmlFor='image' className='file-upload'>
          <img src={fileIcon} alt='File Icon' />
          <p className='file-upload-text'>
            ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
          </p>
          <input
            {...register("file", {
              required: true,
            })}
            onChange={handleFileChange}
            type='file'
            id='image'
          />
        </label>
      ) : (
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
            src={close}
            alt='Close Icon'
            type='button'
            onClick={handleRemoveFile}
          />
        </div>
      )}
    </div>
  );
};

export default File;
