import React, { useState } from "react";

function FIle() {
  const token =
    "d843f82fa4b7c67fcafa5d878f862da170d9d93c1d09e6b8a8f6183a44b56289";
  const [selectedFile, setSelectedFile] = useState(null);

  async function sendFileToServer(event) {
    event.preventDefault();

    if (selectedFile) {
      const uploadUrl = "https://api.blog.redberryinternship.ge/api/blogs";

      const formData = new FormData();
      formData.append("file", selectedFile);

      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (uploadResponse.ok) {
        setTimeout(async () => {
          const displayResponse = await fetch(uploadUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (displayResponse.ok) {
            const fileData = await displayResponse.json();
            console.log("File data:", fileData);
          } else {
            console.error("Failed to fetch file data");
          }
        }, 2000);
      } else {
        console.error("Failed to upload file");
      }
    } else {
      console.error("No file selected");
    }
  }

  function handleFileChange(event) {
    console.log(event);
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div>
      <form onSubmit={sendFileToServer}>
        <input type='file' onChange={handleFileChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FIle;
