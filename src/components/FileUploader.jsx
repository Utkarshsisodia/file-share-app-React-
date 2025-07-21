import React, { useState } from "react";
import "./FileUploaderStyle.css";
import { useNavigate } from "react-router-dom";

function FileUploader() {
  let [fileName, changeFileName] = useState("");

  const navigate = useNavigate();

  let handleFileName = (e) => changeFileName(e.target.value);

  let handleBack = () => navigate(-1);

  return (
    <>
      <button className="link-container" onClick={handleBack}>
        ‹
      </button>
      <div className="uploader-body">
        <input type="file" onChange={handleFileName} />
        <p>File : {fileName}</p>
      </div>
    </>
  );
}

export default FileUploader;
